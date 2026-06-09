import { Banknote, Building2, Home, Landmark, TrendingUp } from 'lucide-react'
import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { Reveal } from '@/components/shared/reveal'

const icons = [Banknote, Building2, Home, Landmark, TrendingUp]

export function WhyChooseUs() {
  const { why } = home
  return (
    <Section tone="cream" ariaLabel="Why Choose Us">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-navy text-balance md:text-5xl">
            {why.title}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-navy/70 md:text-lg">
            {why.body}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {why.cards.map((card, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={card.title} delay={(i % 2) * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-700 ease-luxe hover:border-gold/50">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/65">{card.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
