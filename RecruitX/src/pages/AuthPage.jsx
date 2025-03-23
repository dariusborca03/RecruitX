"use client"

import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Briefcase, Mail, Lock, User, ArrowRight, Check } from "lucide-react"
import "./AuthPage.css"

function AuthPage() {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState("login")
  const [accountType, setAccountType] = useState("jobseeker")

  useEffect(() => {
    if (searchParams.get("tab") === "signup") {
      setActiveTab("signup")
    }
  }, [searchParams])

  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="container">
          <Link to="/" className="logo">
            <Briefcase className="logo-icon" />
            <span className="logo-text">RecruitX</span>
          </Link>
          <Link to="/" className="back-link">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-welcome">
            <h1 className="auth-title">
              Welcome to <span className="highlight">RecruitX</span>
            </h1>
            <p className="auth-subtitle">Your career journey starts here</p>
          </div>

          <div className="auth-card">
            <div className="auth-tabs">
              <button
                className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            <div className="auth-content">
              {activeTab === "login" && (
                <form className="auth-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-with-icon">
                      <Mail className="input-icon" />
                      <input type="email" id="email" className="form-input" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-label-row">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Link to="/" className="forgot-password">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="input-with-icon">
                      <Lock className="input-icon" />
                      <input type="password" id="password" className="form-input" placeholder="Enter your password" />
                    </div>
                  </div>

                  <button type="submit" className="auth-button">
                    Login <ArrowRight className="button-icon" />
                  </button>

                  <p className="auth-switch">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setActiveTab("signup")} className="switch-button">
                      Sign up
                    </button>
                  </p>
                </form>
              )}

              {activeTab === "signup" && (
                <form className="auth-form">
                  <div className="account-type-selector">
                    <p className="account-type-label">I am a:</p>
                    <div className="account-type-options">
                      <button
                        type="button"
                        className={`account-type-option ${accountType === "jobseeker" ? "selected" : ""}`}
                        onClick={() => setAccountType("jobseeker")}
                      >
                        {accountType === "jobseeker" && <Check className="check-icon" />}
                        <span>Job Seeker</span>
                      </button>
                      <button
                        type="button"
                        className={`account-type-option ${accountType === "employer" ? "selected" : ""}`}
                        onClick={() => setAccountType("employer")}
                      >
                        {accountType === "employer" && <Check className="check-icon" />}
                        <span>Employer</span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <div className="input-with-icon">
                      <User className="input-icon" />
                      <input type="text" id="name" className="form-input" placeholder="Enter your full name" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-email" className="form-label">
                      Email
                    </label>
                    <div className="input-with-icon">
                      <Mail className="input-icon" />
                      <input type="email" id="signup-email" className="form-input" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-password" className="form-label">
                      Password
                    </label>
                    <div className="input-with-icon">
                      <Lock className="input-icon" />
                      <input
                        type="password"
                        id="signup-password"
                        className="form-input"
                        placeholder="Create a password"
                      />
                    </div>
                  </div>

                  <button type="submit" className="auth-button">
                    Create Account <ArrowRight className="button-icon" />
                  </button>

                  <p className="auth-switch">
                    Already have an account?{" "}
                    <button type="button" onClick={() => setActiveTab("login")} className="switch-button">
                      Login
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="auth-footer">
        <div className="container">
          <p className="copyright">© {new Date().getFullYear()} RecruitX. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/" className="footer-link">
              Terms of Service
            </Link>
            <Link to="/" className="footer-link">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AuthPage

