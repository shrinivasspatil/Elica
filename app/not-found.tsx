import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">404 Error</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of the
            links below to find what you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Back to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </Link>
            <Link href="/areas">
              <Button size="lg" variant="outline">
                Service Centres
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
