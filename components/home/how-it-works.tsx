import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Timeline } from '@/components/shared/timeline'

export function HowItWorks() {
  const { steps } = home
  return (
    <Section id="how-it-works" tone="navy" ariaLabel="How It Works">
      <SectionHeading title={steps.title} className="mb-16" />
      <Timeline steps={steps.items} dark />
    </Section>
  )
}
