import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

interface Step {
  n: string
  title: string
  desc?: string
}

export function Timeline({ steps, dark = true }: { steps: Step[]; dark?: boolean }) {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* connector line */}
      <div
        className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
        aria-hidden="true"
      />
      <ol className="grid gap-8 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 100} className="relative flex flex-col gap-4">
            <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-gold/40 bg-navy font-display text-lg font-semibold text-gold">
              {step.n}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3
                className={cn(
                  'font-display text-lg font-semibold',
                  dark ? 'text-cream' : 'text-navy',
                )}
              >
                {step.title}
              </h3>
              {step.desc && (
                <p className={cn('text-sm leading-relaxed', dark ? 'text-slate' : 'text-navy/65')}>
                  {step.desc}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
