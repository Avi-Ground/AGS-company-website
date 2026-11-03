import { useEffect } from 'react'
import './HomePage.css'

import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomeVmr from './HomeVmr'
import HomeValues from './HomeValues'
import HomeServices from './HomeServices'
import SiteFooter from './SiteFooter'

export default function HomePage() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hp-in')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.hp-animate, .hp-animate-left, .hp-animate-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hp-page">
      <HomeHero />
      <HomeAbout />
      <HomeVmr />
      <HomeValues />
      <HomeServices />
      <SiteFooter />
    </div>
  )
}

