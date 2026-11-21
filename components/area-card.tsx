'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getBranchName, getAreaSlug } from '@/lib/areas'

interface AreaCardProps {
  id?: string
  areaName: string
  zones?: string
  description?: string
}

export function AreaCard({ areaName, zones, description }: AreaCardProps) {
  const branchName = getBranchName(areaName)
  const href = `/areas/${getAreaSlug(areaName)}`

  return (
    <Link href={href}>
      <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-accent/50 group">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {branchName}
          </h3>

          {zones && (
            <p className="text-sm text-muted-foreground">
              {zones}
            </p>
          )}

          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}

          <Button 
            variant="ghost" 
            size="sm"
            className="mt-4 text-accent hover:text-accent hover:bg-accent/10"
          >
            View branch →
          </Button>
        </div>
      </Card>
    </Link>
  )
}
