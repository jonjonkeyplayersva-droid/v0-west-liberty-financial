import { realtor100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { FaqAccordion } from '@/components/shared/faq-accordion'

export function RealtorFaq() {
  return (
    <Section id="faq" tone="cream" ariaLabel="Frequently Asked Questions">
      <SectionHeading title={realtor100.faq.title} dark={false} className="mb-14" />
      <FaqAccordion items={realtor100.faq.items} tone="cream" />
    </Section>
  )
}
