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
            Everything we do — every value we hold, every commitment we make,
            every person we employ — is built around one purpose: to be the
            most trusted aviation ground services company in Zimbabwe.
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
                To be the most sought after provider of aviation handling services by meeting
                and exceeding customer expectations through innovation and dedicated staff
                to maximise stakeholder value.
              </p>
            </div>
            <div className="ww-block">
              <div className="ww-block-label">VISION</div>
              <p>
                To be the trusted partner in ground handling and other aviation support
                services in Zimbabwe — setting the regional benchmark for safety,
                reliability, and operational excellence.
              </p>
            </div>
          </div>
          <div className="ww-visual-col ww-mv-visual">
            <div className="ww-big-quote">
              "Every aircraft we handle carries our reputation with it."
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
            The AGS EDGE — Excellence, Discipline, Growth, Engagement — is not a
            slogan. It is the standard we hold ourselves to on every ramp,
            in every terminal, with every flight.
          </p>
          <div className="ww-values-grid">
            {[
              {
                letter: 'E',
                value: 'Excellence',
                body: 'We do not settle for good enough. From the way we handle an aircraft to the way we greet a passenger — excellence is the only standard we accept.'
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
                body: 'We engage deeply with our airline partners, our staff, and our communities — building relationships that go beyond contracts and into true partnership.'
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
            Our 250+ strong team is the engine behind every safe landing, every on-time
            departure, and every satisfied passenger. We hire for attitude, train for
            excellence, and retain through respect.
          </p>
          <div className="ww-people-grid">
            {[
              { role: 'Ramp Agents', count: '80+', desc: 'The backbone of every turnaround. On the tarmac before dawn, ensuring every aircraft is ready to fly.' },
              { role: 'Passenger Services', count: '60+', desc: 'The face of AGS to every traveller. Professional, warm, and trained to handle any situation.' },
              { role: 'Cargo Handlers', count: '40+', desc: 'Precision and care for every shipment — from fragile freight to high-value and dangerous goods.' },
              { role: 'Operations & Management', count: '30+', desc: 'The command centre — coordinating every moving part to keep the tarmac running like clockwork.' },
              { role: 'Safety & Compliance', count: '20+', desc: 'Our safety guardians — auditing, training, and ensuring we never compromise on what matters most.' },
              { role: 'Support Staff', count: '20+', desc: 'Administration, HR, finance, and IT — the unseen force that keeps AGS running efficiently.' },
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
              We operate with full transparency, zero tolerance for corruption, and
              a deep commitment to ethical business practices — because trust is the
              foundation of every lasting airline partnership.
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
                AGS believes that a great company must be a good neighbour. We invest in
                the communities around our airports and in the wellbeing of every member
                of our team.
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
            At AGS, operational excellence is driven by real-world accountability. We benchmark our
            success against critical aviation metrics, continuously tracking our On-Time Performance (OTP),
            baggage handling accuracy, and safety incident rates. Grounded in a corporate culture of
            absolute transparency, we commit to measuring and openly reporting our performance to our
            airline partners. We own our operational results — both our successes and our challenges —
            ensuring we constantly refine our processes to deliver unmatched reliability.
          </p>
          <div className="ww-commitments-grid">
            {[
              { metric: '99.8%', label: 'On-Time Performance', desc: 'We target and consistently achieve industry-leading on-time departure rates across all handled flights.' },
              { metric: '< 30 min', label: 'Turnaround Time', desc: 'Narrow-body aircraft turnarounds completed within 30 minutes — without compromising safety or quality.' },
              { metric: '24 / 7', label: 'Operations Support', desc: 'Our operations team is available around the clock — no flight goes without support at any hour.' },
              { metric: '0', label: 'Major Safety Incidents', desc: 'Our safety record speaks for itself. Zero major incidents across 15+ years of operations.' },
              { metric: '100%', label: 'Trained Staff', desc: 'Every agent on the ramp is fully certified. No shortcuts, no unqualified staff on any aircraft.' },
              { metric: '< 2 hrs', label: 'Issue Resolution', desc: 'Operational issues reported to us are escalated and resolved within two hours, guaranteed.' },
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
            AGS operates in strict alignment with the highest international aviation standards,
            embedding IATA and ISAGO-compliant protocols across all ground and cargo handling
            activities. Our operations undergo rigorous, regular internal and external audits to
            guarantee absolute compliance and safety. We believe that robust corporate governance
            relies on complete transparency, and we provide clear, unvarnished reporting to our
            stakeholders, establishing AGS as Zimbabwe's most trusted and compliant aviation partner.
          </p>
        </div>
      </section>

      </>}
      <SiteFooter />

    </div>
  )
}
