import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.css'

import logo from '../assets/logo.png'
import journeyImage from '../assets/edge2.jpeg'
import edgeImage from '../assets/edge3.jpeg'

export default function SiteHeader({ variant = '' }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className={`sh-header${variant ? ` sh-header--${variant}` : ''}`}>
      <div className="sh-topbar">
        <Link to="/careers" className="sh-topbar-careers">Careers</Link>
        <a href="mailto:info@avi-ground.com">Contact us</a>
        <Link to="/" className="sh-topbar-site">
          {variant === 'home' ? 'aviationgroundservices.com' : 'avi-ground.com'}
        </Link>
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

  {/* HOME */}
  <li className="sh-home-item">
    <Link to="/" className="sh-home-link" aria-label="Home">
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
    </Link>
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
                  <Link to="/our-story" className="sh-mega-link">
                    <span className="sh-mega-link-title">Our Journey</span>
                    <span className="sh-mega-link-sub">Discover the AGS story, from our beginnings to the ground handling partner we are today.</span>
                    <img src={journeyImage} alt="AGS team serving passengers" className="sh-mega-link-image sh-mega-link-image--journey" />
                  </Link>
                </div>
                <div className="sh-mega-col">
                  <Link to="/edge" className="sh-mega-link">
                    <span className="sh-mega-link-title">EDGE</span>
                    <span className="sh-mega-link-sub">Explore the principles and culture that guide how AGS operates every day.</span>
                    <img src={edgeImage} alt="AGS team preparing an aircraft" className="sh-mega-link-image" />
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/our-services">Our Services</Link></li>
          <li><Link to="/sustainability">Sustainability</Link></li>
          <li><Link to="/news-media">News and Media</Link></li>
        </ul>
      </nav>

      {mobileMenuOpen && (
        <div className="sh-mobile-menu">
          <Link to="/our-story" onClick={() => setMobileMenuOpen(false)}>Our Journey</Link>
          <Link to="/edge" onClick={() => setMobileMenuOpen(false)}>EDGE</Link>
          <Link to="/our-services" onClick={() => setMobileMenuOpen(false)}>Our Services</Link>
          <Link to="/sustainability" onClick={() => setMobileMenuOpen(false)}>Sustainability</Link>
          <Link to="/news-media" onClick={() => setMobileMenuOpen(false)}>News and Media</Link>
      
        </div>
      )}
    </header>
  )
}
