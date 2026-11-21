import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactCta } from '@/components/contact-cta'
import { SchemaMarkup } from '@/components/schema-markup'
import { CoverageLinks } from '@/components/coverage-links'
import { getAllServices, getServiceById } from '@/lib/services'
import { getGuidesForService } from '@/lib/guides'
import {
  absoluteUrl,
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateServiceSchema,
} from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return getAllServices().map((service) => ({ id: service.id }))
}

export async function generateMetadata(
  props: ServiceDetailPageProps
): Promise<Metadata> {
  const params = await props.params
  const service = getServiceById(params.id)
  if (!service) {
    return buildPageMetadata({
      title: 'Service Not Found',
      description: 'The requested Elica service page could not be found.',
      path: `/services/${params.id}`,
      noIndex: true,
    })
  }
  return buildPageMetadata({
    title: `${service.name} in Bangalore`,
    description: service.fullDescription.slice(0, 155),
    path: `/services/${service.id}`,
  })
}

export default async function ServiceDetailPage(props: ServiceDetailPageProps) {
  const params = await props.params
  const service = getServiceById(params.id)

  if (!service) {
    notFound()
  }

  const relatedGuides = getGuidesForService(service.id)

  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.name, url: `/services/${service.id}` },
          ]),
          generateServiceSchema({
            name: service.name,
            description: service.fullDescription,
            warranty: service.warranty,
            url: absoluteUrl(`/services/${service.id}`),
          }),
          generateHowToSchema({
            name: `How ${service.name} works`,
            description: service.fullDescription,
            steps: service.process,
          }),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              {service.name} in Bangalore
            </h1>
            <p className="aeo-answer text-lg text-muted-foreground max-w-3xl">
              {service.fullDescription}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-md bg-secondary px-3 py-1 text-sm text-foreground">
                {service.warranty}
              </span>
            </div>
            <ContactCta quoteLabel={`Book ${service.name}`} className="pt-2" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">What's Included</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">Service Process</h2>
            <ol className="list-decimal pl-5 space-y-2 text-foreground">
              {service.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <ContactCta quoteLabel={`Book ${service.name}`} className="mt-4" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-serif font-bold">FAQs: {service.name}</h2>
          {service.faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="aeo-answer mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif font-bold">Related guides</h2>
            <ul className="space-y-2">
              {relatedGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <CoverageLinks title={`${service.name} coverage in Bangalore`} />
          <p className="text-sm text-muted-foreground">
            Related searches: {service.keywords.join(' · ')}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
