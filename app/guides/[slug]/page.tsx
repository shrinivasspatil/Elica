import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SchemaMarkup } from '@/components/schema-markup'
import { RichText } from '@/components/rich-text'
import { creditsForIndex, personPath, type BlogPerson } from '@/lib/blog-people'
import { formatGuideDate, getAllGuides, getGuideBySlug, guidePosts, relatedGuides } from '@/lib/guides'
import { getServiceById } from '@/lib/services'
import {
  absoluteUrl,
  buildPageMetadata,
  generateBreadcrumbSchema,
  siteConfig,
} from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface GuideDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata(
  props: GuideDetailPageProps
): Promise<Metadata> {
  const params = await props.params
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    return buildPageMetadata({
      title: 'Guide Not Found',
      description: 'The requested kitchen care guide was not found.',
      path: `/guides/${params.slug}`,
      noIndex: true,
    })
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  })
}

function PersonPhoto({ person, size = 48 }: { person: BlogPerson; size?: number }) {
  return (
    <Image
      src={person.image}
      alt={person.name}
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  )
}

export default async function GuideDetailPage(props: GuideDetailPageProps) {
  const params = await props.params
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  const relatedServices = guide.relatedServiceIds
    .map((id) => getServiceById(id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))

  const credits = creditsForIndex(guidePosts.findIndex((item) => item.slug === guide.slug))
  const people = [
    { person: credits.author, label: 'Author' },
    { person: credits.reviewer, label: 'Reviewer' },
    { person: credits.verified, label: 'Verified' },
  ]
  const heroImage = guide.image || '/images/hero-service.jpg'
  const modified = guide.updatedAt || guide.publishedAt
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: guide.title,
    description: guide.excerpt,
    image: absoluteUrl(heroImage),
    datePublished: guide.publishedAt,
    dateModified: modified,
    author: {
      '@type': 'Person',
      name: credits.author.name,
      url: absoluteUrl(personPath(credits.author)),
    },
    editor: {
      '@type': 'Person',
      name: credits.reviewer.name,
      url: absoluteUrl(personPath(credits.reviewer)),
    },
    contributor: {
      '@type': 'Person',
      name: credits.verified.name,
      url: absoluteUrl(personPath(credits.verified)),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
    keywords: guide.keywords.join(', '),
  }

  return (
    <main className="min-h-screen bg-white">
      <SchemaMarkup
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Guides', url: '/guides' },
            { name: guide.title, url: `/guides/${guide.slug}` },
          ]),
          articleSchema,
        ]}
      />
      <Navigation />

      <article className="mx-auto w-full max-w-[40rem] px-5 pt-12 pb-16">
        <nav className="text-[13px] text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/guides" className="hover:text-primary">Guides</Link>
        </nav>
        <h1 className="mt-6 text-[2rem] font-semibold leading-[1.2] tracking-tight text-foreground md:text-[2.35rem]">
          {guide.title}
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-muted-foreground">{guide.introduction}</p>
        <p className="mt-4 text-[13px] text-muted-foreground">
          {formatGuideDate(guide.publishedAt)}
          {guide.updatedAt && guide.updatedAt !== guide.publishedAt
            ? ` · Updated ${formatGuideDate(guide.updatedAt)}`
            : ''}{' '}
          · {guide.readTime} read
        </p>
        <div className="mt-5 flex flex-col gap-3 border-y border-border py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          {people.map(({ person, label }) => (
            <Link key={person.slug} href={personPath(person)} className="inline-flex items-center gap-2 text-[13px] hover:text-primary">
              <PersonPhoto person={person} size={36} />
              <span>
                <span className="text-muted-foreground">{label === 'Author' ? 'By' : label} </span>
                <span className="font-medium text-foreground">{person.name}</span>
              </span>
            </Link>
          ))}
        </div>

        <figure className="mt-8">
          <Image
            src={heroImage}
            alt={`${guide.title} — ${siteConfig.name} kitchen service`}
            width={800}
            height={450}
            className="aspect-[16/9] w-full object-cover bg-secondary/40"
            priority
          />
        </figure>

        <div className="mt-10 space-y-9">
          {guide.sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-[1.35rem] font-semibold leading-snug tracking-tight text-foreground">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.body.map((paragraph) => (
                  <RichText key={paragraph} text={paragraph} className="text-[17px] leading-[1.8] text-muted-foreground" />
                ))}
              </div>
              {index === 1 && guide.inlineImage ? (
                <figure className="mt-8">
                  <Image
                    src={guide.inlineImage.src}
                    alt={guide.inlineImage.alt}
                    width={800}
                    height={450}
                    className="aspect-[16/9] w-full object-cover bg-secondary/40"
                  />
                </figure>
              ) : null}
            </section>
          ))}
          <section>
            <h2 className="text-[1.35rem] font-semibold leading-snug tracking-tight text-foreground">Where this work is booked</h2>
            <div className="mt-3 space-y-4">
              <RichText
                className="text-[17px] leading-[1.8] text-muted-foreground"
                text={
                  relatedServices.length
                    ? `Book ${relatedServices.map((service) => `[[/services/${service.id}|${service.name}]]`).join(' or ')} from the published menu. Local pages include [[/areas/whitefield|Whitefield]], [[/areas/indiranagar|Indiranagar]] and [[/areas/koramangala|Koramangala]] — full list on [[/areas|areas]].`
                    : `Coverage is the published [[/areas|areas]] list, including [[/areas/whitefield|Whitefield]] and [[/areas/indiranagar|Indiranagar]].`
                }
              />
            </div>
          </section>
        </div>

        <section className="mt-12 border-t border-border pt-10" aria-label="Related">
          <h2 className="text-[1.35rem] font-semibold tracking-tight">Keep reading</h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {relatedGuides(guide, 4).map((item) => {
                const itemPeople = creditsForIndex(guidePosts.findIndex((row) => row.slug === item.slug))
                return (
                  <li key={item.slug}>
                    <Link href={`/guides/${item.slug}`} className="group block">
                      <Image
                        src={item.image || '/images/hero-service.jpg'}
                        alt=""
                        width={640}
                        height={360}
                        className="aspect-[16/10] w-full object-cover bg-secondary/40"
                      />
                      <h3 className="mt-3 text-[16px] font-semibold leading-snug text-foreground group-hover:text-primary">{item.title}</h3>
                      <p className="mt-1 text-[13px] text-muted-foreground">{itemPeople.author.name}</p>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </section>

        <p className="mt-12 border-t border-border pt-6 text-[13px] leading-6 text-muted-foreground">
          {siteConfig.name}
        </p>
      </article>

      <Footer />
    </main>
  )
}
