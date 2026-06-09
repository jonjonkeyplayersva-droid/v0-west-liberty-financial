'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { company, nav } from '@/lib/content'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileFundingOpen, setMobileFundingOpen] = useState(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto mx-auto mt-4 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-navy/70 px-4 py-2.5 backdrop-blur-xl md:px-6"
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-base font-semibold tracking-tight text-cream md:text-lg">
            {company.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
            {company.badge}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors duration-300 hover:text-gold"
              aria-expanded={dropdownOpen}
            >
              Funding Solutions
              <ChevronDown
                className={cn(
                  'size-4 transition-transform duration-300',
                  dropdownOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'absolute left-0 top-full w-72 pt-3 transition-all duration-300 ease-luxe',
                dropdownOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0',
              )}
            >
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-light/95 p-2 backdrop-blur-xl">
                {nav.fundingSolutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-gold/10"
                  >
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-cream">{item.label}</span>
                      <span className="text-xs text-slate">{item.blurb}</span>
                    </span>
                    <ArrowRight className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <Link
            href={nav.cta.href}
            className="group hidden items-center gap-2 rounded-full bg-gold py-2 pl-5 pr-2 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-gold-light sm:inline-flex"
          >
            {nav.cta.label}
            <span className="flex size-7 items-center justify-center rounded-full bg-navy/15">
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 text-cream lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          'pointer-events-auto fixed inset-0 z-40 flex flex-col bg-navy/98 px-6 pb-10 pt-28 backdrop-blur-xl transition-all duration-500 ease-luxe lg:hidden',
          mobileOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0',
        )}
      >
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setMobileFundingOpen((v) => !v)}
            className="flex items-center justify-between border-b border-white/10 py-4 text-left text-lg font-medium text-cream"
          >
            Funding Solutions
            <ChevronDown
              className={cn(
                'size-5 text-gold transition-transform duration-300',
                mobileFundingOpen && 'rotate-180',
              )}
            />
          </button>
          <div
            className={cn(
              'grid overflow-hidden transition-all duration-500 ease-luxe',
              mobileFundingOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="min-h-0">
              {nav.fundingSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 pl-4 text-base text-cream/80"
                >
                  {item.label}
                  <ArrowRight className="size-4 text-gold" />
                </Link>
              ))}
            </div>
          </div>

          {nav.links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-medium text-cream transition-colors duration-300 hover:text-gold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={nav.cta.href}
          onClick={() => setMobileOpen(false)}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold py-4 text-base font-semibold text-navy"
        >
          {nav.cta.label}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  )
}
