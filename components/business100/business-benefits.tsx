import { business100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { BenefitsList } from '@/components/shared/benefits-list'

export function BusinessBenefits() {
  return (
    <Section tone="navy" ariaLabel="Benefits">
      <SectionHeading title={business100.benefits.title} className="mb-14" />
      <BenefitsList items={business100.benefits.items} />
    </Section>
  )
}
