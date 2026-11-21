import type { MetadataRoute } from 'next'
import { getAllAreas, getAreaPath } from '@/lib/areas'
import { ALL_PEOPLE } from '@/lib/blog-people'
import { getAllGuides } from '@/lib/guides'
import { getAllServices } from '@/lib/services'
import { CONTENT_UPDATED_AT, siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getAllServices()
  const areas = getAllAreas()
  const guides = getAllGuides()
  const now = CONTENT_UPDATED_AT

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/areas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog/archive`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...areas.map((area) => ({
      url: `${siteConfig.url}${getAreaPath(area)}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: area.featured ? 0.85 : 0.75,
    })),
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(guide.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...ALL_PEOPLE.map((person) => ({
      url: `${siteConfig.url}/blog/${person.kind}/${person.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ]
}
