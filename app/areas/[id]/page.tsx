import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

interface AreaDetailPageProps {
  params: Promise<{ id: string }>
}

const areasData: Record<string, {
  id: string
  areaName: string
  description: string
  zones: string[]
  coordinates: { lat: number; lng: number }
  responseTime: string
  availableServices: string[]
  testimonials: { name: string; text: string; rating: number }[]
  faqs: { question: string; answer: string }[]
}> = {
  '1': {
    id: '1',
    areaName: 'Whitefield',
    description: 'Fast service coverage across entire Whitefield IT hub with expert technicians',
    zones: ['Whitefield', 'Marathahalli', 'Sarjapur Road', 'ISRO Layout', 'Ramprastha'],
    coordinates: { lat: 12.9698, lng: 77.7499 },
    responseTime: '2-3 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service',
      'Dishwasher Repair',
      'Emergency Service'
    ],
    testimonials: [
      {
        name: 'Rajesh M.',
        text: 'Excellent service in Whitefield. Technician was professional and on-time.',
        rating: 5
      },
      {
        name: 'Priya Sharma',
        text: 'Great experience with quick response and quality work.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What areas do you cover in Whitefield?',
        answer: 'We cover entire Whitefield, Marathahalli, Sarjapur Road, ISRO Layout, and surrounding areas.'
      },
      {
        question: 'How quickly can you respond?',
        answer: 'Typically within 2-3 hours of booking for Whitefield area.'
      }
    ]
  },
  '2': {
    id: '2',
    areaName: 'Indiranagar',
    description: 'Comprehensive coverage in central Bangalore with same-day service available',
    zones: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Frazer Town', 'Shantinagar'],
    coordinates: { lat: 12.9716, lng: 77.6412 },
    responseTime: '1.5-2.5 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service',
      'Dishwasher Repair',
      'Oven Repair',
      'Emergency Service'
    ],
    testimonials: [
      {
        name: 'Amit Patel',
        text: 'Outstanding service in Indiranagar. Professional team and transparent pricing.',
        rating: 5
      },
      {
        name: 'Kavya S.',
        text: 'Same-day service available. Very satisfied with the work quality.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Do you offer same-day service in Indiranagar?',
        answer: 'Yes, for urgent repairs we can provide same-day service in Indiranagar and surrounding areas.'
      },
      {
        question: 'What is your average response time?',
        answer: 'Our average response time in central Bangalore is 1.5-2.5 hours.'
      }
    ]
  },
  '3': {
    id: '3',
    areaName: 'JP Nagar',
    description: 'Reliable service in South Bangalore locality with quick turnaround time',
    zones: ['JP Nagar', 'Banashankari', 'Uttarahalli', 'Kalkere', 'Madivala'],
    coordinates: { lat: 12.9352, lng: 77.5940 },
    responseTime: '3-4 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service',
      'Dishwasher Repair',
      'Cooktop Maintenance'
    ],
    testimonials: [
      {
        name: 'Sunita Rao',
        text: 'Great service in JP Nagar. Technician was courteous and professional.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Do you service JP Nagar?',
        answer: 'Yes, we provide comprehensive service coverage in JP Nagar and surrounding areas.'
      },
      {
        question: 'How long does typical service take?',
        answer: 'Most services are completed within 1-2 hours, with response time of 3-4 hours.'
      }
    ]
  },
  '4': {
    id: '4',
    areaName: 'Hebbal',
    description: 'Quick response in North Bangalore areas with expert technicians',
    zones: ['Hebbal', 'Yelahanka', 'Sankey Road', 'Yeshwantpur', 'Someshwara'],
    coordinates: { lat: 13.0051, lng: 77.5754 },
    responseTime: '2.5-3.5 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service',
      'Emergency Service'
    ],
    testimonials: [
      {
        name: 'Vikram Kumar',
        text: 'Reliable service in Hebbal. Would recommend to others.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What areas in North Bangalore do you cover?',
        answer: 'We cover Hebbal, Yelahanka, Sankey Road, Yeshwantpur and surrounding North Bangalore areas.'
      }
    ]
  },
  '5': {
    id: '5',
    areaName: 'Marathahalli',
    description: 'Comprehensive coverage in East Bangalore with emergency service available',
    zones: ['Marathahalli', 'Varthur', 'Ramprastha', 'Manya Junction', 'Brookefield'],
    coordinates: { lat: 12.9698, lng: 77.7130 },
    responseTime: '2-3 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service',
      'Dishwasher Repair'
    ],
    testimonials: [],
    faqs: []
  },
  '6': {
    id: '6',
    areaName: 'Sarjapur',
    description: 'Dedicated service for Sarjapur and surrounding areas with same-day booking',
    zones: ['Sarjapur', 'Bellandur', 'Iblur', 'Kadubeesanahalli'],
    coordinates: { lat: 12.9352, lng: 77.7499 },
    responseTime: '3-4 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service'
    ],
    testimonials: [],
    faqs: []
  },
  '7': {
    id: '7',
    areaName: 'Bannerghatta',
    description: 'Professional service in South-Central Bangalore with 24/7 support',
    zones: ['Bannerghatta Road', 'Madivala', 'Kalkere', 'Chikkanagamangala'],
    coordinates: { lat: 12.8970, lng: 77.6140 },
    responseTime: '3-4 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service'
    ],
    testimonials: [],
    faqs: []
  },
  '8': {
    id: '8',
    areaName: 'Jayanagar',
    description: 'Trusted service provider in West Bangalore with warranty on all repairs',
    zones: ['Jayanagar', 'Basavanagudi', 'Lakshmipuram', 'Gavigunda'],
    coordinates: { lat: 12.9352, lng: 77.5714 },
    responseTime: '3-4 hours',
    availableServices: [
      'Chimney Cleaning',
      'Range Hood Installation',
      'Hob Repair',
      'Microwave Service'
    ],
    testimonials: [],
    faqs: []
  }
}

export async function generateMetadata(
  props: AreaDetailPageProps
): Promise<Metadata> {
  const params = await props.params
  const area = areasData[params.id]

  return {
    title: `Elicaa Repair in ${area.areaName} | Professional Service`,
    description: `Professional Elicaa appliance repair and service in ${area.areaName}, Bangalore. ${area.description} Response time: ${area.responseTime}`,
    openGraph: {
      title: `Elicaa Repair in ${area.areaName}`,
      description: area.description,
    },
  }
}

export default async function AreaDetailPage(props: AreaDetailPageProps) {
  const params = await props.params
  const area = areasData[params.id]

  if (!area) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Area Not Found</h1>
          <Link href="/areas">
            <Button>Back to Areas</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Elicaa Repair in {area.areaName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Area Info */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Response Time</p>
              <p className="text-3xl font-bold text-primary">{area.responseTime}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Coverage</p>
              <p className="text-lg font-semibold text-foreground">{area.zones.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Services Available in {area.areaName}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {area.availableServices.map((service, idx) => (
              <div key={idx} className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl text-accent flex-shrink-0">✓</div>
                <p className="text-foreground font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {area.testimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {area.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-accent">⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {area.faqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {area.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-3 border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Book Your Service in {area.areaName}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Quick response time, professional technicians, and quality guaranteed
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
              Book Service Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
