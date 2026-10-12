import { useEffect } from 'react'
import './Sustainability.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import communityKids from '../assets/community-kids.jpeg'
import safetyImage from '../assets/service-safety.jpg'

export default function Sustainability() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('sus-visible')
    }), { threshold: 0.12 })
    document.querySelectorAll('.sus-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const cards = [
    ['Youth & Education', 'We partner with local schools and colleges to provide aviation career pathways for Zimbabwean youth.'],
    ['Staff Wellbeing', 'We provide health cover, mental health support, and a safe, respectful workplace.'],
    ['Environmental Responsibility', 'We reduce our footprint through efficient equipment, waste reduction and sustainable practices.'],
    ['Local Procurement', 'We source goods and services locally where possible, keeping value in our communities.'],
  ]

  return <div className="sus-page"><SiteHeader /><main className="sus-page-content" aria-label="Sustainability"><section className="sus-community sus-fade"><div className="sus-community-copy"><p>BEYOND THE TARMAC</p><h2>Community &amp;<br />Wellbeing</h2><span>AGS aims to be a constructive neighbour. We support community initiatives around our airports and staff wellbeing.</span></div><img src={communityKids} alt="Children from the communities AGS serves" /><div className="sus-cards">{cards.map(([title, body], i) => <article key={title} className="sus-fade" style={{ transitionDelay: `${i * 0.1}s` }}><h3>{title}</h3><p>{body}</p></article>)}</div></section><section className="sus-safety sus-fade"><div className="sus-safety-copy"><p>SAFETY &amp; COMPLIANCE</p><h2>Safety in our operations.<br /><span>Procedures and training.</span></h2><div>Safety is a priority in AGS ground handling operations. We maintain a comprehensive Safety Management System aligned with ICAO and IATA ISAGO standards, supported by regular audits, drills and training.</div><ul><li>IATA ISAGO Compliance</li><li>Safety Management System (SMS)</li><li>Regular Safety Audits &amp; Drills</li><li>Dangerous Goods Awareness Training</li></ul></div><img src={safetyImage} alt="AGS safety and compliance operations" /></section><section className="sus-policies sus-fade"><p>HOW WE WORK</p><h2>Business Policies<br />&amp; Practices</h2><span>AGS follows applicable international aviation standards and uses IATA and ISAGO procedures in ground and cargo handling. Regular audits support safety and compliance reviews.</span></section></main><SiteFooter /></div>
}
