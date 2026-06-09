import { Check } from 'lucide-react'
import { Reveal } from './reveal'

export function BenefitsList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item}
          delay={(i % 2) * 80}
          className="flex items-start gap-3 border-b border-white/10 pb-4"
        >
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Check className="size-3.5" />
          </span>
          <span className="text-sm leading-relaxed text-cream/90 md:text-base">{item}</span>
        </Reveal>
      ))}
    </ul>
  )
}
