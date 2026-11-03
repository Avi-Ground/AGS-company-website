import './HomeValues.css'
import { useTranslation } from '../i18n'

// Values text lives under edge.values in the locale files (moved here from the EDGE page).
export default function HomeValues() {
  const { t } = useTranslation()
  const values = t('edge.values')

  return (
    <section className="hp-values">
      <h2 className="hp-values-title hp-animate">{t('home.valuesTitle')}</h2>
      <div className="hp-values-grid">
        {values.map((value, i) => (
          <article className="hp-value-card hp-animate" key={value.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
            <span className="hp-value-number">{String(i + 1).padStart(2, '0')}</span>
            <h3>{value.title}</h3>
            <p>{value.quote}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
