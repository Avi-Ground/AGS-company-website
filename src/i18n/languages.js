import en from './locales/en'
import fr from './locales/fr'
import es from './locales/es'
import ar from './locales/ar'
import zh from './locales/zh'

// Languages offered in the header switcher, in display order.
export const LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English', htmlLang: 'en', locale: en },
  { code: 'fr', short: 'FR', label: 'Français', htmlLang: 'fr', locale: fr },
  { code: 'es', short: 'ES', label: 'Español', htmlLang: 'es', locale: es },
  { code: 'ar', short: 'AR', label: 'العربية', htmlLang: 'ar', dir: 'rtl', locale: ar },
  { code: 'zh', short: '中文', label: '中文', htmlLang: 'zh-Hans', locale: zh },
]

export const DEFAULT_LOCALE = en
export const byCode = Object.fromEntries(LANGUAGES.map((lang) => [lang.code, lang]))
