import { HomeHero } from '@/components/home/home-hero'
import { FundingSolutions } from '@/components/home/funding-solutions'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { HowItWorks } from '@/components/home/how-it-works'
import { WhoWeHelp } from '@/components/home/who-we-help'
import { HomeTestimonials } from '@/components/home/home-testimonials'
import { AboutSection } from '@/components/home/about-section'
import { EquityCalculator } from '@/components/home/equity-calculator'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FundingSolutions />
      <WhyChooseUs />
      <HowItWorks />
      <WhoWeHelp />
      <HomeTestimonials />
      <AboutSection />
      <EquityCalculator />
      <ContactSection />
    </main>
  )
}
