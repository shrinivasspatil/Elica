import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { getNotifyRecipients, sendLeadNotification } from '@/lib/email'
import { getLeadServiceLabel } from '@/lib/lead-services'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const submissionLog = new Map<string, number[]>()

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent)
    return true
  }
  recent.push(now)
  submissionLog.set(ip, recent)
  return false
}

function sanitizeAttribution(raw: unknown) {
  if (!raw || typeof raw !== 'object') {
    return {
      sourceLabel: 'Unknown',
      pageUrl: '',
      pagePath: '',
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
      utmTerm: '',
      utmContent: '',
      gclid: '',
    }
  }

  const data = raw as Record<string, unknown>
  const pick = (key: string) =>
    typeof data[key] === 'string' ? (data[key] as string).trim().slice(0, 500) : ''

  return {
    sourceLabel: pick('sourceLabel') || 'Unknown',
    pageUrl: pick('pageUrl'),
    pagePath: pick('pagePath'),
    utmSource: pick('utmSource'),
    utmMedium: pick('utmMedium'),
    utmCampaign: pick('utmCampaign'),
    utmTerm: pick('utmTerm'),
    utmContent: pick('utmContent'),
    gclid: pick('gclid'),
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, pincode, service, website, attribution: rawAttribution } = body
    const attribution = sanitizeAttribution(rawAttribution)

    // Honeypot — bots that fill a hidden website field get a silent success
    if (typeof website === 'string' && website.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Lead captured successfully' }, { status: 201 })
    }

    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute and try again.' },
        { status: 429 }
      )
    }

    if (!name || !phone || !pincode || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    const leadId = nanoid()
    const serviceLabel = getLeadServiceLabel(service)
    const notifyTo = getNotifyRecipients()

    let emailSent = false
    let emailError: string | undefined
    let emailedTo: string[] = []
    let emailFailed: Array<{ email: string; error: string }> = []

    try {
      if (notifyTo.length === 0) {
        throw new Error(
          'NOTIFY_EMAIL has no valid addresses. On Hostinger use separate vars: NOTIFY_EMAIL and NOTIFY_EMAIL_2'
        )
      }

      const result = await sendLeadNotification({
        name,
        phone,
        pincode,
        service: serviceLabel,
        leadId,
        attribution,
      })
      emailSent = result.sent.length > 0
      emailedTo = result.sent
      emailFailed = result.failed
    } catch (err) {
      emailError = err instanceof Error ? err.message : String(err)
      console.error('[leads] Email notification failed:', emailError)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        leadId,
        emailSent,
        notifyTo,
        emailedTo,
        ...(emailFailed.length ? { emailFailed } : {}),
        ...(emailError ? { emailError } : {}),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[leads] Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}
