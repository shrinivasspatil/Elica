'use client'

import { useEffect } from 'react'
import { openLeadModal } from '@/lib/lead-modal'

/** Opens the quote popup in place — no page redirect. */
export function OpenLeadRedirect() {
  useEffect(() => {
    openLeadModal()
  }, [])

  return null
}
