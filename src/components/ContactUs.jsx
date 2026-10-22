import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './ContactUs.css'
import { useTranslation } from '../i18n'

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
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/aviationgroundservices/',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/avi_ground',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

// Enquiry topics: the key picks the translated label; the English value is what the team receives by email.
const topics = [
  ['general', 'General enquiry'],
  ['feedback', 'Feedback'],
  ['service', 'Service request'],
  ['other', 'Other'],
]

// Update this number if the Lost Property Office contact changes.
const lostPropertyWhatsApp = '2638677004791'

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null)
  const { t } = useTranslation()
  const faqs = t('contact.faqs')
  const { hash, search } = useLocation()
  // Arriving from "Discuss this service" pre-fills the form with that service.
  const [form, setForm] = useState(() => {
    const service = new URLSearchParams(search).get('service')
    return service
      ? { name: '', email: '', topic: 'Service request', message: `I would like to discuss: ${service}

` }
      : { name: '', email: '', topic: 'General enquiry', message: '' }
  })

  useEffect(() => {
    // Jump to a section such as #enquiry when the link asks for one; otherwise start at the top.
    const target = hash && document.getElementById(hash.slice(1))
    if (target) {
      target.classList.add('cu-visible')
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('cu-visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.cu-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [hash])

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
            <article className="cu-card cu-fade">
              <span className="cu-card-label">{t('contact.postalLabel')}</span>
              <h2>Aviation Ground Services</h2>
              <address>{t('contact.postalArea')}<br />{t('contact.postalAirport')}</address>
            </article>
            <article className="cu-card cu-fade" style={{ transitionDelay: '0.1s' }}>
              <span className="cu-card-label">{t('contact.phoneLabel')}</span>
              <h2>{t('contact.phoneTitle')}</h2>
              <a href="tel:+263242575000" dir="ltr">+263 242 575000–9</a>
              <a href="tel:+2638677004791" dir="ltr">08677004791</a>
            </article>
            <article className="cu-card cu-fade" style={{ transitionDelay: '0.2s' }}>
              <span className="cu-card-label">{t('contact.emailLabel')}</span>
              <h2>{t('contact.emailTitle')}</h2>
              <a href="mailto:info@avi-ground.com" dir="ltr">info@avi-ground.com</a>
            </article>
            <article className="cu-card cu-fade" style={{ transitionDelay: '0.3s' }}>
              <span className="cu-card-label">{t('contact.careLabel')}</span>
              <h2>{t('contact.careTitle')}</h2>
              <a href="mailto:EDGE@avi-ground.com" dir="ltr">EDGE@avi-ground.com</a>
            </article>
          </div>
        </section>

        <section className="cu-proposal cu-fade" id="request-proposal" aria-labelledby="proposal-heading">
          <div className="cu-inner">
            <div className="cu-proposal-card">
              <span className="cu-proposal-orbit cu-proposal-orbit--one" aria-hidden="true" />
              <span className="cu-proposal-orbit cu-proposal-orbit--two" aria-hidden="true" />
              <div className="cu-proposal-copy">
                <p className="cu-eyebrow">{t('contact.proposalTag')}</p>
                <h2 id="proposal-heading">{t('contact.proposalTitle')}</h2>
                <p>{t('contact.proposalBody')}</p>
              </div>
              <a className="cu-proposal-btn" href="mailto:info@avi-ground.com?subject=Request%20for%20Proposal">
                {t('contact.proposalButton')} <span className="dir-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cu-support cu-fade" id="faq" aria-labelledby="support-heading">
          <div className="cu-inner">
            <p className="cu-eyebrow">{t('contact.helpTag')}</p>
            <h2 id="support-heading">{t('contact.faqTitle')}</h2>
            <div className="cu-faq-list">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = openFaq === index
                return (
                  <article className="cu-faq-item" key={index}>
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

        <section className="cu-enquiry cu-fade" id="enquiry" aria-labelledby="enquiry-heading">
          <div className="cu-inner cu-enquiry-grid">
            <div>
              <p className="cu-eyebrow">{t('contact.touchTag')}</p>
              <h2 id="enquiry-heading">{t('contact.formTitle')}</h2>
              <p>{t('contact.formIntro')}</p>
            </div>
            <form className="cu-form" onSubmit={submitEnquiry}>
              <label>
                {t('contact.fullName')}
                <input name="name" value={form.name} onChange={updateForm} autoComplete="name" required />
              </label>
              <label>
                {t('contact.email')}
                <input name="email" type="email" value={form.email} onChange={updateForm} autoComplete="email" required />
              </label>
              <label>
                {t('contact.topic')}
                <select name="topic" value={form.topic} onChange={updateForm}>
                  {topics.map(([key, value]) => <option key={key} value={value}>{t(`contact.topics.${key}`)}</option>)}
                </select>
              </label>
              <label>
                {t('contact.message')}
                <textarea name="message" value={form.message} onChange={updateForm} rows="5" required />
              </label>
              <button type="submit" className="cu-submit">{t('contact.send')} <span className="dir-arrow" aria-hidden="true">→</span></button>
            </form>
          </div>
        </section>

        <section className="cu-lost-found cu-fade" id="lost-found" aria-labelledby="lost-found-heading">
          <div className="cu-inner cu-lost-found-content">
            <div>
              <p className="cu-eyebrow">{t('contact.lostTag')}</p>
              <h2 id="lost-found-heading">{t('contact.lostTitle')}</h2>
              <p>{t('contact.lostBody')}</p>
            </div>
            <a className="cu-whatsapp" href={`https://wa.me/${lostPropertyWhatsApp}`} target="_blank" rel="noopener noreferrer">
              <span className="cu-whatsapp-icon" aria-hidden="true">◔</span>
              {t('contact.whatsapp')} <span className="dir-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="cu-social-section cu-fade">
          <div className="cu-inner">
            <p className="cu-eyebrow">{t('contact.followTag')}</p>
            <h2>{t('contact.followTitle')}</h2>
            <p className="cu-social-copy">{t('contact.followBody')}</p>
            <div className="cu-social-links">
              {socialLinks.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="cu-social-link">
                  <span className="cu-social-icon">{icon}</span>
                  <span>{name}</span>
                  <span className="cu-arrow dir-arrow" aria-hidden="true">→</span>
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
