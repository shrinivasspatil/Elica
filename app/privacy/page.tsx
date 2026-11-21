import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { buildPageMetadata, siteConfig } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Elica Repair & Service — how we collect and use customer information in Bangalore.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) operates elicservicecenter.com and provides appliance repair
            services across Bangalore. This policy explains what information we collect when you request a quote
            or contact us, and how we use it.
          </p>
          <h2 className="text-2xl font-serif font-bold">Information we collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit the free quote form or contact us, we may collect your name, phone number, pincode,
            selected service, and any message you share. We use this only to respond to service requests, confirm
            appointments, and improve our support quality.
          </p>
          <h2 className="text-2xl font-serif font-bold">How we use your information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Form submissions may be emailed to our support team at {siteConfig.email}. We do not sell personal
            information to third parties. Service providers that help us send email or host the website may process
            data on our behalf under confidentiality obligations.
          </p>
          <h2 className="text-2xl font-serif font-bold">Cookies and analytics</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may use analytics tools (such as Google Analytics) to understand aggregate traffic and improve the
            site. Cookies, if used, help measure performance and booking experience. You can control cookies through
            your browser settings.
          </p>
          <h2 className="text-2xl font-serif font-bold">Your choices</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request correction or deletion of your contact details by emailing {siteConfig.email} or calling{' '}
            {siteConfig.phoneDisplay}. We will respond within a reasonable time during business hours.
          </p>
          <h2 className="text-2xl font-serif font-bold">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.napDisplay}. Phone: {siteConfig.phoneDisplay}. Email: {siteConfig.email}.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
