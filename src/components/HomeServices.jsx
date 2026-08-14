import { Link } from 'react-router-dom'
import './HomeServices.css'

import cargoImg     from '../assets/cargo.jpeg'
import passengerImg from '../assets/passenger.jpeg'
import rampImg      from '../assets/ramp.jpeg'

export default function HomeServices() {
  return (
    <section className="hp-services">
      <h2 className="hp-services-title hp-animate">Our Services</h2>
      <div className="hp-services-grid">
        {[
          { img: passengerImg, alt: 'Passenger Handling', name: 'Passenger Handling', icon: (
            <svg className="hp-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              <path d="M7 8h2v3H7zM15 8h2v3h-2z"/>
            </svg>
          )},
          { img: cargoImg, alt: 'Cargo Services', name: 'Cargo Services', icon: (
            <svg className="hp-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          )},
          { img: rampImg, alt: 'Aircraft Handling', name: 'Ramp Handling', icon: (
            <svg className="hp-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/>
            </svg>
          )},
        ].map((s, i) => (
          <div className="hp-service-card hp-animate" key={i}>
            <div className="hp-service-img-wrap">
              <img src={s.img} alt={s.alt} className="hp-service-img" />
            </div>
            <div className="hp-service-info">
              <div className="hp-service-label">
                {s.icon}
                <span className="hp-service-name">{s.name}</span>
              </div>
              <Link to="/our-services" className="hp-find-out-more">Find out more &rsaquo;</Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
