import { Mail, MapPin, Phone, User, Globe } from 'lucide-react'
import { company, home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CtaButton } from '@/components/shared/cta-button'
import { Reveal } from '@/components/shared/reveal'

export function ContactSection() {
  const { contact } = home
  const rows = [
    { icon: User, value: company.broker },
    { icon: Phone, value: company.phone, href: company.phoneHref },
    { icon: Mail, value: company.email, href: company.emailHref },
    { icon: MapPin, value: company.location },
    { icon: Globe, value: company.website },
  ]
  return (
    <Section id="contact" tone="navy" ariaLabel="Contact">
      <SectionHeading title={contact.title} className="mb-14" />
      <Reveal className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-gold/40 bg-navy-light p-8 md:p-12">
          <ul className="flex flex-col gap-5">
            {rows.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="size-5" />
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-base font-medium text-cream transition-colors hover:text-gold"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-base font-medium text-cream">{value}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center border-t border-white/10 pt-8">
            <CtaButton label={contact.cta.label} href={contact.cta.href} variant="gold" />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
