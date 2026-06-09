import type { Metadata } from 'next'
import { Briefcase, Clock, Users } from 'lucide-react'
import { realtor100 } from '@/lib/content'
import { ProductHero } from '@/components/shared/product-hero'
import { ProductOverview } from '@/components/shared/product-overview'
import { Qualifications } from '@/components/shared/qualifications'
import { WhoFor } from '@/components/shared/who-for'
import { ContactStrip } from '@/components/shared/contact-strip'
import { RealtorBenefits } from '@/components/realtor100/realtor-benefits'
import { RealtorSteps } from '@/components/realtor100/realtor-steps'
import { RealtorTestimonials } from '@/components/realtor100/realtor-testimonials'
import { RealtorFaq } from '@/components/realtor100/realtor-faq'
import { RealtorApply } from '@/components/realtor100/realtor-apply'

export const metadata: Metadata = {
  title: 'REALTOR100™ Credit Line | Realtor Mortgage Toronto | Realtor100.ca',
  description:
    'Qualify using commission income. No tax returns required. Up to $1,000,000 credit line for licensed Realtors®. Fixed rates from 5.99%. Apply today.',
  openGraph: {
    title: 'REALTOR100™ Credit Line | Realtor Mortgage Toronto',
    description:
      'Qualify using commission income. No tax returns required. Up to $1,000,000 credit line for licensed Realtors®.',
    url: 'https://realtor100.ca/funding-solutions/realtor100',
  },
}

export default function Realtor100Page() {
  return (
    <main>
      <ProductHero {...realtor100.hero} />
      <ProductOverview {...realtor100.overview} />
      <RealtorBenefits />
      <Qualifications {...realtor100.qualifications} tone="cream" />
      <RealtorSteps />
      <WhoFor
        title={realtor100.whoFor.title}
        cards={realtor100.whoFor.cards}
        icons={[Briefcase, Clock, Users]}
        tone="cream"
      />
      <RealtorTestimonials />
      <RealtorFaq />
      <RealtorApply />
      <ContactStrip />
    </main>
  )
}
