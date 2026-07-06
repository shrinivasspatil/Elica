'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ThankYouModal } from './thank-you-modal'
import { X } from 'lucide-react'

const ELICAA_SERVICES = [
  { id: 'chimney-cleaning', label: 'Chimney Cleaning & Maintenance' },
  { id: 'range-hood', label: 'Range Hood Installation & Service' },
  { id: 'hob-repair', label: 'Hob Repair & Service' },
  { id: 'microwave', label: 'Microwave Service' },
  { id: 'dishwasher', label: 'Dishwasher Repair' },
  { id: 'oven', label: 'Oven Service' },
  { id: 'cooktop', label: 'Cooktop Repair' },
  { id: 'exhaust-fan', label: 'Exhaust Fan Installation' },
]

interface LeadCaptureModalProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function LeadCaptureModal({ isOpen: externalIsOpen, onOpenChange }: LeadCaptureModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    service: '',
  })

  // Use external isOpen if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  
  const setIsOpen = (value: boolean) => {
    if (externalIsOpen !== undefined) {
      onOpenChange?.(value)
    } else {
      setInternalIsOpen(value)
    }
  }

  // Show form on page load after 2 seconds (attractive onload form)
  useEffect(() => {
    // Only show if using internal state (not controlled by parent)
    if (externalIsOpen === undefined) {
      const timer = setTimeout(() => {
        if (!sessionStorage.getItem('elicaa_lead_submitted')) {
          setInternalIsOpen(true)
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [externalIsOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.pincode || !formData.service) {
      alert('Please fill all fields')
      return
    }

    // Validate phone (Indian phone number)
    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Please enter valid 10-digit phone number')
      return
    }

    setIsSubmitting(true)
    try {
      // Submit to server action
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        sessionStorage.setItem('elicaa_lead_submitted', 'true')
        setSubmittedData(formData)
        setIsOpen(false)
        setShowThankYou(true)
        setFormData({ name: '', phone: '', pincode: '', service: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="sticky top-4 right-4 text-muted-foreground hover:text-foreground z-10 bg-background rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Attractive Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-2">Get Free Service Quote</h2>
              <p className="text-blue-100 text-sm sm:text-base">Tell us your Elicaa appliance issue and we'll get back within 2 hours</p>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6">
              <div className="mb-4 bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-900 flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  <span><strong>No Hidden Charges</strong> - 100% Free Quote</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base sm:text-sm"
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    maxLength={10}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base sm:text-sm"
                    required
                    autoComplete="tel"
                    inputMode="numeric"
                  />
                </div>

                {/* Pincode Field */}
                <div>
                  <label htmlFor="pincode" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="560001"
                    maxLength={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base sm:text-sm"
                    required
                    inputMode="numeric"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Elicaa Product / Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base sm:text-sm"
                    required
                  >
                    <option value="">Select service needed</option>
                    {ELICAA_SERVICES.map(service => (
                      <option key={service.id} value={service.id}>{service.label}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-6 py-3 text-base h-auto"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  We respect your privacy. No spam guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        leadData={submittedData}
      />
    </>
  )
}
