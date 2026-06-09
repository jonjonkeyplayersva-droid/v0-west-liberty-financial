import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Reveal } from '@/components/shared/reveal'

interface Card {
  title: string
  desc: string
}

interface WhoForProps {
  title: string
  cards: Card[]
  icons: LucideIcon[]
  tone?: 'navy' | 'cream'
}

export function WhoFor({ title, cards, icons, tone = 'cream' }: WhoForProps) {
  const dark = tone === 'navy'
  return (
    <Section tone={tone} ariaLabel="Who It's For">
      <SectionHeading title={title} dark={dark} className="mb-14" />
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={card.title} delay={i * 100}>
              <div
                className={cn(
                  'h-full bezel transition-all duration-700 ease-luxe hover:ring-gold/50',
                  dark ? 'bg-navy-light/40 ring-white/10' : 'bg-white ring-navy/10',
                )}
              >
                <div
                  className={cn(
                    'bezel-inner flex h-full flex-col gap-4 p-8',
                    dark ? 'bg-navy-light' : 'bg-cream',
                  )}
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="size-6" />
                  </span>
                  <h3
                    className={cn(
                      'font-display text-xl font-semibold',
                      dark ? 'text-cream' : 'text-navy',
                    )}
                  >
                    {card.title}
                  </h3>
                  <p className={cn('text-sm leading-relaxed', dark ? 'text-slate' : 'text-navy/65')}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
