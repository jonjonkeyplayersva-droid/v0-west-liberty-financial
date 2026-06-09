import { business100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Reveal } from '@/components/shared/reveal'

export function BusinessUses() {
  return (
    <Section tone="cream" ariaLabel="Common Uses">
      <SectionHeading
        title={business100.uses.title}
        dark={false}
        className="mb-14"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {business100.uses.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 60}
            className="group flex h-full flex-col gap-2 rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-gold">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-lg font-semibold leading-tight text-navy">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-navy/65">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
