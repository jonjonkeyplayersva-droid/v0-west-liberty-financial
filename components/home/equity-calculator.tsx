'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Reveal } from '@/components/shared/reveal'

const MIN = 100_000
const MAX = 3_000_000
const LTV = 0.8

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function EquityCalculator() {
  const { calculator } = home
  const [propertyValue, setPropertyValue] = useState(800_000)
  const [mortgage, setMortgage] = useState(350_000)

  const equity = Math.max(0, Math.round(propertyValue * LTV - mortgage))

  return (
    <Section tone="navy" ariaLabel="Equity Calculator">
      <SectionHeading
        title={calculator.title}
        subhead={calculator.subhead}
        className="mb-14"
      />

      <Reveal className="mx-auto max-w-3xl">
        <div className="bezel bg-navy-light/40 ring-white/10">
          <div className="bezel-inner flex flex-col gap-8 bg-navy-light p-7 md:p-10">
            {/* Property value */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label htmlFor="property-value" className="text-sm font-semibold text-cream">
                  Property Value
                </label>
                <span className="font-display text-lg font-semibold text-gold">
                  {formatCurrency(propertyValue)}
                </span>
              </div>
              <input
                id="property-value"
                type="range"
                min={MIN}
                max={MAX}
                step={10_000}
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-navy accent-gold"
                aria-label="Property value slider"
              />
              <input
                type="number"
                min={MIN}
                max={MAX}
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold/60"
                aria-label="Property value"
              />
            </div>

            {/* Mortgage */}
            <div className="flex flex-col gap-3">
              <label htmlFor="mortgage" className="text-sm font-semibold text-cream">
                Outstanding Mortgage
              </label>
              <input
                id="mortgage"
                type="number"
                min={0}
                value={mortgage}
                onChange={(e) => setMortgage(Number(e.target.value))}
                className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-gold/60"
                aria-label="Outstanding mortgage balance"
              />
            </div>

            {/* Output */}
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                Estimated Available Equity
              </span>
              <span className="font-display text-4xl font-semibold text-gold md:text-5xl">
                {formatCurrency(equity)}
              </span>
              <span className="text-xs text-slate">Based on 80% loan-to-value</span>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-sm font-semibold text-navy transition-all duration-500 ease-luxe hover:bg-gold-light"
            >
              {`Apply For Up To ${formatCurrency(equity)}`}
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
