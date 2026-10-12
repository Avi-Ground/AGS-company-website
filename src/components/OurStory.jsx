import { useEffect, useRef } from 'react'
import './OurStory.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import dasCargo from '../assets/das-cargo.jpeg'
import qatarAirways from '../assets/qatar-airways.jpeg'
import mkAirlines from '../assets/mk-airlines.jpeg'
import atlasAir from '../assets/atlas-air.jpeg'


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
    

      {/* ── HERO ── */}
      <header className="os-hero">
        <SiteHeader />
        <div className="os-hero-bg" />
        <div className="os-hero-plane-wrap">
          <div className="os-hero-plane-frame">
            <img src={dasCargo}    alt="DAS Air Cargo aircraft on the tarmac" className="os-hero-plane-img os-slide os-slide--1" />
            <img src={mkAirlines}  alt="MK Airlines Boeing 747 on the tarmac" className="os-hero-plane-img os-slide os-slide--2" />
            <img src={atlasAir}    alt="Atlas Air Boeing 747 on the tarmac"    className="os-hero-plane-img os-slide os-slide--3" />
          </div>
        </div>
        <div className="os-hero-content">
          <div className="os-tag">OUR JOURNEY</div>
          <h1 className="os-hero-title">
            From the tarmac<br />
            <em>to today.</em>
          </h1>
          <p className="os-hero-sub">
            A Zimbabwean company built on dedication, discipline, and an unshakeable belief
            that reliable ground handling can be delivered here at home.
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
          <h2 className="os-h2">Our Origins</h2>
          <p>
         AGS began in 2001 with a small team and a commitment to handle air cargo carefully. We started on the tarmac 
          with freighters from DAS Airlines and KLM, working early mornings and 
          late nights as we built our ground handling services. Over the years, our work has
          expanded across Southern Africa. We have served airlines including British Airways
          and South African Airways, handling cargo and supporting aircraft departures.
          </p>
          <p>
          In 2023, we began passenger handling with Fastjet. Today, we serve Air Tanzania,
          Uganda Airlines, RwandAir, Kenya Airways, and Qatar Airways. Our teams support
          passenger and cargo operations, building on our experience in ground handling.
          </p>
        </div>
        <div className="os-intro-pull">
          <span className="os-pull-line" />
          <blockquote>
           "We didn't just want to handle aircraft —
we wanted to set the standard."

          </blockquote>
        </div>
      </section>

      {/* ── PRESENT-DAY FOCUS ── */}
      <section className="os-focus" ref={ref}>
        <div className="os-focus-content">
          <div className="os-tag">Present Day</div>
          <h2 className="os-h2">Present Day </h2>
          <p>
            Today, Aviation Ground Services (AGS) focuses on safety, operational procedures, and service.
            As an ISAGO-registered handler, we monitor on-time performance (OTP) and work with airline
            partners to meet agreed service-level requirements.
          </p>
          <p>
            This operational DNA is driven by our <strong>EDGE culture</strong> —&nbsp;
            <strong>E</strong>xcellence, <strong>D</strong>iscipline, <strong>G</strong>rowth, and&nbsp;
            <strong>E</strong>ngagement — guiding how our teams work and communicate while providing
            ground and cargo handling services to our airline partners.
          </p>
        </div>
        <div className="os-focus-img-wrap">
          <div className="os-focus-img-frame">
            <img src={qatarAirways} alt="Qatar Airways aircraft being handled by AGS on the tarmac" className="os-focus-img" />
          </div>
        </div>
      </section>

      {/* ── THE FUTURE ── */}
      <section className="os-focus os-future" ref={ref}>
        <div className="os-focus-content">
        <div className="os-tag os-tag--dark">The Future</div>
        <h2 className="os-h2">Our Destination</h2>
        <p>
          AGS plans to adopt digital tools where they can support planning and operational efficiency.
        </p>
        <p>
          We plan to expand into additional stations and markets and continue developing services for
          new and existing carriers. We will build on our <strong>EDGE culture</strong>, maintain our ISAGO
          registration, and review our services as airline and industry requirements change.
        </p>
        </div>
        <div className="os-focus-img-wrap">
          <div className="os-focus-img-frame">
            <img src={atlasAir} alt="Atlas Air aircraft supported by AGS" className="os-focus-img" />
          </div>
        </div>
      </section>

      <SiteFooter />

    </div>
  )
}
