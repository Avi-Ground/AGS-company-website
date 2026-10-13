import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context'
import { DEFAULT_LOCALE, byCode } from './languages'

const STORAGE_KEY = 'ags-lang'

// A ?lang=fr link parameter wins (handy for sharing a page in a given language),
// then the visitor's saved choice, then English.
const readStoredLanguage = () => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (byCode[fromUrl]) {
    try { window.localStorage.setItem(STORAGE_KEY, fromUrl) } catch { /* storage unavailable */ }
    return fromUrl
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return byCode[stored] ? stored : 'en'
  } catch {
    return 'en'
  }
}

const lookup = (locale, key) => key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), locale)

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage)
  const current = byCode[lang]

  useEffect(() => {
    document.documentElement.lang = current.htmlLang
    document.documentElement.dir = current.dir || 'ltr'
  }, [current])

  const setLang = useCallback((code) => {
    if (!byCode[code]) return
    try { window.localStorage.setItem(STORAGE_KEY, code) } catch { /* storage unavailable */ }
    setLangState(code)
  }, [])

  // t('home.heroTitle') returns the string (or list/object) for the active language,
  // falling back to English when a key has not been translated yet.
  // {placeholders} are filled from vars.
  const t = useCallback((key, vars) => {
    let value = lookup(current.locale, key)
    if (value === undefined) value = lookup(DEFAULT_LOCALE, key)
    if (value === undefined) return key
    if (vars && typeof value === 'string') {
      value = value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match))
    }
    return value
  }, [current])

  const value = useMemo(() => ({ lang, setLang, t, language: current }), [lang, setLang, t, current])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
