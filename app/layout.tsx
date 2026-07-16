import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { withBasePath } from '@/lib/base-path'
import { CookieBanner } from '@/components/slob/cookie-banner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://slobtuinen.nl/'
const SITE_TITLE = 'Slob Tuinen | Grond, Groen & Straat, Leerdam'
const SITE_DESCRIPTION =
  'Slob Tuinen: vakmanschap van de hoogste plank door Martin Slob. Tuinaanleg, grondverzet, beschoeiingswerk, groenvoorziening, grondwerk en straatwerk in Leerdam en omgeving.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  verification: {
    google: '2NMPHyKD_o53AwpslojKBRuqIhYZr4na_z4Ffiw4AR4',
  },
  icons: {
    icon: [
      { url: withBasePath('/favicon.ico'), sizes: 'any' },
      { url: withBasePath('/favicon-16.png'), sizes: '16x16', type: 'image/png' },
      { url: withBasePath('/favicon-32.png'), sizes: '32x32', type: 'image/png' },
      { url: withBasePath('/favicon-48.png'), sizes: '48x48', type: 'image/png' },
      { url: withBasePath('/favicon-192.png'), sizes: '192x192', type: 'image/png' },
      { url: withBasePath('/icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
    shortcut: withBasePath('/favicon.ico'),
    apple: withBasePath('/apple-icon.png'),
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Slob Tuinen',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: 'og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moderne tuin aangelegd door Slob Tuinen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['og-image.jpg'],
  },
}

/** Structured data voor lokale vindbaarheid in Google (LocalBusiness). */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Landscaper',
  name: 'Slob Tuinen',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}og-image.jpg`,
  logo: `${SITE_URL}logo.png`,
  telephone: '+31628864744',
  email: 'slobdienstverlening@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Recht van Ter Leede 28a',
    postalCode: '4143 LP',
    addressLocality: 'Leerdam',
    addressCountry: 'NL',
  },
  areaServed: ['Leerdam', 'Vijfheerenlanden', 'Betuwe'],
  sameAs: ['https://www.instagram.com/slob_tuinen/'],
  priceRange: '$$',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className={`light bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wide focus:text-white"
        >
          Naar hoofdinhoud
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
