import { catalogServices } from '@/lib/services'

export const leadServices = catalogServices.map((service) => ({
  id: service.id,
  label: service.name,
}))

export type LeadServiceId = (typeof leadServices)[number]['id']

export const leadServiceLabels: Record<string, string> = Object.fromEntries(
  leadServices.map((service) => [service.id, service.label])
)

export function getLeadServiceLabel(serviceId: string): string {
  return leadServiceLabels[serviceId] || serviceId
}
