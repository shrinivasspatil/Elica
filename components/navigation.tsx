'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="font-serif font-bold text-lg text-primary hidden sm:inline">
              Elicaa Service
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="#areas" className="text-foreground hover:text-primary transition">
              Service Areas
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition">
              About Us
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
            <Link
              href="#book"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md">
              Services
            </Link>
            <Link href="#areas" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md">
              Service Areas
            </Link>
            <Link href="#about" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md">
              About Us
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md">
              Contact
            </Link>
            <Link href="#book" className="block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition">
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
