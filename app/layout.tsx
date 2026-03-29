import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { IMAGES } from '@/lib/images'
import { SITE } from '@/lib/site'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: SITE.legalName,
  telephone: SITE.phoneTel,
  url: SITE.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    postalCode: SITE.postalCode,
    addressCountry: SITE.addressCountry,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '17:00',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Full-Service Beauty Salon | Sun City Center, FL`,
  description:
    'Hair, nails, lashes, facials, and waxing in a clean, welcoming salon. Book your appointment at Silk Beauty Salon in Sun City Center.',
  keywords: [
    'beauty salon',
    'Sun City Center',
    'hair salon',
    'nails',
    'lashes',
    'facials',
    'waxing',
    'Silk Beauty Salon',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Full-Service Beauty Salon`,
    description:
      'Full-service beauty care in Sun City Center — hair, nails, lashes, facials, and waxing. Book your visit today.',
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: 'Silk Beauty Salon — modern salon interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Full-Service Beauty Salon`,
    description:
      'Hair, nails, lashes, facials, and waxing in Sun City Center. Book your appointment.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f7f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
