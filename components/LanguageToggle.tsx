'use client'

import { useLocale } from '../lib/i18n'

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '999px',
        padding: '3px',
      }}
    >
      {(['en', 'pt'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          style={{
            padding: '4px 10px',
            borderRadius: '999px',
            border: 'none',
            background: locale === lang ? 'var(--color-accent)' : 'transparent',
            color: locale === lang ? '#0a0a0a' : 'var(--color-muted)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            transition: 'all 0.15s',
            cursor: 'pointer',
          }}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
