import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

/** AI / answer-engine crawlers — explicit allow for llms.txt + public pages (AEO/GEO). */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Applebot-Extended',
  'Bytespider',
  'cohere-ai',
] as const

const PUBLIC_DISALLOW = ['/api/', '/admin/', '/booking-confirmation']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/llms.txt', '/ai.txt', '/'],
        disallow: PUBLIC_DISALLOW,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: ['/llms.txt', '/ai.txt', '/'],
        disallow: PUBLIC_DISALLOW,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
