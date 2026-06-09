import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { company, nav, footer } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-xl font-semibold text-cream">{company.name}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {company.badge}
            </span>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate">
              {company.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Explore
            </span>
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/80 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Funding solutions */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Funding Solutions
            </span>
            {nav.fundingSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 text-sm text-cream/80 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
                <ArrowRight className="size-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-slate">{footer.disclaimer}</p>
          <p className="mt-4 text-xs text-slate">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
