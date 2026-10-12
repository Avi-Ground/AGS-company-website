import './SafetyCompliance.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import safetyImage from '../assets/service-safety.jpg'

const commitments = [
  ['Safety Management System', 'A documented process for reporting, risk assessment, and operational improvement.'],
  ['IATA ISAGO alignment', 'Procedures and controls designed around recognised ground-handling standards.'],
  ['Training & competency', 'Role-specific recurrent training, practical assessments and safety briefings for our teams.'],
  ['Audit & assurance', 'Planned internal reviews, operational checks and corrective-action tracking.'],
]

export default function SafetyCompliance() {
  return <div className="sc-page"><SiteHeader /><main><section className="sc-hero"><div className="sc-inner sc-hero-grid"><div><p className="sc-eyebrow">SAFETY &amp; COMPLIANCE</p><h1>Safety in our operations.<br /><em>Procedures and training.</em></h1><p className="sc-lede">Safety is a priority in ground handling. AGS uses procedures, staff training, and operational equipment to support passengers, aircraft, cargo, and colleagues.</p><a href="/contact-us#enquiry" className="sc-cta">Speak with our team <span>→</span></a></div><img src={safetyImage} alt="AGS safety and compliance operations" /></div></section><section className="sc-standards"><div className="sc-inner"><p className="sc-eyebrow">HOW WE WORK</p><h2>Operational controls<br /><em>and training.</em></h2><div className="sc-cards">{commitments.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><section className="sc-practice"><div className="sc-inner"><p className="sc-eyebrow">OUR COMMITMENT</p><h2>Clear standards. Prepared teams.<br />Reliable delivery.</h2><p>We maintain operational procedures, incident reporting channels, and regular drills to help identify risks and review how we work. Our certifications, policies, and audit information can be confirmed with the AGS team.</p></div></section></main><SiteFooter /></div>
}
