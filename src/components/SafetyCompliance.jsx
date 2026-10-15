import './SafetyCompliance.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { rich, useTranslation } from '../i18n'
import safetyImage from '../assets/qatar-airways.jpeg'

export default function SafetyCompliance() {
  const { t } = useTranslation()
  return (
    <div className="sc-page">
      <SiteHeader />
      <main>
        <section className="sc-hero">
          <div className="sc-inner sc-hero-grid">
            <div>
              <p className="sc-eyebrow">{t('safety.eyebrow')}</p>
              <h1>{rich(t('safety.heroTitle'))}</h1>
              <p className="sc-lede">{t('safety.lede')}</p>
              <a href="/contact-us#enquiry" className="sc-cta">{t('safety.cta')} <span className="dir-arrow">→</span></a>
            </div>
            <img src={safetyImage} alt="AGS safety and compliance operations" />
          </div>
        </section>

        <section className="sc-standards">
          <div className="sc-inner">
            <div className="sc-approach">
              <div>
                <p className="sc-eyebrow">{t('safety.approachTag')}</p>
                <h2>{rich(t('safety.approachTitle'))}</h2>
              </div>
              <p className="sc-approach-body">{t('safety.approachBody')}</p>
            </div>
            <div className="sc-cards sc-cards--two">
              {t('safety.pillars').map(({ title, body }, index) => (
                <article key={index}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-policies">
          <div className="sc-inner">
            <p className="sc-eyebrow">{t('safety.policiesTag')}</p>
            <h2>{rich(t('safety.policiesTitle'))}</h2>
            <p className="sc-policies-intro">{t('safety.policiesIntro')}</p>
            <ul className="sc-policy-list">
              {t('safety.policies').map((policy) => (
                <li key={policy}><span aria-hidden="true">✓</span>{policy}</li>
              ))}
            </ul>
            <p className="sc-policies-outro">{t('safety.policiesOutro')}</p>
          </div>
        </section>

        <section className="sc-practice">
          <div className="sc-inner">
            <p className="sc-eyebrow">{t('safety.closingTag')}</p>
            <h2>{rich(t('safety.closingTitle'))}</h2>
            <p>{t('safety.closingBody')}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
