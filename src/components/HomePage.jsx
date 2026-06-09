import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

import heroImage    from '../assets/hero.png'
import logo         from '../assets/logo.png'
import cargoImg     from '../assets/cargo.jpeg'
import passengerImg from '../assets/passenger.jpeg'
import rampImg      from '../assets/ramp.jpeg'
import edge1        from '../assets/edge1.jpeg'
import edge2        from '../assets/edge2.jpeg'
import edge3        from '../assets/edge3.jpeg'
import edge4        from '../assets/edge4.jpeg'
import news1        from '../assets/news1.jpeg'
import news2        from '../assets/news2.jpeg'
import news3        from '../assets/news3.jpeg'

export default function HomePage() {
  const [megaOpen, setMegaOpen] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hp-in')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.hp-animate, .hp-animate-left, .hp-animate-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hp-page">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <div className="hp-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hp-hero-overlay" />

        <div className="hp-topbar">
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
          <a href="#">aviationgroundservices.com</a>
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

      {/* ══════════════════════════════ ABOUT ══════════════════════════════ */}
      <section className="hp-about">
        <h2 className="hp-about-title hp-animate">We are Aviation Ground Services</h2>
        <p className="hp-about-body hp-animate">
          Aviation Ground Services (AGS) is a premier provider of end to end ground handling
          solutions focused on safety, efficiency, and operational excellence. We bridge the gap
          between airline schedules and ground logistics, delivering seamless turnarounds,
          passenger handling, and cargo management. AGS serves commercial airlines, cargo
          carriers, and private charter operators — ensuring every aircraft departs on time with
          precision and safety.
        </p>
      </section>

      {/* ══════════════════════════════ VMR ══════════════════════════════ */}
      <section className="hp-vmr">
        <div className="hp-vmr-block hp-animate">
          <h2 className="hp-vmr-heading">Our Vision</h2>
          <p className="hp-vmr-text">To be the trusted partner in ground handling and other aviation support services in Zimbabwe</p>
        </div>
        <div className="hp-vmr-block hp-animate">
          <h2 className="hp-vmr-heading">Our Mission</h2>
          <p className="hp-vmr-text">To be the most sought after provider of aviation handling services by meeting and exceeding customer expectations through innovation and dedicated staff to maximise stakeholder value</p>
        </div>
        <div className="hp-vmr-block hp-animate">
          <h2 className="hp-vmr-heading role">ROLE IN AVIATION</h2>
          <p className="hp-vmr-text">
            To be the driving force behind continuous improvement in aviation ground services
            consistently raising the standard for safety, efficiency, and passenger experience.
            We evolve with the industry, ensuring that every turnaround is faster, every process is
            smarter, and every operation is safer than before.<br />
            "Leaders in passenger, cargo and aircraft handling"
          </p>
        </div>
      </section>

      {/* ══════════════════════════════ SERVICES ══════════════════════════════ */}
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

      {/* ══════════════════════════════ EDGE ══════════════════════════════ */}
      <section className="hp-edge">
        <h2 className="hp-edge-title hp-animate">The AGS EDGE</h2>
        <div className="hp-edge-photos">
          {[edge1, edge2, edge3, edge4].map((img, i) => (
            <div className="hp-edge-photo-wrap hp-animate" key={i}>
              <img src={img} alt={`AGS ${i+1}`} className="hp-edge-photo" />
            </div>
          ))}
        </div>
        <p className="hp-edge-body hp-animate">
          The AGS EDGE — <strong>Excellence, Discipline, Growth, Engagement</strong> — drives everything
          we do. We deliver reliable, safe, and efficient ground operations with a hospitality
          mindset, embedding strict safety and security procedures at every step. Through
          continuous improvement and proactive feedback at <strong>all levels</strong>, we turn customer
          insights into faster, safer, and more dependable turnarounds.
        </p>

        <h2 className="hp-why-title hp-animate">Why choose AGS</h2>
        <div className="hp-why-grid">
          {[
            { label: 'Professionalism', icon: <><rect x="18" y="8" width="20" height="26" rx="2"/><path d="M24 14h8M24 19h8M24 24h5"/><path d="M14 38h12l4 6 4-6h16v14H14z"/><path d="M28 44h8"/></> },
            { label: 'Accountability and Ownership', icon: <><circle cx="32" cy="28" r="14"/><path d="M24 28l6 6 10-12"/><path d="M16 50c0-6 7-10 16-10s16 4 16 10"/><path d="M32 42v8"/></> },
            { label: 'Service Excellence', icon: <><circle cx="32" cy="32" r="12"/><path d="M32 20V12M32 52v-8M20 32h-8M52 32h-8"/><path d="M23.5 23.5l-5.7-5.7M46.2 46.2l-5.7-5.7M40.5 23.5l5.7-5.7M17.8 46.2l5.7-5.7"/><circle cx="32" cy="32" r="4"/></> },
            { label: 'Sustainability', icon: <><path d="M32 10 C20 10 12 20 12 30 c0 14 20 24 20 24 s20-10 20-24 c0-10-8-20-20-20z"/><path d="M24 30 c0-4 4-8 8-8 s8 4 8 8"/><path d="M22 38 q10 8 20 0"/></> },
            { label: 'Teamwork', icon: <><circle cx="32" cy="18" r="6"/><circle cx="14" cy="22" r="5"/><circle cx="50" cy="22" r="5"/><path d="M20 42c0-7 5-12 12-12s12 5 12 12"/><path d="M6 46c0-6 4-10 8-10"/><path d="M58 46c0-6-4-10-8-10"/></> },
            { label: 'Transparency', icon: <><circle cx="32" cy="24" r="10"/><path d="M20 44c0-6 5-10 12-10s12 4 12 10"/><path d="M10 20l4 4-4 4M54 20l-4 4 4 4"/><path d="M14 24h6M44 24h6"/></> },
          ].map((item, i) => (
            <div className="hp-why-card hp-animate" key={i}>
              <svg className="hp-why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span className="hp-why-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ NEWS ══════════════════════════════ */}
      <section className="hp-news">
        <h2 className="hp-news-title hp-animate">Latest business news</h2>
        <div className="hp-news-grid">
          {[
            { img: news1, title: 'AGS Begins Handling Qatar Airways', sub: 'Safety, efficiency, and hospitality take off with new partnership.' },
            { img: news2, title: 'From Belly to Bulk:', sub: 'AGS Delivers Reliable Cargo Handling for Qatar' },
            { img: news3, title: 'AGS Expands Network,', sub: 'Starts Passenger Handling for Kenya Airways' },
          ].map((n, i) => (
            <div className="hp-news-card hp-animate" key={i}>
              <div className="hp-news-img-wrap">
                <img src={n.img} alt={n.title} className="hp-news-img" />
              </div>
              <p className="hp-news-card-title">{n.title}</p>
              <p className="hp-news-card-sub">{n.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ FOOTER ══════════════════════════════ */}
      <footer className="hp-footer">
        <div className="hp-footer-top">
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Who we are</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Our service commitments</a></li>
              <li><a href="#">Community and wellbeing</a></li>
              <li><a href="#">Business code of conduct</a></li>
              <li><a href="#">Business policies and practices</a></li>
              <li><a href="#">Our people</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Our Services</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Ground handling</a></li>
              <li><a href="#">Passenger handling</a></li>
              <li><a href="#">Cargo handling</a></li>
              <li><a href="#">Charter Services</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Careers</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Join us</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">News and media</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Latest news</a></li>
              <li><a href="#">Media gallery</a></li>
              <li><a href="#">Latest annual report</a></li>
              <li><a href="#">Facts and figures</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
        <div className="hp-footer-bottom">
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Contact Us</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Frequently asked questions</a></li>
              <li><a href="#">Enquiry &amp; feedback form</a></li>
              <li><a href="#">Lost and found</a></li>
              <li><a href="#">Media contact and resources</a></li>
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
        </div>
      </footer>

    </div>
  )
}
