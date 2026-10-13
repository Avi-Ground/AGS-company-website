import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, useTranslation } from '../i18n'

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t, language } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  // Close when clicking elsewhere or pressing Escape.
  useEffect(() => {
    if (!open) return undefined
    const onPointer = (event) => { if (!rootRef.current?.contains(event.target)) setOpen(false) }
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`sh-lang-switcher ${className}`} ref={rootRef}>
      <button
        type="button"
        className="sh-lang"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('languageSwitcher.label')}
        onClick={() => setOpen((value) => !value)}
      >
        {language.short}
        <svg className="sh-lang-chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <ul className="sh-lang-menu" role="listbox" aria-label={t('languageSwitcher.label')}>
          {LANGUAGES.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                role="option"
                aria-selected={option.code === lang}
                lang={option.htmlLang}
                dir={option.dir || 'ltr'}
                className={option.code === lang ? 'is-active' : ''}
                onClick={() => { setLang(option.code); setOpen(false) }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
