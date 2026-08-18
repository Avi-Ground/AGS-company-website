import { useEffect } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './ContactUs.css'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aviationgroundservices?igsh=YnA2d3FqcDdkNjlj',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1JyWGob3ru/',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/avi_ground',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

export default function ContactUs() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="cu-page">
      <SiteHeader />
      <main>
        <section className="cu-details">
          <div className="cu-inner cu-details-grid">
            <article className="cu-card">
              <span className="cu-card-label">POSTAL ADDRESS</span>
              <h2>Aviation Ground Services</h2>
              <address>P.O. Box AP 13<br />R.G. Mugabe International Airport</address>
            </article>
            <article className="cu-card">
              <span className="cu-card-label">TELEPHONE</span>
              <h2>Call our team</h2>
              <a href="tel:+263242575000">+263 242 575000–9</a>
              <a href="tel:+2638677004791">08677004791</a>
            </article>
            <article className="cu-card">
              <span className="cu-card-label">FAX</span>
              <h2>Send a fax</h2>
              <a href="fax:+263242575513">+263 242 575513</a>
            </article>
          </div>
        </section>

        <section className="cu-social-section">
          <div className="cu-inner">
            <p className="cu-eyebrow">FOLLOW AGS</p>
            <h2>Connect with us</h2>
            <p className="cu-social-copy">Follow our latest news, stories and updates on social media.</p>
            <div className="cu-social-links">
              {socialLinks.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="cu-social-link">
                  <span className="cu-social-icon">{icon}</span>
                  <span>{name}</span>
                  <span className="cu-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
