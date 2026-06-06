'use client'

import { createContext, useContext } from 'react'
import en from '../messages/en.json'
import pt from '../messages/pt.json'

export type Locale = 'en' | 'pt'

export const messages = { en, pt } as const

export type Messages = typeof en

// Dot-notation key access, e.g. "hero.title"
type DotKeys<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends object
    ? DotKeys<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & string]

export type MessageKey = DotKeys<Messages>

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.')
  let current: unknown = obj
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return path
    current = (current as Record<string, unknown>)[part]
  }
  return typeof current === 'string' ? current : path
}

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: MessageKey) => string
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
})

export function useLocale() {
  return useContext(LocaleContext)
}

export function createTranslator(locale: Locale) {
  return (key: MessageKey) =>
    getNestedValue(messages[locale] as unknown as Record<string, unknown>, key)
}
