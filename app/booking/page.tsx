import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Service | Elicaa Repair & Service',
  description: 'Book your Elicaa appliance repair service in Bangalore. Fast booking, transparent pricing, same-day service available.',
  openGraph: {
    title: 'Book Service | Elicaa Repair & Service',
    description: 'Easy online booking for Elicaa appliance repair in Bangalore',
  },
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Book Your Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Fill out the form below to book your Elicaa appliance repair service. We&apos;ll confirm within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Response',
                description: 'We respond to booking requests within 2 hours during business hours'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'No hidden charges. You get a fixed quote before service begins'
              },
              {
                icon: '✓',
                title: '1-Year Warranty',
                description: 'All repairs come with comprehensive 1-year warranty on parts and labor'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
