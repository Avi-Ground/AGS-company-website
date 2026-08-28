import "./OurEthos.css";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const edgePillars = [
  {
    number: "01 ",
    title: "Excellence",
    description:
      "Deliver reliable, high-quality service aligned to customer expectations."
  },
  {
    number: "02 ",
    title: "Discipline",
    description:
      "Strict adherence to safety, security and operational procedures.",

  },
  {
    number: "03 ",
    title: "Growth",
    description: "Continuous improvement, learning and innovation.",
  
  },
  {
    number: "04 ",
    title: "Engagement",
    description:
      "Listening, communicating and responding to employees, customers and stakeholders.",
  
  },
];

const values = [
  { number: "01", title: "Professionalism", quote: "We conduct ourselves with integrity and pride." },
  { number: "02", title: "Accountability & Ownership", quote: "We own our actions and our results." },
  { number: "03", title: "Service Excellence", quote: "We go beyond expectations." },
  { number: "04", title: "Teamwork", quote: "We succeed together." },
  { number: "05", title: "Transparency", quote: "We communicate honestly." },
  { number: "06", title: "Sustainability", quote: "We protect our environment for future generations." },
];



const outcomes = [
  { number: "01", title: "Responsive teams", description: "Listening, communicating and responding to client needs." },
  { number: "02", title: "Consistent service", description: "Reliable standards and dependable service delivery." },
  { number: "03", title: "Prompt resolution", description: "Client concerns are reviewed and followed up." },
  { number: "04", title: "Continuous improvement", description: "Customer insights are turned into meaningful action." },
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
              OUR CULTURE
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

        <section className="edge-strip">
        
          <div className="edge-strip-body">
            <div className="edge-strip-main">
              <p className="edge-eyebrow"><i /> WHAT EDGE MEANS</p>
              <h2>More than values.<br /><em>A way of working.</em></h2>
              <p>As part of our drive to strengthen our service and excellence culture, AGS has introduced AGS EDGE — Excellence, Discipline, Growth and Engagement. EDGE guides how our people work, serve and make decisions.</p>
            </div>
            <div className="edge-strip-side">
              <div className="edge-strip-mark">EDGE</div>
              <p>It guides how we operate, forms our culture and is embedded in our DNA.</p>
            </div>
          </div>
      
        </section>

        <section className="edge-gates">
          <div className="edge-gates-head">
            <div>
              <p className="edge-eyebrow"><i /> THE FOUR PILLARS</p>
              <h2>Four gates.<br /><em>One standard.</em></h2>
            </div>
            <p className="edge-lede">The four EDGE pillars define the standards that underpin AGS service and excellence: quality, safety, progress and meaningful engagement with our people and stakeholders.</p>
          </div>

          <div className="edge-gates-row">
            {edgePillars.map((pillar) => (
              <article className="edge-gate" key={pillar.number}>
                <div className="edge-gate-top">
                  <span className="edge-gate-no">GATE {pillar.number.trim()}</span>
                  <span className="edge-gate-status">{pillar.keyword}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="edge-gate-foot" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="edge-signal">
          <div className="edge-signal-top">
            <div className="edge-signal-radar" aria-hidden="true">
              <div className="edge-radar-rings">
                <i /><i /><i /><i />
                <div className="edge-radar-sweep" />
                <span className="edge-radar-blip edge-radar-blip-1" />
                <span className="edge-radar-blip edge-radar-blip-2" />
                <span className="edge-radar-blip edge-radar-blip-3" />
              </div>
            </div>
            <p className="edge-signal-lead">
              <strong>Continuous improvement.</strong> Through AGS EDGE, we are continuously improving, innovating and proactively seeking feedback at all levels, and turning customer insights into faster, safer and more dependable turnarounds.
            </p>
          </div>

          <div className="edge-signal-connector" aria-hidden="true"><i /><i /><i /><i /></div>

          <div className="edge-signal-engagement">
            <div className="edge-tower-heading">
              <p className="edge-eyebrow"><i /> CLIENT ENGAGEMENT</p>
              <h2>Your feedback<br /><em>drives action.</em></h2>
            </div>
            <div className="edge-tower-panel">
              <div className="edge-tower-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <p>Client engagement is a primary pillar of EDGE. AGS has introduced a dedicated channel through which clients can share suggestions, concerns and recognition directly with AGS.</p>
              <p>Every submission is reviewed and followed up, ensuring our clients are heard and their feedback leads to meaningful action and service improvement.</p>
              <a href="mailto:EDGE@aviground.com" className="edge-tower-freq">
              
                <span className="edge-tower-freq-value">EDGE@aviground.com</span>
                <span className="edge-tower-freq-go" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="edge-tower-badge" aria-hidden="true">
              <span>LISTEN</span><span>RESPOND</span><span>IMPROVE</span>
            </div>
          </div>
        </section>

        <section className="edge-flapboard">
          <div className="edge-flapboard-head">
        
              <p className="edge-eyebrow"><i /> OUR VALUES</p>
          </div>
          <div className="edge-flapboard-grid">
            {values.map((value) => (
              <article className="edge-flap" key={value.number}>
                <div className="edge-flap-code"><span>{value.number}</span><i>VALUE</i></div>
                <div className="edge-flap-face"><h3>{value.title}</h3></div>
                <p className="edge-flap-quote">{value.quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="edge-taxiway">
          <div className="edge-taxiway-head">
            <p className="edge-eyebrow"><i /> THE EDGE IN PRACTICE</p>
            <h2>What EDGE<br /><em>delivers.</em></h2>
            <p className="edge-lede">Through EDGE, our clients benefit from responsive teams, consistent service, prompt resolution of concerns and a strong culture of continuous improvement.</p>
          </div>
          <div className="edge-taxiway-route">
            <div className="edge-taxiway-line" aria-hidden="true" />
            {outcomes.map((outcome) => (
              <div className="edge-taxiway-stop" key={outcome.number}>
                <span className="edge-taxiway-marker" aria-hidden="true">{outcome.number}</span>
                <strong>{outcome.title}</strong>
                <p>{outcome.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
