import Link from 'next/link'

export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g)
  return (
    <p className={className}>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/)
        if (!match) return <span key={index}>{part}</span>
        return (
          <Link
            key={index}
            href={match[1]}
            className="text-primary underline decoration-primary/30 underline-offset-[3px] hover:decoration-primary"
          >
            {match[2]}
          </Link>
        )
      })}
    </p>
  )
}
