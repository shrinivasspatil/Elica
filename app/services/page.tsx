import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { BookNowButton } from '@/components/book-now-button'
import { SchemaMarkup } from '@/components/schema-markup'
import { CoverageLinks } from '@/components/coverage-links'
import { getAllServices } from '@/lib/services'
import {
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from '@/lib/seo'
import Link from 'next/link'
import type { Metadata } from 'next'

const allServices = getAllServices()

export const metadata: Metadata = buildPageMetadata({
  title: 'Chimney, Hob & Microwave Services in Bangalore',
  description:
    'Book Elica chimney general cleaning, deep cleaning, dismantle cleaning, suction repair, gas hob service, hob cleaning and built-in microwave service across Bangalore.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]),
          generateItemListSchema(
            'Elica Services in Bangalore',
            allServices.map((service) => ({
              name: service.name,
              url: `/services/${service.id}`,
              description: service.shortDescription,
            }))
          ),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Elica Services in Bangalore
            </h1>
            <p className="aeo-answer text-lg text-muted-foreground max-w-3xl">
              Keyword-focused services for chimney cleaning, suction problems, oil dripping, gas hob flame issues,
              cooktop stove service, and built-in microwave repair — with trained technicians across Bangalore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                shortDescription={service.shortDescription}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-serif font-bold text-center">Popular services we cover</h2>
          <p className="aeo-answer text-muted-foreground text-center">
            Book{' '}
            <Link href="/services/chimney-general-cleaning" className="text-primary hover:underline">
              chimney general cleaning
            </Link>
            ,{' '}
            <Link href="/services/chimney-deep-cleaning" className="text-primary hover:underline">
              chimney deep cleaning
            </Link>
            ,{' '}
            <Link href="/services/chimney-dismantle-cleaning" className="text-primary hover:underline">
              chimney dismantle cleaning
            </Link>
            ,{' '}
            <Link href="/services/gas-hob-service" className="text-primary hover:underline">
              gas hob service
            </Link>
            {' '}and{' '}
            <Link href="/guides/elica-chimney-cleaning-cost-bangalore" className="text-primary hover:underline">
              see chimney cleaning cost in Bangalore
            </Link>
            .
          </p>
          <CoverageLinks title="Available across Bangalore" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Ready to Book a Service?
          </h2>
          <BookNowButton
            size="lg"
            label="Get Free Quote"
            className="bg-primary hover:bg-primary/90"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
