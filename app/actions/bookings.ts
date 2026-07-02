'use server'

import { db } from '@/lib/db'
import { bookings } from '@/lib/db/schema'
import { nanoid } from 'nanoid'

export async function submitBooking(data: {
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
  try {
    const bookingId = nanoid()
    
    await db.insert(bookings).values({
      id: bookingId,
      userId: null,
      serviceId: data.serviceId,
      areaId: data.areaId,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
      address: data.address,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      notes: data.notes,
      status: 'pending',
    })

    return {
      success: true,
      bookingId
    }
  } catch (error) {
    console.error('[v0] Booking submission error:', error)
    return {
      success: false,
      error: 'Failed to submit booking. Please try again.'
    }
  }
}
