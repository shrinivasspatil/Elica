import { permanentRedirect, notFound } from 'next/navigation'
import { getAllGuides, getGuideBySlug } from '@/lib/guides'

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }))
}

export default async function ElicBlogAlias({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getGuideBySlug(slug)) notFound()
  permanentRedirect(`/guides/${slug}`)
}
