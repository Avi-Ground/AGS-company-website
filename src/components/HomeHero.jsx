import "./HomeHero.css";
import heroImage from "../assets/hero.png";
import SiteHeader from "./SiteHeader";
import CountUp from "./CountUp";

export default function HomeHero() {
  return (
    <section className="hero">

      <SiteHeader variant="home" />

      {/* Background */}
      <div className="hero-bg"></div>

      <div className="hero-gradient"></div>

      <div className="hero-route">
        <svg viewBox="0 0 800 400">
          <path
            d="M20 350 C180 250 260 100 420 160 S650 280 780 80"
            fill="none"
            stroke="rgba(200,16,46,.18)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

        
          <h1>
            Leaders in
            <br />
            Passenger,
            <br />
            Cargo &
            <br />
            Aircraft Handling
          </h1>

          <p>
            Delivering safe, reliable and world-class aviation
            ground handling services across Zimbabwe with a
            commitment to operational excellence, efficiency
            and customer satisfaction.
          </p>

          <div className="hero-buttons">

          </div>

          <div className="hero-stats">

            <div className="stat">
              <h2><CountUp end={25} suffix="+" /></h2>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <h2><CountUp end={200} suffix="+" /></h2>
              <span>Employees</span>
            </div>

            <div className="stat">
              <h2><CountUp end={24} suffix="/7" /></h2>
              <span>Operations</span>
            </div>

            <div className="stat">
              <h2><CountUp end={3} /></h2>
              <span>Airport locations in Zimbabwe</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-circle">

            <img
              src={heroImage}
              alt="AGS Aviation Ground Services"
            />

          </div>

      
          <div className="floating-card card-three">
           

            <div>
              <h4>Cargo Handling</h4>
              <p>Import & Export</p>
            </div>

          </div>

          <div className="floating-card card-two">
            <div>
              <h4>Passenger Handling</h4>
              <p>24 Hour Support</p>
            </div>
          </div>

          <div className="floating-card card-one">
            <div>
              <h4>Aircraft Handling</h4>
              <p>Ramp Operations</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
