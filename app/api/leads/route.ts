import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { sendLeadNotification } from '@/lib/email'

const SERVICE_LABELS: Record<string, string> = {
  'chimney-cleaning': 'Chimney Cleaning & Maintenance',
  'range-hood': 'Range Hood Installation & Service',
  'hob-repair': 'Hob Repair & Service',
  microwave: 'Microwave Service',
  dishwasher: 'Dishwasher Repair',
  oven: 'Oven Service',
  cooktop: 'Cooktop Repair',
  'exhaust-fan': 'Exhaust Fan Installation',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, pincode, service } = body

    if (!name || !phone || !pincode || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    const leadId = nanoid()
    const serviceLabel = SERVICE_LABELS[service] || service

    await sendLeadNotification({
      name,
      phone,
      pincode,
      service: serviceLabel,
      leadId,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        leadId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[leads] Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to send lead notification. Please try again.' },
      { status: 500 }
    )
  }
}
