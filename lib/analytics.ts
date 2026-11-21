declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Fire a GA4 custom event when gtag is available */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}
