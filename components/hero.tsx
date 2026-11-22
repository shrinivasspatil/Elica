'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { openLeadModal } from '@/lib/lead-modal'

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100svh-4rem)] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid w-full md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance tracking-tight">
                Elica chimney service in Bangalore
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed text-pretty font-light">
                Expert technicians serving Bangalore with fast, reliable appliance repair and maintenance. Available across all major areas with same-day service options.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button 
                onClick={openLeadModal}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
              >
                Book Service Now
              </Button>
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
            <p className="pt-2 text-sm text-white/80">
              Bangalore · chimney, hob and microwave · call from the header. Not an invented customer count.
            </p>
          </div>

          {/* Right side - Hero image */}
          <div className="relative h-72 md:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
            <picture>
              <source srcSet="/images/hero-service.webp" type="image/webp" />
              <img
                src="/images/hero-service.jpg"
                alt="Professional Elica technician providing expert appliance repair service"
                className="w-full h-full object-cover"
                loading="eager"
                width={1600}
                height={1200}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
