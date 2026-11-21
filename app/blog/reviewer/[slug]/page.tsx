import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { REVIEWERS, ALL_PEOPLE, personBySlug, personPath } from '@/lib/blog-people'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return REVIEWERS.map((person) => ({ slug: person.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const person = personBySlug('reviewer', slug)
  if (!person) notFound()
  return (
    <main>
      <Navigation />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <Link href="/blog">Blog</Link>
        <div className="mt-4 flex items-center gap-4">
          <Image src={person.image} alt={person.name} width={72} height={72} className="h-[72px] w-[72px] rounded-full object-cover" />
          <div>
            <h1 className="text-3xl font-serif font-bold">{person.name}</h1>
            <p>{person.role}</p>
          </div>
        </div>
        <p className="mt-4">{person.bio}</p>
        <ul className="mt-4 list-disc pl-5">
          {ALL_PEOPLE.filter((item) => item.kind === person.kind && item.slug !== person.slug).map((item) => (
            <li key={item.slug}><Link href={personPath(item)}>{item.name}</Link></li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  )
}
