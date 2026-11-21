'use client'

import { Button } from '@/components/ui/button'
import { openLeadModal } from '@/lib/lead-modal'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof Button>

interface BookNowButtonProps extends Omit<ButtonProps, 'onClick'> {
  label?: string
}

export function BookNowButton({
  label = 'Book Now',
  className,
  type = 'button',
  ...props
}: BookNowButtonProps) {
  return (
    <Button
      type={type}
      className={cn(className)}
      onClick={openLeadModal}
      {...props}
    >
      {label}
    </Button>
  )
}
