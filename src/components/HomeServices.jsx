import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeServices.css'
import { useTranslation } from '../i18n'

import cargoImg     from '../assets/cargo.jpeg'
import passengerImg from '../assets/passenger.jpeg'
import rampImg      from '../assets/ramp.jpeg'
import salesImg     from '../assets/our-services/sales.jpg'
import charterImg   from '../assets/our-services/charter.jpg'
import loungeImg    from '../assets/our-services/lounge.jpg'
import appearanceImg from '../assets/our-services/aircraft-appearance.jpg'
import representationImg from '../assets/our-services/airline-representation.jpg'

// Same order as services.items in the locale files and the Our Services page.
const services = [
  { anchor: 'passenger-ticketing', img: passengerImg },
  { anchor: 'ramp-baggage', img: rampImg },
  { anchor: 'cargo-handling', img: cargoImg },
  { anchor: 'general-sales-agent', img: salesImg },
  { anchor: 'charter-executive-diplomatic', img: charterImg },
  { anchor: 'lounge-hospitality', img: loungeImg },
  { anchor: 'aircraft-appearance', img: appearanceImg },
  { anchor: 'airline-representation', img: representationImg },
]

const SWAP_EVERY_MS = 3200

export default function HomeServices() {
  const { t } = useTranslation()
  const titles = t('services.items').map((item) => item.title)

  // Three cards on screen; every few seconds the next card in turn switches to the next
  // service. Because each new service is the one shown longest ago, a service never
  // appears twice at once and all eight keep cycling.
  const [rotation, setRotation] = useState({ shown: [0, 2, 1], previous: [null, null, null], next: 3, slot: 0 })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRotation(({ shown, previous, next, slot }) => {
        const updated = [...shown]
        const before = [...previous]
        before[slot] = shown[slot]
        updated[slot] = next
        return { shown: updated, previous: before, next: (next + 1) % services.length, slot: (slot + 1) % shown.length }
      })
    }, SWAP_EVERY_MS)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hp-services">
      <h2 className="hp-services-title hp-animate">{t('home.servicesTitle')}</h2>
      <div className="hp-services-grid">
        {rotation.shown.map((serviceIndex, slot) => {
          const service = services[serviceIndex]
          const previousIndex = rotation.previous[slot]
          const layer = (index, state) => (
            <div className={`hp-service-layer hp-service-layer--${state}`} key={`${state}-${services[index].anchor}`}>
              <div className="hp-service-img-wrap">
                <img src={services[index].img} alt="" className="hp-service-img" />
              </div>
              <span className="hp-service-name">{titles[index]}</span>
            </div>
          )
          return (
            <Link to={`/our-services#${service.anchor}`} className="hp-service-card hp-animate" key={slot}>
              {/* The previous service stays underneath while the new one crossfades in over it. */}
              <div className="hp-service-stack">
                {previousIndex !== null && layer(previousIndex, 'previous')}
                {layer(serviceIndex, previousIndex === null ? 'first' : 'current')}
              </div>
            </Link>
          )
        })}
      </div>
      <Link to="/our-services" className="hp-find-out-more">{t('home.findOutMore')}</Link>
    </section>
  )
}
