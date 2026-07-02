import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Services | Faber Repair & Service',
  description: 'Complete range of Faber appliance repair and maintenance services in Bangalore. Chimney cleaning, range hood installation, hob repair, and more.',
  openGraph: {
    title: 'All Services | Faber Repair & Service',
    description: 'Professional appliance repair services in Bangalore',
  },
}

const allServices = [
  {
    id: '1',
    name: 'Chimney Cleaning & Maintenance',
    shortDescription: 'Professional chimney cleaning and filter maintenance',
    icon: '🔥',
    price: 'From ₹1,500',
    description: 'Deep cleaning of chimney ducts, filter replacement, and maintenance. Ensures optimal performance and extends product life.',
    warranty: '1 Year'
  },
  {
    id: '2',
    name: 'Range Hood Installation',
    shortDescription: 'Expert installation of range hoods and ventilation',
    icon: '⚙️',
    price: 'From ₹3,000',
    description: 'Professional installation with all mounting hardware. Includes proper ductwork configuration and testing.',
    warranty: '2 Years'
  },
  {
    id: '3',
    name: 'Hob Repair & Service',
    shortDescription: 'Gas and electric hob repairs',
    icon: '🍳',
    price: 'From ₹800',
    description: 'Knob replacement, burner repair, ignition fixes. All genuine parts with warranty.',
    warranty: '1 Year'
  },
  {
    id: '4',
    name: 'Microwave Service',
    shortDescription: 'Microwave oven repair and maintenance',
    icon: '🌊',
    price: 'From ₹1,000',
    description: 'Magnetron replacement, door latch repair, timer fixes. Certified technicians with factory training.',
    warranty: '1 Year'
  },
  {
    id: '5',
    name: 'Dishwasher Repair',
    shortDescription: 'Dishwasher repair and maintenance services',
    icon: '🍽️',
    price: 'From ₹1,200',
    description: 'Pump replacement, spray arm cleaning, drain fixes. Full diagnostic and repair service.',
    warranty: '1 Year'
  },
  {
    id: '6',
    name: 'Oven Repair & Cleaning',
    shortDescription: 'Professional oven repair and deep cleaning',
    icon: '🔥',
    price: 'From ₹2,000',
    description: 'Heating element repair, thermostat fixes, deep cleaning service. Includes performance testing.',
    warranty: '1 Year'
  },
  {
    id: '7',
    name: 'Cooktop Maintenance',
    shortDescription: 'Cooktop servicing and maintenance',
    icon: '🌡️',
    price: 'From ₹900',
    description: 'Regular maintenance, knob replacement, surface cleaning and polishing.',
    warranty: '6 Months'
  },
  {
    id: '8',
    name: 'Emergency Service',
    shortDescription: 'Same-day emergency repair service',
    icon: '⚠️',
    price: 'From ₹2,500',
    description: 'Available 24/7 for urgent appliance breakdowns. Quick response with priority servicing.',
    warranty: '1 Year'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              All Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive Faber appliance repair and maintenance solutions across Bangalore
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Why Choose Our Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Factory-Trained Technicians',
                  description: 'All our technicians are certified by Faber with regular training updates.'
                },
                {
                  title: 'Genuine Parts Only',
                  description: 'We use only genuine Faber spare parts for all repairs and replacements.'
                },
                {
                  title: '100% Warranty',
                  description: 'All repairs come with 1-year warranty on parts and workmanship.'
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Fixed rates with no hidden charges. Free diagnostic service.'
                },
                {
                  title: 'Same-Day Service',
                  description: 'Available for urgent repairs in most Bangalore areas.'
                },
                {
                  title: 'Quick Response',
                  description: 'Average response time under 4 hours for booking requests.'
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Ready to Book a Service?
          </h2>
          <Link href="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Service Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
