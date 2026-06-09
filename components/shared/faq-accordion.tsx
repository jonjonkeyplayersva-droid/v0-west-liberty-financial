'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FaqItem {
  q: string
  a: string
}

export function FaqAccordion({
  items,
  tone = 'navy',
}: {
  items: FaqItem[]
  tone?: 'navy' | 'cream'
}) {
  const dark = tone === 'navy'
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className={cn('border-b', dark ? 'border-white/10' : 'border-navy/10')}
        >
          <AccordionTrigger
            className={cn(
              'py-5 text-left font-display text-base font-medium hover:text-gold hover:no-underline md:text-lg',
              dark ? 'text-cream' : 'text-navy',
            )}
          >
            {item.q}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              'text-sm leading-relaxed md:text-base',
              dark ? 'text-slate' : 'text-navy/65',
            )}
          >
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
