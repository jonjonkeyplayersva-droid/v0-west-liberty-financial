import { realtor100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { TestimonialSlider } from '@/components/shared/testimonial-slider'

export function RealtorTestimonials() {
  return (
    <Section tone="navy" ariaLabel="Testimonials">
      <SectionHeading title={realtor100.testimonials.title} className="mb-16" />
      <TestimonialSlider items={realtor100.testimonials.items} />
    </Section>
  )
}
