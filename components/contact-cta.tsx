'use client'

import { Phone } from 'lucide-react'
import { BookNowButton } from '@/components/book-now-button'
import { trackEvent } from '@/lib/analytics'
import { siteConfig } from '@/lib/seo'
import { cn } from '@/lib/utils'

interface ContactCtaProps {
  className?: string
  quoteLabel?: string
  showWhatsApp?: boolean
}

export function ContactCta({
  className,
  quoteLabel = 'Get Free Quote',
  showWhatsApp = true,
}: ContactCtaProps) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a
        href={`tel:${siteConfig.phoneE164}`}
        onClick={() => trackEvent('phone_click', { location: 'contact_cta' })}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition"
      >
        <Phone size={16} />
        Call {siteConfig.phoneDisplay}
      </a>
      {showWhatsApp && (
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: 'contact_cta' })}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition"
        >
          WhatsApp
        </a>
      )}
      <BookNowButton
        label={quoteLabel}
        className="bg-primary hover:bg-primary/90"
      />
    </div>
  )
}
