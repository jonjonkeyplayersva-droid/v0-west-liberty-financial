import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { StickyApplyBar } from '@/components/shared/sticky-apply-bar'
import { FloatingPhoneButton } from '@/components/shared/floating-phone-button'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mortgage Broker Toronto | Realtor & Business Financing | Realtor100.ca',
  description:
    'Access up to $1,000,000 using your home equity. No tax returns. Specialized financing for Realtors®, business owners, and self-employed professionals in Canada.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${geistMono.variable} bg-navy`}
    >
      <body className="font-sans antialiased bg-navy text-cream">
        <Navbar />
        <StickyApplyBar />
        {children}
        <Footer />
        <FloatingPhoneButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
