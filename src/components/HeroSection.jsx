import heroImage from '../assets/hero.jpg'
import logo from '../assets/logo.png'
import './HeroSection.css'

function HeroSection() {
  return (
    <>
      {/* ── HERO WRAPPER (image spans topbar + nav + headline) ── */}
      <div
        className="hero-wrapper"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
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
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Our services</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">News and Media</a></li>
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

      {/* ── ABOUT SECTION ── */}
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
