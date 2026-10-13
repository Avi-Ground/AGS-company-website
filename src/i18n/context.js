import { createContext, useContext } from 'react'

export const LanguageContext = createContext(null)

// Returns { lang, setLang, t, language } for the active language.
export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation must be used inside LanguageProvider')
  return context
}
