import { useEffect } from "react";
import "./OurEthos.css";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { rich, useTranslation } from "../i18n";

// Card text lives in the locale files under edge.pillars, edge.values and edge.outcomes.
const EDGE_LETTERS = ["E", "D", "G", "E"];

const numbered = (items) => items.map((item, i) => ({ ...item, number: String(i + 1).padStart(2, "0") }));

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
  const { t } = useTranslation();
  const edgePillars = numbered(t("edge.pillars"));
  const values = numbered(t("edge.values"));
  const outcomes = numbered(t("edge.outcomes"));

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
              {t("edge.cultureTag")}
            </p>
            <h1>
              {t("edge.heroTitle")} <span>EDGE</span>
            </h1>
            <p className="edge-intro-lead">{t("edge.heroLead")}</p>
            <p className="edge-intro-text">{t("edge.heroText")}</p>
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

        <section className="edge-section">
          <div className="edge-inner">
            <div className="edge-section-head edge-fade">
              <div>
                <p className="edge-eyebrow"><i /> {t("edge.pillarsTag")}</p>
                <h2 className="edge-h2">{rich(t("edge.meansTitle"))}</h2>
              </div>
              <p className="edge-lede">{t("edge.pillarsBody")}</p>
            </div>

            <div className="edge-pillars-grid">
              {edgePillars.map((pillar, i) => (
                <article
                  className="edge-pillar edge-fade"
                  key={pillar.number}
                  style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
                >
                  <span className="edge-pillar-letter" aria-hidden="true">{EDGE_LETTERS[i]}</span>
                  <span className="edge-card-number">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="edge-section edge-section--dark edge-feedback edge-fade">
          <div className="edge-inner edge-inner--narrow" style={{ textAlign: 'center' }}>
            <p className="edge-eyebrow edge-eyebrow--center"><i /> {t("edge.feedbackTag")}</p>
            <h2 className="edge-h2">{rich(t("edge.feedbackTitle"))}</h2>
            <p className="edge-lede" style={{ margin: '22px auto 0' }}>{t("edge.feedbackBody")}</p>
            <a href="mailto:EDGE@avi-ground.com" className="edge-contact-link">
              EDGE@avi-ground.com <span className="dir-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="edge-section edge-section--tint">
          <div className="edge-inner">
            <div className="edge-section-head edge-section-head--center edge-fade">
              <p className="edge-eyebrow edge-eyebrow--center"><i /> {t("edge.valuesTag")}</p>
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
                <p className="edge-eyebrow"><i /> {t("edge.practiceTag")}</p>
                <h2 className="edge-h2">{rich(t("edge.practiceTitle"))}</h2>
              </div>
              <p className="edge-lede">{t("edge.practiceBody")}</p>
            </div>
            <div className="edge-outcomes">
              {outcomes.map((outcome, i) => (
                <article
                  className="edge-outcome edge-fade"
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
