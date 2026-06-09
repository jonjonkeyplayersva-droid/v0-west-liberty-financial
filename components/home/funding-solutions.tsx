import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Reveal } from '@/components/shared/reveal'

export function FundingSolutions() {
  const { funding } = home
  return (
    <Section id="funding" tone="navy" ariaLabel="Funding Solutions">
      <SectionHeading title={funding.title} subhead={funding.subhead} className="mb-16" />

      <div className="grid gap-8 md:grid-cols-2">
        {funding.cards.map((card, i) => (
          <Reveal key={card.badge} delay={i * 120}>
            <Link
              href={card.cta.href}
              className="group block h-full bezel bg-navy-light/40 ring-white/10 transition-all duration-700 ease-luxe hover:ring-gold/40"
            >
              <div className="bezel-inner flex h-full flex-col gap-6 bg-navy-light p-8 md:p-10">
                <span className="inline-flex w-max items-center rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy">
                  {card.badge}
                </span>
                <h3 className="font-display text-2xl font-semibold text-cream md:text-3xl">
                  {card.name}
                </h3>
                <p className="text-base font-medium text-gold">{card.tagline}</p>
                <ul className="flex flex-col gap-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-cream/80">
                      <span className="flex size-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="size-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-gold">
                  {card.cta.label}
                  <ArrowRight className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
