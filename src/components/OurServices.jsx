import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './OurServices.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

import servicesHero from '../assets/services-hero.jpeg'
import rampImg      from '../assets/service-ramp.jpg'
import passengerImg from '../assets/service-passenger.jpg'
import cargoImg     from '../assets/service-cargo.jpg'
import charterImg   from '../assets/service-charter.jpg'
import cleaningImg  from '../assets/service-cleaning.jpg'
import safetyImg    from '../assets/service-safety.jpg'

const services = [
  {
    id: '01',
    icon: '✈',
    title: 'Ramp Handling',
    tagline: 'Precision on the tarmac, every single time.',
    body: 'Our ramp teams are the heartbeat of every turnaround. From aircraft marshalling and pushback to ground power supply and wheel chocking — we execute every procedure with military precision. Our agents are IATA-certified and trained to handle narrow-body, wide-body, and freighter aircraft across all weather conditions.',
    features: ['Aircraft Marshalling & Pushback', 'Ground Power Unit (GPU) Supply', 'Potable Water & Lavatory Service', 'Airstairs & Jet Bridge Operations', 'De-icing Coordination', 'FOD Checks & Tarmac Safety'],
    image: rampImg,
  },
  {
    id: '02',
    icon: '🧳',
    title: 'Passenger Handling',
    tagline: 'Every passenger. Every flight. Every time.',
    body: "We believe the passenger experience begins on the ground. Our passenger services team manages everything from check-in and boarding to special assistance — delivering a seamless, professional, and warm experience that reflects your airline's brand. We handle high volumes with speed and dignity.",
    features: ['Check-in & Boarding Gate Management', 'VIP & CIP Lounge Coordination', 'Special Assistance (PRM Services)', 'Lost & Found Management', 'Baggage Reconciliation', 'Unaccompanied Minor Handling'],
    image: passengerImg,
  },
  {
    id: '03',
    icon: '📦',
    title: 'Cargo Handling',
    tagline: 'Your freight in trusted hands.',
    body: 'From belly freight to full freighter operations, our cargo division manages the complete chain of custody for your shipments. We operate a modern cargo facility at Harare International Airport with trained handlers experienced in general cargo, express freight, perishables, live animals, and dangerous goods.',
    features: ['General & Express Cargo Handling', 'Perishables & Cold Chain Management', 'Dangerous Goods (DG) Handling', 'Live Animal Handling', 'Oversized & Heavy Cargo', 'Cargo Documentation & Manifests'],
    image: cargoImg,
  },
  {
    id: '04',
    icon: '🛫',
    title: 'Charter Services',
    tagline: 'Flexible. Discreet. World-class.',
    body: "AGS provides end-to-end ground support for private and charter operators requiring premium, personalised service. Whether it's a private jet, a VIP delegation, or a sports team charter — our dedicated charter team ensures a seamless, discreet, and efficient ground experience tailored to your exact requirements.",
    features: ['Private Jet Ground Handling', 'VIP & Diplomatic Flight Support', 'Customs & Immigration Facilitation', 'Fuel Coordination', 'Catering Liaison', 'Hangar & Parking Coordination'],
    image: charterImg,
  },
  {
    id: '05',
    icon: '🔧',
    title: 'Aircraft Cleaning',
    tagline: 'Immaculate cabins. Elevated standards.',
    body: 'A clean aircraft is a safe aircraft. Our cabin and exterior cleaning crews work to strict airline specifications — ensuring every seat pocket, overhead bin, lavatory, and cockpit meets the hygiene standards your passengers and crew deserve. We work within tight turnaround windows without compromising quality.',
    features: ['Interior Cabin Cleaning & Sanitisation', 'Exterior Washing & Polishing', 'Deep Cleaning Between Rotations', 'Seat Pocket & IFE Restocking', 'Galley Cleaning & Waste Removal', 'Cockpit Cleaning Protocols'],
    image: cleaningImg,
  },
  {
    id: '06',
    icon: '🛡',
    title: 'Safety & Compliance',
    tagline: "Safety is not a policy. It's our culture.",
    body: 'At AGS, safety underpins every operation. We maintain a comprehensive Safety Management System (SMS) aligned with ICAO and IATA ISAGO standards. Our safety team conducts regular audits, drills, and training programmes to ensure every agent operates at the highest level of compliance and awareness.',
    features: ['IATA ISAGO Compliance', 'Safety Management System (SMS)', 'Regular Safety Audits & Drills', 'Incident Reporting & Investigation', 'Airside Driver Training', 'Dangerous Goods Awareness Training'],
    image: safetyImg,
  },
]

const partners = [
  'Qatar Airways', 'Kenya Airways', 'Ethiopian Airlines',
  'South African Airways', 'Air Zimbabwe', 'Fastjet',
]

const whyCards = [
  { icon: '🎯', title: 'IATA Aligned',        body: 'All operations meet IATA ISAGO standards for safety and quality.' },
  { icon: '⚡', title: 'Rapid Response',       body: 'Our ops team is available 24/7 — no flight goes unsupported.' },
  { icon: '🤝', title: 'Airline Aligned',      body: 'We learn your SOPs and brand standards. We become your team.' },
  { icon: '📊', title: 'Performance Data',     body: 'Real-time reporting and KPI tracking for every turnaround.' },
  { icon: '🌍', title: 'Local Knowledge',      body: "Deep expertise in Zimbabwe's airports, regulations, and conditions." },
  { icon: '🏆', title: 'Proven Track Record',  body: '15+ years. 10,000+ turnarounds. Zero major safety incidents.' },
]

export default function OurServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('sv-visible')
      }),
      { threshold: 0.1 }
    )
    const targets = document.querySelectorAll(
      '.sv-strip, .sv-service-row, .sv-why, .sv-partners, .sv-cta'
    )
    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sv-page">

      {/* HERO */}
      <header className="sv-hero">
        <SiteHeader />
        <div className="sv-hero-bg">
          <img src={servicesHero} alt="AGS passenger services agent at the check-in counter" className="sv-hero-img" />
          <div className="sv-hero-overlay" />
        </div>
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
      </header>

      {/* SERVICES */}
      <section className="sv-services">
        {services.map((s, i) => (
          <div
            className={`sv-service-row ${i % 2 !== 0 ? 'sv-service-row--flip' : ''}`}
            key={s.id}
          >
            <div
              className="sv-service-visual"
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="sv-service-num">{s.id}</div>
              <div className="sv-service-big-icon">{s.icon}</div>
              <div className="sv-service-tagline">{s.tagline}</div>
            </div>

            <div className="sv-service-content">
              <h2 className="sv-service-title">{s.title}</h2>
              <p className="sv-service-body">{s.body}</p>
              <ul className="sv-service-features">
                {s.features.map((f, j) => (
                  <li key={j}>
                    <span className="sv-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* WHY AGS */}
      <section className="sv-why">
        <div className="sv-why-inner">
          <div className="sv-why-text">
            <p className="sv-tag sv-tag--light">WHY CHOOSE AGS</p>
            <h2 className="sv-h2 sv-h2--white">
              The Difference Is<br />in the Details
            </h2>
            <p>
              Every airline has had a bad ground handling experience. Missed slots,
              damaged cargo, delayed boarding, poor communication. At AGS, we have
              built our entire operation around eliminating those failure points —
              with trained people, proven processes, and a leadership team that
              takes every flight personally.
            </p>
            <p>We do not just meet the standard. We set it.</p>
          </div>
          <div className="sv-why-cards">
            {whyCards.map((c, i) => (
              <div className="sv-why-card" key={i}>
                <span className="sv-why-icon">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sv-partners">
        <p className="sv-tag" style={{ textAlign: 'center', marginBottom: '16px' }}>TRUSTED BY</p>
        <h2 className="sv-h2" style={{ textAlign: 'center', marginBottom: '48px' }}>Airlines We Serve</h2>
        <div className="sv-partners-grid">
          {partners.map((p, i) => (
            <div className="sv-partner-pill" key={i}>{p}</div>
          ))}
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
          <Link to="/our-story" className="sv-btn sv-btn--outline">Our Story</Link>
        </div>
      </section>

      <SiteFooter />

    </div>
  )
}
