import './NewsSection.css'

import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpeg'
import news3 from '../assets/news3.jpeg'

function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="news-title">Latest business news</h2>

      <div className="news-grid">

        <div className="news-card">
          <div className="news-img-wrap">
            <img src={news1} alt="AGS Begins Handling Qatar Airways" className="news-img" />
          </div>
          <p className="news-card-title">AGS Begins Handling Qatar Airways</p>
          <p className="news-card-sub">Safety, efficiency, and hospitality take off with new partnership.</p>
        </div>

        <div className="news-card">
          <div className="news-img-wrap">
            <img src={news2} alt="From Belly to Bulk" className="news-img" />
          </div>
          <p className="news-card-title">From Belly to Bulk:</p>
          <p className="news-card-sub">AGS Delivers Reliable Cargo Handling for Qatar</p>
        </div>

        <div className="news-card">
          <div className="news-img-wrap">
            <img src={news3} alt="AGS Expands Network" className="news-img" />
          </div>
          <p className="news-card-title">AGS Expands Network,</p>
          <p className="news-card-sub">Starts Passenger Handling for Kenya Airways</p>
        </div>

      </div>
    </section>
  )
}

export default NewsSection
