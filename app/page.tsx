import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Testimonial } from '@/components/testimonial'
import { AreaCard } from '@/components/area-card'
import { Button } from '@/components/ui/button'
import { BookNowButton } from '@/components/book-now-button'
import { SchemaMarkup } from '@/components/schema-markup'
import { getAllAreas, getFeaturedAreas } from '@/lib/areas'
import { getFeaturedServices } from '@/lib/services'
import {
  buildPageMetadata,
  generateHomeGraphSchema,
  generateSpeakableSchema,
  siteFaqs,
} from '@/lib/seo'
import { CoverageLinks } from '@/components/coverage-links'
import { HomeNotes } from '@/components/home-notes'
import { FileCheck, Award, Shield, Lock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

const allAreasCount = getAllAreas().length
const featuredServices = getFeaturedServices(4)

export const metadata: Metadata = buildPageMetadata({
  title: 'Elica chimney service in Bangalore | Elica Service Centre',
  description: `Book Elica chimney, hob, microwave and cooktop service in Bangalore. Independent repair, not the manufacturer.`,
  path: '/',
  absoluteTitle: true,
})

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Excellent service! The technician arrived on time and fixed the chimney issue quickly. Highly professional team.',
    rating: 5,
    areaName: 'Indiranagar'
  },
  {
    name: 'Priya Sharma',
    text: 'Great experience with Elica repair service. They are punctual, knowledgeable, and clear about the work needed.',
    rating: 5,
    areaName: 'Whitefield'
  },
  {
    name: 'Amit Patel',
    text: 'Outstanding service quality. Will definitely recommend to friends and family. Keep up the good work!',
    rating: 5,
    areaName: 'Koramangala'
  }
]

const serviceAreas = getFeaturedAreas(8)

const faqs = siteFaqs.map((faq) =>
  faq.question.includes('What areas does Elica')
    ? {
        ...faq,
        answer: `We cover ${allAreasCount} popular Bangalore localities including Whitefield, Indiranagar, Electronic City, Koramangala, HSR Layout, JP Nagar, Bellandur, Yelahanka, RR Nagar and many more, with same-day options in most areas.`,
      }
    : faq
)

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup
        schema={[
          generateHomeGraphSchema(testimonials),
          generateSpeakableSchema(['.aeo-answer', 'h1', '#faq']),
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      <HomeNotes />

      {/* AEO direct answer */}
      <section className="py-8 border-b border-border bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="aeo-answer text-base md:text-lg text-foreground leading-relaxed">
            <strong>Elica Repair & Service</strong> provides certified kitchen appliance
            repair in Bangalore with typical response in 2–4 hours, same-day service in major
            areas, and warranty-backed workmanship.
          </p>
        </div>
      </section>

      {/* Trust & Credentials Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Professional & Registered</h3>
            <p className="text-lg text-foreground font-semibold mb-2">Independent Private Registered Firm</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">Certified professionals committed to excellence in appliance repair services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Credential Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">GST Registered</h4>
              <p className="text-sm text-muted-foreground">Certified and tax-compliant business</p>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Factory Certified</h4>
              <p className="text-sm text-muted-foreground">Authorized Elica service technicians</p>
            </div>

            {/* Credential Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Warranty Honored</h4>
              <p className="text-sm text-muted-foreground">1-year warranty on all repairs</p>
            </div>

            {/* Credential Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Fully Insured</h4>
              <p className="text-sm text-muted-foreground">Professional liability coverage</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15K+</div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3M+</div>
              <p className="text-sm text-muted-foreground">Population Served</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete Elica appliance repair and maintenance solutions for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                shortDescription={service.shortDescription}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Service Centres in Bangalore
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Rapid response across {allAreasCount} Bangalore localities with same-day service options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <AreaCard key={area.id} {...area} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/areas">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All {allAreasCount} Branches
              </Button>
            </Link>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <CoverageLinks title="More Bangalore localities we cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Why Choose Elica Repair?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional service you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-center mb-12">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <picture>
                <source srcSet="/images/service-excellence.webp" type="image/webp" />
                <img
                  src="/images/service-excellence.jpg"
                  alt="Professional Elica appliance repair technician providing expert service"
                  className="w-full h-auto"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </picture>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '⚡', title: 'Quick Response', desc: 'Same-day service available in most areas' },
                { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'Certified professionals with 10+ years experience' },
                { icon: '✅', title: 'Quality Guaranteed', desc: 'All repairs backed by 1-year warranty' },
                { icon: '📋', title: 'Free Service Quote', desc: 'Share your issue and get a clear next step' },
                { icon: '📞', title: '24/7 Support', desc: 'Always available when you need us' },
                { icon: '🎯', title: 'Area-wise Coverage', desc: 'Available across all major Bangalore localities' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3 p-4 bg-secondary/50 rounded-lg">
                  <div className="text-5xl">{item.icon}</div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real feedback from satisfied customers across Bangalore
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <Testimonial key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Repair &amp; Maintenance Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Practical tips on chimney cleaning, hob care, and microwave servicing for Bangalore kitchens.
          </p>
          <Link href="/guides">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Browse Guides
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ — AEO */}
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Clear answers about Elica repair coverage, timing, warranty, and booking in Bangalore.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-secondary/20 p-4 open:bg-secondary/40"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground pr-6 relative">
                  {faq.question}
                  <span className="absolute right-0 top-0 text-muted-foreground group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="aeo-answer mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Share your details in the quick form — we confirm within about 2 hours.
            </p>
          </div>

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
