import "./OurEthos.css";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const edgePillars = [
  {
    number: "01 ",
    title: "Excellence",
    description:
      "Deliver reliable, high-quality service aligned to customer expectations.",
    keyword: "QUALITY",
  },
  {
    number: "02 ",
    title: "Discipline",
    description:
      "Strict adherence to safety, security and operational procedures.",
    keyword: "SAFETY",
  },
  {
    number: "03 ",
    title: "Growth",
    description: "Continuous improvement, learning and innovation.",
    keyword: "PROGRESS",
  },
  {
    number: "04 ",
    title: "Engagement",
    description:
      "Listening, communicating and responding to employees and customers.",
    keyword: "CONNECTION",
  },
];

const values = [
  {
    number: "01",
    title: "Professionalism",
    quote:
      "The standard in everything we do, from our first impression to the final pushback.",
    description:
      "We employ a safety-first mindset, placing importance on our presentation and technical competence.",
  },
  {
    number: "02",
    title: "Accountability & Ownership",
    quote: "We own the turn, the load and the outcome.",
    description:
      "Our services are premised on reliable execution, accuracy and problem-solving.",
  },
  {
    number: "03",
    title: "Service Excellence",
    quote: "On-time, every time, with care.",
    description:
      "We prioritise our airline partnerships and engage in passenger-centric support.",
  },
  {
    number: "04",
    title: "Teamwork",
    quote: "One aircraft, one team.",
    description:
      "AGS believes in the power of one; our team moves together as one synchronised and fluid unit.",
  },
  {
    number: "05",
    title: "Transparency",
    quote:
      "Clear communication builds trust among airlines, passengers and each other.",
    description:
      "Our team executes honest reporting and has open processes with no hidden issues.",
  },
  {
    number: "06",
    title: "Sustainability",
    quote: "Protecting people, aircraft and the environment we operate in.",
    description:
      "We engage in efficient operations driven by people sustainability.",
  },
];

const people = [
  ["80+", "Ramp Agents"],
  ["60+", "Passenger Services"],
  ["40+", "Cargo Handlers"],
  ["30+", "Operations & Management"],
  ["20+", "Safety & Compliance"],
  ["20+", "Support Staff"],
];

const wordCloud = [
  ["EXCELLENCE", "5%", "8%", "xl"],
  ["DISCIPLINE", "39%", "5%", "md"],
  ["GROWTH", "67%", "13%", "lg"],
  ["ENGAGEMENT", "20%", "24%", "sm"],
  ["EXCELLENCE", "55%", "28%", "sm"],
  ["GROWTH", "4%", "43%", "md"],
  ["DISCIPLINE", "66%", "46%", "sm"],
  ["ENGAGEMENT", "28%", "54%", "lg"],
  ["GROWTH", "7%", "67%", "sm"],
  ["EXCELLENCE", "49%", "66%", "md"],
  ["DISCIPLINE", "74%", "72%", "lg"],
  ["ENGAGEMENT", "13%", "83%", "md"],
];

export default function OurEthos() {
  return (
    <div className="edge-page">
      <SiteHeader />

      <main>
        <section className="edge-intro">
          <div className="edge-intro-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="edge-intro-content">
            <p className="edge-eyebrow">
              <i />
              OUR ETHOS
            </p>
            <h1>
              The AGS <span>EDGE</span>
            </h1>
            <p className="edge-intro-lead">
              Excellence. Discipline. Growth. Engagement.
            </p>
            <p className="edge-intro-text">
              AGS EDGE drives everything we do. It is our heartbeat, guiding how
              we operate, shaping our culture and remaining embedded in our DNA.
            </p>
          </div>
          <div className="edge-word-cloud" aria-hidden="true">
            {wordCloud.map(([word, left, top, size], index) => (
              <span
                className={`edge-word-cloud-${size}`}
                style={{ left, top }}
                key={index}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="edge-intro-graphic" aria-hidden="true">
            <i className="edge-graphic-ring edge-ring-one" />
            <i className="edge-graphic-ring edge-ring-two" />
            <i className="edge-graphic-ring edge-ring-three" />
            <div className="edge-graphic-center">
              <small>AGS</small>
              <strong>EDGE</strong>
            </div>
            <div className="edge-dot-orbit">
              <i className="edge-graphic-point edge-point-one" />
              <i className="edge-graphic-point edge-point-two" />
              <i className="edge-graphic-point edge-point-three" />
              <i className="edge-graphic-point edge-point-four" />
            </div>
          </div>
        </section>

        <section className="edge-pillars-section">
          <header className="edge-section-heading">
            <div>
              <p className="edge-eyebrow">
                <i />
                OUR FOUR PILLARS
              </p>
              <h2>
                The principles
                <br />
                <span>behind the EDGE.</span>
              </h2>
            </div>
            <p>
              These four pillars define how AGS delivers a consistent and dependable service,
              continuously setting the standard for ground handling services
               in Zimbabwe and Beyond.
            </p>
          </header>
          <div className="edge-pillars-grid">
            {edgePillars.map((pillar) => (
              <article className="edge-pillar" key={pillar.number}>
                <header>
                  <b>{pillar.number}</b>
                </header>
                <i />
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <strong>↗</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="edge-improvement">
          <b>02</b>
          <div>
            <p className="edge-eyebrow">
              <i />
              CONTINUOUS IMPROVEMENT
            </p>
            <h2>
              Better today.
              <br />
              <span>Better tomorrow.</span>
            </h2>
            <p>
              Through AGS EDGE, we are continuously improving, innovating and
              proactively seeking feedback at all levels. Customer insights are
              turned into faster, safer and more dependable turnarounds.
            </p>
          </div>
          <div className="edge-progress">
            <div>
              <span>EDGE</span>
              <i />
            </div>
            <small>
              CONTINUOUS
              <br />
              IMPROVEMENT
            </small>
          </div>
        </section>

        <section className="edge-values-section">
          <header>
            <p className="edge-eyebrow">
              <i />
              OUR VALUES
            </p>
            <h2>
              What we stand <span>for.</span>
            </h2>
          </header>
          <div className="edge-values-grid">
            {values.map((value) => (
              <article className="edge-value" key={value.number}>
                <b>{value.number}</b>
                <div>
                  <h3>{value.title}</h3>
                  <blockquote>“{value.quote}”</blockquote>
                  <p>{value.description}</p>
                </div>
                <strong>↗</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="edge-people">
          <p className="edge-eyebrow">
            <i />
            THE TEAM
          </p>
          <h2>Our People</h2>
          <p className="edge-people-intro">
            Our 250+ strong team is the engine behind every safe landing, every
            on-time departure, and every satisfied passenger.
          </p>
          <div className="edge-people-grid">
            {people.map(([count, role]) => (
              <article key={role}>
                <strong>{count}</strong>
                <h3>{role}</h3>
                <p>
                  Dedicated professionals delivering safe, dependable ground
                  handling at every shift.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="edge-closing">
          <div>EDGE</div>
          <article>
            <p>THE AGS COMMITMENT</p>
            <h2>
              Safe.<span> On time.</span>
              <br />
              Professional.
            </h2>
            <p>
              AGS delivers safe, on-time and professional ground handling
              through accountable teams who communicate openly and operate
              sustainably.
            </p>
          </article>
          <i />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
