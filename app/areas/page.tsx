import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AreaCard } from '@/components/area-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | Faber Repair & Service',
  description: 'Find Faber repair service in your Bangalore area. We cover Whitefield, Indiranagar, Koramangala, JP Nagar, and more with fast response times.',
  openGraph: {
    title: 'Service Areas | Faber Repair & Service',
    description: 'Professional Faber repair service across Bangalore localities',
  },
}

const serviceAreas = [
  {
    id: '1',
    areaName: 'Whitefield',
    zones: 'Whitefield, Marathahalli, Sarjapur Road',
    description: 'Fast service coverage across entire Whitefield IT hub. Average response time: 2-3 hours'
  },
  {
    id: '2',
    areaName: 'Indiranagar',
    zones: 'Indiranagar, Koramangala, HSR Layout',
    description: 'Comprehensive coverage in central Bangalore. Same-day service available'
  },
  {
    id: '3',
    areaName: 'JP Nagar',
    zones: 'JP Nagar, Banashankari, Uttarahalli',
    description: 'Reliable service in South Bangalore locality. Quick turnaround time'
  },
  {
    id: '4',
    areaName: 'Hebbal',
    zones: 'Hebbal, Yelahanka, Sankey Road',
    description: 'Quick response in North Bangalore areas. Expert technicians available'
  },
  {
    id: '5',
    areaName: 'Marathahalli',
    zones: 'Marathahalli, Varthur, Ramprastha',
    description: 'Comprehensive coverage in East Bangalore. Emergency service available'
  },
  {
    id: '6',
    areaName: 'Sarjapur',
    zones: 'Sarjapur, Bellandur, Iblur',
    description: 'Dedicated service for Sarjapur and surrounding areas. Same-day booking'
  },
  {
    id: '7',
    areaName: 'Bannerghatta',
    zones: 'Bannerghatta Road, Madivala, Kalkere',
    description: 'Professional service in South-Central Bangalore. 24/7 support'
  },
  {
    id: '8',
    areaName: 'Jayanagar',
    zones: 'Jayanagar, Basavanagudi, Lakshmipuram',
    description: 'Trusted service provider in West Bangalore. Warranty on all repairs'
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
