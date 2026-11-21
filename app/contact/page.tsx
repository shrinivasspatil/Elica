import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactCta } from '@/components/contact-cta'
import { SchemaMarkup } from '@/components/schema-markup'
import {
  buildPageMetadata,
  generateBreadcrumbSchema,
  generateContactPageSchema,
  generateLocalBusinessSchema,
  siteConfig,
} from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us',
  description:
    'Contact Elica Repair & Service in Bangalore for chimney, hob, microwave and appliance repair. Call or email for same-day booking support.',
  path: '/contact',
})

const mapSrc = `https://maps.google.com/maps?q=${siteConfig.coordinates.latitude},${siteConfig.coordinates.longitude}&z=11&output=embed`

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateContactPageSchema(),
          generateLocalBusinessSchema(),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
        ]}
      />
      <Navigation />

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Contact Elica Repair & Service
            </h1>
            <p className="aeo-answer text-lg text-muted-foreground max-w-2xl">
              Reach our Bangalore support team by phone or email for bookings, warranty queries, and same-day
              appliance repair help. We respond during 7:00 AM – 10:00 PM every day across {siteConfig.areasServed.length} service centres.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">📞</div>
              <h2 className="text-lg font-semibold text-foreground">Phone</h2>
              <a href={`tel:${siteConfig.phoneE164}`} className="text-primary hover:underline text-lg">
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                WhatsApp chat
              </a>
              <p className="text-sm text-muted-foreground">Mon–Sun: 7:00 AM – 10:00 PM</p>
            </div>

            <div className="space-y-4">
              <div className="text-4xl">📧</div>
              <h2 className="text-lg font-semibold text-foreground">Email</h2>
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>
              <p className="text-sm text-muted-foreground">We reply within about 2 hours</p>
            </div>

            <div className="space-y-4">
              <div className="text-4xl">📍</div>
              <h2 className="text-lg font-semibold text-foreground">Service Area</h2>
              <p className="text-foreground">{siteConfig.addressDisplay}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.napDisplay}</p>
              <p className="text-sm text-muted-foreground">
                Doorstep service across {siteConfig.areasServed.length} Bangalore localities
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl overflow-hidden border border-border">
            <iframe
              title="Elica Repair & Service area map — Bangalore"
              src={mapSrc}
              className="w-full h-72 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">Prefer a quick callback?</p>
            <ContactCta className="justify-center" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
