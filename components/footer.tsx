'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Faber Service</h3>
            <p className="text-sm opacity-90">
              Professional appliance repair and service across Bangalore with expert technicians and trusted service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="hover:opacity-75 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#areas" className="hover:opacity-75 transition">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:opacity-75 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-75 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-75 transition">
                  Chimney Repair
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-75 transition">
                  Hob Repair
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-75 transition">
                  Cooktop Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-75 transition">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:opacity-75 transition">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:support@faberservice.com" className="hover:opacity-75 transition">
                  support@faberservice.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2024 Faber Repair & Service. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-100 transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:opacity-100 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
