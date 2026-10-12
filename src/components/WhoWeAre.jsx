import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './WhoWeAre.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import communityKids from '../assets/community-kids.jpeg'

export default function WhoWeAre() {
  const location = useLocation()

  useEffect(() => {
    // Smooth scroll to anchor if present
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('ww-visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.ww-fade').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location])

  return (
    <div className="ww-page">

      {/* HERO */}
      <header className="ww-hero">
        <SiteHeader />
        <div className="ww-hero-bg" />
        <div className="ww-hero-content">
          <div className="ww-tag">WHO WE ARE</div>
          <h1 className="ww-hero-title">
            More Than a<br />
            Ground Handler.<br />
            <em>A Partner.</em>
          </h1>
          <p className="ww-hero-sub">
            AGS provides aviation ground services in Zimbabwe, with a focus on safe operations and support for airline customers.
          </p>
        </div>
        <div className="ww-hero-scroll">
          <div className="ww-scroll-mouse"><div className="ww-scroll-dot" /></div>
          <span>Scroll to explore</span>
        </div>
      </header>

      {/* ══════════════════════════════
          MISSION & VISION
      ══════════════════════════════ */}
      <section id="mission-vision" className="ww-section ww-section--light ww-fade">
        <div className="ww-section-inner ww-two-col">
          <div className="ww-text-col">
            <p className="ww-tag ww-tag--dark">OUR PURPOSE</p>
            <h2 className="ww-h2">Mission &amp; Vision</h2>
            <div className="ww-block">
              <div className="ww-block-label">MISSION</div>
              <p>
                To provide aviation handling services that meet customer requirements through
                capable staff, clear procedures, and ongoing service development.
              </p>
            </div>
            <div className="ww-block">
              <div className="ww-block-label">VISION</div>
              <p>
                To provide ground handling and aviation support services in Zimbabwe and the
                region, with a focus on safety, reliability, and consistent service.
              </p>
            </div>
          </div>
          <div className="ww-visual-col ww-mv-visual">
            <div className="ww-big-quote">
              "Each operation reflects the care our teams bring to their work."
            </div>
            <div className="ww-quote-attr">— Aviation Ground Services</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OUR VALUES
      ══════════════════════════════ */}
      <section id="our-values" className="ww-section ww-section--dark ww-fade">
        <div className="ww-section-inner">
          <p className="ww-tag ww-tag--red">THE AGS EDGE</p>
          <h2 className="ww-h2 ww-h2--white">Our Values</h2>
          <p className="ww-section-intro ww-intro--white">
            The AGS EDGE — Excellence, Discipline, Growth, Engagement — describes the
            principles that guide our teams across ramp, terminal, and flight operations.
          </p>
          <div className="ww-values-grid">
            {[
              {
                letter: 'E',
                value: 'Excellence',
                body: 'We work to provide careful, consistent service, from aircraft handling to passenger assistance.'
              },
              {
                letter: 'D',
                value: 'Discipline',
                body: 'Aviation demands precision. Our teams follow procedures with military discipline — because in our industry, shortcuts cost lives and reputations.'
              },
              {
                letter: 'G',
                value: 'Growth',
                body: 'We invest in our people, our processes, and our capabilities — constantly evolving to meet the demands of a dynamic industry and a growing continent.'
              },
              {
                letter: 'E',
                value: 'Engagement',
                body: 'We value communication with airline partners, our staff, and the communities around our stations.'
              },
            ].map((v, i) => (
              <div className="ww-value-card" key={i}>
                <div className="ww-value-letter">{v.letter}</div>
                <h3 className="ww-value-title">{v.value}</h3>
                <p className="ww-value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OUR PEOPLE
      ══════════════════════════════ */}
      {false && <>
      <section id="our-people" className="ww-section ww-section--light ww-fade">
        <div className="ww-section-inner">
          <p className="ww-tag ww-tag--dark">THE TEAM</p>
          <h2 className="ww-h2">Our People</h2>
          <p className="ww-section-intro">
            Our team of more than 250 people works across ground operations, passenger services, cargo, and support functions. We provide role-related training and support staff development.
          </p>
          <div className="ww-people-grid">
            {[
              { role: 'Ramp Agents', count: '80+', desc: 'Ramp teams support aircraft turnarounds and related ground operations.' },
              { role: 'Passenger Services', count: '60+', desc: 'Passenger services staff assist travellers with check-in, boarding, and service enquiries.' },
              { role: 'Cargo Handlers', count: '40+', desc: 'Cargo teams handle freight and support cargo operations.' },
              { role: 'Operations & Management', count: '30+', desc: 'Operations and management teams coordinate ground handling activities.' },
              { role: 'Safety & Compliance', count: '20+', desc: 'The safety and compliance team supports audits, staff training, and operational procedures.' },
              { role: 'Support Staff', count: '20+', desc: 'Administration, HR, finance, and IT support day-to-day company operations.' },
            ].map((p, i) => (
              <div className="ww-people-card" key={i}>
                <div className="ww-people-count">{p.count}</div>
                <h3 className="ww-people-role">{p.role}</h3>
                <p className="ww-people-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CODE OF CONDUCT
      ══════════════════════════════ */}
      </>}
      <section id="code-of-conduct" className="ww-section ww-section--red ww-fade">
        <div className="ww-section-inner ww-two-col">
          <div className="ww-text-col">
            <p className="ww-tag ww-tag--white-border">HOW WE OPERATE</p>
            <h2 className="ww-h2 ww-h2--white">Business Code<br />of Conduct</h2>
            <p className="ww-body--white">
              At AGS, integrity is non-negotiable. Our Business Code of Conduct sets
              the standard for how every employee, contractor, and partner interacts
              with colleagues, clients, and the communities we serve.
            </p>
            <p className="ww-body--white">
              We aim for transparent reporting and follow anti-corruption policies in
              our business practices.
              
            </p>
          </div>
          <div className="ww-conduct-list">
            {[
              'Zero tolerance for bribery and corruption',
              'Transparent reporting and accountability',
              'Respect and dignity for all employees',
              'Fair and ethical procurement practices',
              'Confidentiality of airline and passenger data',
              'Compliance with all aviation regulations',
              'Environmental responsibility in all operations',
              'Whistleblower protection and open reporting',
            ].map((item, i) => (
              <div className="ww-conduct-item" key={i}>
                <span className="ww-conduct-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          COMMUNITY & WELLBEING
      ══════════════════════════════ */}
      {false && <>
      <section id="community" className="ww-section ww-section--light ww-fade">
        <div className="ww-section-inner">
          <div className="ww-community-header">
            <div className="ww-community-intro">
              <p className="ww-tag ww-tag--dark">BEYOND THE TARMAC</p>
              <h2 className="ww-h2">Community &amp;<br />Wellbeing</h2>
              <p className="ww-section-intro" style={{marginBottom: 0}}>
                AGS aims to be a constructive neighbour and supports
                community initiatives around our airports and staff wellbeing.
                
              </p>
            </div>
            <div className="ww-community-img-wrap">
              <div className="ww-community-img-frame">
                <img
                  src={communityKids}
                  alt="Children from the communities AGS serves"
                  className="ww-community-img"
                />
              </div>
            </div>
          </div>

          <div className="ww-community-grid">
            {[
              {
                icon: '🎓',
                title: 'Youth & Education',
                body: 'We partner with local schools and colleges to provide aviation career pathways for Zimbabwean youth — funding bursaries and offering internship programmes to the next generation of aviation professionals.'
              },
              {
                icon: '❤️',
                title: 'Staff Wellbeing',
                body: 'Our people work in a demanding environment. We provide comprehensive health cover, mental health support, Employee Assistance Programmes, and a safe, respectful workplace for every team member.'
              },
              {
                icon: '🌱',
                title: 'Environmental Responsibility',
                body: 'We are committed to reducing our environmental footprint — investing in fuel-efficient ground equipment, waste reduction programmes, and sustainable practices across all three airports.'
              },
              {
                icon: '🤝',
                title: 'Local Procurement',
                body: 'Where possible, AGS sources goods and services from local Zimbabwean businesses — keeping value in the communities we serve and supporting the broader national economy.'
              },
            ].map((c, i) => (
              <div className="ww-community-card" key={i}>
                <div className="ww-community-icon">{c.icon}</div>
                <h3 className="ww-community-title">{c.title}</h3>
                <p className="ww-community-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICE COMMITMENTS
      ══════════════════════════════ */}
      </>}
      {false && <>
      <section id="service-commitments" className="ww-section ww-section--dark ww-fade">
        <div className="ww-section-inner">
          <p className="ww-tag ww-tag--red">OUR PROMISE</p>
          <h2 className="ww-h2 ww-h2--white">Service Commitments</h2>
          <p className="ww-section-intro ww-intro--white">
            At AGS, service development is supported by operational data. We review
            performance measures such as On-Time Performance (OTP), baggage handling accuracy,
            and safety incident rates. We share relevant performance information with our airline
            partners and use results and operational feedback to review our processes.
          </p>
          <div className="ww-commitments-grid">
            {[
              { metric: '99.8%', label: 'On-Time Performance', desc: 'Reported on-time departure performance across handled flights.' },
              { metric: '< 30 min', label: 'Turnaround Time', desc: 'Target turnaround time for narrow-body aircraft; actual times vary by flight and operating conditions.' },
              { metric: '24 / 7', label: 'Operations Support', desc: 'Operations support is provided throughout the day and night.' },
              { metric: '0', label: 'Major Safety Incidents', desc: 'No major incidents recorded in the period represented by this figure.' },
              { metric: '100%', label: 'Trained Staff', desc: 'Ramp staff receive role-specific training and certification.' },
              { metric: '< 2 hrs', label: 'Issue Follow-up', desc: 'Reported issues are assigned for follow-up; response times depend on the issue.' },
            ].map((c, i) => (
              <div className="ww-commitment-card" key={i}>
                <div className="ww-commitment-metric">{c.metric}</div>
                <h3 className="ww-commitment-label">{c.label}</h3>
                <p className="ww-commitment-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          BUSINESS POLICIES
      ══════════════════════════════ */}
      </>}
      {false && <>
      <section id="policies" className="ww-section ww-section--light ww-fade">
        <div className="ww-section-inner">
          <p className="ww-tag ww-tag--dark">HOW WE WORK</p>
          <h2 className="ww-h2">Business Policies<br />&amp; Practices</h2>
          <p className="ww-section-intro" style={{maxWidth: '760px'}}>
            AGS follows applicable international aviation standards and uses relevant IATA and
            ISAGO procedures in ground and cargo handling. Regular internal and external audits
            support compliance reviews. We share relevant policy information with stakeholders.
          </p>
        </div>
      </section>

      </>}
      <SiteFooter />

    </div>
  )
}
