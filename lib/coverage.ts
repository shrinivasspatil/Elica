/** Sitewide crawl seeds — linked from indexed templates (footer, home, services). */
export const FOOTER_AREA_LINKS: Array<{ name: string; href: string }> = [
  { name: 'Whitefield', href: '/areas/whitefield' },
  { name: 'HSR Layout', href: '/areas/hsr-layout' },
  { name: 'Koramangala', href: '/areas/koramangala' },
  { name: 'Hebbal', href: '/areas/hebbal' },
  { name: 'Jayanagar', href: '/areas/jayanagar' },
  { name: 'Yelahanka', href: '/areas/yelahanka' },
  { name: 'RR Nagar', href: '/areas/rr-nagar' },
  { name: 'Malleshwaram', href: '/areas/malleshwaram' },
  { name: 'Yeshwanthpur', href: '/areas/yeshwanthpur' },
  { name: 'Bommanahalli', href: '/areas/bommanahalli' },
  { name: 'Sarjapur Road', href: '/areas/sarjapur-road' },
  { name: 'Banashankari', href: '/areas/banashankari' },
]

export const CRAWL_SEED_SLUGS = [
  'whitefield',
  'indiranagar',
  'electronic-city',
  'malleshwaram',
  'jp-nagar',
  'bellandur',
  'yeshwanthpur',
  'bannerghatta-road',
  'hsr-layout',
  'koramangala',
  'hebbal',
  'jayanagar',
  'yelahanka',
  'rr-nagar',
  'bommanahalli',
  'sarjapur-road',
  'banashankari',
  'marathahalli',
  'rajajinagar',
  'kengeri',
  'thanisandra',
  'varthur',
  'kammanahalli',
  'bagalur',
  'abbigere',
  'adugodi',
  'arekere',
  'hebbagodi',
  'kalyan-nagar',
  'jalahalli',
] as const

export const CORRIDOR_INTROS: Record<string, string> = {
  Central:
    'Central Bangalore coverage for older apartments and independent homes around the CBD grid.',
  'Central-North':
    'North of the CBD — compact layouts with shorter technician travel between neighbouring localities.',
  'Central-South':
    'South of the CBD including Koramangala-side blocks where same-day chimney and hob slots are common.',
  'Central-East':
    'Ulsoor, Domlur, Frazer Town and Old Airport Road kitchens with 1.5–3 hour typical response.',
  North:
    'Hebbal, Yelahanka, RT Nagar and Manyata-adjacent homes along the north arterial.',
  'North-East':
    'Hennur, Kalyan Nagar, Banaswadi and Horamavu layouts with apartment-heavy kitchen service.',
  'North-West':
    'Yeshwanthpur, Peenya and Jalahalli homes around industrial-adjacent residential pockets.',
  East:
    'Whitefield, Marathahalli, Hoodi, KR Puram and ORR tech-park apartments.',
  West:
    'Rajajinagar, Vijayanagar, RR Nagar and Mysore Road / Magadi Road residential belts.',
  South:
    'Jayanagar, JP Nagar, BTM, Bannerghatta Road and Kanakapura Road family kitchens.',
  'South-East':
    'HSR, Sarjapur Road, Bommanahalli and Hosur Road corridor apartments.',
  'South-West':
    'Banashankari, Kengeri, Uttarahalli and Mysore Road satellite-town homes.',
}
