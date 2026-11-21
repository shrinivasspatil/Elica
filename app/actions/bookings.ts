'use server'

import { db } from '@/lib/db'
import { bookings } from '@/lib/db/schema'
import { nanoid } from 'nanoid'
import { getAreaLabelsMap } from '@/lib/areas'
import { sendBookingNotification } from '@/lib/email'
import { getLeadServiceLabel } from '@/lib/lead-services'

const AREA_LABELS = getAreaLabelsMap()

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

    try {
      await sendBookingNotification({
        bookingId,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        serviceId: getLeadServiceLabel(data.serviceId),
        areaId: AREA_LABELS[data.areaId] || data.areaId,
        address: data.address,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        notes: data.notes,
      })
    } catch (emailError) {
      console.error('[booking] Email notification failed:', emailError)
    }

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
