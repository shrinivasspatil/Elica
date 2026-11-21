import nodemailer, { type Transporter } from 'nodemailer'

const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com'
const smtpUser = process.env.SMTP_USER || 'support@elicservicecenter.com'

/** Resolve SMTP password without dotenv/$ expansion issues. */
function getSmtpPass(): string {
  const encoded = process.env.SMTP_PASS_B64?.trim()
  if (encoded) {
    try {
      return Buffer.from(encoded, 'base64').toString('utf8')
    } catch {
      // fall through
    }
  }

  let pass = process.env.SMTP_PASS ?? ''
  if (pass.startsWith('\\$')) {
    pass = pass.slice(1)
  }
  return pass
}

function normalizeEmail(value: string): string | null {
  const email = value.trim().replace(/^["']|["']$/g, '')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null
  return email
}

/**
 * Collect notify recipients from:
 * - NOTIFY_EMAIL (comma / semicolon / newline separated)
 * - NOTIFY_EMAIL_2, NOTIFY_EMAIL_3, ... (Hostinger-safe separate vars)
 */
export function getNotifyRecipients(): string[] {
  const collected: string[] = []

  const primary = process.env.NOTIFY_EMAIL || 'srini.spatil@gmail.com'
  for (const part of primary.split(/[,;\n|]+/)) {
    const email = normalizeEmail(part)
    if (email) collected.push(email)
  }

  // Separate Hostinger env vars — commas in a single value are often truncated
  for (const [key, value] of Object.entries(process.env)) {
    if (!/^NOTIFY_EMAIL_\d+$/i.test(key) || !value) continue
    const email = normalizeEmail(value)
    if (email) collected.push(email)
  }

  const seen = new Set<string>()
  return collected.filter((email) => {
    const key = email.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function createTransporter(port: number, secure: boolean): Transporter {
  const smtpPass = getSmtpPass()
  if (!smtpPass) {
    throw new Error('SMTP_PASS (or SMTP_PASS_B64) is not configured')
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })
}

async function sendToOne(
  transporter: Transporter,
  options: {
    to: string
    subject: string
    text: string
    html: string
    replyTo?: string
  }
) {
  const info = await transporter.sendMail({
    from: `"Elica Service" <${smtpUser}>`,
    to: options.to,
    replyTo: options.replyTo || smtpUser,
    subject: options.subject,
    text: options.text,
    html: options.html,
  })

  console.log('[email] Sent to', options.to, {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
  })

  if (!info.accepted?.length) {
    throw new Error(`SMTP rejected ${options.to}`)
  }

  return info
}

async function sendMail(options: {
  subject: string
  text: string
  html: string
  replyTo?: string
}) {
  const recipients = getNotifyRecipients()
  if (recipients.length === 0) {
    throw new Error('No valid NOTIFY_EMAIL recipients configured')
  }

  const preferredPort = Number(process.env.SMTP_PORT || 465)
  const attempts: Array<{ port: number; secure: boolean }> = [
    { port: preferredPort, secure: preferredPort === 465 },
  ]
  if (preferredPort === 465) attempts.push({ port: 587, secure: false })
  else if (preferredPort === 587) attempts.push({ port: 465, secure: true })

  let lastError: unknown

  for (const attempt of attempts) {
    try {
      const transporter = createTransporter(attempt.port, attempt.secure)
      const results = await Promise.allSettled(
        recipients.map((to) =>
          sendToOne(transporter, {
            to,
            subject: options.subject,
            text: options.text,
            html: options.html,
            replyTo: options.replyTo,
          })
        )
      )

      const sent: string[] = []
      const failed: Array<{ email: string; error: string }> = []

      results.forEach((result, index) => {
        const email = recipients[index]
        if (result.status === 'fulfilled') {
          sent.push(email)
        } else {
          failed.push({
            email,
            error: result.reason instanceof Error ? result.reason.message : String(result.reason),
          })
        }
      })

      console.log('[email] Delivery summary', { port: attempt.port, sent, failed })

      if (sent.length === 0) {
        throw new Error(
          `All recipients failed: ${failed.map((f) => `${f.email} (${f.error})`).join('; ')}`
        )
      }

      // Partial success still counts as sent, but surface failures
      if (failed.length > 0) {
        console.error('[email] Partial delivery failure:', failed)
      }

      return { sent, failed, port: attempt.port }
    } catch (error) {
      lastError = error
      console.error(`[email] Batch failed on port ${attempt.port}:`, error)
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError))
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildLeadEmailHtml(data: {
  name: string
  phone: string
  pincode: string
  service: string
  leadId: string
  sourceLabel: string
  pagePath: string
  pageUrl: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  gclid: string
}) {
  const name = escapeHtml(data.name)
  const phone = escapeHtml(data.phone)
  const pincode = escapeHtml(data.pincode)
  const service = escapeHtml(data.service)
  const leadId = escapeHtml(data.leadId)
  const sourceLabel = escapeHtml(data.sourceLabel)
  const pagePath = escapeHtml(data.pagePath)
  const pageUrl = escapeHtml(data.pageUrl)
  const phoneHref = data.phone.replace(/\D/g, '')

  const utmRows = [
    data.utmSource ? ['utm_source', data.utmSource] : null,
    data.utmMedium ? ['utm_medium', data.utmMedium] : null,
    data.utmCampaign ? ['utm_campaign', data.utmCampaign] : null,
    data.utmTerm ? ['utm_term', data.utmTerm] : null,
    data.utmContent ? ['utm_content', data.utmContent] : null,
    data.gclid ? ['gclid', data.gclid] : null,
  ]
    .filter(Boolean)
    .map(
      (row) => `
        <tr>
          <td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(row![0])}</td>
          <td style="padding:8px 0;color:#0f172a;font-size:13px;font-weight:600;">${escapeHtml(row![1])}</td>
        </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New lead</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#1e3a5f;padding:24px 28px;">
              <p style="margin:0;color:#94a3b8;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Elica Repair &amp; Service</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">New service enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.04em;">Customer</p>
                    <p style="margin:0;color:#0f172a;font-size:20px;font-weight:700;">${name}</p>
                    <p style="margin:10px 0 0;">
                      <a href="tel:+91${phoneHref}" style="display:inline-block;background:#1e3a5f;color:#ffffff;text-decoration:none;padding:10px 16px;border-radius:8px;font-size:14px;font-weight:600;">
                        Call ${phone}
                      </a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:14px;width:120px;">Service</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">${service}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:14px;">Phone</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">
                    <a href="tel:+91${phoneHref}" style="color:#1e3a5f;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:14px;">Pincode</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">${pincode}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#64748b;font-size:14px;">Lead ID</td>
                  <td style="padding:10px 0;color:#64748b;font-size:13px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${leadId}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 12px;color:#0f172a;font-size:14px;font-weight:700;">Lead source</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;">Source</td>
                        <td style="padding:8px 0;">
                          <span style="display:inline-block;background:#dbeafe;color:#1e3a5f;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700;">
                            ${sourceLabel}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;vertical-align:top;">Page</td>
                        <td style="padding:8px 0;color:#0f172a;font-size:13px;font-weight:600;word-break:break-all;">
                          ${pagePath}<br />
                          <a href="${pageUrl}" style="color:#2563eb;text-decoration:underline;font-weight:500;">${pageUrl}</a>
                        </td>
                      </tr>
                      ${utmRows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 28px;">
              <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.5;">
                This enquiry was submitted on elicservicecenter.com. Reply or call the customer promptly.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function sendLeadNotification(data: {
  name: string
  phone: string
  pincode: string
  service: string
  leadId: string
  attribution?: {
    sourceLabel?: string
    pageUrl?: string
    pagePath?: string
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    utmTerm?: string
    utmContent?: string
    gclid?: string
  }
}) {
  const attribution = data.attribution || {}
  const sourceLabel = attribution.sourceLabel || 'Unknown'
  const pagePath = attribution.pagePath || attribution.pageUrl || 'Unknown'
  const pageUrl = attribution.pageUrl || pagePath

  const attributionLines = [
    `Lead source: ${sourceLabel}`,
    `Submitted from page: ${pagePath}`,
    attribution.pageUrl ? `Full page URL: ${attribution.pageUrl}` : '',
    attribution.utmSource ? `utm_source: ${attribution.utmSource}` : '',
    attribution.utmMedium ? `utm_medium: ${attribution.utmMedium}` : '',
    attribution.utmCampaign ? `utm_campaign: ${attribution.utmCampaign}` : '',
    attribution.utmTerm ? `utm_term: ${attribution.utmTerm}` : '',
    attribution.utmContent ? `utm_content: ${attribution.utmContent}` : '',
    attribution.gclid ? `gclid: ${attribution.gclid}` : '',
  ].filter(Boolean)

  return sendMail({
    subject: `New lead: ${data.name} – ${data.service} [${sourceLabel}]`,
    text: [
      'New service enquiry — Elica Repair & Service',
      '',
      `Customer: ${data.name}`,
      `Phone: ${data.phone}`,
      `Pincode: ${data.pincode}`,
      `Service: ${data.service}`,
      `Lead ID: ${data.leadId}`,
      '',
      '--- Lead source ---',
      ...attributionLines,
    ].join('\n'),
    html: buildLeadEmailHtml({
      name: data.name,
      phone: data.phone,
      pincode: data.pincode,
      service: data.service,
      leadId: data.leadId,
      sourceLabel,
      pagePath,
      pageUrl,
      utmSource: attribution.utmSource || '',
      utmMedium: attribution.utmMedium || '',
      utmCampaign: attribution.utmCampaign || '',
      utmTerm: attribution.utmTerm || '',
      utmContent: attribution.utmContent || '',
      gclid: attribution.gclid || '',
    }),
  })
}

export async function sendBookingNotification(data: {
  bookingId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceId: string
  areaId: string
  address: string
  preferredDate?: string
  preferredTime?: string
  notes?: string
}) {
  return sendMail({
    replyTo: data.customerEmail || smtpUser,
    subject: `New booking: ${data.customerName}`,
    text: [
      'New booking submission',
      '',
      `Booking ID: ${data.bookingId}`,
      `Name: ${data.customerName}`,
      `Email: ${data.customerEmail}`,
      `Phone: ${data.customerPhone}`,
      `Service ID: ${data.serviceId}`,
      `Area ID: ${data.areaId}`,
      `Address: ${data.address}`,
      `Preferred date: ${data.preferredDate || 'Not specified'}`,
      `Preferred time: ${data.preferredTime || 'Not specified'}`,
      `Notes: ${data.notes || 'None'}`,
    ].join('\n'),
    html: `
      <h2>New booking submission</h2>
      <p><strong>Booking ID:</strong> ${data.bookingId}</p>
      <p><strong>Name:</strong> ${data.customerName}</p>
      <p><strong>Email:</strong> ${data.customerEmail}</p>
      <p><strong>Phone:</strong> ${data.customerPhone}</p>
      <p><strong>Service ID:</strong> ${data.serviceId}</p>
      <p><strong>Area ID:</strong> ${data.areaId}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Preferred date:</strong> ${data.preferredDate || 'Not specified'}</p>
      <p><strong>Preferred time:</strong> ${data.preferredTime || 'Not specified'}</p>
      <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
    `,
  })
}
