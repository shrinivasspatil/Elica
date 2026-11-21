'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  id: string
  name: string
  shortDescription?: string
  icon?: string
}

export function ServiceCard({ id, name, shortDescription, icon }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border/50 hover:border-accent/50">
        <div className="p-6 space-y-4 h-full flex flex-col">
          {icon && (
            <div className="text-4xl mb-2">
              {icon}
            </div>
          )}

          <h3 className="text-xl font-semibold text-foreground">
            {name}
          </h3>

          {shortDescription && (
            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
              {shortDescription}
            </p>
          )}

          <div className="flex items-center justify-end pt-4 border-t border-border/30">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary hover:bg-primary/10"
            >
              View Details →
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  )
}
