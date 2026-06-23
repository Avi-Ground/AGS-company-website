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
          <div className="os-tag">OUR STORY</div>
          <h1 className="os-hero-title">
            From the tarmac<br />
            <em>to the top.</em>
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
         AGS began with a dream in 2001 – a small team, a big vision,
          and a commitment to handle air cargo the right way. We started on the tarmac 
          with freighters from DAS Airlines and KLM, working countless early mornings and 
          late nights because we believed Zimbabwe could deliver world‑class ground handling. 
          Twenty‑five years later, that belief has carried us across Southern Africa and the 
          continent, earning accolades as the best cargo handler around. We won the trust of
           British Airways and South African Airways not by chance, but by pouring our hearts 
           into every container, every pallet, every departure. 
          </p>
          <p>
          In 2023, we took a bold step into passenger handling, starting with Fastjet. Today,
           our family has grown to serve Air Tanzania, Uganda Airlines, RwandAir, Kenya Airways, and 
          the world's finest, Qatar Airways. Our people still feel that same pride when an aircraft
           pushes back on time. Our passion still lives on the ramp. And our future – it shines brighter than ever.
          </p>
        </div>
        <div className="os-intro-pull">
          <span className="os-pull-line" />
          <blockquote>
            "We didn't just want to handle aircraft —<br/>we wanted to set the standard."
          </blockquote>
        </div>
      </section>

      {/* ── PRESENT-DAY FOCUS ── */}
      <section className="os-focus" ref={ref}>
        <div className="os-focus-content">
          <div className="os-tag">Present Day</div>
          <h2 className="os-h2">Our Present day focus </h2>
          <p>
            Today, Aviation Ground Services (AGS) is defined by an uncompromising commitment to safety,
            operational precision, and service excellence. As an ISAGO-registered handler, we anchor our
            daily operations in global best practices, achieving industry-leading On-Time Performance (OTP)
            and strict SLA compliance.
          </p>
          <p>
            This operational DNA is driven by our <strong>EDGE culture</strong> —&nbsp;
            <strong>E</strong>xcellence, <strong>D</strong>iscipline, <strong>G</strong>rowth, and&nbsp;
            <strong>E</strong>ngagement — ensuring a transparent, high-performing environment that provides
            reliable, world-class ground and cargo handling solutions our airline partners trust implicitly.
          </p>
        </div>
        <div className="os-focus-img-wrap">
          <div className="os-focus-img-frame">
            <img src={qatarAirways} alt="Qatar Airways aircraft being handled by AGS on the tarmac" className="os-focus-img" />
          </div>
        </div>
      </section>

      {/* ── THE FUTURE ── */}
      <section className="os-future" ref={ref}>
        <div className="os-tag os-tag--dark">The Future</div>
        <h2 className="os-h2">Where We Are Going</h2>
        <p>
          The future of AGS is anchored in strategic growth and a digital-first approach, fully integrating
          advanced technology across all our operations to drive predictability and efficiency.
        </p>
        <p>
          We are expanding our footprint across new stations and markets, aiming to be the premier,
          proactive GHA for entering and established carriers. By scaling our <strong>EDGE culture</strong> network-wide
          and maintaining flawless ISAGO standards, we will consistently exceed evolving industry expectations
          and set new benchmarks in modern, agile aviation services.
        </p>
      </section>

      <SiteFooter />

    </div>
  )
}
