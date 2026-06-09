import { business100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { ApplicationForm, type FieldDef } from '@/components/shared/application-form'

const fields: FieldDef[] = [
  { name: 'fullName', label: 'Full Name' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'businessName', label: 'Business Name' },
  {
    name: 'businessType',
    label: 'Business Type',
    type: 'select',
    options: ['Sole Proprietor', 'Corporation', 'Partnership', 'Self-Employed'],
  },
  { name: 'monthlyRevenue', label: 'Average Monthly Business Revenue', type: 'number' },
  { name: 'propertyValue', label: 'Estimated Property Value', type: 'number' },
  { name: 'mortgageBalance', label: 'Outstanding Mortgage Balance', type: 'number' },
]

export function BusinessApply() {
  return (
    <Section id="apply" tone="navy" ariaLabel="Application Form">
      <SectionHeading
        title={business100.apply.title}
        subhead={business100.apply.subhead}
        className="mb-12"
      />
      <div className="mx-auto max-w-3xl">
        <ApplicationForm
          fields={fields}
          submitLabel="Submit My Application"
          ariaLabel="BUSINESS100 application form"
        />
      </div>
    </Section>
  )
}
