import { useEffect, useState } from 'react'
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

const faqs = [
  {
    question: 'What services does AGS provide?',
    answer: 'AGS provides a full range of aircraft, passenger, ramp, cargo and flight operations ground-handling services at R.G. Mugabe International Airport.',
  },
  {
    question: 'How can I request assistance or send feedback?',
    answer: 'Use the enquiry and feedback form below. Select the topic that best matches your request and our team will receive your message by email.',
  },
  {
    question: 'Who should I contact about lost property?',
    answer: 'For items left at the airport or on an aircraft, message the Lost Property Office directly on WhatsApp using the link below.',
  },
]

// Update this number if the Lost Property Office contact changes.
const lostPropertyWhatsApp = '2638677004791'

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', topic: 'General enquiry', message: '' })

  useEffect(() => window.scrollTo(0, 0), [])

  const submitEnquiry = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`${form.topic} from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:info@avi-ground.com?subject=${subject}&body=${body}`
  }

  const updateForm = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

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

        <section className="cu-support" id="faq" aria-labelledby="support-heading">
          <div className="cu-inner">
            <p className="cu-eyebrow">HOW CAN WE HELP?</p>
            <h2 id="support-heading">Frequently asked questions</h2>
            <div className="cu-faq-list">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = openFaq === index
                return (
                  <article className="cu-faq-item" key={question}>
                    <button
                      type="button"
                      className="cu-faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{question}</span>
                      <span className="cu-faq-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <p className="cu-faq-answer">{answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="cu-enquiry" id="enquiry" aria-labelledby="enquiry-heading">
          <div className="cu-inner cu-enquiry-grid">
            <div>
              <p className="cu-eyebrow">GET IN TOUCH</p>
              <h2 id="enquiry-heading">Enquiry &amp; feedback form</h2>
              <p>Tell us how we can help. Your email app will open with your completed message addressed to our team.</p>
            </div>
            <form className="cu-form" onSubmit={submitEnquiry}>
              <label>
                Full name
                <input name="name" value={form.name} onChange={updateForm} autoComplete="name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" value={form.email} onChange={updateForm} autoComplete="email" required />
              </label>
              <label>
                Enquiry type
                <select name="topic" value={form.topic} onChange={updateForm}>
                  <option>General enquiry</option>
                  <option>Feedback</option>
                  <option>Service request</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Your message
                <textarea name="message" value={form.message} onChange={updateForm} rows="5" required />
              </label>
              <button type="submit" className="cu-submit">Send enquiry <span aria-hidden="true">→</span></button>
            </form>
          </div>
        </section>

        <section className="cu-lost-found" id="lost-found" aria-labelledby="lost-found-heading">
          <div className="cu-inner cu-lost-found-content">
            <div>
              <p className="cu-eyebrow">LOST PROPERTY</p>
              <h2 id="lost-found-heading">Lost and found</h2>
              <p>Need help locating an item? Contact the Lost Property Office directly on WhatsApp.</p>
            </div>
            <a className="cu-whatsapp" href={`https://wa.me/${lostPropertyWhatsApp}`} target="_blank" rel="noopener noreferrer">
              <span className="cu-whatsapp-icon" aria-hidden="true">◔</span>
              Message on WhatsApp <span aria-hidden="true">→</span>
            </a>
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
