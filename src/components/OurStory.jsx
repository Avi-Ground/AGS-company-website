import { useEffect, useRef } from 'react'
import './OurStory.css'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { rich, useTranslation } from '../i18n'
import dasCargo from '../assets/das-cargo.jpeg'
import qatarAirways from '../assets/qatar-airways.jpeg'
import mkAirlines from '../assets/mk-airlines.jpeg'
import atlasAir from '../assets/atlas-air.jpeg'


export default function OurStory() {
  const fadeRefs = useRef([])
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('os-visible')),
      { threshold: 0.12 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <div className="os-page">


      {/* ── HERO ── */}
      <header className="os-hero">
        <SiteHeader />
        <div className="os-hero-bg" />
        <div className="os-hero-plane-wrap">
          <div className="os-hero-plane-frame">
            <img src={dasCargo}    alt="DAS Air Cargo aircraft on the tarmac" className="os-hero-plane-img os-slide os-slide--1" />
            <img src={mkAirlines}  alt="MK Airlines Boeing 747 on the tarmac" className="os-hero-plane-img os-slide os-slide--2" />
            <img src={atlasAir}    alt="Atlas Air Boeing 747 on the tarmac"    className="os-hero-plane-img os-slide os-slide--3" />
          </div>
        </div>
        <div className="os-hero-content">
          <div className="os-tag">{t('story.tag')}</div>
          <h1 className="os-hero-title">{rich(t('story.heroTitle'))}</h1>
          <p className="os-hero-sub">{t('story.heroSub')}</p>
        </div>
        <div className="os-hero-scroll">
          <div className="os-scroll-mouse"><div className="os-scroll-dot" /></div>
          <span>{t('story.scroll')}</span>
        </div>
      </header>

      {/* ── INTRO ── */}
      <section className="os-intro" ref={ref}>
        <div className="os-intro-text">
          <h2 className="os-h2">{t('story.originsTitle')}</h2>
          <p>{t('story.origins1')}</p>
          <p>{t('story.origins2')}</p>
        </div>
        <div className="os-intro-pull">
          <span className="os-pull-line" />
          <blockquote>{t('story.quote')}</blockquote>
        </div>
      </section>

      {/* ── PRESENT-DAY FOCUS ── */}
      <section className="os-focus" ref={ref}>
        <div className="os-focus-content">
          <div className="os-tag">{t('story.presentTag')}</div>
          <h2 className="os-h2">{t('story.presentTitle')}</h2>
          <p>{t('story.present1')}</p>
          <p>{rich(t('story.present2'))}</p>
        </div>
        <div className="os-focus-img-wrap">
          <div className="os-focus-img-frame">
            <img src={qatarAirways} alt="Qatar Airways aircraft being handled by AGS on the tarmac" className="os-focus-img" />
          </div>
        </div>
      </section>

      {/* ── THE FUTURE ── */}
      <section className="os-focus os-future" ref={ref}>
        <div className="os-focus-content">
        <div className="os-tag os-tag--dark">{t('story.futureTag')}</div>
        <h2 className="os-h2">{t('story.futureTitle')}</h2>
        <p>{t('story.future1')}</p>
        <p>{rich(t('story.future2'))}</p>
        </div>
        <div className="os-focus-img-wrap">
          <div className="os-focus-img-frame">
            <img src={atlasAir} alt="Atlas Air aircraft supported by AGS" className="os-focus-img" />
          </div>
        </div>
      </section>

      <SiteFooter />

    </div>
  )
}
