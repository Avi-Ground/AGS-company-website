import { useEffect } from "react";
import "./OurEthos.css";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const edgePillars = [
  {
    number: "01 ",
    title: "Excellence",
    description:
      "Deliver reliable, high-quality service aligned to customer expectations."
  },
  {
    number: "02 ",
    title: "Discipline",
    description:
      "Strict adherence to safety, security and operational procedures.",

  },
  {
    number: "03 ",
    title: "Growth",
    description: "Continuous improvement, learning and innovation.",
  
  },
  {
    number: "04 ",
    title: "Engagement",
    description:
      "Listening, communicating and responding to employees, customers and stakeholders.",
  
  },
];

const values = [
  { number: "01", title: "Professionalism", quote: "We conduct ourselves with integrity and pride." },
  { number: "02", title: "Accountability & Ownership", quote: "We own our actions and our results." },
  { number: "03", title: "Service Excellence", quote: "We aim for consistent service." },
  { number: "04", title: "Teamwork", quote: "We succeed together." },
  { number: "05", title: "Transparency", quote: "We communicate honestly." },
  { number: "06", title: "Sustainability", quote: "We protect our environment for future generations." },
];



const outcomes = [
  { number: "01", title: "Responsive teams", description: "Listening, communicating and responding to client needs." },
  { number: "02", title: "Consistent service", description: "Reliable standards and dependable service delivery." },
  { number: "03", title: "Prompt resolution", description: "Client concerns are reviewed and followed up." },
  { number: "04", title: "Continuous improvement", description: "Customer insights are turned into meaningful action." },
];

const wordCloud = [
  ["EXCELLENCE", "5%", "8%", "xl"],
  ["DISCIPLINE", "39%", "5%", "md"],
  ["GROWTH", "67%", "13%", "lg"],
  ["ENGAGEMENT", "20%", "24%", "sm"],
  ["EXCELLENCE", "55%", "28%", "sm"],
  ["GROWTH", "4%", "43%", "md"],
  ["DISCIPLINE", "66%", "46%", "sm"],
  ["ENGAGEMENT", "28%", "54%", "lg"],
  ["GROWTH", "7%", "67%", "sm"],
  ["EXCELLENCE", "49%", "66%", "md"],
  ["DISCIPLINE", "74%", "72%", "lg"],
  ["ENGAGEMENT", "13%", "83%", "md"],
];

export default function OurEthos() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('edge-visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.edge-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="edge-page">
      <SiteHeader />

      <main>
        <section className="edge-intro">
          <div className="edge-intro-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="edge-intro-content">
            <p className="edge-eyebrow">
              <i />
              OUR CULTURE
            </p>
            <h1>
              The AGS <span>EDGE</span>
            </h1>
            <p className="edge-intro-lead">
              Excellence. Discipline. Growth. Engagement.
            </p>
            <p className="edge-intro-text">
              AGS EDGE describes the principles that guide how our people work,
              serve clients and make decisions.
            </p>
          </div>
          <div className="edge-word-cloud" aria-hidden="true">
            {wordCloud.map(([word, left, top, size], index) => (
              <span
                className={`edge-word-cloud-${size}`}
                style={{ left, top }}
                key={index}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="edge-intro-graphic" aria-hidden="true">
            <i className="edge-graphic-ring edge-ring-one" />
            <i className="edge-graphic-ring edge-ring-two" />
            <i className="edge-graphic-ring edge-ring-three" />
            <div className="edge-graphic-center">
              <small>AGS</small>
              <strong>EDGE</strong>
            </div>
            <div className="edge-dot-orbit">
              <i className="edge-graphic-point edge-point-one" />
              <i className="edge-graphic-point edge-point-two" />
              <i className="edge-graphic-point edge-point-three" />
              <i className="edge-graphic-point edge-point-four" />
            </div>
          </div>
        </section>

        <section className="edge-section edge-fade">
          <div className="edge-inner edge-two-col">
            <div>
              <p className="edge-eyebrow"><i /> WHAT EDGE MEANS</p>
              <h2 className="edge-h2">More than values.<br /><em>A way of working.</em></h2>
              <p className="edge-lede" style={{ marginTop: '22px', maxWidth: '520px' }}>As part of our drive to strengthen our service and excellence culture, AGS has introduced AGS EDGE — Excellence, Discipline, Growth and Engagement. EDGE guides how our people work, serve and make decisions.</p>
            </div>
            <div className="edge-quote-card">
              <div className="edge-quote-mark">EDGE</div>
              <p>It describes principles that guide how we operate.</p>
            </div>
          </div>
        </section>

        <section className="edge-section">
          <div className="edge-inner">
            <div className="edge-section-head edge-fade">
              <div>
                <p className="edge-eyebrow"><i /> THE FOUR PILLARS</p>
                <h2 className="edge-h2">Four EDGE<br /><em>principles.</em></h2>
              </div>
              <p className="edge-lede">The four EDGE pillars define the standards that underpin AGS service and excellence: quality, safety, progress and meaningful engagement with our people and stakeholders.</p>
            </div>

            <div className="edge-cards-grid">
              {edgePillars.map((pillar, i) => (
                <article
                  className="edge-card edge-fade"
                  key={pillar.number}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="edge-card-number">{pillar.number.trim()}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="edge-section edge-section--dark edge-fade">
          <div className="edge-inner edge-inner--narrow" style={{ textAlign: 'center' }}>
            <p className="edge-eyebrow edge-eyebrow--center"><i /> CLIENT ENGAGEMENT</p>
            <h2 className="edge-h2">Your feedback<br /><em>helps us improve.</em></h2>
            <p className="edge-lede" style={{ margin: '22px auto 0' }}>
              Client engagement is one of the AGS EDGE pillars. Clients can share suggestions, concerns and recognition directly with AGS. We review feedback and use it to inform service improvements.
            </p>
            <a href="mailto:EDGE@aviground.com" className="edge-contact-link">
              EDGE@avi-ground.com <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="edge-section">
          <div className="edge-inner">
            <div className="edge-section-head edge-fade">
              <p className="edge-eyebrow"><i /> OUR VALUES</p>
            </div>
            <div className="edge-values-grid">
              {values.map((value, i) => (
                <article
                  className="edge-card edge-fade"
                  key={value.number}
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                >
                  <span className="edge-card-number">{value.number}</span>
                  <h3>{value.title}</h3>
                  <p className="edge-card-quote">{value.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="edge-section">
          <div className="edge-inner">
            <div className="edge-section-head edge-fade">
              <div>
                <p className="edge-eyebrow"><i /> THE EDGE IN PRACTICE</p>
                <h2 className="edge-h2">What EDGE<br /><em>delivers.</em></h2>
              </div>
              <p className="edge-lede">Through EDGE, our clients benefit from responsive teams, consistent service, prompt resolution of concerns and a strong culture of continuous improvement.</p>
            </div>
            <div className="edge-cards-grid">
              {outcomes.map((outcome, i) => (
                <article
                  className="edge-card edge-fade"
                  key={outcome.number}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="edge-card-number">{outcome.number}</span>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
