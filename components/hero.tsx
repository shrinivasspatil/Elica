'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-balance">
                Professional Elicaa Repair & Service
              </h1>
              <p className="text-xl text-white/90 leading-relaxed text-pretty">
                Expert technicians serving Bangalore with fast, reliable appliance repair and maintenance. Available across all major areas with same-day service options.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold">
                  Book Service Now
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/50 font-semibold"
                >
                  View Services
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex gap-6 pt-8 text-sm">
              <div>
                <div className="font-bold text-accent text-lg">10+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="font-bold text-accent text-lg">5000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div>
                <div className="font-bold text-accent text-lg">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right side - Illustration placeholder */}
          <div className="relative h-96 md:h-full min-h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <p className="text-white/70">Professional Service Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
