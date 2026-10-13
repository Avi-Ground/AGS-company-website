import './SafetyCompliance.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { rich, useTranslation } from '../i18n'
import safetyImage from '../assets/qatar-airways.jpeg'

export default function SafetyCompliance() {
  const { t } = useTranslation()
  return <div className="sc-page"><SiteHeader /><main><section className="sc-hero"><div className="sc-inner sc-hero-grid"><div><p className="sc-eyebrow">{t('safety.eyebrow')}</p><h1>{rich(t('safety.heroTitle'))}</h1><p className="sc-lede">{t('safety.lede')}</p><a href="/contact-us#enquiry" className="sc-cta">{t('safety.cta')} <span className="dir-arrow">→</span></a></div><img src={safetyImage} alt="AGS safety and compliance operations" /></div></section><section className="sc-standards"><div className="sc-inner"><p className="sc-eyebrow">{t('safety.howTag')}</p><h2>{rich(t('safety.howTitle'))}</h2><div className="sc-cards">{t('safety.commitments').map(({ title, body }, index) => <article key={index}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><section className="sc-practice"><div className="sc-inner"><p className="sc-eyebrow">{t('safety.commitmentTag')}</p><h2>{rich(t('safety.commitmentTitle'))}</h2><p>{t('safety.commitmentBody')}</p></div></section></main><SiteFooter /></div>
}
