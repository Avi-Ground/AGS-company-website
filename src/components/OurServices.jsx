import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './OurServices.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

import servicesHero from '../assets/services-hero.jpeg'
import charterImage from '../assets/our-services/charter.jpg'
import cargoImage from '../assets/our-services/cargo.jpeg'
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

const services = [
  {
    id: '01',
    anchor: 'passenger-ticketing',
    icon: '🧳',
    title: 'Passenger and Ticketing Services',
    tagline: 'Seamless, professional passenger service on the ground.',
    body: "Our passenger services team manages everything from check-in and boarding to special assistance, delivering a seamless, professional and warm customer experience that reflects your airline's brand. We handle high volumes with speed, effectiveness and dignity.",
    features: [
      'Check-in, Travel Document Verification',
      'Boarding and Gate Management',
      'VIP & CIP Lounge Coordination',
      'Special Assistance (VIP, CIP and PRM Services)',
      'Lost & Found Baggage Management',
      'Baggage Reconciliation',
      'Unaccompanied Minor Handling',
      'Reservations, Ticket Issuance and Rebooking (from 1 September 2026)',
      'Airport Ticket Desk Services',
      'Excess Baggage Processing and Collection',
      'Arrival and Transfer Passenger Assistance',
    ],
    image: passengerImage,
    visualClass: 'sv-service-visual--passenger-handling',
  },
  {
    id: '02',
    anchor: 'ramp-baggage',
    icon: '🛄',
    title: 'Ramp and Baggage Handling',
    tagline: 'Safe, efficient support throughout every aircraft turnaround.',
    body: 'Our ramp teams coordinate every stage of the aircraft turnaround in line with airline procedures, agreed service standards and safety requirements.',
    features: [
      'Aircraft Marshalling and Chocking',
      'Baggage, Cargo and Mail Loading and Unloading',
      'Baggage Sorting and Transportation',
      'Aircraft Pushback and Towing',
      'Passenger Steps and Passenger Assistance Units',
      'Ground Power and Air-Start Services',
      'Belt Loader and High-Loader Services',
      'Headset Communication',
      'Foreign Object Debris Inspections',
      'Aircraft Arrival and Departure Support',
      'Turnaround Coordination',
      'Ground Support Equipment Provision',
    ],
    image: baggageImage,
    visualClass: 'sv-service-visual--ramp-baggage',
  },
  {
    id: '03',
    anchor: 'cargo-handling',
    icon: '📦',
    title: 'Cargo Handling',
    tagline: 'Reliable handling from acceptance through release.',
    body: 'From belly freight to full freighter operations, our cargo division manages the complete chain of custody for your shipments. We operate a modern cargo facility at Harare International Airport with trained handlers experienced in general cargo, express freight, perishables, live animals and dangerous goods.',
    features: [
      'General & Express Cargo Handling',
      'Import and Export Cargo Handling',
      'General and Express Cargo',
      'Cargo Acceptance and Release',
      'Warehouse Handling and Inventory Control',
      'Cargo Build-Up and Breakdown',
      'Cargo Documentation and Manifest Processing',
      'Perishable and Temperature-Sensitive Cargo',
      'Dangerous Goods Handling',
      'Valuable and Vulnerable Cargo',
      'Live Animal Handling',
      'Oversized and Heavy Cargo',
      'Mail Handling and Transfer',
      'Security Screening and Cargo Surveillance',
      'Customs and Stakeholder Coordination',
      'Full-Freighter Ramp and Warehouse Handling',
    ],
    image: cargoImage,
    visualClass: 'sv-service-visual--cargo-handling',
  },
  {
    id: '04',
    anchor: 'general-sales-agent',
    icon: '📈',
    title: 'General Sales Agent',
    tagline: 'Dedicated sales and cargo support for regional carriers.',
    body: 'AGS offers dedicated General Sales Agents for premier regional carriers, including Kenya Airways and Uganda Airlines. We manage complete cargo operations and ensure seamless logistics support.',
    features: [
      'Cargo Marketing',
      'Cargo Bookings',
      'Sales Returns',
      'Query Resolution',
    ],
    image: salesImage,
    visualClass: 'sv-service-visual--sales',
  },
  {
    id: '05',
    anchor: 'charter-executive-diplomatic',
    icon: '✈',
    title: 'Charter, Executive and Diplomatic Aviation',
    tagline: 'Discreet and responsive support for specialised operations.',
    body: 'AGS provides discreet and responsive support for private, charter, executive, diplomatic and VVIP operations. Each flight is coordinated according to the operator’s specific requirements.',
    features: [
      'Private and Charter Aircraft Handling',
      'VVIP and Diplomatic Flight Support',
      'Passenger and Crew Assistance',
      'Customs and Immigration Coordination',
      'Fuel and Catering Coordination',
      'Aircraft Parking and Hangar Coordination',
      'Ground Transportation Arrangements',
      'Baggage and Cargo Handling',
      'Meet-and-Greet Services',
      'Turnaround and Departure Coordination',
    ],
    image: charterImage,
    visualClass: 'sv-service-visual--charter-services',
  },
  {
    id: '06',
    anchor: 'lounge-hospitality',
    icon: '☕',
    title: 'Lounge and Hospitality Services',
    tagline: 'Comfort, convenience and personalised attention.',
    body: 'AGS supports airlines and their premium passengers through professional lounge and hospitality services designed to provide comfort, convenience and personalised attention.',
    features: [
      'Business and Premium Passenger Lounge Services',
      'VIP and CIP Lounge Coordination',
      'Passenger Reception and Assistance',
      'Refreshment and Hospitality Services',
      'Flight Information and Boarding Coordination',
      'Meet-and-Greet Services',
    ],
    image: loungeImage,
    visualClass: 'sv-service-visual--lounge',
  },
  {
    id: '07',
    anchor: 'aircraft-appearance',
    icon: '✨',
    title: 'Aircraft Appearance Services',
    tagline: 'A clean, welcoming cabin within demanding turnaround times.',
    body: 'Our aircraft appearance teams work within demanding turnaround times to deliver a clean, welcoming cabin that meets each airline’s presentation and hygiene standards.',
    features: [
      'Cabin Cleaning and Sanitisation',
      'Deep Cleaning Between Rotations',
      'Seat Pocket and Cabin Presentation',
      'Galley and Lavatory Cleaning',
      'Waste Removal',
      'Cabin Supply and Amenity Replenishment',
      'Cockpit Cleaning in Accordance with Airline Procedures',
    ],
    image: aircraftAppearanceImage,
    visualClass: 'sv-service-visual--aircraft-appearance',
  },
  {
    id: '08',
    anchor: 'airline-representation',
    icon: '🌍',
    title: 'Airline Representation and Operational Support',
    tagline: 'Locally managed support for effective airline operations.',
    body: 'AGS can provide locally managed support that allows airline clients to maintain effective oversight of their operations and customer service requirements in Zimbabwe.',
    features: [
      'Airport Representation',
      'Airline and Stakeholder Liaison',
      'Passenger Sales and Service Support',
      'Operational Reporting',
      'Disruption and Irregular Operations Support',
      'Service Provider Coordination',
      'Local Administrative and Logistical Support',
    ],
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

const whyCards = [
  { icon: '🎯', title: 'IATA Aligned',        body: 'All operations meet IATA ISAGO standards for safety and quality.' },
  { icon: '⚡', title: 'Rapid Response',       body: 'Our ops team is available 24/7 — no flight goes unsupported.' },
  { icon: '🤝', title: 'Airline Aligned',      body: 'We learn your SOPs and brand standards. We become your team.' },
  { icon: '📊', title: 'Performance Data',     body: 'Real-time reporting and KPI tracking for every turnaround.' },
  { icon: '🌍', title: 'Local Knowledge',      body: "Deep expertise in Zimbabwe's airports, regulations, and conditions." },
  { icon: '🏆', title: 'Proven Track Record',  body: '25+ years. 10,000+ turnarounds. Zero major safety incidents.' },
]

const serviceCommitments = [
  ['99.8%', 'On-Time Performance', 'We target and consistently achieve industry-leading on-time departure rates across all handled flights.'],
  ['< 30 min', 'Turnaround Time', 'Narrow-body aircraft turnarounds completed within 30 minutes without compromising safety or quality.'],
  ['24 / 7', 'Operations Support', 'Our operations team is available around the clock — no flight goes without support at any hour.'],
  ['0', 'Major Safety Incidents', 'Our safety record speaks for itself. Zero major incidents across 15+ years of operations.'],
  ['100%', 'Trained Staff', 'Every agent on the ramp is fully certified. No shortcuts, no unqualified staff on any aircraft.'],
  ['< 2 hrs', 'Issue Resolution', 'Operational issues reported to us are escalated and resolved within two hours, guaranteed.'],
]

export default function OurServices() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
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
    return () => observer.disconnect()
  }, [hash])

  return (
    <div className="sv-page">
      {/* HERO */}
      <header className="sv-hero">
        <SiteHeader />
        <div className="sv-hero-inner">
          <div className="sv-hero-content">
            <div className="sv-tag">WHAT WE DO</div>
            <h1 className="sv-hero-title">
              Ground.<br />
              <em> Handling Elevated.</em>
            </h1>
            <p className="sv-hero-sub">
              AGS provides integrated aviation ground-handling services tailored to the operational
              requirements and service standards of each client.
            </p>
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
          <div className="sv-services-heading">
            <div>
              <p className="sv-tag">OUR SERVICES</p>
              <h2 className="sv-services-title">Ground support built around <em>your operation.</em></h2>
            </div>
            <p className="sv-services-intro">
              From passenger check-in and aircraft turnaround to cargo handling and charter support,
              our trained teams work together to deliver safe, efficient and reliable operations.
            </p>
          </div>

          <div className="sv-services-grid">
            {services.map((s, i) => (
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
                  <span className="sv-service-card-tagline">{s.tagline}</span>
                </div>

                <div className="sv-service-card-content">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>

                  <div className="sv-service-card-divider" />

                  <ul className="sv-service-features">
                    {s.features.map((f, j) => (
                      <li key={j}>
                        <span className="sv-check">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/contact?service=${encodeURIComponent(s.title)}`} className="sv-service-link">
                    Discuss this service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AGS */}
      <section className="sv-why">
        <div className="sv-why-inner">
          <div className="sv-why-text">
            <p className="sv-tag sv-tag--light">WHY CHOOSE AGS</p>
            <h2 className="sv-h2 sv-h2--white">
              The Difference Is<br />in the Details
            </h2>
            <p>We do not just meet the standard. We set it.</p>
          </div>
          <div className="sv-why-cards">
            {whyCards.map((c, i) => (
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
          <p className="sv-tag">OUR PROMISE</p>
          <h2 className="sv-h2">Service Commitments</h2>
          <p className="sv-commitments-intro">At AGS, operational excellence is driven by real-world accountability. We track performance, report results openly to our airline partners, and continuously refine our processes for dependable service.</p>
          <div className="sv-commitments-grid">
            {serviceCommitments.map(([metric, label, description]) => <article className="sv-commitment-card" key={label}><strong>{metric}</strong><h3>{label}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sv-partners">
        <p className="sv-tag" style={{ textAlign: 'center', marginBottom: '16px' }}>TRUSTED BY</p>
        <h2 className="sv-h2" style={{ textAlign: 'center', marginBottom: '48px' }}>Airlines We Serve</h2>
        <div className="sv-partners-grid">
          {partners.map((partner) => (
            <div className="sv-partner-logo" key={partner.name}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
        <div className="sv-specialist-partners">
          <p className="sv-tag" style={{ textAlign: 'center', marginBottom: '16px' }}>ALSO TRUSTED BY</p>
          <h3>Specialist aviation partners</h3>
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
        <h2 className="sv-cta-title">Ready to Partner with AGS?</h2>
        <p className="sv-cta-body">
          Tell us about your operation and we will put together a tailored
          ground handling solution for your airline, cargo operation, or charter fleet.
        </p>
        <div className="sv-cta-btns">
          <Link to="/" className="sv-btn sv-btn--white">Contact Our Team</Link>
          <Link to="/our-story" className="sv-btn sv-btn--outline">Our Journey</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
