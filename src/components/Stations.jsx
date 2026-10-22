import { useEffect } from 'react'
import './Stations.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { useTranslation } from '../i18n'
import victoriaFallsImage from '../assets/victoria-falls-waterfall.png'
import harareAirportImage from '../assets/harare-airport.jpg'

// Services offered at each station (keys under stations.* in the locale files).
const stationServices = {
  HRE: ['stations.servicePassenger', 'stations.serviceRamp', 'stations.serviceCargo', 'stations.serviceAppearance', 'stations.serviceRepresentation'],
  VFA: ['stations.servicePassenger', 'stations.serviceAppearance'],
  BUQ: ['stations.servicePassenger', 'stations.serviceAppearance'],
}

function StationServices({ code }) {
  const { t } = useTranslation()
  return (
    <div className="station-services">
      <span className="station-services-label">{t('stations.servicesOffered')}</span>
      <ul>{stationServices[code].map((service) => <li key={service}>{t(service)}</li>)}</ul>
    </div>
  )
}

function StationCard({ code }) {
  const { t } = useTranslation()
  const key = code.toLowerCase()
  const city = t(`stations.cities.${key}`)

  return (
    <section className="station-inventory" aria-labelledby={`station-title-${code}`}>
      <div className={`station-airport-heading${code === 'VFA' ? ' station-airport-heading-victoria-falls' : ''}`}>
        {code === 'VFA' && <img className="station-heading-image" src={victoriaFallsImage} alt="" aria-hidden="true" />}
        <span className="station-location-mark" aria-hidden="true">{code}</span>
        <div>
          <span className="stations-country">{t('stations.stationLabel', { city: city.toUpperCase() })}</span>
          <h2 id={`station-title-${code}`}>{t(`stations.airports.${key}`)}</h2>
          <StationServices code={code} />
        </div>
      </div>
    </section>
  )
}

export default function Stations() {
  const { t } = useTranslation()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="stations-page">
      <SiteHeader />
      <main className="stations-main">
        <section className="stations-intro">
          <span className="stations-country">{t('stations.introTag')}</span>
          <p>{t('stations.introBody')}</p>
        </section>
        <section className="station-location station-location--photo">
          <img className="station-heading-image" src={harareAirportImage} alt="" aria-hidden="true" />
          <div className="station-location-mark" aria-hidden="true">HRE</div>
          <div>
            <span className="stations-country">{t('stations.harareTag')}</span>
            <h2>{t('stations.harareAirport')}</h2>
            <p>{t('stations.harareBody')}</p>
            <StationServices code="HRE" />
          </div>
          <a href="/contact-us">{t('stations.contactUs')} <span className="dir-arrow" aria-hidden="true">↗</span></a>
        </section>
        <StationCard code="VFA" />
        <StationCard code="BUQ" />
      </main>
      <SiteFooter />
    </div>
  )
}
