import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactCta } from '@/components/contact-cta'
import { SchemaMarkup } from '@/components/schema-markup'
import {
  DEFAULT_AREA_SERVICE_LINKS,
  getAllAreas,
  getAreaById,
  getAreaFaqs,
  getAreaLocalNotes,
  getBranchName,
  getNearbyAreaLinks,
} from '@/lib/areas'
import {
  absoluteUrl,
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
} from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface AreaDetailPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return getAllAreas().map((area) => ({ id: area.id }))
}

export async function generateMetadata(
  props: AreaDetailPageProps
): Promise<Metadata> {
  const params = await props.params
  const area = getAreaById(params.id)

  if (!area) {
    return buildPageMetadata({
      title: 'Branch Not Found',
      description: 'The requested Elica Service Centre page was not found.',
      path: `/areas/${params.id}`,
      noIndex: true,
    })
  }

  const branch = getBranchName(area.areaName)
  const landmark = area.landmark || area.areaName

  return buildPageMetadata({
    title: `${branch} | Bangalore`,
    description: `${branch} — Elica chimney, hob and microwave repair near ${landmark}, ${area.areaName}. ${area.description}`,
    path: `/areas/${area.id}`,
    keywords: [
      branch,
      `Elica service centre ${area.areaName}`,
      `Elica repair ${area.areaName}`,
      `chimney service ${area.areaName}`,
      `appliance repair ${area.areaName} Bangalore`,
    ],
  })
}

export default async function AreaDetailPage(props: AreaDetailPageProps) {
  const params = await props.params
  const area = getAreaById(params.id)

  if (!area) {
    notFound()
  }

  const branch = getBranchName(area.areaName)
  const faqs = getAreaFaqs(area)
  const localNotes = getAreaLocalNotes(area)
  const nearbyAreas = getNearbyAreaLinks(area, 6)
  const issues =
    area.commonIssues && area.commonIssues.length > 0
      ? area.commonIssues
      : ['chimney deep cleaning', 'weak suction', 'gas hob flame service']
  const landmark = area.landmark || `${area.areaName} Main Road`
  const housing = area.housingProfile || 'apartments and independent homes'
  const corridor = area.corridor || 'Bangalore'

  const localBusiness = {
    ...generateLocalBusinessSchema(),
    name: branch,
    url: absoluteUrl(`/areas/${area.id}`),
    areaServed: area.zoneList.map((zone) => ({ '@type': 'Place', name: zone })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: area.coordinates.lat,
      longitude: area.coordinates.lng,
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Centres', url: '/areas' },
            { name: branch, url: `/areas/${area.id}` },
          ]),
          localBusiness,
          generateServiceSchema({
            name: `${branch} — Elica Appliance Repair`,
            description: area.description,
            areaName: area.areaName,
            url: absoluteUrl(`/areas/${area.id}`),
          }),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary">
              {corridor} Bangalore · near {landmark}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              {branch}
            </h1>
            <p className="aeo-answer text-lg text-muted-foreground max-w-3xl">
              {area.description}
            </p>
            <p className="text-muted-foreground max-w-3xl">
              We serve {housing} in {area.areaName} with a typical response time of{' '}
              <strong>{area.responseTime}</strong>.
            </p>
            <ContactCta className="pt-2" />
          </div>
        </div>
      </section>

      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-3">
          <h2 className="text-2xl font-serif font-bold">
            Why homeowners in {area.areaName} choose {branch}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {localNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">Zones Covered near {area.areaName}</h2>
            <p className="text-muted-foreground">{area.zones}</p>
            <ul className="list-disc pl-5 space-y-1 text-foreground">
              {area.zoneList.map((zone) => (
                <li key={zone}>{zone}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Local landmark reference: <strong>{landmark}</strong>
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">Services Available</h2>
            <ul className="list-disc pl-5 space-y-1 text-foreground">
              {DEFAULT_AREA_SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-primary hover:underline">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Response time in {area.areaName}: <strong>{area.responseTime}</strong>
            </p>
            <ContactCta />
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-serif font-bold">
            Common Elica issues we fix in {area.areaName}
          </h2>
          <p className="text-muted-foreground">
            Based on service requests from {housing} around {landmark}, these are frequent jobs at{' '}
            {branch}:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-foreground">
            {issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
            <li>Elica chimney general cleaning and deep cleaning</li>
            <li>Built-in microwave and cooking range servicing</li>
          </ul>
          {area.localTip && (
            <p className="rounded-lg border border-border bg-background p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Local tip:</strong> {area.localTip}
            </p>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-serif font-bold">FAQs for {branch}</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="aeo-answer mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-serif font-bold">Nearby Elica Service Centres</h2>
          <p className="text-muted-foreground">
            Also covering localities close to {area.areaName}:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {nearbyAreas.map((nearby) => (
              <li key={nearby.id}>
                <Link
                  href={`/areas/${nearby.id}`}
                  className="text-primary hover:underline font-medium"
                >
                  {getBranchName(nearby.areaName)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
