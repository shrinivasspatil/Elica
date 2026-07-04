import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Testimonial } from '@/components/testimonial'
import { AreaCard } from '@/components/area-card'
import { Button } from '@/components/ui/button'
import { SchemaMarkup } from '@/components/schema-markup'
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/seo'
import { FileCheck, Award, Shield, Lock } from 'lucide-react'
import Link from 'next/link'

const featuredServices = [
  {
    id: '1',
    name: 'Chimney Cleaning & Maintenance',
    shortDescription: 'Professional chimney cleaning and filter maintenance to ensure optimal performance and safety.',
    icon: '🔥',
    price: 'From ₹1,500'
  },
  {
    id: '2',
    name: 'Range Hood Installation',
    shortDescription: 'Expert installation of range hoods and kitchen ventilation systems with warranty.',
    icon: '⚙️',
    price: 'From ₹3,000'
  },
  {
    id: '3',
    name: 'Hob Repair & Service',
    shortDescription: 'Quick repairs and servicing for gas and electric hobs with genuine parts.',
    icon: '🍳',
    price: 'From ₹800'
  },
  {
    id: '4',
    name: 'Microwave Service',
    shortDescription: 'Repair and maintenance of microwave ovens with certified technicians.',
    icon: '🌊',
    price: 'From ₹1,000'
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Excellent service! The technician arrived on time and fixed the chimney issue quickly. Highly professional team.',
    rating: 5,
    areaName: 'Indiranagar'
  },
  {
    name: 'Priya Sharma',
    text: 'Great experience with Elicaa repair service. They are punctual, knowledgeable, and transparent with pricing.',
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

const serviceAreas = [
  {
    id: '1',
    areaName: 'Whitefield',
    zones: 'Whitefield, Marathahalli, Sarjapur Road, ITPL Area',
    description: 'Serving 500K+ residents in Bangalore\'s IT corridor with rapid response'
  },
  {
    id: '2',
    areaName: 'Indiranagar',
    zones: 'Indiranagar, Koramangala, HSR Layout, Domlur',
    description: 'Comprehensive coverage for 400K+ population in central Bangalore'
  },
  {
    id: '3',
    areaName: 'Electronic City',
    zones: 'Electronic City Phase 1 & 2, Konappana Agrahara',
    description: 'Expert service for 300K+ residents in major tech hub'
  },
  {
    id: '4',
    areaName: 'Malleshwaram',
    zones: 'Malleshwaram, Yelahanka, Sankey Road, Sampige Road',
    description: 'Premium service for 350K+ in North Bangalore\'s established residential area'
  },
  {
    id: '5',
    areaName: 'JP Nagar',
    zones: 'JP Nagar, Jayanagar, Banashankari, BG Road',
    description: 'Trusted by 380K+ residents in South Bangalore\'s prime locality'
  },
  {
    id: '6',
    areaName: 'Bellandur',
    zones: 'Bellandur, Sarjapur, Varthur, Avni Tech Park',
    description: 'Serving 420K+ population in growing tech and residential hub'
  },
  {
    id: '7',
    areaName: 'Yeshwanthpur',
    zones: 'Yeshwanthpur, Hebbal, Rajajinagar, Sampangi Rama Nagar',
    description: 'Quick response for 360K+ residents in West Bangalore'
  },
  {
    id: '8',
    areaName: 'Bannerghatta Road',
    zones: 'Bannerghatta Road, Ejipura, Bilekahalli, Toorak',
    description: 'Complete coverage for 330K+ population in South-central Bangalore'
  }
]

const faqs = [
  {
    question: 'What areas do you cover in Bangalore?',
    answer: 'We serve 8 major high-population areas across Bangalore: Whitefield, Indiranagar, Electronic City, Malleshwaram, JP Nagar, Bellandur, Yeshwanthpur, and Bannerghatta Road. Combined population coverage exceeds 3+ million residents.'
  },
  {
    question: 'How quickly can you respond?',
    answer: 'We typically respond within 2-4 hours of booking. Same-day service available in most areas.'
  },
  {
    question: 'Do you provide warranty?',
    answer: 'Yes, all our repairs come with 1-year warranty on parts and workmanship.'
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Yes, all our technicians are factory-trained and certified by Elicaa.'
  }
]

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const faqSchema = generateFAQSchema(faqs)

  return (
    <main className="min-h-screen bg-background">
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={faqSchema} />
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

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
              <p className="text-sm text-muted-foreground">Authorized Elicaa service technicians</p>
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
              Complete Elicaa appliance repair and maintenance solutions for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
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
              Service Areas in Bangalore
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Rapid response across major Bangalore localities with same-day service options
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
                View All Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Why Choose Elicaa Repair?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional service you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-md">
              <img 
                src="/images/service-excellence.png" 
                alt="Professional Elicaa appliance repair technician providing expert service"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '⚡', title: 'Quick Response', desc: 'Same-day service available in most areas' },
                { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'Certified professionals with 10+ years experience' },
                { icon: '✅', title: 'Quality Guaranteed', desc: 'All repairs backed by 1-year warranty' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges, fixed rates for all services' },
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get instant booking with our online service scheduler. Choose your area and preferred time slot.
            </p>
          </div>

          <Link href="/booking">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
              Book Now - Fast & Easy
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
