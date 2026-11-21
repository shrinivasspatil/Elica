import Link from 'next/link'
import { getAllAreas, getAreaPath, getCrawlSeedAreas } from '@/lib/areas'

export function CoverageLinks({
  title = 'Elica repair across Bangalore',
}: {
  title?: string
}) {
  const seeds = getCrawlSeedAreas()
  const total = getAllAreas().length

  return (
    <nav aria-label="Bangalore service areas" className="space-y-3">
      <h2 className="text-2xl font-serif font-bold text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground">
        Chimney, hob and microwave repair in these Bangalore localities — open an area page for zones,
        response time, and booking.
      </p>
      <ul className="flex flex-wrap gap-2">
        {seeds.map((area) => (
          <li key={area.id}>
            <Link
              href={getAreaPath(area)}
              className="inline-block rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:border-primary hover:text-primary"
            >
              {area.areaName}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-sm">
        <Link href="/areas" className="text-primary hover:underline font-medium">
          All {total} Bangalore service areas
        </Link>
        {' · '}
        <Link href="/services/chimney-dismantle-cleaning" className="text-primary hover:underline">
          Chimney dismantle cleaning
        </Link>
        {' · '}
        <Link href="/guides/elica-chimney-cleaning-cost-bangalore" className="text-primary hover:underline">
          Chimney cleaning cost
        </Link>
      </p>
    </nav>
  )
}
