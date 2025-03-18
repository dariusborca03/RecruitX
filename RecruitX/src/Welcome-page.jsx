"use client"

import { useState } from "react"
import { Briefcase, Search, CheckCircle, Users, Building, UserPlus } from "lucide-react"
import "./Welcome-page.css" // Asigură-te că acest fișier există

export default function WelcomePage() {
  const [activeTab, setActiveTab] = useState("employers")

  return (
    <div className="welcome-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <Briefcase className="icon" />
            <span className="logo-text">RecruitX</span>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              For Employers
            </a>
            <a href="#" className="nav-link">
              For Job Seekers
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </nav>
          <div className="auth-buttons">
            <a href="#" className="login-button">
              Log in
            </a>
            <a href="#" className="signup-button">
              Sign up
            </a>
          </div>
        </div>
      </header>

      <main className="main" style={{ width: "100%" }}>
        {/* Hero Section */}
        <section className="hero-section" style={{ width: "100%" }}>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to RecruitX</h1>
              <p className="hero-description">
                Connecting talented professionals with forward-thinking companies through a streamlined recruitment
                process.
              </p>
              <div className="hero-buttons">
                <a href="#" className="primary-button">
                  Get Started
                </a>
                <a href="#" className="secondary-button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How RecruitX Works</h2>
              <p className="section-description">
                Our platform simplifies the recruitment process for both employers and job seekers through a few simple
                steps.
              </p>
            </div>

            <div className="tabs">
              <div className="tabs-header">
                <button
                  className={`tab-button ${activeTab === "employers" ? "active" : ""}`}
                  onClick={() => setActiveTab("employers")}
                >
                  For Employers
                </button>
                <button
                  className={`tab-button ${activeTab === "jobseekers" ? "active" : ""}`}
                  onClick={() => setActiveTab("jobseekers")}
                >
                  For Job Seekers
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "employers" && (
                  <div className="cards">
                    <div className="card">
                      <div className="card-header">
                        <Building className="card-icon" />
                        <h3 className="card-title">Create Profile</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-description">
                          Set up your company profile with details about your organization, culture, and benefits.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <Briefcase className="card-icon" />
                        <h3 className="card-title">Post Jobs</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-description">
                          Create detailed job listings with requirements, responsibilities, and benefits in minutes.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <CheckCircle className="card-icon" />
                        <h3 className="card-title">Find Talent</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-description">
                          Review applications, schedule interviews, and connect with qualified candidates.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "jobseekers" && (
                  <div className="cards">
                    <div className="card">
                      <div className="card-header">
                        <UserPlus className="card-icon" />
                        <h3 className="card-title">Create Profile</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-description">
                          Build your professional profile highlighting your skills, experience, and career goals.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <Search className="card-icon" />
                        <h3 className="card-title">Discover Jobs</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-description">
                          Browse and filter job opportunities that match your skills and career aspirations.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <Users className="card-icon" />
                        <h3 className="card-title">Connect</h3>
                      </div>
                      <div className="card-body">
                        <p className="card-description">
                          Apply to positions, communicate with employers, and schedule interviews all in one place.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose RecruitX</h2>
              <p className="section-description">
                Our platform offers unique advantages for both employers and job seekers.
              </p>
            </div>

            <div className="features-content">
              <div className="features-list">
                <div className="feature">
                  <h3 className="feature-title">Smart Matching</h3>
                  <p className="feature-description">
                    Our AI-powered algorithm connects employers with the most suitable candidates based on skills and
                    experience.
                  </p>
                </div>
                <div className="feature">
                  <h3 className="feature-title">Streamlined Process</h3>
                  <p className="feature-description">
                    Simplify your recruitment workflow with our intuitive platform designed to save time and resources.
                  </p>
                </div>
                <div className="feature">
                  <h3 className="feature-title">Comprehensive Tools</h3>
                  <p className="feature-description">
                    Access a suite of tools for screening, interviewing, and onboarding to make better hiring decisions.
                  </p>
                </div>
              </div>
              <div className="features-image">
                <div className="image-circle">
                  <Briefcase className="large-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ready to Transform Your Recruitment Process?</h2>
              <p className="section-description">
                Join thousands of companies and professionals who have already simplified their recruitment journey with
                RecruitX.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="#" className="primary-button large">
                Sign Up Now
              </a>
              <a href="#" className="secondary-button large">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Briefcase className="icon" />
                <span className="logo-text">RecruitX</span>
              </div>
              <p className="footer-description">
                Connecting talent with opportunity through innovative recruitment solutions.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="footer-heading">Resources</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#" className="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="footer-heading">Legal</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#" className="footer-link">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} RecruitX. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

