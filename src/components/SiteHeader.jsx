import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.css'

import logo from '../assets/logo.png'

export default function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sh-header">
      <div className="sh-topbar">
        <a href="#" className="sh-topbar-careers">Careers</a>
        <a href="#">Contact us</a>
        <a href="#" className="sh-topbar-site">aviationgroundservices.com</a>
        <span className="sh-lang">EN</span>
      </div>

      <nav className="sh-navbar">
        <Link to="/" className="sh-logo-area">
          <img src={logo} alt="AGS Aviation Ground Services" className="sh-logo-img" />
        </Link>

        <button
          className="sh-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul className="sh-nav-links">
          <li
            className="sh-nav-item"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <a href="#">
              Who we are
              <svg className="sh-nav-chevron" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            {megaOpen && (
              <div className="sh-mega-menu">
                <div className="sh-mega-col">
                  <span className="sh-mega-col-title">OUR IDENTITY</span>
                  <Link to="/our-story" className="sh-mega-link">
                    <span className="sh-mega-link-title">Our Story</span>
                    <span className="sh-mega-link-sub">From humble beginnings to a global presence</span>
                  </Link>
                  <Link to="/who-we-are#mission-vision" className="sh-mega-link">
                    <span className="sh-mega-link-title">Our Mission &amp; Vision</span>
                    <span className="sh-mega-link-sub">The principles that guide everything we do</span>
                  </Link>
                  <Link to="/who-we-are#our-values" className="sh-mega-link">
                    <span className="sh-mega-link-title">Our Values</span>
                    <span className="sh-mega-link-sub">Integrity, excellence, and accountability</span>
                  </Link>
                </div>
                <div className="sh-mega-col">
                  <span className="sh-mega-col-title">OUR PEOPLE</span>
                  <Link to="/who-we-are#our-people" className="sh-mega-link">
                    <span className="sh-mega-link-title">Our People</span>
                    <span className="sh-mega-link-sub">The talent behind every success story</span>
                  </Link>
                  <Link to="/who-we-are#code-of-conduct" className="sh-mega-link">
                    <span className="sh-mega-link-title">Business Code of Conduct</span>
                    <span className="sh-mega-link-sub">How we operate with integrity</span>
                  </Link>
                  <Link to="/who-we-are#community" className="sh-mega-link">
                    <span className="sh-mega-link-title">Community &amp; Wellbeing</span>
                    <span className="sh-mega-link-sub">Our commitment beyond the tarmac</span>
                  </Link>
                </div>
                <div className="sh-mega-col">
                  <span className="sh-mega-col-title">PERFORMANCE</span>
                  <Link to="/who-we-are#service-commitments" className="sh-mega-link">
                    <span className="sh-mega-link-title">Service Commitments</span>
                    <span className="sh-mega-link-sub">How we measure up to our promises</span>
                  </Link>
                  <Link to="/who-we-are#policies" className="sh-mega-link">
                    <span className="sh-mega-link-title">Business Policies &amp; Practices</span>
                    <span className="sh-mega-link-sub">Standards that drive our operations</span>
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
        <div className="sh-mobile-menu">
          <Link to="/our-story" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
          <Link to="/who-we-are" onClick={() => setMobileMenuOpen(false)}>Who We Are</Link>
          <Link to="/our-services" onClick={() => setMobileMenuOpen(false)}>Our Services</Link>
          <a href="#">Sustainability</a>
          <a href="#">News and Media</a>
        </div>
      )}
    </header>
  )
}
