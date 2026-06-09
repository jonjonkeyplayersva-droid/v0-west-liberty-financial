import Image from 'next/image'
import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { Reveal } from '@/components/shared/reveal'

export function AboutSection() {
  const { about } = home
  return (
    <Section id="about" tone="cream" ariaLabel="About">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="bezel bg-white ring-navy/10">
            <div className="bezel-inner relative aspect-[4/5] overflow-hidden bg-navy">
              <Image
                src={about.image || '/placeholder.svg'}
                alt={`Portrait of ${about.title.replace('Meet ', '')}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-navy text-balance md:text-5xl">
            {about.title}
          </h2>
          <p className="text-base leading-relaxed text-navy/70 md:text-lg">{about.bio}</p>

          <div className="flex flex-wrap gap-2.5">
            {about.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-gold/50 px-4 py-1.5 text-xs font-medium text-navy/80"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {about.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-lg bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
