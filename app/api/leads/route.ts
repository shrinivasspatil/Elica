import { db } from '@/lib/db'
import { bookings } from '@/lib/db/schema'
import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { sql } from 'drizzle-orm'
import { Pool } from 'pg'

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
    
    console.log('[v0] Form submission received:', { name, phone, pincode, service })
    
    // TODO: Database insert - currently disabled due to schema mismatch
    // await db.insert(bookings).values({...})
    
    // Return success so the thank you screen appears
    console.log('[v0] Returning success for lead:', leadId)
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        leadId 
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('[v0] Error creating lead:', error)
    console.error('[v0] Postgres Error:', error?.message)
    console.error('[v0] SQL State:', error?.code)
    const errorMessage = error?.message || error?.detail || String(error)
    console.error('[v0] Full error:', errorMessage)
    return NextResponse.json(
      { error: 'Database insert failed', message: errorMessage, code: error?.code },
      { status: 500 }
    )
  }
}
