import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './OurStory.css'

const timeline = [
  {
    year: '2010',
    title: 'The Beginning',
    body: 'Aviation Ground Services was founded in Harare with a small but passionate team of 12 ground handling professionals. Our first contract was with a regional carrier at Harare International Airport — and we delivered flawlessly from day one.',
  },
  {
    year: '2013',
    title: 'Expanding Our Reach',
    body: 'AGS secured its first major airline partnership, extending operations to Bulawayo Joshua Mqabuko Nkomo International Airport. Our workforce grew to over 60 staff members, all trained to IATA ground handling standards.',
  },
  {
    year: '2016',
    title: 'Cargo Operations Launch',
    body: 'Recognising the growing demand for reliable freight handling, AGS launched a dedicated cargo division — offering belly freight and full freighter handling for international carriers flying into Zimbabwe.',
  },
  {
    year: '2019',
    title: 'A Decade of Trust',
    body: 'By our ninth year, AGS had handled over 10,000 aircraft turnarounds without a major safety incident. We reached 150 staff nationwide and were recognised as one of Zimbabwe\'s most reliable aviation service providers.',
  },
  {
    year: '2021',
    title: 'Surviving & Thriving',
    body: 'Despite the global aviation downturn, AGS retained its full workforce and used the period to invest in staff training, safety upgrades, and new ground support equipment — emerging stronger than ever.',
  },
  {
    year: '2023',
    title: 'International Partnerships',
    body: 'AGS signed landmark handling agreements with Qatar Airways and Kenya Airways — marking our entry into serving Tier-1 international carriers. A proud milestone for Zimbabwean aviation.',
  },
  {
    year: '2025',
    title: 'Leading the Region',
    body: 'With 250+ employees, 12 airline partnerships, and operations across 3 airports, AGS stands as Zimbabwe\'s premier ground handler — setting the standard for safety, speed, and service excellence across Southern Africa.',
  },
]

const achievements = [
  { number: '250+', label: 'Employees Nationwide' },
  { number: '12',   label: 'Airline Partnerships' },
  { number: '3',    label: 'Airports Served' },
  { number: '15+',  label: 'Years of Excellence' },
  { number: '0',    label: 'Major Safety Incidents' },
  { number: '10K+', label: 'Aircraft Turnarounds' },
]

export default function OurStory() {
  const fadeRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('os-visible')),
      { threshold: 0.12 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <div className="os-page">

      {/* ── SLIM NAV ── */}
      <nav className="os-nav">
        <Link to="/" className="os-nav-back">← Back to Home</Link>
        <span className="os-nav-label">Who We Are</span>
      </nav>

      {/* ── HERO ── */}
      <header className="os-hero">
        <div className="os-hero-bg" />
        <div className="os-hero-content">
          <div className="os-tag">OUR STORY</div>
          <h1 className="os-hero-title">
            From the Tarmac<br />
            <em>to the Top.</em>
          </h1>
          <p className="os-hero-sub">
            A Zimbabwean company built on dedication, discipline, and an unshakeable belief
            that world-class ground handling belongs right here at home.
          </p>
        </div>
        <div className="os-hero-scroll">
          <div className="os-scroll-mouse"><div className="os-scroll-dot" /></div>
          <span>Scroll to explore our journey</span>
        </div>
      </header>

      {/* ── INTRO ── */}
      <section className="os-intro" ref={ref}>
        <div className="os-intro-text">
          <h2 className="os-h2">How It All Started</h2>
          <p>
            Aviation Ground Services (AGS) was born out of a simple but powerful idea —
            that Zimbabwe's airports deserved a ground handler that could match the
            standards of the world's best airlines. Founded by aviation professionals
            who had spent years working on the ramp, AGS was built from the ground up
            with safety, efficiency, and pride at its core.
          </p>
          <p>
            From our very first turnaround, we set out to prove that a homegrown
            Zimbabwean company could operate at the highest international standards.
            More than a decade later, that conviction drives everything we do.
          </p>
        </div>
        <div className="os-intro-pull">
          <span className="os-pull-line" />
          <blockquote>
            "We didn't just want to handle aircraft —<br/>we wanted to set the standard."
          </blockquote>
          <cite>— Founder, Aviation Ground Services</cite>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="os-achievements" ref={ref}>
        <div className="os-achievements-inner">
          <p className="os-achievements-eyebrow">By The Numbers</p>
          <div className="os-achievements-grid">
            {achievements.map((a, i) => (
              <div className="os-achievement" key={i}>
                <span className="os-achievement-num">{a.number}</span>
                <span className="os-achievement-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="os-timeline-section" ref={ref}>
        <div className="os-timeline-header">
          <p className="os-tag os-tag--dark">OUR JOURNEY</p>
          <h2 className="os-h2">15 Years on the Ramp</h2>
          <p className="os-timeline-sub">
            Every year has brought new challenges, new milestones, and a growing
            team of professionals committed to keeping Zimbabwe's skies moving.
          </p>
        </div>

        <div className="os-timeline">
          {timeline.map((item, i) => (
            <div className={`os-tl-item ${i % 2 === 0 ? 'os-tl-left' : 'os-tl-right'}`} key={i} ref={ref}>
              <div className="os-tl-card">
                <div className="os-tl-year">{item.year}</div>
                <h3 className="os-tl-title">{item.title}</h3>
                <p className="os-tl-body">{item.body}</p>
              </div>
              <div className="os-tl-dot" />
            </div>
          ))}
          <div className="os-tl-line" />
        </div>
      </section>

      {/* ── WHERE WE ARE TODAY ── */}
      <section className="os-today" ref={ref}>
        <div className="os-today-inner">
          <div className="os-today-text">
            <p className="os-tag os-tag--red">TODAY</p>
            <h2 className="os-h2 os-h2--white">Zimbabwe's Premier Ground Handler</h2>
            <p>
              AGS today is a full-service ground handling company operating across
              Harare, Bulawayo, and Victoria Falls International Airports. We serve
              commercial airlines, cargo carriers, and private charter operators —
              handling every aspect of ground operations from ramp services and
              passenger handling to cargo management and aircraft cleaning.
            </p>
            <p>
              Our team of over 250 trained professionals shows up every day with
              the discipline of aviation and the warmth of Zimbabwean hospitality —
              ensuring every aircraft departs on time, every passenger feels valued,
              and every shipment arrives safely.
            </p>
          </div>
          <div className="os-today-cards">
            {[
              { title: 'Ramp Handling', icon: '✈' },
              { title: 'Passenger Services', icon: '🧳' },
              { title: 'Cargo Operations', icon: '📦' },
              { title: 'Charter Support', icon: '🛫' },
            ].map((s, i) => (
              <div className="os-today-card" key={i}>
                <span className="os-today-card-icon">{s.icon}</span>
                <span className="os-today-card-title">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="os-cta" ref={ref}>
        <h2 className="os-cta-title">Be Part of the Next Chapter</h2>
        <p className="os-cta-body">
          Whether you're an airline looking for a reliable ground handler, a professional
          wanting to join our team, or a partner ready to grow with us —
          the AGS story is still being written.
        </p>
        <div className="os-cta-btns">
          <Link to="/" className="os-btn os-btn--white">Contact Us</Link>
          <Link to="/" className="os-btn os-btn--outline">View Our Services</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="os-footer">
        <span>© 2025 Aviation Ground Services. All rights reserved.</span>
        <Link to="/">aviationgroundservices.com</Link>
      </footer>

    </div>
  )
}
