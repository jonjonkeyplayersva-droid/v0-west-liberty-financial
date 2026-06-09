import { business100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Timeline } from '@/components/shared/timeline'

export function BusinessSteps() {
  return (
    <Section tone="navy" ariaLabel="How It Works">
      <SectionHeading title={business100.steps.title} className="mb-16" />
      <Timeline steps={business100.steps.items} dark />
    </Section>
  )
}
