import { realtor100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { BenefitsList } from '@/components/shared/benefits-list'

export function RealtorBenefits() {
  return (
    <Section tone="navy" ariaLabel="Benefits">
      <SectionHeading title={realtor100.benefits.title} className="mb-14" />
      <BenefitsList items={realtor100.benefits.items} />
    </Section>
  )
}
