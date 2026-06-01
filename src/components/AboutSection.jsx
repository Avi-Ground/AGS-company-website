import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section">

      {/* Our Vision */}
      <div className="about-block">
        <h2 className="about-heading">Our Vision</h2>
        <p className="about-text">
          To be the trusted partner in ground handling and other aviation support services in Zimbabwe
        </p>
      </div>

      {/* Our Mission */}
      <div className="about-block">
        <h2 className="about-heading">Our Mission</h2>
        <p className="about-text">
          To be the most sought after provider of aviation handling services by meeting and
          exceeding customer expectations through innovation and dedicated staff to maximise
          stakeholder value
        </p>
      </div>

      {/* Role in Aviation */}
      <div className="about-block">
        <h2 className="about-heading role">ROLE IN AVIATION</h2>
        <p className="about-text">
          To be the driving force behind continuous improvement in aviation ground services
          consistently raising the standard for safety, efficiency, and passenger experience.
          We evolve with the industry, ensuring that every turnaround is faster, every process is
          smarter, and every operation is safer than before.<br />
          "Leaders in passenger, cargo and aircraft handling"
        </p>
      </div>

    </section>
  )
}

export default AboutSection
