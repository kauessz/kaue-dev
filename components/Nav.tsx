'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import WhatsAppIcon from './WhatsAppIcon'

const NAV_ITEMS = [
  { href: '/condohub', label: 'CondoHub' },
  { href: '/freightflow', label: 'FreightFlow' },
  { href: '/#produtos', label: 'Produtos' },
  { href: '/servicos-dev', label: 'Dev & Sites' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const wha = (msg = '') => {
    const text = msg || 'Olá! Gostaria de saber mais sobre seus serviços.'
    window.open(`https://wa.me/5513988026188?text=${encodeURIComponent(text)}`, '_blank')
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          kauê<span>.</span>dev
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button className="btn btn-wha" onClick={() => wha()}>
            <WhatsAppIcon /> Contato
          </button>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            aria-label={menuOpen ? 'Fechar navegação' : 'Abrir navegação'}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="nav-panel" className="nav-panel">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <button type="button" className="btn btn-wha" onClick={() => wha()}>
            <WhatsAppIcon /> Falar no WhatsApp
          </button>
        </div>
      ) : null}
    </nav>
  )
}
