import { realtor100 } from '@/lib/content'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { ApplicationForm, type FieldDef } from '@/components/shared/application-form'

const fields: FieldDef[] = [
  { name: 'fullName', label: 'Full Name' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'licenseNumber', label: 'Real Estate License Number' },
  { name: 'commissionIncome', label: 'Estimated Annual Commission Income', type: 'number' },
  { name: 'propertyValue', label: 'Estimated Property Value', type: 'number' },
  { name: 'mortgageBalance', label: 'Outstanding Mortgage Balance', type: 'number' },
  {
    name: 'propertyType',
    label: 'Property Type',
    type: 'select',
    options: ['Owner-Occupied', 'Rental', 'Both'],
  },
]

export function RealtorApply() {
  return (
    <Section id="apply" tone="navy" ariaLabel="Application Form">
      <SectionHeading
        title={realtor100.apply.title}
        subhead={realtor100.apply.subhead}
        className="mb-12"
      />
      <div className="mx-auto max-w-3xl">
        <ApplicationForm
          fields={fields}
          submitLabel="Submit My Application"
          ariaLabel="REALTOR100 application form"
        />
      </div>
    </Section>
  )
}
