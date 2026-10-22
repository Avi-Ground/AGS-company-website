import { useEffect, useRef, useState } from "react";
import "./HomeHero.css";
import heroImage from "../assets/hero.png";
import SiteHeader from "./SiteHeader";
import CountUp from "./CountUp";
import { Link } from 'react-router-dom'
import { rich, useTranslation } from '../i18n'

// Splits the hero title into lines for the staggered entrance, carrying *emphasis*
// across line breaks so each line can be rendered on its own.
const titleLines = (title) => {
  let emOpen = false
  return title.split('\n').map((line) => {
    const text = (emOpen ? '*' : '') + line
    if ((line.match(/(?<!\*)\*(?!\*)/g) || []).length % 2) emOpen = !emOpen
    return emOpen ? `${text}*` : text
  })
}

// Builds the jet's route: straight down the side, a dashed connector into the
// dashed ring around the hero image, one full loop, then back out and down.
const buildFlight = (track, jet, circle) => {
  const tr = track.getBoundingClientRect()
  const cr = circle.getBoundingClientRect()
  if (!cr.width || !tr.height) return null
  // Ignore the circle's float animation so the loop sits on its resting position.
  const floatY = new DOMMatrix(getComputedStyle(circle).transform).f
  const rtl = getComputedStyle(track).direction === "rtl"
  const margin = window.matchMedia("(max-width:768px)").matches ? 10 : 16
  const half = jet.offsetWidth / 2
  const W = tr.width, H = tr.height
  const cx = cr.left + cr.width / 2 - tr.left
  const cy = cr.top + cr.height / 2 - floatY - tr.top
  const r = cr.width / 2 + 19 // matches .hero-circle::before (inset -20px, 2px border)
  const x = rtl ? margin + half : W - margin - half
  const edge = rtl ? cx - r : cx + r
  const opposite = 2 * cx - edge
  const sweep = rtl ? 0 : 1 // leave the connector heading downward
  const d = 120
  const enter = `M${x} ${cy - d} C${x} ${cy - d / 2} ${edge} ${cy - d / 2} ${edge} ${cy}`
  const exit = `M${edge} ${cy} C${edge} ${cy + d / 2} ${x} ${cy + d / 2} ${x} ${cy + d}`
  const route = `M${x} -60 L${x} ${cy - d} ${enter.slice(enter.indexOf("C"))} A${r} ${r} 0 0 ${sweep} ${opposite} ${cy} A${r} ${r} 0 0 ${sweep} ${edge} ${cy} ${exit.slice(exit.indexOf("C"))} L${x} ${H + 40}`
  return { W, H, enter, exit, route, straightIn: cy - d + 60, loop: 2 * Math.PI * r, straightOut: H + 40 - cy - d }
}

// Cubic-bezier for a segment whose speed changes smoothly from `from` to `to`,
// so the jet eases into and out of the loop without a jolt.
const speedChange = (from, to) => {
  const start = (2 * from) / (from + to)
  const end = (2 * to) / (from + to)
  return `cubic-bezier(0.333, ${start / 3}, 0.667, ${1 - end / 3})`
}

const CRUISE_SECONDS = 14 // one straight pass down the hero at cruising speed
const LOOP_SPEED = 1 // loop speed as a fraction of cruising speed (1 = constant speed throughout)

export default function HomeHero() {
  const { t, lang } = useTranslation()
  const trackRef = useRef(null)
  const jetRef = useRef(null)
  const circleRef = useRef(null)
  const connectorRef = useRef(null)
  const [flight, setFlight] = useState(null)

  useEffect(() => {
    const measure = () => setFlight(buildFlight(trackRef.current, jetRef.current, circleRef.current))
    const observer = new ResizeObserver(measure)
    observer.observe(trackRef.current)
    observer.observe(circleRef.current)
    return () => observer.disconnect()
  }, [lang])

  // Cruise down the straights, slow down into the loop, speed back up on the way out.
  useEffect(() => {
    if (!flight) return
    const [enterPath, exitPath] = connectorRef.current.querySelectorAll("path")
    const cruise = (flight.H + 100) / CRUISE_SECONDS
    const slow = cruise * LOOP_SPEED
    const segments = [
      { length: flight.straightIn, from: cruise, to: cruise },
      { length: enterPath.getTotalLength(), from: cruise, to: slow },
      { length: flight.loop, from: slow, to: slow },
      { length: exitPath.getTotalLength(), from: slow, to: cruise },
      { length: flight.straightOut, from: cruise, to: cruise },
    ].map((seg) => ({ ...seg, time: (2 * seg.length) / (seg.from + seg.to) }))
    const total = segments.reduce((sum, seg) => sum + seg.time, 0)
    const keyframes = []
    let time = 0, distance = 0
    for (const seg of segments) {
      keyframes.push({
        offset: time / total,
        offsetDistance: `${distance}px`,
        easing: seg.from === seg.to ? "linear" : speedChange(seg.from, seg.to),
      })
      time += seg.time
      distance += seg.length
    }
    keyframes.push({ offset: 1, offsetDistance: `${distance}px` })
    const timing = { duration: total * 1000, iterations: Infinity }
    const jet = jetRef.current
    const move = jet.animate(keyframes, timing)
    const fade = jet.animate([{ opacity: 0 }, { opacity: 1, offset: 0.03 }, { opacity: 1, offset: 0.96 }, { opacity: 0 }], timing)
    return () => { move.cancel(); fade.cancel() }
  }, [flight])

  return (
    <section className="hero">

      <SiteHeader variant="home" />

      {/* Background */}
      <div className="hero-bg"></div>

      <div className="hero-gradient"></div>

      <div className="hero-route">
        <svg viewBox="0 0 800 400">
          <path
            d="M20 350 C180 250 260 100 420 160 S650 280 780 80"
            fill="none"
            stroke="rgba(200,16,46,.18)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      {/* Small jet flying down the right side and looping the hero image, behind all content */}
      <div className="hero-plane-track" aria-hidden="true" ref={trackRef}>
        {flight && (
          <svg className="hero-plane-connector" ref={connectorRef} width={flight.W} height={flight.H}>
            <path d={flight.enter} />
            <path d={flight.exit} />
          </svg>
        )}
        <div
          className={`hero-jet${flight ? " is-looping" : ""}`}
          ref={jetRef}
          style={flight ? { offsetPath: `path("${flight.route}")` } : undefined}
        >
          <svg className="hero-plane" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">
          <div className="hero-copy">
          {/* key={lang} replays the entrance when the language changes */}
          <h1 key={lang}>
            {titleLines(t('home.heroTitle')).map((line, i) => (
              <span className="hero-line" key={i}>
                <span className="hero-line-inner" style={{ '--line': i }}>{rich(line)}</span>
              </span>
            ))}
          </h1>

          <div className="hero-intro-row" key={`intro-${lang}`}>
            <p>{t('home.heroIntro')}</p>
          </div>

          <div className="hero-buttons">
          </div>
          </div>

          <div className="hero-stats">

            <div className="stat">
              <h2><CountUp end={25} suffix="+" /></h2>
              <span>{t('home.statYears')}</span>
            </div>

            <div className="stat">
              <h2><CountUp end={350} suffix="+" /></h2>
              <span>{t('home.statEmployees')}</span>
            </div>

            <div className="stat">
              <h2><CountUp end={24} suffix="/7" /></h2>
              <span>{t('home.statOperations')}</span>
            </div>

            {/* The airports stat doubles as the way into the Stations page. */}
            <Link className="stat stat--link" to="/stations">
              <svg className="stat-pin" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              <h2><CountUp end={3} /></h2>
              <span>{t('home.statAirports')}</span>
              <span className="stat-cta">
                <span className="stat-cta-text">{t('home.visitStations')}</span>
                <span className="dir-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-circle" ref={circleRef}>

            <img
              src={heroImage}
              alt="AGS Aviation Ground Services"
            />

          </div>


        </div>

      </div>

    </section>
  );
}
