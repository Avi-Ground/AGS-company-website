import './HomeVmr.css'
import { rich, useTranslation } from '../i18n'

export default function HomeVmr() {
  const { t } = useTranslation()
  return (
    <section className="hp-vmr">
      <div className="hp-vmr-block hp-animate">
        <h2 className="hp-vmr-heading role">{t('home.roleTitle')}</h2>
        <p className="hp-vmr-text">{rich(t('home.roleBody'))}</p>
      </div>
    </section>
  )
}
