import { cn } from '@/lib/utils'

interface BezelCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  /** light = cream inner, dark = navy-light inner */
  tone?: 'light' | 'dark'
}

export function BezelCard({
  children,
  className,
  innerClassName,
  tone = 'dark',
}: BezelCardProps) {
  return (
    <div
      className={cn(
        'bezel transition-all duration-700 ease-luxe',
        tone === 'dark' ? 'bg-navy-light/40 ring-white/10' : 'bg-white ring-navy/10',
        className,
      )}
    >
      <div
        className={cn(
          'bezel-inner h-full',
          tone === 'dark' ? 'bg-navy-light' : 'bg-cream',
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}
