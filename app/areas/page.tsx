import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AreaCard } from '@/components/area-card'
import { BookNowButton } from '@/components/book-now-button'
import { SchemaMarkup } from '@/components/schema-markup'
import { getAllAreas, getAreasGroupedByCorridor, getAreaPath, getBranchName } from '@/lib/areas'
import { CORRIDOR_INTROS } from '@/lib/coverage'
import { CoverageLinks } from '@/components/coverage-links'
import {
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from '@/lib/seo'
import Link from 'next/link'
import type { Metadata } from 'next'

const serviceAreas = getAllAreas()
const corridorGroups = getAreasGroupedByCorridor()

export const metadata: Metadata = buildPageMetadata({
  title: `Elica Repair Areas in Bangalore`,
  description: `Elica Repair & Service covers ${serviceAreas.length} Bangalore localities including Whitefield, Koramangala, HSR Layout, Bommanahalli, Indiranagar and Electronic City.`,
  path: '/areas',
  absoluteTitle: true,
})

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/areas' },
          ]),
          generateItemListSchema(
            'Elica repair coverage in Bangalore',
            serviceAreas.map((area) => ({
              name: getBranchName(area.areaName),
              url: getAreaPath(area),
              description: area.description,
            }))
          ),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Elica repair coverage in {serviceAreas.length} Bangalore areas
            </h1>
            <p className="aeo-answer text-lg text-muted-foreground max-w-3xl">
              Book Elica Repair & Service across {serviceAreas.length} Bangalore localities with typical 2–4 hour
              response — including Whitefield, Koramangala, HSR, Bommanahalli, Yelahanka, and RR Nagar.
            </p>
            <nav aria-label="Bangalore corridors" className="flex flex-wrap gap-2 pt-2">
              {corridorGroups.map((group) => (
                <a
                  key={group.corridor}
                  href={`#corridor-${group.corridor.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm rounded-md border border-border bg-background px-3 py-1.5 text-foreground hover:bg-secondary transition"
                >
                  {group.corridor} ({group.areas.length})
                </a>
              ))}
            </nav>
            <CoverageLinks title="Start with these localities" />
          </div>
        </div>
      </section>

      {corridorGroups.map((group) => (
        <section
          key={group.corridor}
          id={`corridor-${group.corridor.toLowerCase().replace(/\s+/g, '-')}`}
          className="py-12 md:py-16 border-b border-border"
        >
          <div className="container mx-auto px-4 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                {group.corridor} Bangalore service areas
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                {CORRIDOR_INTROS[group.corridor] ||
                  `${group.areas.length} coverage pages for ${group.corridor} Bangalore.`}
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                {group.areas.map((area) => (
                  <li key={area.id}>
                    <Link href={getAreaPath(area)} className="text-primary hover:underline">
                      {area.areaName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.areas.map((area) => (
                <AreaCard
                  key={area.id}
                  id={area.id}
                  areaName={area.areaName}
                  zones={area.zones}
                  description={area.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Need a technician near your branch?</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Request a free quote and our Bangalore team will confirm within about 2 hours.
          </p>
          <BookNowButton
            size="lg"
            label="Get Free Quote"
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
