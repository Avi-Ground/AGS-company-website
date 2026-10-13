import './HomeAbout.css'
import { useTranslation } from '../i18n'

export default function HomeAbout() {
  const { t } = useTranslation()
  return (
    <section className="hp-about">
      <h2 className="hp-about-title hp-animate">{t('home.aboutTitle')}</h2>
      <p className="hp-about-body hp-animate">{t('home.aboutBody')}</p>
    </section>
  )
}
