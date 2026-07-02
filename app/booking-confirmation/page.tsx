import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BookingConfirmationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Success Icon */}
            <div className="space-y-4">
              <div className="text-7xl">✓</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Booking Confirmed!
              </h1>
            </div>

            {/* Message */}
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Thank you for booking with us. We have received your service request.
              </p>
              <p>
                Our team will contact you within 2 hours to confirm the exact time and provide any additional details.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-secondary/50 border border-border rounded-lg p-8 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">What&apos;s Next?</h2>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>Check your email and phone for confirmation message</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>Our technician will arrive at your location on the scheduled time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>Service will be completed with quality guarantee and warranty</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View All Services
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border space-y-4">
              <p className="text-sm text-muted-foreground">
                Have questions? Contact us:
              </p>
              <div className="flex gap-6 justify-center flex-wrap">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-primary hover:underline">
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:support@faberrepair.com" className="flex items-center gap-2 text-primary hover:underline">
                  <span>📧</span>
                  <span>support@faberrepair.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
