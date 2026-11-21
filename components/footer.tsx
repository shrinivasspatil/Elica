'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { openLeadModal } from '@/lib/lead-modal'
import { siteConfig } from '@/lib/seo'
import { FOOTER_AREA_LINKS } from '@/lib/coverage'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Elica Repair & Service</h3>
            <p className="text-sm opacity-90">
              Professional appliance repair and service across Bangalore with expert technicians and trusted service.
            </p>
            <p className="text-sm opacity-90 mt-3">{siteConfig.napDisplay}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:opacity-75 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:opacity-75 transition">
                  Service Centres
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:opacity-75 transition">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-75 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openLeadModal}
                  className="hover:opacity-75 transition text-left"
                >
                  Book Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/chimney-deep-cleaning" className="hover:opacity-75 transition">
                  Chimney Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/gas-hob-service" className="hover:opacity-75 transition">
                  Gas Hob Service
                </Link>
              </li>
              <li>
                <Link href="/services/built-in-microwave-service" className="hover:opacity-75 transition">
                  Built-in Microwave
                </Link>
              </li>
              <li>
                <Link href="/services/hob-cleaning" className="hover:opacity-75 transition">
                  Hob Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-dismantle-cleaning" className="hover:opacity-75 transition">
                  Chimney Dismantle Cleaning
                </Link>
              </li>
              <li>
                <Link href="/guides/elica-chimney-cleaning-cost-bangalore" className="hover:opacity-75 transition">
                  Chimney Cleaning Cost
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-75 transition">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href={`tel:${siteConfig.phoneE164}`} className="hover:opacity-75 transition block">
                    {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition block"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:opacity-75 transition">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{siteConfig.addressDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-bold mb-3">Popular areas</h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {FOOTER_AREA_LINKS.map((area) => (
              <li key={area.href}>
                <Link href={area.href} className="hover:opacity-75 transition">
                  {area.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className="hover:opacity-75 transition">
                All areas
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Elica Repair & Service. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:opacity-100 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
