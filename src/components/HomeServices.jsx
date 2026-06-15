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
          { img: cargoImg, alt: 'Cargo Services', name: 'Cargo Services', icon: (
            <svg className="hp-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          )},
          { img: passengerImg, alt: 'Passenger Handling', name: 'Passenger Handling', icon: (
            <svg className="hp-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              <path d="M7 8h2v3H7zM15 8h2v3h-2z"/>
            </svg>
          )},
          { img: rampImg, alt: 'Ramp Handling', name: 'Ramp Handling', icon: (
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

      <div className="hp-stats-grid">
        {[
          { num: '250+', label: 'Employees nationwide', icon: <><circle cx="32" cy="20" r="8"/><circle cx="14" cy="24" r="6"/><circle cx="50" cy="24" r="6"/><path d="M2 52c0-8 5-14 12-14h4M62 52c0-8-5-14-12-14h-4M20 52c0-10 5-16 12-16s12 6 12 16"/></> },
          { num: '12',   label: 'Airlines partnerships', icon: <><path d="M8 40 L28 24 L38 32 L56 16"/><circle cx="18" cy="48" r="4"/><circle cx="38" cy="48" r="4"/><line x1="22" y1="48" x2="34" y2="48"/><line x1="8" y1="56" x2="56" y2="56"/></> },
          { num: '3',    label: 'All airports nationwide', icon: <><path d="M32 6C22 6 14 14 14 24c0 14 18 34 18 34s18-20 18-34c0-10-8-18-18-18z"/><circle cx="32" cy="24" r="6"/></> },
        ].map((s, i) => (
          <div className="hp-stat-card hp-animate" key={i}>
            <svg className="hp-stat-icon" viewBox="0 0 64 64" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {s.icon}
            </svg>
            <div className="hp-stat-number">{s.num}</div>
            <div className="hp-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
