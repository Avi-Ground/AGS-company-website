import { useEffect, useMemo, useState } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './Careers.css'
import { rich, useTranslation } from '../i18n'

// Add vacancies here. Listings automatically stop appearing after their deadline.
const jobListings = [
  // {
  //   id: 'passenger-services-agent',
  //   title: 'Passenger Services Agent',
  //   location: 'Harare International Airport',
  //   type: 'Full-time',
  //   deadline: '2026-12-31', // YYYY-MM-DD; shown until 23:59 on this date
  //   summary: 'Deliver a welcoming, efficient check-in and boarding experience for our airline partners.',
  // },
]

const formatDeadline = (deadline, locale) => new Intl.DateTimeFormat(locale, {
  day: 'numeric', month: 'long', year: 'numeric',
}).format(new Date(`${deadline}T12:00:00`))

export default function Careers() {
  const [now, setNow] = useState(() => Date.now())
  const { t, language } = useTranslation()
  const openJobs = useMemo(() => {
    return jobListings.filter(({ deadline }) => new Date(`${deadline}T23:59:59`).getTime() >= now)
  }, [now])

  useEffect(() => {
    window.scrollTo(0, 0)
    const deadlineCheck = window.setInterval(() => setNow(Date.now()), 60_000)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('cr-visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.cr-fade').forEach((el) => observer.observe(el))
    return () => {
      window.clearInterval(deadlineCheck)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="cr-page">
      <SiteHeader />
      <main>
        <section className="cr-hero">
          <div className="cr-hero-copy">
            <h1>{rich(t('careers.heroTitle'))}</h1>
            <p>{t('careers.heroBody')}</p>
          </div>
          <div className="cr-flight-mark" aria-hidden="true">AGS</div>
        </section>

        <section className="cr-roles" id="open-roles">
          <div className="cr-section-heading cr-fade">
            <div><p className="cr-eyebrow">{t('careers.rolesTag')}</p><h2>{t('careers.rolesTitle')}</h2></div>
            <p>{t('careers.rolesIntro')} <a href="mailto:hr@avi-ground.com" dir="ltr">hr@avi-ground.com</a>.</p>
          </div>

          {openJobs.length > 0 ? (
            <div className="cr-job-list">
              {openJobs.map((job, i) => (
                <article
                  className="cr-job cr-fade"
                  key={job.id}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div>
                    <div className="cr-job-meta"><span>{job.location}</span><span>{job.type}</span></div>
                    <h3>{job.title}</h3>
                    <p>{job.summary}</p>
                  </div>
                  <div className="cr-job-action">
                    <time dateTime={job.deadline}>{t('careers.applyBy', { date: formatDeadline(job.deadline, language.htmlLang) })}</time>
                    <a href={`mailto:hr@avi-ground.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>{t('careers.applyEmail')} <span className="dir-arrow" aria-hidden="true">→</span></a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="cr-empty cr-fade">
              <h3>{t('careers.emptyTitle')}</h3>
              <p>{t('careers.emptyBefore')} <a href="mailto:hr@avi-ground.com" dir="ltr">hr@avi-ground.com</a> {t('careers.emptyAfter')}</p>
            </div>
          )}
        </section>

        <section className="cr-apply cr-fade">
          <p className="cr-eyebrow">{t('careers.stayTag')}</p>
          <h2>{rich(t('careers.stayTitle'))}</h2>
          <p>{t('careers.stayBody')}</p>
          <a href="mailto:hr@avi-ground.com?subject=Career%20enquiry%20to%20AGS">{t('careers.emailHr')} <span className="dir-arrow" aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
