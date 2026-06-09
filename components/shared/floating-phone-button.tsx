import { Phone } from 'lucide-react'
import { company } from '@/lib/content'

export function FloatingPhoneButton() {
  return (
    <a
      href={company.phoneHref}
      aria-label={`Call ${company.phone}`}
      className="group fixed bottom-20 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg shadow-gold/30 transition-all duration-500 ease-luxe hover:scale-105 hover:bg-gold-light md:bottom-6"
    >
      <Phone className="size-6 transition-transform duration-500 ease-luxe group-hover:rotate-12" />
      <span className="sr-only">{company.phone}</span>
    </a>
  )
}
