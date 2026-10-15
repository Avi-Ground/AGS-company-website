import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './OurServices.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { rich, useTranslation } from '../i18n'

import servicesHero from '../assets/passenger.jpeg'
import charterImage from '../assets/our-services/charter.jpg'
import cargoImage from '../assets/cargo.jpeg'
import airlineRepresentationImage from '../assets/our-services/airline-representation.jpg'
import aircraftAppearanceImage from '../assets/our-services/aircraft-appearance.jpg'
import passengerImage from '../assets/our-services/passenger.jpg'
import baggageImage from '../assets/our-services/baggage.jpg'
import loungeImage from '../assets/our-services/lounge.jpg'
import salesImage from '../assets/our-services/sales.jpg'

import qatarAirways from '../assets/airline-logos/qatar-airways.png'
import flyEmirates from '../assets/airline-logos/fly-emirates.png'
import kenyaAirways from '../assets/airline-logos/kenya-airways.png'
import ugandaAirlines from '../assets/airline-logos/uganda-airlines.png'
import rwandAir from '../assets/airline-logos/rwandair.png'
import fastjet from '../assets/airline-logos/fastjet.png'
import airTanzania from '../assets/airline-logos/air-tanzania.png'
import proCharter from '../assets/partner-logos/pro-charter.png'
import fireblade from '../assets/partner-logos/fireblade.png'
import airmaster from '../assets/partner-logos/airmaster.png'
import national from '../assets/partner-logos/national.png'
import skipAviation from '../assets/partner-logos/skip-aviation-consultants.png'
import astral from '../assets/partner-logos/astral.png'
import mkvAviation from '../assets/partner-logos/mkv-aviation.png'
import astraAviation from '../assets/partner-logos/astra-aviation.png'
import geosky from '../assets/partner-logos/geosky.png'
import skyguard from '../assets/partner-logos/skyguard.png'

// Text for each service lives in the locale files under services.items (same order).
const services = [
  {
    id: '01',
    anchor: 'passenger-ticketing',
    icon: '🧳',
    image: passengerImage,
    visualClass: 'sv-service-visual--passenger-handling',
  },
  {
    id: '02',
    anchor: 'ramp-baggage',
    icon: '🛄',
    image: baggageImage,
    visualClass: 'sv-service-visual--ramp-baggage',
  },
  {
    id: '03',
    anchor: 'cargo-handling',
    icon: '📦',
    image: cargoImage,
    visualClass: 'sv-service-visual--cargo-handling',
  },
  {
    id: '04',
    anchor: 'general-sales-agent',
    icon: '📈',
    image: salesImage,
    visualClass: 'sv-service-visual--sales',
  },
  {
    id: '05',
    anchor: 'charter-executive-diplomatic',
    icon: '✈',
    image: charterImage,
    visualClass: 'sv-service-visual--charter-services',
  },
  {
    id: '06',
    anchor: 'lounge-hospitality',
    icon: '☕',
    image: loungeImage,
    visualClass: 'sv-service-visual--lounge',
  },
  {
    id: '07',
    anchor: 'aircraft-appearance',
    icon: '✨',
    image: aircraftAppearanceImage,
    visualClass: 'sv-service-visual--aircraft-appearance',
  },
  {
    id: '08',
    anchor: 'airline-representation',
    icon: '🌍',
    image: airlineRepresentationImage,
    visualClass: 'sv-service-visual--airline-representation',
  },
]

const partners = [
  { name: 'Qatar Airways', logo: qatarAirways },
  { name: 'Kenya Airways', logo: kenyaAirways },
  { name: 'Uganda Airlines', logo: ugandaAirlines },
  { name: 'RwandAir', logo: rwandAir },
  { name: 'Fastjet', logo: fastjet },
  { name: 'Fly Emirates', logo: flyEmirates },
  { name: 'Air Tanzania', logo: airTanzania },
]

const specialistPartners = [
  { name: 'Pro Charter', logo: proCharter },
  { name: 'Fireblade', logo: fireblade },
  { name: 'Airmaster', logo: airmaster },
  { name: 'National', logo: national },
  { name: 'Skip Aviation Consultants', logo: skipAviation },
  { name: 'Astral', logo: astral },
  { name: 'MKV Aviation', logo: mkvAviation },
  { name: 'Astra Aviation', logo: astraAviation },
  { name: 'Geosky', logo: geosky },
  { name: 'Skyguard', logo: skyguard },
]

export default function OurServices() {
  const { hash } = useLocation()
  const { t } = useTranslation()
  const serviceCopy = t('services.items')

  useEffect(() => {
    let settleTimer
    if (hash) {
      // Jump straight to the requested service (e.g. from a homepage card) and show it
      // at once instead of waiting for its scroll fade-in. The second jump corrects for
      // any layout shift while images above it finish loading.
      const jumpToService = () => {
        const target = document.getElementById(hash.slice(1))
        if (!target) return
        target.classList.add('sv-visible')
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
      requestAnimationFrame(jumpToService)
      settleTimer = window.setTimeout(jumpToService, 400)
    } else {
      window.scrollTo(0, 0)
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('sv-visible')
      }),
      { threshold: 0.1 }
    )
    const targets = document.querySelectorAll(
      '.sv-strip, .sv-service-card, .sv-why, .sv-partners, .sv-cta'
    )
    targets.forEach(el => observer.observe(el))
    return () => {
      observer.disconnect()
      window.clearTimeout(settleTimer)
    }
  }, [hash])

  return (
    <div className="sv-page">
      {/* HERO */}
      <header className="sv-hero">
        <SiteHeader />
        <div className="sv-hero-inner">
          <div className="sv-hero-content">
            <div className="sv-tag">{t('services.tag')}</div>
            <h1 className="sv-hero-title">{rich(t('services.heroTitle'))}</h1>
            <p className="sv-hero-sub">{t('services.heroSub')}</p>
          </div>
        </div>
        <div className="sv-hero-art" aria-hidden="true">
          <div className="sv-hero-image-frame">
            <img src={servicesHero} alt="AGS passenger services agent at the check-in counter" className="sv-hero-img" />
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="sv-services">
        <div className="sv-services-inner">
          <div className="sv-services-grid">
            {services.map((s, i) => {
              const copy = serviceCopy[i]
              return (
              <article
                className="sv-service-card"
                key={s.id}
                id={s.anchor}
              >
                <div
                  className={`sv-service-card-image ${s.visualClass}`}
                  style={{ backgroundImage: `url(${s.image})` }}
                >
                  <span className="sv-service-number">{String(i + 1).padStart(2, '0')}</span>
                  <div className="sv-service-image-overlay" />
                  <span className="sv-service-card-tagline">{copy.tagline}</span>
                </div>

                <div className="sv-service-card-content">
                  <h3>{copy.title}</h3>
                  <p>{copy.body}</p>

                  <div className="sv-service-card-divider" />

                  <ul className="sv-service-features">
                    {copy.features.map((f, j) => (
                      <li key={j}>
                        <span className="sv-check">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/contact?service=${encodeURIComponent(copy.title)}`} className="sv-service-link">
                    {t('services.discuss')} <span className="dir-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY AGS */}
      <section className="sv-why">
        <div className="sv-why-inner">
          <div className="sv-why-text">
            <p className="sv-tag sv-tag--light">{t('services.whyTag')}</p>
            <h2 className="sv-h2 sv-h2--white">{rich(t('services.whyTitle'))}</h2>
            <p>{t('services.whyBody')}</p>
          </div>
          <div className="sv-why-cards">
            {t('services.whyCards').map((c, i) => (
              <div className="sv-why-card" key={i}>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-commitments">
        <div className="sv-commitments-inner">
          <p className="sv-tag">{t('services.promiseTag')}</p>
          <h2 className="sv-h2">{t('services.promiseTitle')}</h2>
          <p className="sv-commitments-intro">{t('services.promiseIntro')}</p>
          <div className="sv-commitments-grid">
            {t('services.commitments').map(({ metric, label, body }) => <article className="sv-commitment-card" key={label}><strong>{metric}</strong><h3>{label}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sv-partners">
        <p className="sv-tag sv-tag--center">{t('services.trustedTag')}</p>
        <div className="sv-partners-grid">
          {partners.map((partner) => (
            <div className="sv-partner-logo" key={partner.name}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
        <div className="sv-specialist-partners">
          <h3>{t('services.specialistTitle')}</h3>
          <div className="sv-partners-grid">
            {specialistPartners.map((partner) => (
              <div className="sv-partner-logo" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sv-cta">
        <h2 className="sv-cta-title">{t('services.ctaTitle')}</h2>
        <p className="sv-cta-body">{t('services.ctaBody')}</p>
        <div className="sv-cta-btns">
          <Link to="/" className="sv-btn sv-btn--white">{t('services.ctaContact')}</Link>
          <Link to="/our-story" className="sv-btn sv-btn--outline">{t('services.ctaJourney')}</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}