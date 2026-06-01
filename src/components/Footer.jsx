import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      {/* ── Main Links ── */}
      <div className="footer-top">

        <div className="footer-col">
          <h4 className="footer-col-title">Who we are</h4>
          <ul className="footer-links">
            <li><a href="#">Our service commitments</a></li>
            <li><a href="#">Community and wellbeing</a></li>
            <li><a href="#">Business code of conduct</a></li>
            <li><a href="#">Business policies and practices</a></li>
            <li><a href="#">Our people</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul className="footer-links">
            <li><a href="#">Ground handling</a></li>
            <li><a href="#">Passenger handling</a></li>
            <li><a href="#">Cargo handling</a></li>
            <li><a href="#">Charter Services</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Careers</h4>
          <ul className="footer-links">
            <li><a href="#">Join us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">News and media</h4>
          <ul className="footer-links">
            <li><a href="#">Latest news</a></li>
            <li><a href="#">Media gallery</a></li>
            <li><a href="#">Latest annual report</a></li>
            <li><a href="#">Facts and figures</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

      </div>

      {/* ── Bottom Row ── */}
      <div className="footer-bottom">

        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-links">
            <li><a href="#">Frequently asked questions</a></li>
            <li><a href="#">Enquiry &amp; feedback form</a></li>
            <li><a href="#">Lost and found</a></li>
            <li><a href="#">Media contact and resources</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Connect with us</h4>
          <div className="social-icons">

            {/* Instagram */}
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="#" className="social-icon" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer
