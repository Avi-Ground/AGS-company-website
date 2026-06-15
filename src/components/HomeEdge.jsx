import { useRef } from 'react'
import './HomeEdge.css'

import edge1 from '../assets/edge1.jpeg'
import edge2 from '../assets/edge2.jpeg'
import edge3 from '../assets/edge3.jpeg'
import edge4 from '../assets/edge4.jpeg'

const whyChooseItems = [
  { label: 'Professionalism', icon: <><rect x="18" y="8" width="20" height="26" rx="2"/><path d="M24 14h8M24 19h8M24 24h5"/><path d="M14 38h12l4 6 4-6h16v14H14z"/><path d="M28 44h8"/></> },
  { label: 'Accountability and Ownership', icon: <><circle cx="32" cy="28" r="14"/><path d="M24 28l6 6 10-12"/><path d="M16 50c0-6 7-10 16-10s16 4 16 10"/><path d="M32 42v8"/></> },
  { label: 'Service Excellence', icon: <><circle cx="32" cy="32" r="12"/><path d="M32 20V12M32 52v-8M20 32h-8M52 32h-8"/><path d="M23.5 23.5l-5.7-5.7M46.2 46.2l-5.7-5.7M40.5 23.5l5.7-5.7M17.8 46.2l5.7-5.7"/><circle cx="32" cy="32" r="4"/></> },
  { label: 'Sustainability', icon: <><path d="M32 10 C20 10 12 20 12 30 c0 14 20 24 20 24 s20-10 20-24 c0-10-8-20-20-20z"/><path d="M24 30 c0-4 4-8 8-8 s8 4 8 8"/><path d="M22 38 q10 8 20 0"/></> },
  { label: 'Teamwork', icon: <><circle cx="32" cy="18" r="6"/><circle cx="14" cy="22" r="5"/><circle cx="50" cy="22" r="5"/><path d="M20 42c0-7 5-12 12-12s12 5 12 12"/><path d="M6 46c0-6 4-10 8-10"/><path d="M58 46c0-6-4-10-8-10"/></> },
  { label: 'Transparency', icon: <><circle cx="32" cy="24" r="10"/><path d="M20 44c0-6 5-10 12-10s12 4 12 10"/><path d="M10 20l4 4-4 4M54 20l-4 4 4 4"/><path d="M14 24h6M44 24h6"/></> },
]

const edgePhotos = [edge1, edge2, edge3, edge4]

export default function HomeEdge() {
  const edgePhotosRef = useRef(null)
  const EDGE_SET_WIDTH = edgePhotos.length * (180 + 12)

  const scrollEdge = () => {
    const el = edgePhotosRef.current
    if (!el) return
    el.scrollBy({ left: 180 + 12, behavior: 'smooth' })
  }

  // Wrap back to the start once the duplicated set has scrolled into view,
  // so the photo strip appears to loop endlessly
  const handleEdgePhotosScroll = () => {
    const el = edgePhotosRef.current
    if (!el) return
    if (el.scrollLeft >= EDGE_SET_WIDTH) {
      el.scrollLeft -= EDGE_SET_WIDTH
    }
  }

  return (
    <section className="hp-edge">
      <h2 className="hp-edge-title hp-animate">The AGS EDGE</h2>
      <div className="hp-edge-photos" ref={edgePhotosRef} onScroll={handleEdgePhotosScroll}>
        {[...edgePhotos, ...edgePhotos].map((img, i) => (
          <div className={`hp-edge-photo-wrap hp-animate${i >= edgePhotos.length ? ' hp-edge-photo-clone' : ''}`} key={i}>
            <img src={img} alt={`AGS ${(i % edgePhotos.length) + 1}`} className="hp-edge-photo" />
            <button className="hp-edge-arrow" onClick={scrollEdge} aria-label="Show next photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
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
        <div className="hp-why-track">
          {[...whyChooseItems, ...whyChooseItems].map((item, i) => (
            <div className={`hp-why-card hp-animate${i >= whyChooseItems.length ? ' hp-why-card-clone' : ''}`} key={i}>
              <svg className="hp-why-icon" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span className="hp-why-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
