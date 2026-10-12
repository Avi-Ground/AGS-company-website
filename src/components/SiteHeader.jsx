import { useEffect, useState } from 'react'
import './SiteHeader.css'

import logo from '../assets/logo.png'
import journeyImage from '../assets/edge2.jpeg'
import edgeImage from '../assets/edge3.jpeg'

const mobileNavPages = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Journey' },
  { to: '/edge', label: 'EDGE' },
  { to: '/our-services', label: 'Our Services' },
  { to: '/stations', label: 'Stations' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/safety-compliance', label: 'Safety & Compliance' },
  { to: '/news-media', label: 'News and Media' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact-us', label: 'Contact us' },
]

export default function SiteHeader({ variant = '' }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock background scroll while the mobile menu panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`sh-header${variant ? ` sh-header--${variant}` : ''}`}>
      <div className="sh-topbar">
        <a href="/careers" className="sh-topbar-careers">Careers</a>
        <a href="/contact-us">Contact us</a>
        <a href="/" className="sh-topbar-site">
          {variant === 'home' ? 'aviationgroundservices.com' : 'avi-ground.com'}
        </a>
        <span className="sh-lang">EN</span>
      </div>

      <nav className="sh-navbar">
        <button
          className={`sh-hamburger${mobileMenuOpen ? ' sh-hamburger--open' : ''}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span /><span /><span />
        </button>

        <a href="/" className="sh-logo-area">
          <img src={logo} alt="AGS Aviation Ground Services" className="sh-logo-img" />
        </a>

        <div className="sh-mobile-actions">
          <a href="/contact-us">Contact us</a>
          <span className="sh-lang">EN</span>
        </div>

       <ul className="sh-nav-links">

  {/* HOME */}
  <li className="sh-home-item">
    <a href="/#/" className="sh-home-link" aria-label="Home">
      <svg
        className="sh-home-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 10.5L12 3L21 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 9.5V20H18.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 20V14H14.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  </li>

  {/* WHO WE ARE */}
  <li
    className="sh-nav-item"
    onMouseEnter={() => setMegaOpen(true)}
    onMouseLeave={() => setMegaOpen(false)}
  >
        
            <button type="button" className="sh-nav-trigger">
              Who we are
              <svg className="sh-nav-chevron" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            {megaOpen && (
              <div className="sh-mega-menu">
                <div className="sh-mega-col">
                    <a href="/our-story" className="sh-mega-link">
                    <span className="sh-mega-link-title">Our Journey</span>
                    <span className="sh-mega-link-sub">Discover the AGS story, from our beginnings to the ground handling partner we are today.</span>
                    <img src={journeyImage} alt="AGS team serving passengers" className="sh-mega-link-image sh-mega-link-image--journey" />
                    </a>
                </div>
                <div className="sh-mega-col">
                    <a href="/edge" className="sh-mega-link">
                    <span className="sh-mega-link-title">EDGE</span>
                    <span className="sh-mega-link-sub">Explore the principles and culture that guide how AGS operates every day.</span>
                    <img src={edgeImage} alt="AGS team preparing an aircraft" className="sh-mega-link-image" />
                    </a>
                </div>
              </div>
            )}
          </li>
          <li><a href="/our-services">Our Services</a></li>
          <li><a href="/sustainability">Sustainability</a></li>
          <li><a href="/safety-compliance">Safety &amp; Compliance</a></li>
          <li><a href="/news-media">News and Media</a></li>
        </ul>
      </nav>

      {mobileMenuOpen && (
        <div className="sh-mobile-backdrop" onClick={closeMobileMenu} aria-hidden="true" />
      )}
      <div className={`sh-mobile-menu${mobileMenuOpen ? ' sh-mobile-menu--open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <ul className="sh-mobile-links">
          {mobileNavPages.map((page, i) => (
            <li key={page.to} style={{ transitionDelay: mobileMenuOpen ? `${i * 0.04}s` : '0s' }}>
              <a href={page.to} onClick={closeMobileMenu}>{page.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
