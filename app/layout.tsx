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

export const metadata: Metadata = {
  title: 'Slob Tuinen — Grond, Groen & Straat | Leerdam',
  description:
    'Slob Tuinen: vakmanschap van de hoogste plank door Martin Slob. Tuinaanleg, grondverzet, beschoeiingswerk, groenvoorziening, grondwerk en straatwerk in Leerdam en omgeving.',
  generator: 'v0.app',
  icons: {
    icon: withBasePath('/logo.png'),
    apple: withBasePath('/logo.png'),
  },
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
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
