import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SchemaMarkup } from '@/components/schema-markup'
import { CoverageLinks } from '@/components/coverage-links'
import { formatGuideDate, getAllGuides } from '@/lib/guides'
import {
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from '@/lib/seo'
import Link from 'next/link'
import type { Metadata } from 'next'

const guides = getAllGuides()

export const metadata: Metadata = buildPageMetadata({
  title: 'Kitchen Care Guides',
  description:
    'Practical Elica kitchen care guides for Bangalore homes — chimney cleaning, suction problems, gas hob flames, microwave care, and booking tips.',
  path: '/guides',
})

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Guides', url: '/guides' },
          ]),
          generateItemListSchema(
            'Elica Kitchen Care Guides',
            guides.map((guide) => ({
              name: guide.title,
              url: `/guides/${guide.slug}`,
              description: guide.excerpt,
            }))
          ),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Kitchen Care Guides
          </h1>
          <p className="aeo-answer text-lg text-muted-foreground max-w-3xl">
            Practical tips from Elica service experts — chimney cleaning schedules, suction fixes, hob flame
            issues, microwave care, and how to book the right service in Bangalore.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-xl border border-border bg-background p-6 hover:border-accent/50 hover:shadow-md transition"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="rounded-md bg-primary/10 px-2 py-1 font-medium text-primary">
                  {guide.category}
                </span>
                <span>{formatGuideDate(guide.publishedAt)}</span>
                <span>{guide.readTime} read</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                {guide.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {guide.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-primary">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <CoverageLinks title="Guides apply across Bangalore" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
