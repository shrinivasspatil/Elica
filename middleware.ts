import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AREA_ID_SLUGS } from '@/lib/area-id-slugs'

const APEX_ORIGIN = 'https://elicservicecenter.com'

function isWwwHost(host: string): boolean {
  return host === 'www.elicservicecenter.com' || host.startsWith('www.elicservicecenter.com:')
}

function apexUrl(pathname: string, search = ''): URL {
  return new URL(`${pathname}${search}`, APEX_ORIGIN)
}

/**
 * One-hop 301s so Google does not keep intermediate URLs in "Page with redirect":
 * /areas/11 and www/areas/11 → /areas/marathahalli
 * www/* → apex/*
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host')?.toLowerCase() || ''

  const numericArea = url.pathname.match(/^\/areas\/(\d+)\/?$/)
  if (numericArea) {
    const slug = AREA_ID_SLUGS[numericArea[1]]
    if (slug) {
      return NextResponse.redirect(apexUrl(`/areas/${slug}`), 301)
    }
  }

  if (isWwwHost(host)) {
    return NextResponse.redirect(apexUrl(url.pathname, url.search), 301)
  }

  if (url.pathname === '/services' && url.searchParams.has('q')) {
    return NextResponse.redirect(apexUrl('/services'), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpe?g|gif|webp|svg|ico|woff2?)$).*)',
  ],
}
