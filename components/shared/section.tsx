import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  id?: string
  tone?: 'navy' | 'cream'
  className?: string
  ariaLabel?: string
}

export function Section({ children, id, tone = 'navy', className, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      role="region"
      aria-label={ariaLabel}
      className={cn(
        'px-4 py-24 md:px-6 md:py-28',
        tone === 'navy' ? 'bg-navy text-cream' : 'bg-cream text-navy',
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
