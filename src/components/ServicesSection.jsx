import './ServicesSection.css'

import cargoImg from '../assets/cargo.jpg'
import passengerImg from '../assets/passenger.jpg'
import rampImg from '../assets/ramp.jpg'

function ServicesSection() {
  return (
    <section className="services-section">

      {/* ── Our Services ── */}
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">

        {/* Cargo */}
        <div className="service-card">
          <div className="service-img-wrap">
            <img src={cargoImg} alt="Cargo Services" className="service-img" />
          </div>
          <div className="service-info">
            <div className="service-label">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 5v3h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <span className="service-name">Cargo Services</span>
            </div>
            <a href="#" className="find-out-more">Find out more &rsaquo;</a>
          </div>
        </div>

        {/* Passenger */}
        <div className="service-card">
          <div className="service-img-wrap">
            <img src={passengerImg} alt="Passenger Handling" className="service-img" />
          </div>
          <div className="service-info">
            <div className="service-label">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
                <path d="M7 8h2v3H7zM15 8h2v3h-2z"/>
              </svg>
              <span className="service-name">Passenger Handling</span>
            </div>
            <a href="#" className="find-out-more">Find out more &rsaquo;</a>
          </div>
        </div>

        {/* Ramp */}
        <div className="service-card">
          <div className="service-img-wrap">
            <img src={rampImg} alt="Ramp Handling" className="service-img" />
          </div>
          <div className="service-info">
            <div className="service-label">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2a10 10 0 0 1 0 20"/>
                <path d="M12 2a10 10 0 0 0 0 20"/>
                <path d="M2 12h20"/>
              </svg>
              <span className="service-name">Ramp Handling</span>
            </div>
            <a href="#" className="find-out-more">Find out more &rsaquo;</a>
          </div>
        </div>

      </div>

      {/* ── Stats Row ── */}
      <div className="stats-grid">

        <div className="stat-card">
          <svg className="stat-icon" viewBox="0 0 64 64" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="20" r="8"/>
            <circle cx="14" cy="24" r="6"/>
            <circle cx="50" cy="24" r="6"/>
            <path d="M2 52c0-8 5-14 12-14h4M62 52c0-8-5-14-12-14h-4M20 52c0-10 5-16 12-16s12 6 12 16"/>
          </svg>
          <div className="stat-number">250+</div>
          <div className="stat-label">Employees nationwide</div>
        </div>

        <div className="stat-card">
          <svg className="stat-icon" viewBox="0 0 64 64" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 40 L28 24 L38 32 L56 16"/>
            <circle cx="18" cy="48" r="4"/>
            <circle cx="38" cy="48" r="4"/>
            <line x1="22" y1="48" x2="34" y2="48"/>
            <line x1="8" y1="56" x2="56" y2="56"/>
          </svg>
          <div className="stat-number">12</div>
          <div className="stat-label">Airlines partnerships</div>
        </div>

        <div className="stat-card">
          <svg className="stat-icon" viewBox="0 0 64 64" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 6C22 6 14 14 14 24c0 14 18 34 18 34s18-20 18-34c0-10-8-18-18-18z"/>
            <circle cx="32" cy="24" r="6"/>
          </svg>
          <div className="stat-number">3</div>
          <div className="stat-label">All airports nationwide</div>
        </div>

      </div>

    </section>
  )
}

export default ServicesSection
