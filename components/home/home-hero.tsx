import { home } from '@/lib/content'
import { CtaButton } from '@/components/shared/cta-button'
import { Reveal } from '@/components/shared/reveal'

export function HomeHero() {
  const { hero } = home
  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy px-4 pt-32 pb-20 md:px-6"
      role="region"
      aria-label="Hero"
    >
      {/* atmospheric gold glow bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 size-[36rem] rounded-full bg-gold/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 size-[28rem] rounded-full bg-gold/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            {hero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-2xl text-base leading-relaxed text-slate text-pretty md:text-xl">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={300} className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
          {hero.ctas.map((cta) => (
            <CtaButton
              key={cta.label}
              label={cta.label}
              href={cta.href}
              variant={cta.variant}
              arrow={cta.variant !== 'ghost'}
            />
          ))}
        </Reveal>

        <Reveal
          delay={400}
          className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
        >
          {hero.trust.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
              <span className="text-sm font-medium text-cream/80">{item}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden="true" />
    </section>
  )
}
