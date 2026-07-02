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

export function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    service: '',
  })

  useEffect(() => {
    // Show modal after 3 seconds on page load
    const timer = setTimeout(() => {
      // Check if user has already submitted in this session
      if (!sessionStorage.getItem('elicaa_lead_submitted')) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative animate-in fade-in zoom-in-95">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground font-serif">Get Free Service Quote</h2>
                <p className="text-muted-foreground text-sm mt-2">Tell us your Elicaa appliance issue and we'll get back within 2 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
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
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Pincode Field */}
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-foreground mb-1">
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
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                    Elicaa Product / Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-6"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
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
