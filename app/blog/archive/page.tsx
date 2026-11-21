import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getAllGuides } from '@/lib/guides'
import { buildPageMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata = buildPageMetadata({
  title: 'Guide archive',
  description: 'Dated kitchen-care guides.',
  path: '/blog/archive',
})

export default function ElicArchive() {
  const guides = [...getAllGuides()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="border border-green-800 p-6">
          <h1 className="text-2xl font-serif font-bold">Archive</h1>
          <Link href="/blog" className="text-sm underline">
            Blog home
          </Link>
          <ul className="mt-4 space-y-2 text-sm">
            {guides.map((guide) => (
              <li key={guide.slug}>
                {guide.publishedAt} — <Link href={`/blog/${guide.slug}`}>{guide.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
