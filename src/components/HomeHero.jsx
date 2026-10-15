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

export default function HomeHero() {
  const { t, lang } = useTranslation()
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

      {/* Small jet flying straight down the right side, behind all content */}
      <div className="hero-plane-track" aria-hidden="true">
        <div className="hero-jet">
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
            <Link className="hero-stations-link" to="/stations">{t('home.visitStations')} <span className="dir-arrow" aria-hidden="true">→</span></Link>
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

            <div className="stat">
              <h2><CountUp end={3} /></h2>
              <span>{t('home.statAirports')}</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-circle">

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
