'use server'

import { db } from '@/lib/db'
import { bookings } from '@/lib/db/schema'
import { nanoid } from 'nanoid'
import { sendBookingNotification } from '@/lib/email'

const SERVICE_LABELS: Record<string, string> = {
  '1': 'Chimney Cleaning & Maintenance',
  '2': 'Range Hood Installation',
  '3': 'Hob Repair & Service',
  '4': 'Microwave Service',
  '5': 'Dishwasher Repair',
  '6': 'Oven Repair & Cleaning',
  '7': 'Cooktop Maintenance',
  '8': 'Emergency Service',
}

const AREA_LABELS: Record<string, string> = {
  '1': 'Whitefield',
  '2': 'Indiranagar',
  '3': 'JP Nagar',
  '4': 'Hebbal',
  '5': 'Koramangala',
  '6': 'Marathahalli',
  '7': 'HSR Layout',
  '8': 'Banashankari',
}

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

    try {
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
    } catch (dbError) {
      // Still notify by email if DB is unavailable
      console.error('[booking] Database insert failed:', dbError)
    }

    await sendBookingNotification({
      bookingId,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
      serviceId: SERVICE_LABELS[data.serviceId] || data.serviceId,
      areaId: AREA_LABELS[data.areaId] || data.areaId,
      address: data.address,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      notes: data.notes,
    })

    return {
      success: true,
      bookingId,
    }
  } catch (error) {
    console.error('[booking] Submission error:', error)
    return {
      success: false,
      error: 'Failed to submit booking. Please try again.',
    }
  }
}
