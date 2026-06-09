import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subhead?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subhead,
  align = 'center',
  dark = true,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl',
          dark ? 'text-cream' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {subhead && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-pretty md:text-lg',
            dark ? 'text-slate' : 'text-navy/70',
          )}
        >
          {subhead}
        </p>
      )}
    </Reveal>
  )
}
