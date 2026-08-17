import { useEffect, useMemo, useState } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './Careers.css'

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

const formatDeadline = (deadline) => new Intl.DateTimeFormat('en', {
  day: 'numeric', month: 'long', year: 'numeric',
}).format(new Date(`${deadline}T12:00:00`))

export default function Careers() {
  const [now, setNow] = useState(() => Date.now())
  const openJobs = useMemo(() => {
    return jobListings.filter(({ deadline }) => new Date(`${deadline}T23:59:59`).getTime() >= now)
  }, [now])

  useEffect(() => {
    window.scrollTo(0, 0)
    const deadlineCheck = window.setInterval(() => setNow(Date.now()), 60_000)
    return () => window.clearInterval(deadlineCheck)
  }, [])

  return (
    <div className="cr-page">
      <SiteHeader />
      <main>
        <section className="cr-hero">
          <div className="cr-hero-copy">
            <h1>Join <em>AGS.</em></h1>
            <p>Join the people behind safe, seamless and welcoming airport experiences. At AGS, every role plays a part in keeping aviation moving.</p>
          </div>
          <div className="cr-flight-mark" aria-hidden="true">AGS</div>
        </section>

        <section className="cr-roles" id="open-roles">
          <div className="cr-section-heading">
            <div><p className="cr-eyebrow">OPPORTUNITIES</p><h2>Open roles</h2></div>
            <p>Submit your CV and a short cover note to <a href="mailto:hr@avi-ground.com">hr@avi-ground.com</a>.</p>
          </div>

          {openJobs.length > 0 ? (
            <div className="cr-job-list">
              {openJobs.map((job) => (
                <article className="cr-job" key={job.id}>
                  <div>
                    <div className="cr-job-meta"><span>{job.location}</span><span>{job.type}</span></div>
                    <h3>{job.title}</h3>
                    <p>{job.summary}</p>
                  </div>
                  <div className="cr-job-action">
                    <time dateTime={job.deadline}>Apply by {formatDeadline(job.deadline)}</time>
                    <a href={`mailto:hr@avi-ground.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>Apply by email <span aria-hidden="true">→</span></a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="cr-empty">
              <h3>No current vacancies</h3>
              <p>We do not have any open positions at the moment. Please check back soon, or send your CV to <a href="mailto:hr@avi-ground.com">hr@avi-ground.com</a> for future consideration.</p>
            </div>
          )}
        </section>

        <section className="cr-apply">
          <p className="cr-eyebrow">STAY CONNECTED</p>
          <h2>Ready when<br /><em>the right role is.</em></h2>
          <p>Email your CV and tell us which area of the business interests you. We will keep your details in mind for relevant future opportunities.</p>
          <a href="mailto:hr@avi-ground.com?subject=Career%20enquiry%20to%20AGS">Email HR <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
