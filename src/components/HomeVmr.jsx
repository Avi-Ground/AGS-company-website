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
      <div className="hp-vmr-block hp-animate">
        <h2 className="hp-vmr-heading">{t('home.visionTitle')}</h2>
        <p className="hp-vmr-text">{t('home.visionBody')}</p>
      </div>
      <div className="hp-vmr-block hp-animate">
        <h2 className="hp-vmr-heading">{t('home.missionTitle')}</h2>
        <p className="hp-vmr-text">{t('home.missionBody')}</p>
      </div>
    </section>
  )
}
