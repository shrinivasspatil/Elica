import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>
}

const servicesData: Record<string, {
  id: string
  name: string
  description: string
  fullDescription: string
  price: string
  warranty: string
  icon: string
  features: string[]
  process: string[]
  faqs: { question: string; answer: string }[]
}> = {
  '1': {
    id: '1',
    name: 'Chimney Cleaning & Maintenance',
    description: 'Professional chimney cleaning and filter maintenance',
    fullDescription: 'Comprehensive chimney cleaning service including deep duct cleaning, filter replacement, and performance testing.',
    price: 'From ₹1,500',
    warranty: '1 Year',
    icon: '🔥',
    features: [
      'Deep duct cleaning and sanitization',
      'Filter replacement with genuine parts',
      'Grease trap cleaning',
      'Performance testing and optimization',
      'Odor elimination treatment',
      'Full inspection and maintenance'
    ],
    process: [
      'Initial inspection of chimney condition',
      'Cover surrounding area to prevent dust spread',
      'Deep cleaning of ducts and grease trap',
      'Replace filters if needed',
      'Run performance tests',
      'Final cleanup and restoration'
    ],
    faqs: [
      {
        question: 'How often should I get my chimney cleaned?',
        answer: 'We recommend chimney cleaning every 6-12 months depending on usage frequency.'
      },
      {
        question: 'What is included in the service?',
        answer: 'Full duct cleaning, filter replacement, grease trap cleaning, and performance testing.'
      },
      {
        question: 'Do you provide warranty?',
        answer: 'Yes, all our services come with 1-year warranty on parts and workmanship.'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Range Hood Installation',
    description: 'Expert installation of range hoods',
    fullDescription: 'Professional installation service for all types of range hoods with proper ductwork configuration.',
    price: 'From ₹3,000',
    warranty: '2 Years',
    icon: '⚙️',
    features: [
      'Complete installation with all hardware',
      'Proper ductwork configuration',
      'Electrical connection setup',
      'Performance testing',
      'Installation warranty included',
      'After-sales support'
    ],
    process: [
      'Site assessment and measurements',
      'Prepare mounting surface',
      'Install mounting brackets',
      'Connect ductwork',
      'Electrical connections',
      'Performance testing',
      'Cleanup and handover'
    ],
    faqs: [
      {
        question: 'Do you install all brands of range hoods?',
        answer: 'Yes, we install all major brands including Faber, Elica, Hindware, and more.'
      },
      {
        question: 'What about existing installation removal?',
        answer: 'We can remove old installations for an additional charge of ₹500-1000.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Typically 2-3 hours depending on complexity and existing ductwork.'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Hob Repair & Service',
    description: 'Gas and electric hob repairs',
    fullDescription: 'Complete hob repair service for both gas and electric models with genuine spare parts.',
    price: 'From ₹800',
    warranty: '1 Year',
    icon: '🍳',
    features: [
      'Knob replacement and repair',
      'Burner cleaning and maintenance',
      'Ignition system repair',
      'Surface cleaning and polishing',
      'Genuine Faber parts used',
      'Full functional testing'
    ],
    process: [
      'Diagnose the exact problem',
      'Order genuine replacement parts if needed',
      'Remove hob if necessary',
      'Replace faulty components',
      'Thoroughly clean all surfaces',
      'Test all burners',
      'Reinstall and finalize'
    ],
    faqs: [
      {
        question: 'Can you repair gas and electric hobs?',
        answer: 'Yes, we repair both gas and electric hobs with certified technicians.'
      },
      {
        question: 'How much does knob replacement cost?',
        answer: 'Knob replacement typically costs ₹400-600 including service charge.'
      },
      {
        question: 'What if the burner is damaged?',
        answer: 'We can replace individual burners. Cost ranges from ₹800-1500 depending on the model.'
      }
    ]
  },
  '4': {
    id: '4',
    name: 'Microwave Service',
    description: 'Microwave oven repair and maintenance',
    fullDescription: 'Expert microwave repair service with factory-trained technicians and genuine parts.',
    price: 'From ₹1,000',
    warranty: '1 Year',
    icon: '🌊',
    features: [
      'Magnetron replacement',
      'Door and latch repair',
      'Timer and control fixes',
      'Internal cleaning service',
      'Leakage detection and repair',
      'Full performance testing'
    ],
    process: [
      'Perform safety inspection',
      'Diagnose exact problem',
      'Disassemble microwave carefully',
      'Replace faulty components',
      'Clean interior thoroughly',
      'Safety testing',
      'Reassemble and test'
    ],
    faqs: [
      {
        question: 'Is it safe to repair microwaves?',
        answer: 'Yes, our technicians follow strict safety protocols and are fully trained.'
      },
      {
        question: 'What is the most common microwave problem?',
        answer: 'Magnetron failure is the most common, costing ₹2000-3000 to fix.'
      },
      {
        question: 'Can you fix door latch issues?',
        answer: 'Yes, door latch repair or replacement costs around ₹1000-1500.'
      }
    ]
  },
  '5': {
    id: '5',
    name: 'Dishwasher Repair',
    description: 'Dishwasher repair and maintenance',
    fullDescription: 'Complete dishwasher repair service including pump replacement, drain fixes, and maintenance.',
    price: 'From ₹1,200',
    warranty: '1 Year',
    icon: '🍽️',
    features: [
      'Pump and motor repair',
      'Spray arm cleaning',
      'Drain line unclogging',
      'Filter replacement',
      'Door seal repair',
      'Water inlet valve service'
    ],
    process: [
      'Diagnose drainage and performance issues',
      'Disassemble and inspect components',
      'Clean and replace filters',
      'Repair or replace faulty parts',
      'Test water inlet and outlet',
      'Run full cycle test',
      'Reassemble and finalize'
    ],
    faqs: [
      {
        question: 'Why is my dishwasher not draining?',
        answer: 'Usually caused by clogged drain lines or filter. We clean and fix this for ₹1000-1500.'
      },
      {
        question: 'Do you replace seals and gaskets?',
        answer: 'Yes, we replace all worn seals and gaskets. Cost is typically ₹500-800.'
      },
      {
        question: 'How long does repair usually take?',
        answer: 'Most repairs are completed within 2-3 hours.'
      }
    ]
  }
}

export async function generateMetadata(
  props: ServiceDetailPageProps
): Promise<Metadata> {
  const params = await props.params
  const service = servicesData[params.id]

  return {
    title: `${service.name} | Faber Repair & Service`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.name} | Faber Repair & Service`,
      description: service.fullDescription,
    },
  }
}

export default async function ServiceDetailPage(props: ServiceDetailPageProps) {
  const params = await props.params
  const service = servicesData[params.id]

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              {service.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Warranty */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Price</p>
              <p className="text-3xl font-bold text-accent">{service.price}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Warranty</p>
              <p className="text-3xl font-bold text-primary">{service.warranty}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-2xl text-accent flex-shrink-0">✓</div>
                <p className="text-foreground leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Our Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-semibold">
                  {idx + 1}
                </div>
                <p className="text-foreground font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="space-y-3 border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Need This Service?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Book now for quick and professional service in your area
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
              Book Service Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
