import type { Metadata } from 'next'
import { Briefcase, Store, Hammer } from 'lucide-react'
import { business100 } from '@/lib/content'
import { ProductHero } from '@/components/shared/product-hero'
import { ProductOverview } from '@/components/shared/product-overview'
import { Qualifications } from '@/components/shared/qualifications'
import { WhoFor } from '@/components/shared/who-for'
import { ContactStrip } from '@/components/shared/contact-strip'
import { BusinessBenefits } from '@/components/business100/business-benefits'
import { BusinessUses } from '@/components/business100/business-uses'
import { BusinessSteps } from '@/components/business100/business-steps'
import { BusinessTestimonials } from '@/components/business100/business-testimonials'
import { BusinessFaq } from '@/components/business100/business-faq'
import { BusinessApply } from '@/components/business100/business-apply'

export const metadata: Metadata = {
  title: 'BUSINESS100™ Credit Line | Business Capital Toronto | Realtor100.ca',
  description:
    'Qualify using business bank statements. No tax returns or financial statements required. Up to $1,000,000 for business owners and self-employed professionals.',
  openGraph: {
    title: 'BUSINESS100™ Credit Line | Business Capital Toronto',
    description:
      'Qualify using business bank statements. No tax returns required. Up to $1,000,000 for business owners and self-employed professionals.',
    url: 'https://realtor100.ca/funding-solutions/business100',
  },
}

export default function Business100Page() {
  return (
    <main>
      <ProductHero {...business100.hero} />
      <ProductOverview {...business100.overview} />
      <BusinessBenefits />
      <BusinessUses />
      <Qualifications {...business100.qualifications} tone="navy" />
      <BusinessSteps />
      <WhoFor
        title={business100.whoFor.title}
        cards={business100.whoFor.cards}
        icons={[Briefcase, Store, Hammer]}
        tone="cream"
      />
      <BusinessTestimonials />
      <BusinessFaq />
      <BusinessApply />
      <ContactStrip />
    </main>
  )
}
