import type { Metadata, Viewport } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Kauê Lima · Dev & Produtos Digitais',
  description: 'Produtos SaaS, automação inteligente e desenvolvimento web sob medida. Santos, SP.',
  keywords: ['desenvolvimento web', 'SaaS', 'automação', 'logística', 'Santos SP'],
  authors: [{ name: 'Kauê Lima' }],
  openGraph: {
    title: 'Kauê Lima · Dev & Produtos Digitais',
    description: 'Produtos SaaS, automação inteligente e desenvolvimento web sob medida.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  )
}
