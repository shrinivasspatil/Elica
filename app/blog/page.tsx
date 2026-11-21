import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getAllGuides } from '@/lib/guides'
import { buildPageMetadata, siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata = buildPageMetadata({
  title: 'Parts counter notes',
  description: `Guides from ${siteConfig.name}.`,
  path: '/blog',
})

export default function ElicBlogHome() {
  const guides = getAllGuides()
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="overflow-hidden rounded border border-green-800">
          <div className="bg-green-800 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">Parts counter</div>
          <div className="bg-green-50 p-6">
            <h1 className="text-3xl font-serif font-bold">Blog</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Same guides as /guides, in the parts-counter layout. Written by {siteConfig.name} (Organization).
            </p>
            <p className="mt-2 text-sm">
              <Link href="/blog/archive" className="underline">
                Archive
              </Link>
            </p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {guides.map((guide) => (
                <li key={guide.slug} className="border border-green-200 bg-white p-3">
                  <Link href={`/blog/${guide.slug}`} className="font-medium underline">
                    {guide.title}
                  </Link>
                  <p className="text-xs text-muted-foreground">{guide.publishedAt}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
