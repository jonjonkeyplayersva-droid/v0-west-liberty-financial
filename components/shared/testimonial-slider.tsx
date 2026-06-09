'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
  rating: number
}

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0)
  const count = items.length

  const next = useCallback(() => setActive((a) => (a + 1) % count), [count])
  const prev = useCallback(() => setActive((a) => (a - 1 + count) % count), [count])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="mx-auto max-w-3xl">
      <div className="bezel bg-navy-light/40 ring-white/10">
        <div className="bezel-inner relative overflow-hidden bg-navy-light px-6 py-12 md:px-12 md:py-16">
          <Quote
            className="absolute left-6 top-6 size-12 text-gold/20 md:size-16"
            aria-hidden="true"
          />
          <div className="relative">
            {items.map((item, i) => (
              <blockquote
                key={i}
                className={cn(
                  'flex flex-col items-center gap-6 text-center transition-all duration-700 ease-luxe',
                  i === active
                    ? 'relative opacity-100'
                    : 'pointer-events-none absolute inset-0 opacity-0',
                )}
                aria-hidden={i !== active}
              >
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl font-medium leading-relaxed text-cream text-pretty md:text-2xl">
                  {`"${item.quote}"`}
                </p>
                <footer className="flex flex-col gap-0.5">
                  <cite className="not-italic text-base font-semibold text-gold">{item.name}</cite>
                  <span className="text-sm text-slate">{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 hover:bg-gold/10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-500 ease-luxe',
                i === active ? 'w-8 bg-gold' : 'w-2 bg-gold/30',
              )}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 hover:bg-gold/10"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
