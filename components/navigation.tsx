'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { openLeadModal } from '@/lib/lead-modal'
import { trackEvent } from '@/lib/analytics'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Service Centres' },
  { href: '/guides', label: 'Guides' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBookNow = () => {
    openLeadModal()
    setIsOpen(false)
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-serif font-bold text-lg leading-none">E</span>
            </div>
            <span className="font-serif font-bold text-lg text-primary hidden sm:inline">
              Elica
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              onClick={() => trackEvent('phone_click', { location: 'nav_desktop' })}
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition font-medium"
            >
              <Phone size={16} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={handleBookNow}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition"
            >
              Get Free Quote
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              onClick={() => trackEvent('phone_click', { location: 'nav_mobile' })}
              className="inline-flex items-center justify-center rounded-md bg-accent text-foreground px-3 py-2 text-sm font-semibold"
              aria-label={`Call ${siteConfig.phoneDisplay}`}
            >
              <Phone size={16} className="mr-1.5" />
              Call
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-secondary rounded-md transition"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md font-medium"
              onClick={closeMenu}
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={handleBookNow}
              className="w-full text-left px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
            >
              Get Free Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
