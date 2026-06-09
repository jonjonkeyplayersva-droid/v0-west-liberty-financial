import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CtaButton } from '@/components/shared/cta-button'
import { Reveal } from '@/components/shared/reveal'

interface Column {
  title: string
  items: string[]
}

interface QualificationsProps {
  title: string
  left: Column
  right: Column
  cta: { label: string; href: string }
  tone?: 'navy' | 'cream'
}

export function Qualifications({ title, left, right, cta, tone = 'cream' }: QualificationsProps) {
  const dark = tone === 'navy'
  return (
    <Section tone={tone} ariaLabel="Qualifications and Requirements">
      <SectionHeading title={title} dark={dark} className="mb-14" />
      <div className="grid gap-6 md:grid-cols-2">
        {[left, right].map((col, i) => (
          <Reveal key={col.title} delay={i * 100}>
            <div
              className={cn(
                'h-full bezel',
                dark ? 'bg-navy-light/40 ring-white/10' : 'bg-white ring-navy/10',
              )}
            >
              <div
                className={cn(
                  'bezel-inner flex h-full flex-col gap-5 p-8',
                  dark ? 'bg-navy-light' : 'bg-cream',
                )}
              >
                <h3
                  className={cn(
                    'font-display text-xl font-semibold',
                    dark ? 'text-cream' : 'text-navy',
                  )}
                >
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        'flex items-center gap-3 text-sm md:text-base',
                        dark ? 'text-cream/85' : 'text-navy/75',
                      )}
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200} className="mt-12 flex justify-center">
        <CtaButton label={cta.label} href={cta.href} variant="gold" />
      </Reveal>
    </Section>
  )
}
