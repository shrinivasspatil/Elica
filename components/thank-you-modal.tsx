'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  leadData?: {
    name: string
    phone: string
    pincode: string
    service: string
  }
}

const serviceLabels: Record<string, string> = {
  'chimney-cleaning': 'Chimney Cleaning & Maintenance',
  'range-hood': 'Range Hood Installation',
  'hob-repair': 'Hob Repair & Service',
  'microwave': 'Microwave Service',
  'dishwasher': 'Dishwasher Repair',
  'oven': 'Oven Service',
  'cooktop': 'Cooktop Repair',
  'exhaust-fan': 'Exhaust Fan Service',
}

export function ThankYouModal({ isOpen, onClose, leadData }: ThankYouModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  if (!isVisible) return null

  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in fade-in zoom-in">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your free quote request has been received successfully
            </p>

            {/* Details Section */}
            {leadData && (
              <div className="bg-secondary/30 rounded-lg p-4 mb-6 text-left space-y-3">
                <div className="border-b border-border pb-3">
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-semibold text-foreground">{leadData.name}</p>
                </div>

                <div className="border-b border-border pb-3">
                  <p className="text-sm text-muted-foreground mb-1">Phone Number</p>
                  <p className="font-semibold text-foreground">{leadData.phone}</p>
                </div>

                <div className="border-b border-border pb-3">
                  <p className="text-sm text-muted-foreground mb-1">Pincode</p>
                  <p className="font-semibold text-foreground">{leadData.pincode}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service Requested</p>
                  <p className="font-semibold text-foreground">
                    {serviceLabels[leadData.service] || leadData.service}
                  </p>
                </div>
              </div>
            )}

            {/* Info Section */}
            <div className="bg-primary/5 rounded-lg p-4 mb-6 space-y-3">
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Quick Response</p>
                  <p className="text-xs text-muted-foreground">We'll contact you within 2 hours</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Confirmation Sent</p>
                  <p className="text-xs text-muted-foreground">Check your phone for SMS updates</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleClose}
                variant="outline"
                className="flex-1"
              >
                Back to Home
              </Button>
              <Button
                onClick={() => {
                  window.location.href = '/booking'
                }}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Book Now
              </Button>
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground mt-4">
              Your information is secure and will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
