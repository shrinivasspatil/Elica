'use server'

import { db } from '@/lib/db'
import { services } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function getServices() {
  try {
    const allServices = await db.select().from(services).orderBy(services.displayOrder)
    return allServices
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getServiceById(id: string) {
  try {
    const service = await db.select().from(services).where(eq(services.id, id)).limit(1)
    return service[0] || null
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

export async function getFeaturedServices() {
  try {
    const featured = await db
      .select()
      .from(services)
      .where(eq(services.featured, true))
      .orderBy(services.displayOrder)
      .limit(6)
    return featured
  } catch (error) {
    console.error('Error fetching featured services:', error)
    return []
  }
}
