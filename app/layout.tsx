import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'
import LocaleProvider from '../components/LocaleProvider'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Kauê Lima · Full Stack Developer',
  description:
    'Full Stack Developer building SaaS products from zero to production. Open to remote roles in Europe and North America.',
  keywords: ['full stack developer', 'SaaS', 'Next.js', 'Java', 'Spring Boot', 'remote'],
  authors: [{ name: 'Kauê Lima' }],
  openGraph: {
    title: 'Kauê Lima · Full Stack Developer',
    description:
      'Full Stack Developer building SaaS products from zero to production.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
