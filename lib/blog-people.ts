import { siteConfig } from '@/lib/seo'

export type PersonKind = 'author' | 'reviewer' | 'verified'
export type BlogPerson = { slug: string; name: string; role: string; kind: PersonKind; bio: string; image: string }

function row(kind: PersonKind, slug: string, name: string, role: string, line: string): BlogPerson {
  return {
    slug,
    name,
    role,
    kind,
    image: `/images/people/${slug}.jpg`,
    bio: `${name} sits on the ${siteConfig.name} ${role.toLowerCase()} desk. ${line}`,
  }
}

export const AUTHORS: BlogPerson[] = [
  row('author', 'vijay-kumar', 'Vijay Kumar', 'Parts-counter author', 'He writes chimney-cleaning cost notes from the published rates.'),
  row('author', 'smita-nair', 'Smita Nair', 'Booking author', 'She covers how to book Elica service in Bangalore.'),
  row('author', 'rakesh-gowda', 'Rakesh Gowda', 'Dismantle author', 'He writes when dismantle cleaning is the next step.'),
  row('author', 'aisha-rahman', 'Aisha Rahman', 'Monsoon author', 'She covers kitchen-care in the monsoon checklist.'),
  row('author', 'tejas-bhat', 'Tejas Bhat', 'Hob author', 'He explains gas hob flame faults from the guides set.'),
]
export const REVIEWERS: BlogPerson[] = [
  row('reviewer', 'nirmala-rao', 'Nirmala Rao', 'Parts reviewer', 'She checks a guide does not invent a shopfront.'),
  row('reviewer', 'sanjay-pillai', 'Sanjay Pillai', 'Rate reviewer', 'He reviews starting prices against the live service pages.'),
  row('reviewer', 'keerthi-shetty', 'Keerthi Shetty', 'Area reviewer', 'She reviews locality links against published areas.'),
  row('reviewer', 'omar-farooq', 'Omar Farooq', 'Service reviewer', 'He checks related service IDs still resolve.'),
  row('reviewer', 'lavanya-iyer', 'Lavanya Iyer', 'NAP reviewer', 'She matches Bangalore NAP copy on the guide.'),
]
export const VERIFIED: BlogPerson[] = [
  row('verified', 'pramod-hegde', 'Pramod Hegde', 'NAP verifier', `He checks ${siteConfig.napDisplay}.`),
  row('verified', 'chitra-menon', 'Chitra Menon', 'Phone verifier', 'She confirms the header phone.'),
  row('verified', 'dinesh-reddy', 'Dinesh Reddy', 'Hours verifier', 'He checks contact hours on the live site.'),
  row('verified', 'bindu-das', 'Bindu Das', 'Guide verifier', 'She confirms /guides slugs still 200.'),
  row('verified', 'yusuf-khan', 'Yusuf Khan', 'Schema verifier', 'He checks Organization publisher stays on the page.'),
]
export const ALL_PEOPLE = [...AUTHORS, ...REVIEWERS, ...VERIFIED]
export function personBySlug(kind: PersonKind, slug: string) {
  return ALL_PEOPLE.find((item) => item.kind === kind && item.slug === slug) ?? null
}
export function personPath(person: BlogPerson) {
  return `/blog/${person.kind}/${person.slug}`
}

export function creditsForIndex(index: number) {
  return {
    author: AUTHORS[index % AUTHORS.length],
    reviewer: REVIEWERS[index % REVIEWERS.length],
    verified: VERIFIED[index % VERIFIED.length],
  }
}
