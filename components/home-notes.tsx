import Image from 'next/image'
import Link from 'next/link'
import { getAllGuides } from '@/lib/guides'

export function HomeNotes() {
  const notes = getAllGuides().slice(0, 6)
  if (!notes.length) return null
  return (
    <section className="border-y border-border bg-white py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[1.65rem] font-semibold tracking-tight">Guides</h2>
            <p className="mt-2 max-w-xl text-[16px] leading-7 text-muted-foreground">
              Kitchen service notes with links to published services and areas.
            </p>
          </div>
          <Link href="/guides" className="text-[15px] font-medium text-primary hover:underline">
            All guides
          </Link>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`} className="group block">
                <Image
                  src={guide.image || '/images/hero-service.jpg'}
                  alt=""
                  width={640}
                  height={360}
                  className="aspect-[16/10] w-full object-cover bg-secondary/40"
                />
                <h3 className="mt-3 text-[16px] font-semibold leading-snug group-hover:text-primary">
                  {guide.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[14px] leading-6 text-muted-foreground">{guide.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
