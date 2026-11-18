import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CtaSection.css';

export const CtaSection = () => {
  return (
    <section className="cta-section theme-dark">
      {/* Cinematic Full-bleed Background Interior Photography */}
      <div
        className="cta-bg-image"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90')`
        }}
      />
      <div className="cta-dark-overlay" />

      <div className="container cta-content-container">
        <div className="cta-box glass-panel-dark">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>Initiate A Commission</span>
          </span>

          <h2 className="cta-heading">
            Let's Create<br />
            <em>Something Beautiful.</em>
          </h2>

          <p className="cta-lead">
            Whether you are envisioning a private lakefront sanctuary, an urban penthouse
            transformation, or a boutique commercial flagship, our architects are ready to listen.
          </p>

          <div className="cta-buttons-wrapper">
            <Link to="/contact" className="btn btn-gold btn-cta-main">
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/projects" className="btn btn-outline-light">
              <span>Explore Selected Works</span>
            </Link>
          </div>

          <div className="cta-guarantee-strip">
            <span>Discretion Assured</span>
            <span className="dot">•</span>
            <span>Turnkey Global Delivery</span>
            <span className="dot">•</span>
            <span>Ateliers in Milan, NY, London & Kyoto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
