import type { Metadata } from 'next'
import './globals.css'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
