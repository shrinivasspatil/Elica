import type { Metadata } from 'next'

import { getAllAreas } from '@/lib/areas'

export const siteConfig = {
  name: 'Elica Repair & Service',
  legalName: 'Elica Service Centre',
  description:
    'Professional Elica appliance repair and service in Bangalore. Expert technicians for chimney, hob, microwave, and cooking range repair with same-day service.',
  shortDescription: 'Trusted Elica appliance repair across Bangalore with same-day service.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://elicservicecenter.com').replace(/\/$/, ''),
  phone: '+91 99025 52888',
  phoneE164: '+919902552888',
  phoneDisplay: '+91 99025 52888',
  email: 'support@elicservicecenter.com',
  /** WhatsApp click-to-chat (same number, digits only with country code) */
  whatsappUrl: 'https://wa.me/919902552888',
  /** Display NAP line used in footer/contact — keep identical everywhere */
  napDisplay: 'Elica Repair & Service, Bangalore, Karnataka, India',
  address: {
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  addressDisplay: 'Bangalore, Karnataka, India',
  coordinates: {
    latitude: 12.9716,
    longitude: 77.5946,
  },
  priceRange: '₹800 - ₹5000',
  foundingDate: '2014',
  languages: ['en', 'hi', 'kn'],
  // Add public profile URLs when ready (used as schema.org sameAs):
  // Google Business Profile, Google Maps, Facebook, Instagram, Justdial, etc.
  social: [] as string[],
  get areasServed() {
    return getAllAreas().map((area) => `Elica Service Centre ${area.areaName}`)
  },
  defaultOgImage: '/images/hero-service.jpg',
}

export const siteFaqs = [
  {
    question: 'What areas does Elica Repair & Service cover in Bangalore?',
    answer:
      'We serve through Elica Service Centre branches across 158 popular Bangalore localities including Whitefield, Indiranagar, Electronic City, Koramangala, HSR Layout, Bommanahalli, JP Nagar, Bellandur, Yelahanka, RR Nagar, Banashankari and many more, with same-day options in most areas.',
  },
  {
    question: 'How quickly can Elica technicians respond after booking?',
    answer:
      'Most bookings get a response within 2–4 hours. Same-day service is available across major Bangalore service areas.',
  },
  {
    question: 'Do Elica repairs include a warranty?',
    answer:
      'Yes. Repairs include up to 1-year warranty on parts and workmanship, depending on the service type.',
  },
  {
    question: 'Are your technicians certified for Elica appliances?',
    answer:
      'Yes. Our technicians are factory-trained and experienced with Elica chimneys, hobs, microwaves, and cooking ranges.',
  },
  {
    question: 'How do I book an Elica appliance repair online?',
    answer:
      'Use the Book Now form on elicservicecenter.com, share your name, phone, pincode, and service needed. We confirm within about 2 hours.',
  },
  {
    question: 'What is the cost of Elica chimney cleaning in Bangalore?',
    answer:
      'Indicative starting rates: general cleaning from ₹999, deep cleaning from ₹1,499, and dismantle cleaning from ₹1,999. Final cost depends on grease level and any parts. See the full breakdown at /guides/elica-chimney-cleaning-cost-bangalore or share your issue for a free quote before work begins.',
  },
]

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return siteConfig.url
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

type PageMetaInput = {
  title: string
  description: string
  path?: string
  /** Accepted but not emitted — Google ignores meta keywords */
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  absoluteTitle?: boolean
}

export function buildPageMetadata({
  title,
  description,
  path = '/',
  image = siteConfig.defaultOgImage,
  type = 'website',
  noIndex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path)
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}

function organizationBase() {
  return {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/icon.svg'),
    },
    image: absoluteUrl(siteConfig.defaultOgImage),
    foundingDate: siteConfig.foundingDate,
    sameAs: siteConfig.social,
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    ...organizationBase(),
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-IN',
  }
}

type ReviewInput = {
  name: string
  text: string
  rating: number
  areaName?: string
}

/** Visible on-page testimonials only — no AggregateRating / invented review counts. */
function buildReviewData(reviews: ReviewInput[]) {
  if (reviews.length === 0) return {}

  return {
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
      ...(review.areaName
        ? {
            locationCreated: {
              '@type': 'Place',
              name: review.areaName,
            },
          }
        : {}),
    })),
  }
}

export function generateLocalBusinessSchema(reviews: ReviewInput[] = []) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.defaultOgImage),
    priceRange: siteConfig.priceRange,
    currenciesAccepted: 'INR',
    paymentAccepted: ['Cash', 'UPI', 'Card'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    areaServed: siteConfig.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneE164,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: siteConfig.languages,
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elica Appliance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elica Chimney Cleaning',
            url: absoluteUrl('/services/chimney-general-cleaning'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elica Chimney Deep Cleaning',
            url: absoluteUrl('/services/chimney-deep-cleaning'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elica Gas Hob Service',
            url: absoluteUrl('/services/gas-hob-service'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elica Built-in Microwave Service',
            url: absoluteUrl('/services/built-in-microwave-service'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elica Hob Cleaning',
            url: absoluteUrl('/services/hob-cleaning'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elica Cooking Range Service',
            url: absoluteUrl('/services/cooking-range-service'),
          },
        },
      ],
    },
    ...buildReviewData(reviews),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
  warranty?: string
  url?: string
  areaName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: 'Appliance Repair',
    provider: {
      '@id': `${siteConfig.url}/#localbusiness`,
    },
    areaServed: service.areaName
      ? { '@type': 'Place', name: `${service.areaName}, Bangalore` }
      : { '@type': 'City', name: 'Bangalore' },
    url: service.url || absoluteUrl('/services'),
    ...(service.price
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: service.price.replace(/[^\d]/g, '') || undefined,
            availability: 'https://schema.org/InStock',
            description: service.price,
          },
        }
      : {}),
    ...(service.warranty
      ? {
          termsOfService: `Warranty: ${service.warranty}`,
        }
      : {}),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
    })),
  }
}

export function generateHowToSchema(input: {
  name: string
  description: string
  steps: string[]
  totalTime?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    totalTime: input.totalTime || 'PT3H',
    step: input.steps.map((text, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text,
    })),
  }
}

export function generateItemListSchema(
  name: string,
  items: Array<{ name: string; url: string; description?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${siteConfig.name}`,
    url: absoluteUrl('/contact'),
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneE164,
        contactType: 'customer service',
        email: siteConfig.email,
        availableLanguage: siteConfig.languages,
        areaServed: 'IN',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '07:00',
          closes: '22:00',
        },
      },
    },
  }
}

export function generateSpeakableSchema(cssSelectors: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: siteConfig.name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
    url: siteConfig.url,
  }
}

export function generateHomeGraphSchema(reviews: ReviewInput[] = []) {
  const website = generateWebSiteSchema()
  const localBusiness = generateLocalBusinessSchema(reviews)
  const breadcrumbs = generateBreadcrumbSchema([{ name: 'Home', url: '/' }])

  const stripContext = (schema: Record<string, unknown>) => {
    const { '@context': _context, ...rest } = schema
    return rest
  }

  // FAQ content is visible on the homepage; FAQPage JSON-LD omitted (rich results deprecated May 2026)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationBase(),
      stripContext(website),
      stripContext(localBusiness),
      stripContext(breadcrumbs),
    ],
  }
}
