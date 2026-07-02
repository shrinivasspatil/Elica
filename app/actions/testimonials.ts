'use server'

import { db } from '@/lib/db'
import { testimonials } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function getTestimonials() {
  try {
    const allTestimonials = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isApproved, true))
      .orderBy(testimonials.displayOrder)
    return allTestimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getTestimonialsByArea(areaName: string) {
  try {
    const areaTestimonials = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.areaName, areaName))
      .where(eq(testimonials.isApproved, true))
      .orderBy(testimonials.displayOrder)
    return areaTestimonials
  } catch (error) {
    console.error('Error fetching testimonials by area:', error)
    return []
  }
}
