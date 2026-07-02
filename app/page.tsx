import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Testimonial } from '@/components/testimonial'
import { AreaCard } from '@/components/area-card'
import { Button } from '@/components/ui/button'
import { SchemaMarkup } from '@/components/schema-markup'
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/seo'
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
    text: 'Great experience with Faber repair service. They are punctual, knowledgeable, and transparent with pricing.',
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
    zones: 'Whitefield, Marathahalli, Sarjapur',
    description: 'Fast service coverage across entire Whitefield IT hub'
  },
  {
    id: '2',
    areaName: 'Indiranagar',
    zones: 'Indiranagar, Koramangala, HSR Layout',
    description: 'Comprehensive coverage in central Bangalore'
  },
  {
    id: '3',
    areaName: 'JP Nagar',
    zones: 'JP Nagar, Banashankari, South Bangalore',
    description: 'Reliable service in South Bangalore locality'
  },
  {
    id: '4',
    areaName: 'Hebbal',
    zones: 'Hebbal, Yelahanka, North Bangalore',
    description: 'Quick response in North Bangalore areas'
  }
]

const faqs = [
  {
    question: 'What areas do you cover in Bangalore?',
    answer: 'We cover all major areas in Bangalore including Whitefield, Indiranagar, Koramangala, JP Nagar, Hebbal, and more.'
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
    answer: 'Yes, all our technicians are factory-trained and certified by Faber.'
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
              <div className="text-4xl mb-4">📜</div>
              <h4 className="font-semibold text-foreground mb-2">GST Registered</h4>
              <p className="text-sm text-muted-foreground">Certified and tax-compliant business</p>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-semibold text-foreground mb-2">Factory Certified</h4>
              <p className="text-sm text-muted-foreground">Authorized Faber service technicians</p>
            </div>

            {/* Credential Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-semibold text-foreground mb-2">Warranty Honored</h4>
              <p className="text-sm text-muted-foreground">1-year warranty on all repairs</p>
            </div>

            {/* Credential Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-semibold text-foreground mb-2">Fully Insured</h4>
              <p className="text-sm text-muted-foreground">Professional liability coverage</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-sm text-muted-foreground">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
              <p className="text-sm text-muted-foreground">Bangalore Areas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Available Support</p>
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
              Complete Faber appliance repair and maintenance solutions for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
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
              Why Choose Faber Repair?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional service you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Quick Response', desc: 'Same-day service available in most areas' },
              { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'Certified professionals with 10+ years experience' },
              { icon: '✅', title: 'Quality Guaranteed', desc: 'All repairs backed by 1-year warranty' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges, fixed rates for all services' },
              { icon: '📞', title: '24/7 Support', desc: 'Always available when you need us' },
              { icon: '🎯', title: 'Area-wise Coverage', desc: 'Available across all major Bangalore localities' }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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
