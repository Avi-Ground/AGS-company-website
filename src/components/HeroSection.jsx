import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import logo from '../assets/logo.png'
import './HeroSection.css'

function HeroSection() {
  const [megaOpen, setMegaOpen] = useState(false)
  const scrollToNews = (event) => {
    event.preventDefault()
    document.getElementById('news-and-media')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div
        className="hero-wrapper"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />

        {/* Topbar */}
        <div className="topbar">
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
          <a href="#">aviationgroundservices.com</a>
          <span className="lang">EN</span>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-area">
            <img src={logo} alt="AGS Aviation Ground Services" className="logo-img" />
          </div>

          <ul className="nav-links">

            {/* WHO WE ARE — mega menu */}
            <li
              className="nav-item has-mega"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <a href="#">
                Who we are
                <svg className="nav-chevron" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>

              {megaOpen && (
                <div className="mega-menu">
                  {/* Col 1 — OUR IDENTITY */}
                  <div className="mega-col">
                    <span className="mega-col-title">OUR IDENTITY</span>
                    <Link to="/our-story" className="mega-link">
                      <span className="mega-link-title">Our Journey</span>
                      <span className="mega-link-sub">From humble beginnings to a global presence</span>
                    </Link>
                    <Link to="/mission-vision" className="mega-link">
                      <span className="mega-link-title">Our Mission &amp; Vision</span>
                      <span className="mega-link-sub">The principles that guide everything we do</span>
                    </Link>
                    <Link to="/our-values" className="mega-link">
                      <span className="mega-link-title">Our Values</span>
                      <span className="mega-link-sub">Integrity, excellence, and accountability</span>
                    </Link>
                  </div>

                  {/* Col 2 — OUR PEOPLE */}
                  <div className="mega-col">
                    <span className="mega-col-title">OUR PEOPLE</span>
                    <Link to="/our-people" className="mega-link">
                      <span className="mega-link-title">Our People</span>
                      <span className="mega-link-sub">The talent behind every success story</span>
                    </Link>
                    <Link to="/code-of-conduct" className="mega-link">
                      <span className="mega-link-title">Business Code of Conduct</span>
                      <span className="mega-link-sub">How we operate with integrity</span>
                    </Link>
                    <Link to="/community" className="mega-link">
                      <span className="mega-link-title">Community &amp; Wellbeing</span>
                      <span className="mega-link-sub">Our commitment beyond the tarmac</span>
                    </Link>
                  </div>

                  {/* Col 3 — PERFORMANCE */}
                  <div className="mega-col">
                    <span className="mega-col-title">PERFORMANCE</span>
                    <Link to="/our-services#safety-compliance" className="mega-link">
                      <span className="mega-link-title">Service Commitments</span>
                      <span className="mega-link-sub">How we measure up to our promises</span>
                    </Link>
                    <Link to="/policies" className="mega-link">
                      <span className="mega-link-title">Business Policies &amp; Practices</span>
                      <span className="mega-link-sub">Standards that drive our operations</span>
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li><Link to="/our-services">Our Services</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><a href="#news-and-media" onClick={scrollToNews}>News and Media</a></li>

          </ul>
        </nav>

        {/* Hero Headline */}
        <div className="hero-content">
          <h1 className="hero-headline">
            'Leaders in Passenger,<br />Cargo and Aircraft Handling'
          </h1>
          <button className="arrow-btn" aria-label="Learn more">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2 className="about-title">We are Aviation Ground Services</h2>
        <p className="about-body">
          Aviation Ground Services (AGS) is a premier provider of end to end ground handling
          solutions focused on safety, efficiency, and operational excellence. We bridge the gap
          between airline schedules and ground logistics, delivering seamless turnarounds,
          passenger handling, and cargo management. AGS serves commercial airlines, cargo
          carriers, and private charter operators — ensuring every aircraft departs on time with
          precision and safety.
        </p>
      </section>
    </>
  )
}

export default HeroSection
