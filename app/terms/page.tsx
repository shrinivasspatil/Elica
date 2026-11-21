import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { buildPageMetadata, siteConfig } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for booking Elica appliance repair and maintenance in Bangalore.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h1 className="text-4xl font-serif font-bold">Terms of Service</h1>
          <p className="text-muted-foreground leading-relaxed">
            By requesting a quote or booking a visit with {siteConfig.name}, you agree to these terms. We provide
            chimney, hob, microwave, and cooking-range service across Bangalore localities listed on our Service
            Centres pages.
          </p>
          <h2 className="text-2xl font-serif font-bold">Quotes and pricing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Online quotes are indicative until a technician inspects the appliance on-site. Final scope, parts, and
            charges are confirmed with you before work begins. You may decline work after inspection with no obligation
            beyond any agreed visit fee if communicated in advance.
          </p>
          <h2 className="text-2xl font-serif font-bold">Appointments</h2>
          <p className="text-muted-foreground leading-relaxed">
            Appointments depend on technician availability in your locality. Same-day service is offered where slots
            allow. Please share an accurate phone number and pincode so we can reach you and assign the right branch
            coverage.
          </p>
          <h2 className="text-2xl font-serif font-bold">Warranty</h2>
          <p className="text-muted-foreground leading-relaxed">
            Warranty terms apply to workmanship as communicated at the time of service and may vary by repair type and
            parts used. Misuse, third-party tampering, or unrelated faults are not covered.
          </p>
          <h2 className="text-2xl font-serif font-bold">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For booking changes or complaints, contact {siteConfig.email} or call {siteConfig.phoneDisplay}.{' '}
            {siteConfig.napDisplay}.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
