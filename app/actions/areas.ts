'use server'

import { db } from '@/lib/db'
import { serviceAreas } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function getServiceAreas() {
  try {
    const areas = await db
      .select()
      .from(serviceAreas)
      .where(eq(serviceAreas.isActive, true))
      .orderBy(serviceAreas.displayOrder)
    return areas
  } catch (error) {
    console.error('Error fetching service areas:', error)
    return []
  }
}

export async function getServiceAreaById(id: string) {
  try {
    const area = await db
      .select()
      .from(serviceAreas)
      .where(eq(serviceAreas.id, id))
      .limit(1)
    return area[0] || null
  } catch (error) {
    console.error('Error fetching service area:', error)
    return null
  }
}

export async function getAllServiceAreas() {
  try {
    const areas = await db.select().from(serviceAreas).orderBy(serviceAreas.displayOrder)
    return areas
  } catch (error) {
    console.error('Error fetching all service areas:', error)
    return []
  }
}
