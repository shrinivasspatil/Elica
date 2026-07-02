'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { submitBooking } from '@/app/actions/bookings'
import { useRouter } from 'next/navigation'

const services = [
  { id: '1', name: 'Chimney Cleaning & Maintenance' },
  { id: '2', name: 'Range Hood Installation' },
  { id: '3', name: 'Hob Repair & Service' },
  { id: '4', name: 'Microwave Service' },
  { id: '5', name: 'Dishwasher Repair' },
  { id: '6', name: 'Oven Repair & Cleaning' },
  { id: '7', name: 'Cooktop Maintenance' },
  { id: '8', name: 'Emergency Service' }
]

const areas = [
  { id: '1', name: 'Whitefield' },
  { id: '2', name: 'Indiranagar' },
  { id: '3', name: 'JP Nagar' },
  { id: '4', name: 'Hebbal' },
  { id: '5', name: 'Koramangala' },
  { id: '6', name: 'Marathahalli' },
  { id: '7', name: 'HSR Layout' },
  { id: '8', name: 'Banashankari' }
]

export function BookingForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      customerName: formData.get('name') as string,
      customerEmail: formData.get('email') as string,
      customerPhone: formData.get('phone') as string,
      serviceId: formData.get('service') as string,
      areaId: formData.get('area') as string,
      address: formData.get('address') as string,
      preferredDate: formData.get('date') as string,
      preferredTime: formData.get('time') as string,
      notes: formData.get('notes') as string,
    }

    try {
      const result = await submitBooking(data)
      
      if (result.success) {
        setSuccess(true)
        setTimeout(() => router.push('/booking-confirmation'), 2000)
      } else {
        setError(result.error || 'Failed to submit booking')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.log('[v0] Booking error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center space-y-4 p-8 bg-green-50 border border-green-200 rounded-lg">
        <div className="text-4xl">✓</div>
        <p className="text-lg font-semibold text-green-900">Booking submitted successfully!</p>
        <p className="text-green-700">Redirecting to confirmation page...</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-foreground">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-semibold text-foreground">
            Select Service
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Choose a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Area Selection */}
        <div className="space-y-2">
          <label htmlFor="area" className="block text-sm font-semibold text-foreground">
            Select Service Area
          </label>
          <select
            id="area"
            name="area"
            required
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Choose an area</option>
            {areas.map(area => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-semibold text-foreground">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-semibold text-foreground">
            Preferred Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-semibold text-foreground">
          Complete Address
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={3}
          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your complete address with building number, street name, etc."
        />
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-semibold text-foreground">
          Additional Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Any additional information about your service request"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
      >
        {isLoading ? 'Submitting...' : 'Submit Booking Request'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We will contact you within 2 hours to confirm your booking
      </p>
    </form>
  )
}
