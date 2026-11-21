import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SchemaMarkup } from '@/components/schema-markup'
import {
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  siteFaqs,
} from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = buildPageMetadata({
  title: 'Elica Repair FAQ in Bangalore',
  description:
    'Questions about Elica chimney, hob and microwave repair in Bangalore — coverage, response time, warranty, and booking.',
  path: '/faq',
  absoluteTitle: true,
})

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'FAQ', url: '/faq' },
          ]),
          generateFAQSchema(siteFaqs),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="aeo-answer text-lg text-muted-foreground">
            Clear answers about Elica repair coverage, timing, warranty, and booking in Bangalore.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          {siteFaqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-border bg-background p-5">
              <h2 className="text-lg font-semibold text-foreground">{faq.question}</h2>
              <p className="aeo-answer mt-2 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
