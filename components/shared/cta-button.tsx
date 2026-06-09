import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'outline' | 'ghost'

interface CtaButtonProps {
  label: string
  href: string
  variant?: Variant
  className?: string
  arrow?: boolean
}

export function CtaButton({
  label,
  href,
  variant = 'gold',
  className,
  arrow = true,
}: CtaButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-700 ease-luxe'
  const variants: Record<Variant, string> = {
    gold: 'bg-gold text-navy hover:bg-gold-light shadow-lg shadow-gold/20',
    outline: 'border border-gold/60 text-gold hover:bg-gold/10',
    ghost: 'text-cream/80 hover:text-gold',
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span>{label}</span>
      {arrow && (
        <span
          className={cn(
            'flex size-6 items-center justify-center rounded-full transition-all duration-700 ease-luxe',
            variant === 'gold' ? 'bg-navy/15' : 'bg-gold/15',
          )}
        >
          <ArrowRight className="size-3.5 transition-transform duration-700 ease-luxe group-hover:translate-x-0.5" />
        </span>
      )}
    </Link>
  )
}
