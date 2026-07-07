import { db } from '@/lib/db'
import { bookings } from '@/lib/db/schema'
import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, pincode, service } = body

    // Validate required fields
    if (!name || !phone || !pincode || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Create booking record from lead
    const leadId = nanoid()
    
    await db.insert(bookings).values({
      id: leadId,
      serviceId: service,
      areaId: 'pincode-' + pincode, // Generate area ID from pincode
      customerName: name,
      customerPhone: phone,
      customerEmail: '', // Can be added later
      address: `Bangalore - ${pincode}`,
      status: 'pending',
    })

    // TODO: Send email notification to admin
    // TODO: Send SMS confirmation to customer

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        leadId 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
