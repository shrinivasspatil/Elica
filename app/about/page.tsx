import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { BookNowButton } from '@/components/book-now-button'
import { SchemaMarkup } from '@/components/schema-markup'
import {
  buildPageMetadata,
  generateBreadcrumbSchema,
  siteConfig,
} from '@/lib/seo'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = buildPageMetadata({
  title: 'About Us',
  description:
    'Learn about Elica Repair & Service — certified kitchen appliance technicians serving Bangalore with same-day chimney, hob, microwave and cooktop support.',
  path: '/about',
})

const values = [
  {
    title: 'Certified Technicians',
    description: 'Factory-trained experts experienced with Elica chimneys, hobs, microwaves, and cooking ranges.',
  },
  {
    title: 'Fast Bangalore Coverage',
    description: 'Service centre branches across major localities with typical 2–4 hour response windows.',
  },
  {
    title: 'Warranty-Backed Work',
    description: 'Repairs and servicing backed by clear service warranties and genuine spare parts where needed.',
  },
  {
    title: 'Simple Booking',
    description: 'Book online or request a free quote — we confirm within about 2 hours on working days.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Elica Repair & Service',
            description: siteConfig.description,
            url: `${siteConfig.url}/about`,
            mainEntity: {
              '@id': `${siteConfig.url}/#organization`,
            },
          },
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            About Elica Repair & Service
          </h1>
          <p className="aeo-answer text-lg text-muted-foreground">
            We help Bangalore homes keep Elica kitchen appliances running reliably — from chimney cleaning and
            suction repairs to gas hob service and built-in microwave support.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-serif font-bold">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            Elica Repair & Service is a Bangalore-focused appliance service team specializing in kitchen
            ventilation and cooking appliances. Our technicians diagnose issues on-site, explain the work clearly,
            and complete service with care for your kitchen space.
          </p>
          <p className="aeo-answer text-muted-foreground leading-relaxed">
            We are an independent local repair and service centre for Elica appliances in Bangalore — not the
            manufacturer customer-care helpline on elicaindia.com. For brand warranty registration or official
            company support, use Elica India&apos;s channels; for doorstep cleaning and repair booking in Bangalore,
            use this site.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you need routine chimney cleaning, help with dripping oil, weak suction, noisy fans, hob flame
            problems, or microwave service, we provide practical solutions with same-day options in most zones.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Why Customers Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-background p-6 space-y-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold">Ready to book a technician?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <BookNowButton
              size="lg"
              label="Get Free Quote"
              className="bg-primary hover:bg-primary/90"
            />
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
