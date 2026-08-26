import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './OurServices.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

import servicesHero from '../assets/services-hero.jpeg'
import cargoImage from '../assets/cargo.jpeg'
import qatarAirways from '../assets/airline-logos/qatar-airways.png'
import flyEmirates from '../assets/airline-logos/fly-emirates.png'
import kenyaAirways from '../assets/airline-logos/kenya-airways.png'
import ugandaAirlines from '../assets/airline-logos/uganda-airlines.png'
import rwandAir from '../assets/airline-logos/rwandair.png'
import fastjet from '../assets/airline-logos/fastjet.png'
import airTanzania from '../assets/airline-logos/air-tanzania.png'
import ugandaAircraft from '../assets/partner-aircraft/Uganda_Airlines_high_resolution.jpg'
import fastjetAircraft from '../assets/partner-aircraft/Fastjet_high_resolution.jpg'
import rwandAirAircraft from '../assets/partner-aircraft/RwandAir_high_resolution.jpg'
import qatarAircraft from '../assets/partner-aircraft/Qatar_Airways_high_resolution.jpg'
import airTanzaniaAircraft from '../assets/partner-aircraft/Air_Tanzania_high_resolution.png'
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
    id: '03',
    icon: '✈',
    title: 'Aircraft Handling',
    tagline: 'Precision on the tarmac, every single time.',
    body: 'Our ramp teams are the heartbeat of every turnaround. From aircraft marshalling and pushback to ground power supply and wheel chocking — we execute every procedure with military precision. Our agents are IATA-certified and trained to handle narrow-body, wide-body, and freighter aircraft across all weather conditions.',
    features: ['Aircraft Marshalling & Pushback', 'Ground Power Unit (GPU) Supply', 'Potable Water & Lavatory Service', 'Airstairs & Jet Bridge Operations', 'De-icing Coordination', 'FOD Checks & Tarmac Safety'],
    image: airTanzaniaAircraft,
    visualClass: 'sv-service-visual--aircraft-handling',
  },
  {
    id: '01',
    icon: '🧳',
    title: 'Passenger Handling',
    tagline: 'Every passenger. Every flight. Every time.',
    body: "We believe the passenger experience begins on the ground. Our passenger services team manages everything from check-in and boarding to special assistance — delivering a seamless, professional, and warm experience that reflects your airline's brand. We handle high volumes with speed and dignity.",
    features: ['Check-in & Boarding Gate Management', 'VIP & CIP Lounge Coordination', 'Special Assistance (PRM Services)', 'Lost & Found Management', 'Baggage Reconciliation', 'Unaccompanied Minor Handling'],
    image: qatarAircraft,
    visualClass: 'sv-service-visual--passenger-handling',
  },
  {
    id: '02',
    icon: '📦',
    title: 'Cargo Handling',
    tagline: 'Your freight in trusted hands.',
    body: 'From belly freight to full freighter operations, our cargo division manages the complete chain of custody for your shipments. We operate a modern cargo facility at Harare International Airport with trained handlers experienced in general cargo, express freight, perishables, live animals, and dangerous goods.',
    features: ['General & Express Cargo Handling', 'Perishables & Cold Chain Management', 'Dangerous Goods (DG) Handling', 'Live Animal Handling', 'Oversized & Heavy Cargo', 'Cargo Documentation & Manifests'],
    image: cargoImage,
    visualClass: 'sv-service-visual--cargo-handling',
  },
  {
    id: '05',
    icon: '🛫',
    title: 'Charter Services',
    tagline: 'Flexible. Discreet. World-class.',
    body: "AGS provides end-to-end ground support for private and charter operators requiring premium, personalised service. Whether it's a private jet, a VIP delegation, or a sports team charter — our dedicated charter team ensures a seamless, discreet, and efficient ground experience tailored to your exact requirements.",
    features: ['Private Jet Ground Handling', 'VIP & Diplomatic Flight Support', 'Customs & Immigration Facilitation', 'Fuel Coordination', 'Catering Liaison', 'Hangar & Parking Coordination'],
    image: rwandAirAircraft,
    visualClass: 'sv-service-visual--charter-services',
  },
  {
    id: '06',
    icon: '🔧',
    title: 'Aircraft Cleaning',
    tagline: 'Immaculate cabins. Elevated standards.',
    body: 'A clean aircraft is a safe aircraft. Our cabin and exterior cleaning crews work to strict airline specifications — ensuring every seat pocket, overhead bin, lavatory, and cockpit meets the hygiene standards your passengers and crew deserve. We work within tight turnaround windows without compromising quality.',
    features: ['Interior Cabin Cleaning & Sanitisation', 'Exterior Washing & Polishing', 'Deep Cleaning Between Rotations', 'Seat Pocket & IFE Restocking', 'Galley Cleaning & Waste Removal', 'Cockpit Cleaning Protocols'],
    image: fastjetAircraft,
    visualClass: 'sv-service-visual--aircraft-cleaning',
  },
  {
    id: '04',
    title: 'Warehousing',
    tagline: 'Secure storage, ready when you need it.',
    body: 'Our warehousing solutions keep freight secure, organised, and ready for onward movement. We manage storage, inventory, and handling with the operational discipline needed to keep every shipment protected and on schedule.',
    features: ['Secure Cargo Storage', 'Inventory Management', 'Cargo Build-up & Breakdown', 'Palletisation & Labelling', 'Shipment Tracking', 'Controlled Access Facilities'],
    image: ugandaAircraft,
    visualClass: 'sv-service-visual--warehousing',
  },
  {
    id: '07',
    title: 'Ramp & Baggage Handling',
    tagline: 'Safe, swift coordination from kerbside to aircraft.',
    body: 'Our trained ramp teams coordinate baggage movement, aircraft loading and turnaround support with careful control at every stage. We work to airline procedures to keep bags, equipment and flights moving safely and on time.',
    features: ['Baggage Sorting & Loading', 'Baggage Make-up & Delivery', 'Weight & Balance Support', 'Load Control Coordination', 'Turnaround Equipment Handling', 'Ramp Safety Monitoring'],
    image: airTanzaniaAircraft,
    visualClass: 'sv-service-visual--ramp-baggage',
  },
  {
    id: '08',
    title: 'Airport Appearance Services',
    tagline: 'A polished airport experience at every touchpoint.',
    body: 'AGS helps airlines maintain a professional, welcoming presence throughout their airport operation. From branded check-in areas to lounges and gate spaces, our teams support a consistently high standard of presentation.',
    features: ['Check-in Area Presentation', 'Gate & Lounge Readiness', 'Airline Branding Support', 'Cabin Presentation Coordination', 'Customer-Facing Area Checks', 'Service Quality Monitoring'],
    image: qatarAircraft,
    visualClass: 'sv-service-visual--airport-appearance',
  },
  {
    id: '09',
    title: 'Airline Representation & Operations Support',
    tagline: 'A capable local team for every operation.',
    body: 'We provide dependable local representation for airline and aviation partners, coordinating stakeholders, monitoring day-to-day operations and providing the on-the-ground insight needed for smooth, compliant service delivery.',
    features: ['Station & Airline Representation', 'Operational Coordination', 'Stakeholder Liaison', 'Irregular Operations Support', 'Performance Reporting', '24/7 Local Assistance'],
    image: ugandaAircraft,
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
  { icon: '🏆', title: 'Proven Track Record',  body: '15+ years. 10,000+ turnarounds. Zero major safety incidents.' },
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
  const orderedServices = [services[1], services[2], services[0], services[6], services[5], services[3], services[4], services[7], services[8]]
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
              AGS delivers end-to-end ground operations that keep airlines moving,
              passengers smiling, and cargo flowing — safely, efficiently, and on time.
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
              From passenger and aircraft handling to cargo, charter and airline representation,
              AGS brings every part of the ground operation together under one dependable team.
            </p>
          </div>

          <div className="sv-services-grid">
            {orderedServices.map((s, i) => (
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
