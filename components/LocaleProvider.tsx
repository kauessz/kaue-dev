'use client'

import { useEffect, useState } from 'react'
import { LocaleContext, type Locale, createTranslator } from '../lib/i18n'

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Locale | null
    if (saved === 'en' || saved === 'pt') {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('lang', next)
  }

  const t = createTranslator(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}
