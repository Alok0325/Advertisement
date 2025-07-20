import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="logo">EJECTLT</div>
          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transform Your Marketing with AI-Powered Lead Generation</h1>
            <p>Generate high-quality leads, automate your campaigns, and scale your business with our intelligent marketing platform.</p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary">Start Free Trial</Link>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <svg width="400" height="300" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="#f3f4f6" rx="8"/>
                <circle cx="200" cy="150" r="80" fill="#e5e7eb"/>
                <rect x="120" y="240" width="160" height="20" fill="#d1d5db" rx="10"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Everything You Need to Scale Your Marketing</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>AI Lead Generation</h3>
              <p>Intelligent algorithms that find and qualify your ideal customers automatically.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Multi-Channel Campaigns</h3>
              <p>Reach prospects across email, social media, and direct messaging from one platform.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6"/>
                </svg>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Track every interaction and optimize your campaigns with real-time insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to 10x Your Lead Generation?</h2>
          <p>Join thousands of businesses already using EJECTLT to scale their marketing.</p>
          <Link to="/register" className="btn-primary large">Start Your Free Trial</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>EJECTLT</h4>
              <p>AI-powered marketing platform for modern businesses.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 EJECTLT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
