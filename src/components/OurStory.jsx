import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './OurStory.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
const timeline = [
  {
    year: '2001',
    title: 'The Beginning',
    body: 'Aviation Ground Services was founded in Harare with a small but passionate team committed to delivering safe and reliable ground handling services for airlines operating in Zimbabwe.',
  },
  {
    year: '2004',
    title: 'Building Foundations',
    body: 'AGS expanded its operational capabilities, invested in staff training, and strengthened relationships with regional airline partners, establishing a reputation for reliability and professionalism.',
  },
  {
    year: '2007',
    title: 'Growing Operations',
    body: 'As demand increased, AGS expanded its workforce and introduced improved ground support processes, enabling the company to handle a greater number of aircraft movements efficiently.',
  },
  {
    year: '2010',
    title: 'Expanding Our Reach',
    body: 'AGS broadened its presence within Zimbabwe’s aviation sector, supporting additional airline operations and continuing to build a highly skilled workforce trained to international standards.',
  },
  {
    year: '2013',
    title: 'Cargo Operations Launch',
    body: 'Recognising growing freight demand, AGS launched dedicated cargo handling services, supporting both passenger airline belly cargo and specialised freight operations.',
  },
  {
    year: '2016',
    title: 'A Reputation for Excellence',
    body: 'Continuous investment in people, equipment, and safety systems helped AGS become recognised as one of Zimbabwe’s most dependable aviation service providers.',
  },
  {
    year: '2019',
    title: 'Operational Milestone',
    body: 'AGS achieved thousands of successful aircraft turnarounds while maintaining exceptional safety standards and strengthening partnerships with both regional and international carriers.',
  },
  {
    year: '2021',
    title: 'Resilience and Recovery',
    body: 'Despite challenges affecting the global aviation industry, AGS retained its commitment to staff development, operational readiness, and customer service excellence.',
  },
  {
    year: '2023',
    title: 'International Partnerships',
    body: 'AGS secured major handling agreements with international airlines, including Qatar Airways and Kenya Airways, further strengthening its position within the region.',
  },
  {
    year: '2025',
    title: 'Leading the Industry',
    body: 'With over 250 employees, multiple airline partnerships, and operations across Zimbabwe’s major international airports, AGS continues to set the benchmark for ground handling excellence.',
  },
]

const achievements = [
  { number: '250+', label: 'Employees Nationwide' },
  { number: '12',   label: 'Airline Partnerships' },
  { number: '3',    label: 'Airports Served' },
  { number: '25+',  label: 'Years of Excellence' },
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

      {/* ── NAV ── */}
      <SiteHeader />

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
          <h2 className="os-h2">25 Years on the Ramp</h2>
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

      <SiteFooter />

    </div>
  )
}
