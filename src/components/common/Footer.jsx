import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { studioLocations } from '../../data/studioData';
import './Footer.css';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="aurel-footer theme-dark">
      {/* Newsletter / Monograph Dispatch Bar */}
      <div className="footer-top-banner">
        <div className="container footer-banner-container">
          <div className="banner-editorial">
            <span className="eyebrow eyebrow-dark">Quarterly Architectural Dispatch</span>
            <h3 className="banner-title">Receive Curated Monographs & Design Essays</h3>
          </div>
          <div className="banner-form-wrapper">
            {subscribed ? (
              <div className="subscribe-success">
                <CheckCircle2 size={18} className="text-gold" />
                <span>Thank you. You have been added to our private dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-subscribe-form">
                <div className="subscribe-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address"
                    className={`subscribe-input ${error ? 'input-error' : ''}`}
                    aria-label="Email Address for Dispatch"
                  />
                  <button type="submit" className="subscribe-submit-btn" aria-label="Subscribe">
                    <span>Subscribe</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
                {error && <span className="error-text">{error}</span>}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container footer-main-content section-padding">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand">
              <span className="brand-mark">A</span>
              <span className="brand-name">AUREL</span>
            </Link>
            <p className="footer-tagline">
              An international architectural interior design atelier shaping private residences,
              villas, and cultural environments of enduring purity and sensory warmth.
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                Instagram
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                Pinterest
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                LinkedIn
              </a>
              <a href="https://archdaily.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                ArchDaily
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Portfolio & Space</h4>
            <ul className="footer-nav-list">
              <li><Link to="/projects">All Selected Works</Link></li>
              <li><Link to="/projects?category=Villas">Villas & Private Estates</Link></li>
              <li><Link to="/projects?category=Living%20Rooms">Living Environments</Link></li>
              <li><Link to="/projects?category=Bedrooms">Sanctuary Bedrooms</Link></li>
              <li><Link to="/projects?category=Kitchens">Architectural Kitchens</Link></li>
              <li><Link to="/projects?category=Offices">Executive Ateliers</Link></li>
            </ul>
          </div>

          {/* Collections & Explore */}
          <div className="footer-col">
            <h4 className="footer-col-title">Design Identity</h4>
            <ul className="footer-nav-list">
              <li><Link to="/collections">All Design Collections</Link></li>
              <li><Link to="/collections#modern-minimalist">Modern Minimalist</Link></li>
              <li><Link to="/collections#japandi">Japandi Refinement</Link></li>
              <li><Link to="/collections#scandinavian">Scandinavian Light</Link></li>
              <li><Link to="/before-after">Before & After Studies</Link></li>
              <li><Link to="/wishlist">Curated Wishlist</Link></li>
            </ul>
          </div>

          {/* Ateliers Column */}
          <div className="footer-col footer-col-ateliers">
            <h4 className="footer-col-title">Global Ateliers</h4>
            <div className="ateliers-list">
              {studioLocations.map((loc) => (
                <div key={loc.city} className="atelier-item">
                  <span className="atelier-city">{loc.city}</span>
                  <span className="atelier-role">{loc.role}</span>
                  <span className="atelier-address">{loc.address}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <div className="footer-copyright">
            © {new Date().getFullYear()} AUREL Interior Architecture Studio. All rights reserved.
          </div>
          <div className="footer-credentials">
            <span>RIBA Chartered Practice</span>
            <span className="divider">•</span>
            <span>AD100 Excellence in Architecture</span>
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
