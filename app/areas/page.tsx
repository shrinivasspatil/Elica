import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AreaCard } from '@/components/area-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | Faber Repair & Service - Bangalore',
  description: 'Faber repair service across 8 major Bangalore areas serving 3M+ residents. Whitefield, Indiranagar, Electronic City, Malleshwaram, JP Nagar, Bellandur, Yeshwanthpur, Bannerghatta Road. Fast response & same-day service.',
  keywords: 'Faber repair Bangalore, chimney cleaning service, appliance service near me',
  openGraph: {
    title: 'Service Areas | Faber Repair & Service',
    description: 'Professional Faber repair across 8 major Bangalore high-population areas',
  },
}

const serviceAreas = [
  {
    id: '1',
    areaName: 'Whitefield',
    zones: 'Whitefield, Marathahalli, Sarjapur Road, ITPL Area',
    description: 'Fast service across 500K+ residents in Bangalore\'s prime IT hub. 2-3 hour response time'
  },
  {
    id: '2',
    areaName: 'Indiranagar',
    zones: 'Indiranagar, Koramangala, HSR Layout, Domlur',
    description: 'Comprehensive coverage for 400K+ population in central Bangalore. Same-day service'
  },
  {
    id: '3',
    areaName: 'Electronic City',
    zones: 'Electronic City Phase 1 & 2, Konappana Agrahara, Attibele',
    description: 'Expert service for 300K+ residents in major tech employment hub. 24/7 available'
  },
  {
    id: '4',
    areaName: 'Malleshwaram',
    zones: 'Malleshwaram, Yelahanka, Sankey Road, Sampige Road',
    description: 'Premium service for 350K+ in North Bangalore\'s established residential area. Same-day booking'
  },
  {
    id: '5',
    areaName: 'JP Nagar',
    zones: 'JP Nagar, Jayanagar, Banashankari, BG Road',
    description: 'Trusted by 380K+ residents in South Bangalore prime locality. Emergency service available'
  },
  {
    id: '6',
    areaName: 'Bellandur',
    zones: 'Bellandur, Sarjapur, Varthur, Avni Tech Park',
    description: 'Serving 420K+ population in growing tech and residential hub. Fast response guaranteed'
  },
  {
    id: '7',
    areaName: 'Yeshwanthpur',
    zones: 'Yeshwanthpur, Hebbal, Rajajinagar, Sampangi Rama Nagar',
    description: 'Quick response for 360K+ residents in West Bangalore. Expert certified technicians'
  },
  {
    id: '8',
    areaName: 'Bannerghatta Road',
    zones: 'Bannerghatta Road, Ejipura, Bilekahalli, Toorak',
    description: 'Complete coverage for 330K+ population in South-central Bangalore. Warranty honored'
  }
]

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Service Areas in Bangalore
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Rapid response and professional service across major Bangalore localities with same-day service options
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <Link key={area.id} href={`/areas/${area.id}`}>
                <AreaCard {...area} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Coverage Map
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We serve all major localities across Bangalore with rapid response times
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 h-96 flex items-center justify-center border border-border">
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold text-foreground">Bangalore Service Coverage</p>
                <p className="text-muted-foreground">Interactive map showing all service areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Why Choose Faber Service in Your Area?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Local Expertise',
                  description: 'Deep knowledge of local addresses and routes for faster service'
                },
                {
                  title: 'Quick Response',
                  description: 'Average 2-4 hour response time across all areas'
                },
                {
                  title: 'Same-Day Service',
                  description: 'Available for urgent repairs in most areas'
                },
                {
                  title: 'Area-Specific Packages',
                  description: 'Special discounts for bulk bookings in your area'
                },
                {
                  title: 'Dedicated Technicians',
                  description: 'Assigned technicians familiar with your locality'
                },
                {
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support for emergencies'
                }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Not seeing your area?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We&apos;re expanding our service coverage. Contact us to check if we can serve your location
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
