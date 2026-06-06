'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLocale } from '../lib/i18n'
import LanguageToggle from './LanguageToggle'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLocale()

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const navItems = [
    { href: '/work', label: t('nav.work') },
    { href: '/products', label: t('nav.products') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          K<span>.</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <LanguageToggle />
          <a
            href="https://github.com/kauecls"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            style={{ padding: '0 0.85rem', minHeight: '38px', fontSize: '0.82rem' }}
          >
            GitHub ↗
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="nav-panel" className="nav-panel">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/kauecls"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </nav>
  )
}
