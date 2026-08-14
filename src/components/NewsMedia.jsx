import { useEffect } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './NewsMedia.css'

import cargoImage from '../assets/news1.jpeg'
import operationsImage from '../assets/news2.jpeg'
import communityImage from '../assets/news3.jpeg'
import featureImage from '../assets/atlas-air.jpeg'

const stories = [
  {
    category: 'Operations',
    date: 'Service update',
    title: 'Keeping every turnaround moving with confidence',
    copy: 'Behind every departure is a coordinated team focused on safe, efficient and dependable ground handling.',
    image: cargoImage,
  },
  {
    category: 'Cargo',
    date: 'Service update',
    title: 'Cargo handling built around care and precision',
    copy: 'From acceptance through to release, our teams help keep freight moving through every stage of the journey.',
    image: operationsImage,
  },
  {
    category: 'Community',
    date: 'In the community',
    title: 'Supporting the communities around us',
    copy: 'We believe meaningful service extends beyond the airport and into the communities we call home.',
    image: communityImage,
  },
]

export default function NewsMedia() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="nm-page">
      <SiteHeader />

      <main>
        <section className="nm-hero">
          <div className="nm-hero-copy">
            <p className="nm-eyebrow">NEWS &amp; MEDIA</p>
            <h1>Stories from<br /><em>the ground up.</em></h1>
            <p>Discover the people, partnerships and operational moments that keep Aviation Ground Services moving forward.</p>
          </div>
          <div className="nm-flight-line" aria-hidden="true">
            <span>AGS</span>
            <svg viewBox="0 0 560 270" fill="none"><path d="M8 226C106 213 126 61 240 100s107 137 308 14" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" /><path d="m520 110 28 6-22 18" stroke="currentColor" strokeWidth="2" /></svg>
          </div>
        </section>

        <section className="nm-feature">
          <div className="nm-feature-image"><img src={featureImage} alt="Aircraft receiving AGS ground support" /></div>
          <article className="nm-feature-copy">
            <p className="nm-eyebrow">FEATURED STORY</p>
            <span className="nm-meta">OUR OPERATIONS</span>
            <h2>Ground handling that lets airlines focus on the journey ahead.</h2>
            <p>Our experienced teams provide thoughtful, disciplined support across passenger, ramp and cargo operations — always with safety at the centre.</p>
            <a href="mailto:info@avi-ground.com" className="nm-link">Talk to our team <span aria-hidden="true">→</span></a>
          </article>
        </section>

        <section className="nm-latest">
          <div className="nm-section-heading">
            <div><p className="nm-eyebrow">LATEST</p><h2>News from AGS</h2></div>
            <p>Updates from our operations, our people and the aviation community.</p>
          </div>
          <div className="nm-story-grid">
            {stories.map((story) => (
              <article className="nm-story" key={story.title}>
                <div className="nm-story-image"><img src={story.image} alt="" /></div>
                <div className="nm-story-body">
                  <div className="nm-story-meta"><span>{story.category}</span><time>{story.date}</time></div>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="nm-contact">
          <p className="nm-eyebrow">MEDIA ENQUIRIES</p>
          <h2>Need to get in touch?</h2>
          <p>For media enquiries, company information or interview requests, our team is ready to help.</p>
          <a href="mailto:info@avi-ground.com">Contact AGS <span aria-hidden="true">→</span></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
