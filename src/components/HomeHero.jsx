import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeHero.css'

import heroImage from '../assets/hero.png'
import logo      from '../assets/logo.png'

export default function HomeHero() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="hp-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hp-hero-overlay" />

      <div className="hp-topbar">
        <a href="#" className="hp-topbar-careers">Careers</a>
        <a href="#">Contact us</a>
        <a href="#" className="hp-topbar-site">aviationgroundservices.com</a>
        <span className="hp-lang">EN</span>
      </div>

      <nav className="hp-navbar">
        <div className="hp-logo-area">
          <img src={logo} alt="AGS Aviation Ground Services" className="hp-logo-img" />
        </div>
        <button
          className="hp-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <ul className="hp-nav-links">
          <li
            className="hp-nav-item"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <a href="#">
              Who we are
              <svg className="hp-nav-chevron" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            {megaOpen && (
              <div className="hp-mega-menu">
                <div className="hp-mega-col">
                  <span className="hp-mega-col-title">OUR IDENTITY</span>
                  <Link to="/our-story" className="hp-mega-link">
                    <span className="hp-mega-link-title">Our Story</span>
                    <span className="hp-mega-link-sub">From humble beginnings to a global presence</span>
                  </Link>
                  <Link to="/who-we-are#mission-vision" className="hp-mega-link">
                    <span className="hp-mega-link-title">Our Mission &amp; Vision</span>
                    <span className="hp-mega-link-sub">The principles that guide everything we do</span>
                  </Link>
                  <Link to="/who-we-are#our-values" className="hp-mega-link">
                    <span className="hp-mega-link-title">Our Values</span>
                    <span className="hp-mega-link-sub">Integrity, excellence, and accountability</span>
                  </Link>
                </div>
                <div className="hp-mega-col">
                  <span className="hp-mega-col-title">OUR PEOPLE</span>
                  <Link to="/who-we-are#our-people" className="hp-mega-link">
                    <span className="hp-mega-link-title">Our People</span>
                    <span className="hp-mega-link-sub">The talent behind every success story</span>
                  </Link>
                  <Link to="/who-we-are#code-of-conduct" className="hp-mega-link">
                    <span className="hp-mega-link-title">Business Code of Conduct</span>
                    <span className="hp-mega-link-sub">How we operate with integrity</span>
                  </Link>
                  <Link to="/who-we-are#community" className="hp-mega-link">
                    <span className="hp-mega-link-title">Community &amp; Wellbeing</span>
                    <span className="hp-mega-link-sub">Our commitment beyond the tarmac</span>
                  </Link>
                </div>
                <div className="hp-mega-col">
                  <span className="hp-mega-col-title">PERFORMANCE</span>
                  <Link to="/who-we-are#service-commitments" className="hp-mega-link">
                    <span className="hp-mega-link-title">Service Commitments</span>
                    <span className="hp-mega-link-sub">How we measure up to our promises</span>
                  </Link>
                  <Link to="/who-we-are#policies" className="hp-mega-link">
                    <span className="hp-mega-link-title">Business Policies &amp; Practices</span>
                    <span className="hp-mega-link-sub">Standards that drive our operations</span>
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/our-services">Our Services</Link></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">News and Media</a></li>
        </ul>
      </nav>
      {mobileMenuOpen && (
        <div className="hp-mobile-menu">

          <Link
            to="/our-story"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Story
          </Link>

          <Link
            to="/our-services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Services
          </Link>

          <a href="#">Sustainability</a>
          <a href="#">News and Media</a>

        </div>
      )}
      <div className="hp-hero-content">
        <h1 className="hp-hero-headline">
          'Leaders in Passenger,<br />Cargo and Aircraft Handling'
        </h1>
        <button className="hp-arrow-btn" aria-label="Learn more">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  )
}
