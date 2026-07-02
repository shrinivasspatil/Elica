'use client'

import { Card } from '@/components/ui/card'

interface TestimonialProps {
  name: string
  text: string
  rating: number
  areaName?: string
}

export function Testimonial({ name, text, rating, areaName }: TestimonialProps) {
  return (
    <Card className="p-6 border-border/50 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i}
              className={`text-lg ${i < rating ? 'text-accent' : 'text-muted'}`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Text */}
        <p className="text-foreground leading-relaxed italic">
          &quot;{text}&quot;
        </p>

        {/* Author */}
        <div className="border-t border-border/30 pt-4 flex justify-between items-start">
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            {areaName && (
              <p className="text-xs text-muted-foreground">{areaName}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
