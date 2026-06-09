import { Check } from 'lucide-react'
import { Section } from '@/components/shared/section'
import { Reveal } from '@/components/shared/reveal'

interface ProductOverviewProps {
  title: string
  body: string
  highlights: string[]
}

export function ProductOverview({ title, body, highlights }: ProductOverviewProps) {
  return (
    <Section tone="cream" ariaLabel="Program Overview">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-navy text-balance md:text-5xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-navy/70 md:text-lg">{body}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="bezel bg-white ring-navy/10">
            <div className="bezel-inner flex flex-col gap-4 bg-cream p-8 md:p-10">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-4 border-b border-navy/10 pb-4 last:border-0 last:pb-0">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Check className="size-4" />
                  </span>
                  <span className="text-base font-medium text-navy">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
