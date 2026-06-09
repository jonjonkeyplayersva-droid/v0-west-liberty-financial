import { business100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { FaqAccordion } from '@/components/shared/faq-accordion'

export function BusinessFaq() {
  return (
    <Section id="faq" tone="cream" ariaLabel="Frequently Asked Questions">
      <SectionHeading title={business100.faq.title} dark={false} className="mb-12" />
      <FaqAccordion items={business100.faq.items} tone="cream" />
    </Section>
  )
}
