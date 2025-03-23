import { Link } from "react-router-dom"
import { Briefcase, Search, CheckCircle, Building } from "lucide-react"
import "./WelcomePage.css"

function WelcomePage() {
  return (
    <div className="welcome-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <Briefcase className="logo-icon" />
            <span className="logo-text">RecruitX</span>
          </div>

          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              For Employers
            </Link>
            <Link to="/" className="nav-link">
              For Job Seekers
            </Link>
            <Link to="/" className="nav-link">
              About
            </Link>
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </nav>

          <div className="auth-buttons">
            <Link to="/auth" className="login-button">
              Log in
            </Link>
            <Link to="/auth?tab=signup" className="signup-button">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Welcome to <span className="highlight">RecruitX</span>
              </h1>
              <p className="hero-description">
                Connecting talented professionals with forward-thinking companies through a streamlined recruitment
                process.
              </p>
              <div className="hero-buttons">
                <Link to="/auth" className="primary-button">
                  Let's Get Started
                </Link>
                <Link to="/" className="secondary-button">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How RecruitX Works</h2>
              <p className="section-description">
                Our platform simplifies the recruitment process for both employers and job seekers.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Building className="feature-icon" />
                </div>
                <h3 className="feature-title">Create Profile</h3>
                <p className="feature-description">
                  Set up your company profile with details about your organization, culture, and benefits.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-container">
                  <Search className="feature-icon" />
                </div>
                <h3 className="feature-title">Post Jobs</h3>
                <p className="feature-description">
                  Create detailed job listings with requirements, responsibilities, and benefits in minutes.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-container">
                  <CheckCircle className="feature-icon" />
                </div>
                <h3 className="feature-title">Find Talent</h3>
                <p className="feature-description">
                  Review applications, schedule interviews, and connect with qualified candidates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Recruitment Process?</h2>
              <p className="cta-description">
                Join thousands of companies and professionals who have already simplified their recruitment journey with
                RecruitX.
              </p>
              <div className="cta-buttons">
                <Link to="/auth?tab=signup" className="primary-button">
                  Sign Up Now
                </Link>
                <Link to="/" className="secondary-button">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Briefcase className="logo-icon" />
                <span className="logo-text">RecruitX</span>
              </div>
              <p className="footer-description">
                Connecting talent with opportunity through innovative recruitment solutions.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-links-column">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-list">
                  <li>
                    <Link to="/" className="footer-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4 className="footer-heading">Resources</h4>
                <ul className="footer-list">
                  <li>
                    <Link to="/" className="footer-link">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4 className="footer-heading">Legal</h4>
                <ul className="footer-list">
                  <li>
                    <Link to="/" className="footer-link">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} RecruitX. All rights reserved.</p>
            <div className="social-links">
              <Link to="/" className="social-link">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link to="/" className="social-link">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link to="/" className="social-link">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WelcomePage

