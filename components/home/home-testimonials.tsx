import { home } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { TestimonialSlider } from '@/components/shared/testimonial-slider'

export function HomeTestimonials() {
  const { testimonials } = home
  return (
    <Section tone="navy" ariaLabel="Success Stories">
      <SectionHeading title={testimonials.title} className="mb-16" />
      <TestimonialSlider items={testimonials.items} />
    </Section>
  )
}
