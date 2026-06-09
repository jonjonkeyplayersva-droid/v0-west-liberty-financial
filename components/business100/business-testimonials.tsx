import { business100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { TestimonialSlider } from '@/components/shared/testimonial-slider'

export function BusinessTestimonials() {
  return (
    <Section tone="navy" ariaLabel="Testimonials">
      <SectionHeading title={business100.testimonials.title} className="mb-16" />
      <TestimonialSlider items={business100.testimonials.items} />
    </Section>
  )
}
