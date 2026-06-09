import { Mail, Phone } from 'lucide-react'
import { company, contactStrip } from '@/lib/content'
import { CtaButton } from './cta-button'
import { Reveal } from './reveal'

export function ContactStrip() {
  return (
    <section className="bg-gold py-16 md:py-20" role="region" aria-label="Contact">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:px-6">
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy text-balance md:text-4xl">
            {contactStrip.title}
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-base font-semibold text-navy transition-opacity hover:opacity-70"
            >
              <Phone className="size-5" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2 text-base font-semibold text-navy transition-opacity hover:opacity-70"
            >
              <Mail className="size-5" />
              {company.email}
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <CtaButton
            label={contactStrip.cta.label}
            href={contactStrip.cta.href}
            variant="gold"
            className="bg-navy text-cream hover:bg-navy-light"
          />
        </Reveal>
      </div>
    </section>
  )
}
