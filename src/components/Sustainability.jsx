import { useEffect } from 'react'
import './Sustainability.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { rich, useTranslation } from '../i18n'
import communityKids from '../assets/community-kids.jpeg'

export default function Sustainability() {
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('sus-visible')
    }), { threshold: 0.12 })
    document.querySelectorAll('.sus-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const cards = t('sustainability.cards')

  return <div className="sus-page"><SiteHeader /><main className="sus-page-content" aria-label={t('sustainability.pageLabel')}><section className="sus-community sus-fade"><div className="sus-community-copy"><p>{t('sustainability.communityTag')}</p><h2>{rich(t('sustainability.communityTitle'))}</h2><span>{t('sustainability.communityIntro')}</span></div><img src={communityKids} alt="Children from the communities AGS serves" /><div className="sus-cards">{cards.map(({ title, body }, i) => <article key={i} className="sus-fade" style={{ transitionDelay: `${i * 0.1}s` }}><h3>{title}</h3><p>{body}</p></article>)}</div></section><section className="sus-policies sus-fade"><p>{t('sustainability.policiesTag')}</p><h2>{rich(t('sustainability.policiesTitle'))}</h2><span>{t('sustainability.policiesBody')}</span></section></main><SiteFooter /></div>
}
