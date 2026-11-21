const UTM_STORAGE_KEY = 'elica_utm_attribution'

export type LeadAttribution = {
  sourceLabel: string
  pageUrl: string
  pagePath: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  gclid: string
}

function clean(value: string | null | undefined): string {
  return (value || '').trim().slice(0, 200)
}

function classifySource(params: {
  utmSource: string
  utmMedium: string
  gclid: string
}): string {
  const source = params.utmSource.toLowerCase()
  const medium = params.utmMedium.toLowerCase()

  if (
    params.gclid ||
    medium === 'cpc' ||
    medium === 'ppc' ||
    medium === 'paid' ||
    medium === 'paidsearch' ||
    (source === 'google' && (medium === 'cpc' || medium === 'ppc' || medium === 'ads'))
  ) {
    return 'Google Ads'
  }

  if (!source && !medium && !params.gclid) {
    return 'Organic / Direct'
  }

  if (source === 'google' && (medium === 'organic' || medium === '')) {
    return 'Organic (Google)'
  }

  if (source) {
    return medium ? `${source} / ${medium}` : source
  }

  return medium || 'Unknown'
}

/** Capture UTM/gclid from the current URL and keep them for the session. */
export function captureLeadAttribution(): void {
  if (typeof window === 'undefined') return

  try {
    const params = new URLSearchParams(window.location.search)
    const incoming = {
      utmSource: clean(params.get('utm_source')),
      utmMedium: clean(params.get('utm_medium')),
      utmCampaign: clean(params.get('utm_campaign')),
      utmTerm: clean(params.get('utm_term')),
      utmContent: clean(params.get('utm_content')),
      gclid: clean(params.get('gclid')),
    }

    const hasIncoming = Object.values(incoming).some(Boolean)
    if (!hasIncoming) return

    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(incoming))
  } catch {
    // ignore storage errors
  }
}

function readStoredUtm() {
  if (typeof window === 'undefined') {
    return {
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
      utmTerm: '',
      utmContent: '',
      gclid: '',
    }
  }

  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, string>
      return {
        utmSource: clean(parsed.utmSource),
        utmMedium: clean(parsed.utmMedium),
        utmCampaign: clean(parsed.utmCampaign),
        utmTerm: clean(parsed.utmTerm),
        utmContent: clean(parsed.utmContent),
        gclid: clean(parsed.gclid),
      }
    }
  } catch {
    // ignore
  }

  // Fallback: read from current URL if storage empty
  const params = new URLSearchParams(window.location.search)
  return {
    utmSource: clean(params.get('utm_source')),
    utmMedium: clean(params.get('utm_medium')),
    utmCampaign: clean(params.get('utm_campaign')),
    utmTerm: clean(params.get('utm_term')),
    utmContent: clean(params.get('utm_content')),
    gclid: clean(params.get('gclid')),
  }
}

/** Build attribution payload at submit time (page + stored UTMs). */
export function getLeadAttribution(): LeadAttribution {
  if (typeof window === 'undefined') {
    return {
      sourceLabel: 'Unknown',
      pageUrl: '',
      pagePath: '',
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
      utmTerm: '',
      utmContent: '',
      gclid: '',
    }
  }

  const stored = readStoredUtm()
  const pageUrl = window.location.href
  const pagePath = `${window.location.pathname}${window.location.search}`

  return {
    sourceLabel: classifySource(stored),
    pageUrl,
    pagePath,
    ...stored,
  }
}
