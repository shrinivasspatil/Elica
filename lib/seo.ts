export const siteConfig = {
  name: 'Elicaa Repair & Service',
  description: 'Professional Elicaa appliance repair and service in Bangalore. Expert technicians, quick response, same-day service available.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://faberrepair.com',
  phone: '+91 98765 43210',
  email: 'support@faberrepair.com',
  address: 'Bangalore, Karnataka, India',
  coordinates: {
    latitude: 12.9716,
    longitude: 77.5946
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude
    },
    areaServed: [
      'Whitefield',
      'Indiranagar',
      'Koramangala',
      'JP Nagar',
      'Hebbal',
      'Marathahalli'
    ],
    url: siteConfig.url,
    priceRange: '₹800 - ₹5000'
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price: string
  warranty: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name
    },
    serviceType: 'Appliance Repair',
    areaServed: {
      '@type': 'City',
      name: 'Bangalore'
    }
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
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
      item: item.url
    }))
  }
}

export function generateAggregateRatingSchema(ratingValue: number, ratingCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue,
    reviewCount: ratingCount
  }
}
