import { useEffect } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './NewsMedia.css'
import { useTranslation } from '../i18n'

import cargoImage from '../assets/news1.jpeg'
import operationsImage from '../assets/news2.jpeg'
import communityImage from '../assets/news3.jpeg'
import featureImage from '../assets/atlas-air.jpeg'

// Story text lives in the locale files under news.stories (same order).
const storyImages = [cargoImage, operationsImage, communityImage]

export default function NewsMedia() {
  const { t } = useTranslation()
  const stories = t('news.stories').map((story, i) => ({ ...story, image: storyImages[i] }))
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('nm-visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.nm-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="nm-page">
      <SiteHeader />
      <main>
        <section className="nm-latest">
          <div className="nm-flight-line" aria-hidden="true">
            <span>AGS</span>
          </div>
          <div className="nm-section-heading">
            <div><p className="nm-eyebrow">{t('news.latestTag')}</p><h1>{t('news.title')}</h1></div>
            <p>{t('news.intro')}</p>
          </div>
          <div className="nm-story-grid">
            {stories.map((story, i) => (
              <article
                className="nm-story nm-fade"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="nm-story-image"><img src={story.image} alt="" /></div>
                <div className="nm-story-body">
                  <div className="nm-story-meta"><span>{story.category}</span><time>{story.date}</time></div>
                  <h2>{story.title}</h2>
                  <p>{story.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="nm-feature nm-fade">
          <div className="nm-feature-image"><img src={featureImage} alt="Aircraft receiving AGS ground support" /></div>
          <article className="nm-feature-copy">
            <p className="nm-eyebrow">{t('news.featuredTag')}</p>
            <span className="nm-meta">{t('news.featuredMeta')}</span>
            <h2>{t('news.featuredTitle')}</h2>
            <p>{t('news.featuredBody')}</p>
            <a href="mailto:info@avi-ground.com" className="nm-link">{t('news.featuredLink')} <span className="dir-arrow" aria-hidden="true">&rarr;</span></a>
          </article>
        </section>

        <section className="nm-contact nm-fade">
          <p className="nm-eyebrow">{t('news.mediaTag')}</p>
          <h2>{t('news.mediaTitle')}</h2>
          <p>{t('news.mediaBody')}</p>
          <a href="mailto:info@avi-ground.com">{t('news.mediaLink')} <span className="dir-arrow" aria-hidden="true">&rarr;</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
