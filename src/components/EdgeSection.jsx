import './EdgeSection.css'

import edge1 from '../assets/edge1.jpg'
import edge2 from '../assets/edge2.jpg'
import edge3 from '../assets/edge3.jpg'
import edge4 from '../assets/edge4.jpg'

function EdgeSection() {
  return (
    <section className="edge-section">

      {/* ── The AGS EDGE ── */}
      <h2 className="edge-title">The AGS EDGE</h2>

      <div className="edge-photos">
        <div className="edge-photo-wrap"><img src={edge1} alt="AGS operations" className="edge-photo" /></div>
        <div className="edge-photo-wrap"><img src={edge2} alt="AGS team" className="edge-photo" /></div>
        <div className="edge-photo-wrap"><img src={edge3} alt="AGS ground crew" className="edge-photo" /></div>
        <div className="edge-photo-wrap"><img src={edge4} alt="AGS staff" className="edge-photo" /></div>
      </div>

      <p className="edge-body">
        The AGS EDGE — <strong>Excellence, Discipline, Growth, Engagement</strong> — drives everything
        we do. We deliver reliable, safe, and efficient ground operations with a hospitality
        mindset, embedding strict safety and security procedures at every step. Through
        continuous improvement and proactive feedback at <strong>all levels</strong>, we turn customer
        insights into faster, safer, and more dependable turnarounds.
      </p>

      {/* ── Why Choosing AGS ── */}
      <h2 className="why-title">Why choosing AGS</h2>

      <div className="why-grid">

        <div className="why-card">
          <svg className="why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="18" y="8" width="20" height="26" rx="2"/>
            <path d="M24 14h8M24 19h8M24 24h5"/>
            <path d="M14 38h12l4 6 4-6h16v14H14z"/>
            <path d="M28 44h8"/>
          </svg>
          <span className="why-label">Professionalism</span>
        </div>

        <div className="why-card">
          <svg className="why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="28" r="14"/>
            <path d="M24 28l6 6 10-12"/>
            <path d="M16 50c0-6 7-10 16-10s16 4 16 10"/>
            <path d="M32 42v8"/>
          </svg>
          <span className="why-label">Accountability and Ownership</span>
        </div>

        <div className="why-card">
          <svg className="why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="12"/>
            <path d="M32 20V12M32 52v-8M20 32h-8M52 32h-8"/>
            <path d="M23.5 23.5l-5.7-5.7M46.2 46.2l-5.7-5.7M40.5 23.5l5.7-5.7M17.8 46.2l5.7-5.7"/>
            <circle cx="32" cy="32" r="4"/>
          </svg>
          <span className="why-label">Service Excellence</span>
        </div>

        <div className="why-card">
          <svg className="why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 10 C20 10 12 20 12 30 c0 14 20 24 20 24 s20-10 20-24 c0-10-8-20-20-20z"/>
            <path d="M24 30 c0-4 4-8 8-8 s8 4 8 8"/>
            <path d="M22 38 q10 8 20 0"/>
          </svg>
          <span className="why-label">Sustainability</span>
        </div>

        <div className="why-card">
          <svg className="why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="18" r="6"/>
            <circle cx="14" cy="22" r="5"/>
            <circle cx="50" cy="22" r="5"/>
            <path d="M20 42c0-7 5-12 12-12s12 5 12 12"/>
            <path d="M6 46c0-6 4-10 8-10"/>
            <path d="M58 46c0-6-4-10-8-10"/>
          </svg>
          <span className="why-label">Teamwork</span>
        </div>

        <div className="why-card">
          <svg className="why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="24" r="10"/>
            <path d="M20 44c0-6 5-10 12-10s12 4 12 10"/>
            <path d="M10 20l4 4-4 4M54 20l-4 4 4 4"/>
            <path d="M14 24h6M44 24h6"/>
          </svg>
          <span className="why-label">Transparency</span>
        </div>

      </div>

    </section>
  )
}

export default EdgeSection
