import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SchemaMarkup } from '@/components/schema-markup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Elicaa Repair & Service',
  description: 'Get in touch with Elicaa Repair & Service. Call us or visit our office for professional appliance repair in Bangalore.',
  openGraph: {
    title: 'Contact Us | Elicaa Repair & Service',
    description: 'Contact information and support for Elicaa repair service',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  telephone: '+91-98765-43210',
  contactType: 'Customer Service',
  email: 'support@faberrepair.com',
  availableLanguage: ['en', 'hi', 'kn']
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup schema={contactSchema} />
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Get in touch with our support team for any queries or to book a service
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="space-y-4">
              <div className="text-4xl">📞</div>
              <h3 className="text-lg font-semibold text-foreground">Phone</h3>
              <a href="tel:+919876543210" className="text-primary hover:underline text-lg">
                +91 98765 43210
              </a>
              <p className="text-sm text-muted-foreground">Mon-Sun: 7:00 AM - 10:00 PM</p>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <div className="text-4xl">📧</div>
              <h3 className="text-lg font-semibold text-foreground">Email</h3>
              <a href="mailto:support@faberrepair.com" className="text-primary hover:underline">
                support@faberrepair.com
              </a>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <div className="text-4xl">📍</div>
              <h3 className="text-lg font-semibold text-foreground">Location</h3>
              <p className="text-foreground">
                Bangalore<br />
                Karnataka, India
              </p>
              <p className="text-sm text-muted-foreground">Service available across major areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Service Hours</h2>
            
            <div className="space-y-4">
              {[
                { day: 'Monday - Saturday', hours: '7:00 AM - 10:00 PM' },
                { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
                { day: 'Holidays', hours: '9:00 AM - 6:00 PM' },
                { day: 'Emergency', hours: '24/7 Available' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-border pb-3">
                  <span className="font-semibold text-foreground">{item.day}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Quick Actions</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="/booking" className="p-6 border-2 border-primary hover:bg-primary/5 rounded-lg transition-colors">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-semibold text-foreground mb-2">Book Service</h3>
                <p className="text-sm text-muted-foreground">Schedule your appointment online</p>
              </a>

              <a href="/services" className="p-6 border-2 border-primary hover:bg-primary/5 rounded-lg transition-colors">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold text-foreground mb-2">View Services</h3>
                <p className="text-sm text-muted-foreground">See all available repair services</p>
              </a>

              <a href="/areas" className="p-6 border-2 border-primary hover:bg-primary/5 rounded-lg transition-colors">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-foreground mb-2">Service Areas</h3>
                <p className="text-sm text-muted-foreground">Check coverage in your area</p>
              </a>

              <a href="tel:+919876543210" className="p-6 border-2 border-primary hover:bg-primary/5 rounded-lg transition-colors">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-foreground mb-2">Call Now</h3>
                <p className="text-sm text-muted-foreground">Speak with our support team</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
