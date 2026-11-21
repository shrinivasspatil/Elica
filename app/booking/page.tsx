import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { OpenLeadRedirect } from '@/components/open-lead-redirect'
import { buildPageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = buildPageMetadata({
  title: 'Get a Free Service Quote',
  description:
    'Request a free Elica appliance service quote in Bangalore. Share your details and we confirm within about 2 hours.',
  path: '/booking',
  noIndex: true,
})

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <OpenLeadRedirect />
      <section className="py-24 container mx-auto px-4 text-center space-y-3">
        <h1 className="text-3xl font-serif font-bold text-foreground">Get a Free Quote</h1>
        <p className="text-muted-foreground">
          Fill the form to request Elica service — we typically respond within 2 hours.
        </p>
      </section>
      <Footer />
    </main>
  )
}
