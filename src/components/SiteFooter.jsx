import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SiteFooter.css'

import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpeg'
import news3 from '../assets/news3.jpeg'

export default function SiteFooter() {
  const footerRef = useRef(null)
  const newsGridRef = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Scroll animation observer — self-contained so this footer works on any page
  useEffect(() => {
    const root = footerRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hp-in')
      }),
      { threshold: 0.12 }
    )
    root.querySelectorAll('.hp-animate, .hp-animate-left, .hp-animate-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollNews = () => {
    const grid = newsGridRef.current
    if (!grid) return
    const card = grid.querySelector('.hp-news-card')
    const amount = card ? card.getBoundingClientRect().width + 16 : grid.clientWidth
    if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10) {
      grid.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      grid.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <footer className="hp-footer" ref={footerRef}>

      {/* Related Pages — all non-home pages */}
      {!isHome && (
        <section className="hp-footer-related">
          <div className="hp-related-inner">
            <p className="hp-related-label">Related Pages</p>
            <div className="hp-related-cards">
              {[
                {
                  to: '/', title: 'Home', sub: 'Back to our homepage',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"/><path d="M9 22V12h6v10"/></svg>
                },
                {
                  to: '/who-we-are', title: 'Who We Are', sub: 'Our values, people & mission',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="18" cy="8" r="2.5"/><path d="M21 21v-1.5a3.5 3.5 0 00-2.5-3.35"/></svg>
                },
                {
                  to: '/our-services', title: 'Our Services', sub: 'Ground & cargo handling solutions',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                },
                {
                  to: '/our-story', title: 'Our Story', sub: 'From the tarmac to the top',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                },
              ].map((p) => (
                <Link key={p.to} to={p.to} className="hp-related-card">
                  <span className="hp-related-card-icon">{p.icon}</span>
                  <span className="hp-related-card-title">{p.title}</span>
                  <span className="hp-related-card-sub">{p.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Business News — all pages */}
      <section className="hp-news">
        <h2 className="hp-news-title hp-animate">Latest business news</h2>
        <div className="hp-news-grid" ref={newsGridRef}>
          {[
            { img: news1, title: 'AGS Begins Handling Qatar Airways', sub: 'Safety, efficiency, and hospitality take off with new partnership.' },
            { img: news2, title: 'From Belly to Bulk:', sub: 'AGS Delivers Reliable Cargo Handling for Qatar' },
            { img: news3, title: 'AGS Expands Network,', sub: 'Starts Passenger Handling for Kenya Airways' },
          ].map((n, i, arr) => (
            <div className="hp-news-card hp-animate" key={i}>
              <div className="hp-news-img-wrap">
                <img src={n.img} alt={n.title} className="hp-news-img" />
              </div>
              {i < arr.length - 1 && (
                <button className="hp-news-arrow" onClick={scrollNews} aria-label="Show next news item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              )}
              <p className="hp-news-card-title">{n.title}</p>
              <p className="hp-news-card-sub">{n.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are / Services / Careers / News columns — homepage only */}
      {isHome && (
        <div className="hp-footer-top">
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Who we are</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Our service commitments</a></li>
              <li><a href="#">Community and wellbeing</a></li>
              <li><a href="#">Business code of conduct</a></li>
              <li><a href="#">Business policies and practices</a></li>
              <li><a href="#">Our people</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Our Services</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Ground handling</a></li>
              <li><a href="#">Passenger handling</a></li>
              <li><a href="#">Cargo handling</a></li>
              <li><a href="#">Charter Services</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">Careers</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Join us</a></li>
            </ul>
          </div>
          <div className="hp-footer-col">
            <h4 className="hp-footer-col-title">News and media</h4>
            <ul className="hp-footer-links">
              <li><a href="#">Latest news</a></li>
              <li><a href="#">Media gallery</a></li>
              <li><a href="#">Latest annual report</a></li>
              <li><a href="#">Facts and figures</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact Us + Social — all pages */}
      <div className="hp-footer-bottom">
        <div className="hp-footer-col">
          <h4 className="hp-footer-col-title">Contact Us</h4>
          <ul className="hp-footer-links">
            <li><a href="#">Frequently asked questions</a></li>
            <li><a href="#">Enquiry &amp; feedback form</a></li>
            <li><a href="#">Lost and found</a></li>
            <li><a href="#">Media contact and resources</a></li>
          </ul>
        </div>
        <div className="hp-footer-col">
          <h4 className="hp-footer-col-title">Connect with us</h4>
          <div className="hp-social-icons">
            <a href="#" className="hp-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="hp-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="hp-social-icon" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hp-social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hp-footer-copyright">
        © {new Date().getFullYear()} Aviation Ground Services. All rights reserved.
      </div>
    </footer>
  )
}
