import {
  Briefcase,
  HardHat,
  Home,
  Lightbulb,
  TrendingUp,
  UserCheck,
} from 'lucide-react'
import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Reveal } from '@/components/shared/reveal'

const icons = [Home, Briefcase, TrendingUp, UserCheck, HardHat, Lightbulb]

export function WhoWeHelp() {
  const { whoWeHelp } = home
  return (
    <Section id="who-we-help" tone="cream" ariaLabel="Who We Help">
      <SectionHeading title={whoWeHelp.title} dark={false} className="mb-16" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whoWeHelp.cards.map((card, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={card.title} delay={(i % 3) * 80}>
              <div className="h-full bezel bg-white ring-navy/10 transition-all duration-700 ease-luxe hover:ring-gold/50">
                <div className="bezel-inner flex h-full flex-col gap-3 bg-cream p-7">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/65">{card.desc}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
