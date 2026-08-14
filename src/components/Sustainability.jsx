import './Sustainability.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import communityKids from '../assets/community-kids.jpeg'
import safetyImage from '../assets/service-safety.jpg'

export default function Sustainability() {
  return (
    <div className="sus-page">
      <SiteHeader />
      <main className="sus-page-content" aria-label="Sustainability">
        <section className="sus-community"><div className="sus-community-copy"><p>BEYOND THE TARMAC</p><h2>Community &amp;<br />Wellbeing</h2><span>AGS believes that a great company must be a good neighbour. We invest in communities around our airports and in the wellbeing of every member of our team.</span></div><img src={communityKids} alt="Children from the communities AGS serves" /><div className="sus-cards">{[['Youth & Education','We partner with local schools and colleges to provide aviation career pathways for Zimbabwean youth.'],['Staff Wellbeing','We provide health cover, mental health support, and a safe, respectful workplace.'],['Environmental Responsibility','We reduce our footprint through efficient equipment, waste reduction and sustainable practices.'],['Local Procurement','We source goods and services locally where possible, keeping value in our communities.']].map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
        <section className="sus-safety">
          <div className="sus-safety-copy">
            <p>SAFETY &amp; COMPLIANCE</p>
            <h2>Safety is not a policy.<br /><span>It’s our culture.</span></h2>
            <div>At AGS, safety underpins every operation. We maintain a comprehensive Safety Management System aligned with ICAO and IATA ISAGO standards, supported by regular audits, drills and training.</div>
            <ul>
              <li>IATA ISAGO Compliance</li>
              <li>Safety Management System (SMS)</li>
              <li>Regular Safety Audits &amp; Drills</li>
              <li>Dangerous Goods Awareness Training</li>
            </ul>
          </div>
          <img src={safetyImage} alt="AGS safety and compliance operations" />
        </section>
        <section className="sus-policies"><p>HOW WE WORK</p><h2>Business Policies<br />&amp; Practices</h2><span>AGS operates in strict alignment with international aviation standards, embedding IATA and ISAGO-compliant protocols across all ground and cargo handling activities. Our operations undergo regular audits to ensure safety, transparency, and dependable compliance.</span></section>
      </main>
      <SiteFooter />
    </div>
  )
}
