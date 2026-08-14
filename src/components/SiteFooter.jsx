import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SiteFooter.css'
import qatarAirways from '../assets/airline-logos/qatar-airways.svg'
import kenyaAirways from '../assets/airline-logos/kenya-airways.svg'
import ugandaAirlines from '../assets/airline-logos/uganda-airlines.png'
import southAfricanAirways from '../assets/airline-logos/south-african-airways.svg'
import rwandAir from '../assets/airline-logos/rwandair.png'
import fastjet from '../assets/airline-logos/fastjet.png'

const airlineLogos = [
  { name: 'Qatar Airways', image: qatarAirways },
  { name: 'Kenya Airways', image: kenyaAirways },
  { name: 'Uganda Airlines', image: ugandaAirlines },
  { name: 'South African Airways', image: southAfricanAirways },
  { name: 'RwandAir', image: rwandAir },
  { name: 'Fastjet', image: fastjet },
]

export default function SiteFooter() {
  const footerRef = useRef(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Scroll animation observer — self-contained so this footer works on any page
  useEffect(() => {
    const root = footerRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hp-in')
      }),
      { threshold: 0.12 }
    )
    root.querySelectorAll('.hp-animate, .hp-animate-left, .hp-animate-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 300)
    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    return () => window.removeEventListener('scroll', updateBackToTop)
  }, [])

  return (
    <footer className="hp-footer" ref={footerRef}>
      <section className="hp-airline-marquee" aria-label="Airlines we support">
        <p>Trusted airline partners</p>
        <div className="hp-airline-marquee-window">
          <div className="hp-airline-marquee-track">
            {[...airlineLogos, ...airlineLogos].map((airline, index) => (
              <div className="hp-airline-logo" key={`${airline.name}-${index}`}>
                <img src={airline.image} alt={airline.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages — all non-home pages */}
      {false && (
        <section className="hp-footer-related">
          <div className="hp-related-inner">
            <p className="hp-related-label">Related Pages</p>
            <div className="hp-related-cards">
              {[
                {
                  to: '/', title: 'Home', sub: 'Back to our homepage',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"/><path d="M9 22V12h6v10"/></svg>
                },
                {
                  to: '/who-we-are', title: 'Who We Are', sub: 'Our values, people & mission',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="18" cy="8" r="2.5"/><path d="M21 21v-1.5a3.5 3.5 0 00-2.5-3.35"/></svg>
                },
                {
                  to: '/our-services', title: 'Our Services', sub: 'Ground & cargo handling solutions',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                },
                {
                  to: '/our-story', title: 'Our Journey', sub: 'From the tarmac to the top',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                },
              ].map((p) => (
                <Link key={p.to} to={p.to} className="hp-related-card">
                  <span className="hp-related-card-icon">{p.icon}</span>
                  <span className="hp-related-card-title">{p.title}</span>
                  <span className="hp-related-card-sub">{p.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Business News — all pages */}
      {/* Who we are / Services / Careers / News columns — homepage only */}
      {isHome && (
        <div className="hp-footer-top">
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Who we are</h4>
            <ul className="hp-footer-links">
              <li><Link to="/our-services">Our service commitments</Link></li>
              <li><Link to="/sustainability">Community and wellbeing</Link></li>
              <li><Link to="/edge">Business code of conduct</Link></li>
              <li><Link to="/sustainability">Business policies and practices</Link></li>
              <li><Link to="/edge">Our people</Link></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Our Services</h4>
            <ul className="hp-footer-links">
              <li><Link to="/our-services">Ground handling</Link></li>
              <li><Link to="/our-services">Passenger handling</Link></li>
              <li><Link to="/our-services">Cargo handling</Link></li>
              <li><Link to="/our-services">Charter Services</Link></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Careers</h4>
            <ul className="hp-footer-links">
              <li><a href="mailto:careers@avi-ground.com">Join us</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">News and media</h4>
            <ul className="hp-footer-links">
              <li><Link to="/news-media">Latest news</Link></li>
              <li><Link to="/news-media">Media gallery</Link></li>
              <li><Link to="/news-media">Latest annual report</Link></li>
              <li><Link to="/news-media">Facts and figures</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact Us + Social — all pages */}
      <div className="hp-footer-bottom">
        <div className="hp-footer-col">
          <h4 className="hp-footer-col-title">Contact Us</h4>
          <ul className="hp-footer-links">
            <li><a href="mailto:info@avi-ground.com?subject=Frequently%20asked%20questions">Frequently asked questions</a></li>
            <li><a href="mailto:info@avi-ground.com?subject=Enquiry%20and%20feedback">Enquiry &amp; feedback form</a></li>
            <li><a href="mailto:info@avi-ground.com?subject=Lost%20and%20found">Lost and found</a></li>
            <li><a href="mailto:info@avi-ground.com?subject=Media%20contact">Media contact and resources</a></li>
          </ul>
        </div>
        <div className="hp-footer-col">
          <h4 className="hp-footer-col-title">Connect with us</h4>
          <div className="hp-social-icons">
            <a href="#" className="hp-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="hp-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="hp-social-icon" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hp-social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
        <a className="hp-flight-radar" href="https://www.flightradar24.com/" target="_blank" rel="noreferrer" aria-label="Open FlightRadar24 in a new tab">
          <svg className="hp-flight-radar-map" viewBox="0 0 220 76" aria-hidden="true">
            <path className="hp-map-land" d="M8 23 24 12l22 4 8 12-11 9-18-2-9 10-10-6zm64-13 18-6 17 9-3 13-16 5-12-8zm48 8 21-10 22 8 11 16-15 9-19-3-8 12-16-10zm63 30 17-5 12 9-8 13-17 2-9-10z" />
            <path className="hp-map-grid" d="M0 19h220M0 38h220M0 57h220M37 0v76M74 0v76M111 0v76M148 0v76M185 0v76" />
            <path className="hp-flight-route" d="M20 57C55 54 61 19 100 29s48 32 97 2" />
            <g className="hp-flight-radar-plane"><path d="m0-7 2.2 5.2L7 0 2.2 1.8 0 7-2.2 1.8-7 0l4.8-1.8Z" /></g>
          </svg>
          <span className="hp-flight-radar-copy"><strong>Live flight radar</strong><small>Track flights worldwide ↗</small></span>
        </a>
      </div>

      <div className="hp-footer-copyright">
        <span>© {new Date().getFullYear()} Aviation Ground Services. All rights reserved.</span>
      </div>
      <button
        className={`hp-back-to-top${showBackToTop ? ' hp-back-to-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}
