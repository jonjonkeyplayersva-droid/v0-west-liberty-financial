/**
 * All site copy lives here. Components should import from this file rather than
 * hardcoding strings. Product-specific content is namespaced per program.
 */

export const company = {
  name: 'West Liberty Financial',
  badge: 'DLC National | BL#12360',
  tagline: 'Specialized Financing for Real Earners',
  phone: '416-879-7777',
  phoneHref: 'tel:4168797777',
  email: 'asigalas@westlibertyfinancial.com',
  emailHref: 'mailto:asigalas@westlibertyfinancial.com',
  location: 'Toronto, Ontario',
  website: 'Realtor100.ca',
  broker: 'Apostolos Sigalas',
  license: 'BL#12360',
  brokerage: 'DLC National Ltd.',
}

export const nav = {
  links: [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Who We Help', href: '/#who-we-help' },
    { label: 'About', href: '/#about' },
    { label: 'FAQ', href: '/#faq' },
  ],
  fundingSolutions: [
    {
      label: 'REALTOR100™',
      href: '/funding-solutions/realtor100',
      blurb: 'Credit line for commission earners',
    },
    {
      label: 'BUSINESS100™',
      href: '/funding-solutions/business100',
      blurb: 'Capital via bank statements',
    },
  ],
  cta: { label: 'Apply Now', href: '/#contact' },
}

export const stickyBar = {
  label: 'Apply Now For Up To $1,000,000',
  href: '/#contact',
}

/* ----------------------------- HOMEPAGE ----------------------------- */

export const home = {
  hero: {
    eyebrow: 'Licensed Mortgage Broker · DLC National Ltd. · BL#12360',
    title: 'Access Up To $1,000,000 Using The Equity In Your Home',
    subhead:
      'Specialized financing for Realtors®, Business Owners, Investors, and Self-Employed Professionals.',
    ctas: [
      { label: 'Apply Now', href: '/#contact', variant: 'gold' as const },
      { label: 'Book a Consultation', href: '#', variant: 'outline' as const },
      { label: 'Check Eligibility', href: '/#contact', variant: 'ghost' as const },
    ],
    trust: ['20+ Years Experience', 'Up To $1M Available', 'No Tax Returns Required'],
  },
  funding: {
    title: 'Our Funding Solutions',
    subhead: 'Two specialized programs built around how you actually earn income.',
    cards: [
      {
        badge: 'REALTOR100™',
        name: 'REALTOR100™ Credit Line Visa',
        tagline: 'Built For Realtors. Backed By Equity. Designed For Success.',
        bullets: [
          'Qualify using commission income',
          'No tax returns required',
          'Up to $1,000,000 available',
        ],
        cta: { label: 'Explore REALTOR100™', href: '/funding-solutions/realtor100' },
      },
      {
        badge: 'BUSINESS100™',
        name: 'BUSINESS100™ Home Credit Line',
        tagline: 'Business Capital When Traditional Banks Say No.',
        bullets: [
          'Qualify via bank statements',
          'No financial statements required',
          'Fast approvals',
        ],
        cta: { label: 'Explore BUSINESS100™', href: '/funding-solutions/business100' },
      },
    ],
  },
  why: {
    title: 'Financing Designed For Real Life',
    body: 'Traditional banks focus on taxable income and rigid formulas. We focus on how you actually earn.',
    cards: [
      {
        title: 'Commission Income',
        desc: 'We count your gross commissions, not just your taxable line.',
      },
      {
        title: 'Business Revenue',
        desc: 'Your bank statements tell the real story of your business.',
      },
      {
        title: 'Rental Income',
        desc: 'Income-producing properties strengthen your application.',
      },
      {
        title: 'Equity Position',
        desc: 'The equity in your home unlocks meaningful capital.',
      },
      {
        title: 'Overall Financial Strength',
        desc: 'We look at the complete picture, not a single formula.',
      },
    ],
  },
  steps: {
    title: 'Four Steps To Funding',
    items: [
      { n: '01', title: 'Complete Application' },
      { n: '02', title: 'Review Income & Bank Statements' },
      { n: '03', title: 'Verify Property Equity' },
      { n: '04', title: 'Approval & Funding' },
    ],
  },
  whoWeHelp: {
    title: 'Built For How You Earn',
    cards: [
      { title: 'Realtors®', desc: 'Leverage commission income to access flexible capital.' },
      { title: 'Business Owners', desc: 'Fund growth when traditional banks turn you away.' },
      { title: 'Investors', desc: 'Put property equity to work across your portfolio.' },
      { title: 'Self-Employed', desc: 'Qualify on real earnings, not just taxable income.' },
      { title: 'Contractors', desc: 'Smooth out cash flow between projects and seasons.' },
      { title: 'Entrepreneurs', desc: 'Access the capital to move quickly on opportunity.' },
    ],
  },
  testimonials: {
    title: 'Success Stories',
    items: [
      {
        quote: 'Realtor100 allowed me to leverage my commission income and grow my business.',
        name: 'Sarah M.',
        role: 'Realtor®',
        rating: 5,
      },
      {
        quote: 'Business100 provided capital when every bank said no.',
        name: 'James T.',
        role: 'Business Owner',
        rating: 5,
      },
      {
        quote: 'Fast approval and professional service from start to finish.',
        name: 'Maria L.',
        role: 'Investor',
        rating: 5,
      },
    ],
  },
  about: {
    title: 'Meet Apostolos Sigalas',
    bio: 'With over 20 years in banking, lending, mortgages, and business development, Apostolos Sigalas built West Liberty Financial to serve the people traditional banks overlook. He understands how real earners actually generate income — and structures financing around that reality.',
    pills: [
      'Commercial Lending',
      'Residential Mortgages',
      'Development Financing',
      'Business Banking',
      'Investment Property',
    ],
    badges: ['DLC National Ltd.', 'BL#12360'],
    image: '/apostolos-sigalas.png',
  },
  calculator: {
    title: 'Estimate Your Available Equity',
    subhead: 'Adjust your numbers to see your estimated available equity in real time.',
  },
  contact: {
    title: "Let's Build Your Financial Future",
    cta: { label: 'Book A Free Consultation', href: '#' },
  },
}

export const footer = {
  disclaimer:
    'West Liberty Financial is a licensed mortgage brokerage operating under DLC National Ltd. BL#12360. All financing subject to lender approval. Rates and terms subject to change.',
  copyright: '© 2025 West Liberty Financial | Realtor100.ca',
}

/* ----------------------------- REALTOR100 ----------------------------- */

export const realtor100 = {
  hero: {
    eyebrow: 'Funding Solutions · REALTOR100™',
    title: 'The Credit Line Built Exclusively For Realtors®',
    subhead:
      'Qualify using your commission income. No tax returns. No corporate financials. Up to $1,000,000.',
    ctas: [
      { label: 'Apply For REALTOR100™', href: '#apply', variant: 'gold' as const },
      { label: 'Book a Consultation', href: '#', variant: 'outline' as const },
      { label: 'Check Eligibility', href: '#apply', variant: 'ghost' as const },
    ],
    trust: ['5.99% Fixed Rates', '1% Cash Back', 'Visa Worldwide'],
  },
  overview: {
    title: 'What Is REALTOR100™?',
    body: 'REALTOR100™ is a home equity credit line designed exclusively for licensed Realtors® who earn commission income. Unlike traditional lenders, we qualify you based on your gross commissions — not your taxable income or corporate structure.',
    highlights: [
      'Commission-based qualification',
      'Up to $1,000,000 credit limit',
      'Fixed rates from 5.99%',
      '1% cash back on purchases',
    ],
  },
  benefits: {
    title: 'Everything Included',
    items: [
      'Qualify using up to 100% of gross commission income',
      'No personal tax returns required',
      'No corporate financial statements required',
      'Up to $1,000,000 credit limit',
      'Fixed rates starting from 5.99%',
      '1% cash back on all purchases',
      '21-day interest-free purchase period',
      'Available on owner-occupied and rental properties',
      'Visa accepted worldwide',
      'Interest charged only on funds used',
    ],
  },
  qualifications: {
    title: 'Do You Qualify?',
    left: {
      title: 'You May Qualify If You Are:',
      items: [
        'Licensed Realtor®',
        'Commission-based earner',
        'Property owner (owner-occupied or rental)',
        'Canadian resident',
      ],
    },
    right: {
      title: 'What We Review:',
      items: [
        'Recent commission statements',
        'Property ownership documents',
        'Equity position',
        'Overall financial strength',
      ],
    },
    cta: { label: 'Check My Eligibility', href: '#apply' },
  },
  steps: {
    title: 'Your Path To Funding',
    items: [
      { n: '01', title: 'Submit Application', desc: 'Complete our simple online form.' },
      {
        n: '02',
        title: 'Provide Commission Income',
        desc: 'Recent commission statements, no tax returns.',
      },
      {
        n: '03',
        title: 'Verify Property Equity',
        desc: 'We assess your property equity position.',
      },
      {
        n: '04',
        title: 'Approval & Access',
        desc: 'Receive your credit line and Visa card.',
      },
    ],
  },
  whoFor: {
    title: 'Built For Realtors® Like You',
    cards: [
      {
        title: 'Full-Time Realtors',
        desc: 'Your full commission income works in your favor. Access capital that scales with your production.',
      },
      {
        title: 'Part-Time Agents',
        desc: 'Even part-time commissions count toward qualification. Build financial flexibility around your schedule.',
      },
      {
        title: 'Team Leads & Brokers',
        desc: 'Fund recruiting, marketing, and growth initiatives. Leverage your equity to expand your business.',
      },
    ],
  },
  testimonials: {
    title: 'Realtors® Share Their Experience',
    items: [
      {
        quote: 'I finally qualified for a credit line based on my actual income.',
        name: 'David K.',
        role: 'Realtor®, Toronto',
        rating: 5,
      },
      {
        quote: 'The application was simple and approval was fast.',
        name: 'Jennifer L.',
        role: 'Real Estate Agent',
        rating: 5,
      },
      {
        quote: 'REALTOR100™ changed how I manage my business finances.',
        name: 'Michael R.',
        role: 'Broker',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'REALTOR100™ Questions Answered',
    items: [
      {
        q: 'Do I need to provide personal tax returns to qualify?',
        a: 'No. REALTOR100™ qualifies you based on your gross commission income, not your taxable income. Personal tax returns are not required.',
      },
      {
        q: 'Can I qualify using commission income only?',
        a: 'Yes. Your commission income is the foundation of qualification. We assess your gross commissions alongside your property equity position.',
      },
      {
        q: 'What commission documentation is required?',
        a: 'We typically review your recent commission statements from your brokerage. These demonstrate your earning activity without the need for tax filings.',
      },
      {
        q: 'Is there a minimum commission history required?',
        a: 'We look for a reasonable track record of commission earnings. The exact requirement depends on your overall financial profile and equity position.',
      },
      {
        q: 'Can I use rental properties to qualify?',
        a: 'Yes. REALTOR100™ is available on both owner-occupied and rental properties, and rental income can strengthen your application.',
      },
      {
        q: 'What is the maximum credit limit?',
        a: 'Qualified applicants can access a credit line of up to $1,000,000, subject to your equity position and overall financial strength.',
      },
      {
        q: 'How is the credit line accessed?',
        a: 'You access your funds through a Visa card accepted worldwide, as well as direct draws. Interest is charged only on the funds you actually use.',
      },
      {
        q: 'Can I use funds for business expenses?',
        a: 'Yes. Many Realtors® use REALTOR100™ for marketing, operations, and business growth, as well as personal needs — the choice is yours.',
      },
      {
        q: 'What are the interest rates and fees?',
        a: 'Fixed rates start from 5.99%, and you earn 1% cash back on all purchases with a 21-day interest-free purchase period. Final terms depend on your application.',
      },
      {
        q: 'How quickly can I receive approval?',
        a: 'Because we skip tax returns and corporate financials, approvals move quickly — often within a few business days once documents are received.',
      },
    ],
  },
  apply: {
    title: 'Apply For REALTOR100™',
    subhead: 'Complete the form below. No tax returns required.',
  },
}

/* ----------------------------- BUSINESS100 ----------------------------- */

export const business100 = {
  hero: {
    eyebrow: 'Funding Solutions · BUSINESS100™',
    title: 'Business Capital When Traditional Banks Say No',
    subhead:
      'Qualify using business bank statements. No tax returns. No financial statements. Up to $1,000,000.',
    ctas: [
      { label: 'Apply For BUSINESS100™', href: '#apply', variant: 'gold' as const },
      { label: 'Book a Consultation', href: '#', variant: 'outline' as const },
      { label: 'Check Eligibility', href: '#apply', variant: 'ghost' as const },
    ],
    trust: ['Fast Approvals', 'Fixed Rates', 'Interest On Funds Used Only'],
  },
  overview: {
    title: 'What Is BUSINESS100™?',
    body: "BUSINESS100™ is a home equity credit line for business owners and self-employed professionals who can't qualify through traditional banks. We assess your business activity using bank statements — not tax returns or financial statements.",
    highlights: [
      'Bank-statement qualification',
      'Up to $1,000,000 available',
      'Fast approvals',
      'Interest on funds used only',
    ],
  },
  benefits: {
    title: 'Everything Included',
    items: [
      'Qualify using business bank statements',
      'No personal tax returns required',
      'No corporate financial statements required',
      'Up to $1,000,000 available',
      'Fast approvals',
      'Fixed rates',
      'Interest charged only on funds used',
      'Available for business owners and self-employed professionals',
    ],
  },
  uses: {
    title: 'Put Your Capital To Work',
    items: [
      { title: 'Business Expansion', desc: 'Fund growth without traditional lending constraints.' },
      { title: 'Working Capital', desc: 'Maintain cash flow during slow periods.' },
      { title: 'Equipment Financing', desc: 'Acquire tools and assets for your business.' },
      { title: 'Inventory Purchases', desc: 'Stock up without tying up operating cash.' },
      { title: 'Debt Consolidation', desc: 'Simplify payments at better rates.' },
      { title: 'Emergency Cash Flow', desc: "Access capital when it's needed most." },
      { title: 'Tax Payments', desc: 'Cover obligations without disrupting operations.' },
      { title: 'Marketing Campaigns', desc: 'Invest in growth confidently.' },
    ],
  },
  qualifications: {
    title: 'Do You Qualify?',
    left: {
      title: 'You May Qualify If You Are:',
      items: [
        'Business owner',
        'Self-employed professional',
        'Contractor',
        'Entrepreneur',
        'Canadian property owner',
      ],
    },
    right: {
      title: 'What We Review:',
      items: [
        'Business bank statements (6–12 months)',
        'Property equity position',
        'Business revenue activity',
        'Overall financial strength',
      ],
    },
    cta: { label: 'Check My Eligibility', href: '#apply' },
  },
  steps: {
    title: 'Your Path To Funding',
    items: [
      { n: '01', title: 'Submit Application', desc: 'Complete our simple online form.' },
      {
        n: '02',
        title: 'Provide Bank Statements',
        desc: 'Business statements only, no tax returns.',
      },
      { n: '03', title: 'Verify Property Equity', desc: 'We assess your equity position.' },
      { n: '04', title: 'Approval & Funding', desc: 'Access your capital quickly.' },
    ],
  },
  whoFor: {
    title: 'Built For Business Owners Like You',
    cards: [
      {
        title: 'Self-Employed Professionals',
        desc: 'Your bank statements prove your business activity. Access capital that traditional lenders overlook.',
      },
      {
        title: 'Small Business Owners',
        desc: 'Fund growth, inventory, and operations on your terms. No financial statements required.',
      },
      {
        title: 'Contractors & Entrepreneurs',
        desc: 'Bridge cash flow gaps and seize new opportunities. Qualify based on real revenue activity.',
      },
    ],
  },
  testimonials: {
    title: 'Business Owners Share Their Experience',
    items: [
      {
        quote: 'Business100 gave us the working capital we needed when every bank turned us down.',
        name: 'James T.',
        role: 'Business Owner',
        rating: 5,
      },
      {
        quote: 'The process was straightforward and the team was professional.',
        name: 'Lisa M.',
        role: 'Self-Employed Consultant',
        rating: 5,
      },
      {
        quote: 'We used the funds for equipment and it transformed our operations.',
        name: 'Carlos R.',
        role: 'Contractor',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'BUSINESS100™ Questions Answered',
    items: [
      {
        q: 'What bank statements are required to qualify?',
        a: 'We review your business bank statements, typically covering the most recent 6 to 12 months. These demonstrate your revenue activity and cash flow.',
      },
      {
        q: 'Do I need to provide tax returns or financial statements?',
        a: 'No. BUSINESS100™ is built specifically so you do not need personal tax returns or corporate financial statements to qualify.',
      },
      {
        q: 'How many months of bank statements are needed?',
        a: 'Most applications require 6 to 12 months of business bank statements. The exact period depends on your overall financial profile.',
      },
      {
        q: 'Can I qualify as a sole proprietor?',
        a: 'Yes. Sole proprietors, corporations, and partnerships can all qualify. We assess your business activity through your bank statements.',
      },
      {
        q: 'What types of properties are eligible?',
        a: 'Canadian residential properties with sufficient equity are eligible, including owner-occupied and certain investment properties.',
      },
      {
        q: 'Can I use the funds for any business purpose?',
        a: 'Yes. From working capital and equipment to expansion and tax payments, you decide how to deploy your capital.',
      },
      {
        q: 'What is the maximum credit limit?',
        a: 'Qualified applicants can access up to $1,000,000, subject to your property equity and overall financial strength.',
      },
      {
        q: 'How quickly can funding be completed?',
        a: 'Because we skip tax returns and financial statements, approvals are fast — often within a few business days once documents are received.',
      },
      {
        q: 'What are the interest rates?',
        a: 'BUSINESS100™ offers fixed rates, and interest is charged only on the funds you actually use. Final terms depend on your application.',
      },
      {
        q: 'Can I apply if my business has been operating for less than 2 years?',
        a: 'Possibly. While longer history helps, we evaluate each application individually based on revenue activity and equity position.',
      },
    ],
  },
  apply: {
    title: 'Apply For BUSINESS100™',
    subhead: 'No tax returns or financial statements required.',
  },
}

export const contactStrip = {
  title: 'Questions? Speak Directly With Apostolos.',
  cta: { label: 'Book A Free Consultation', href: '#' },
}
