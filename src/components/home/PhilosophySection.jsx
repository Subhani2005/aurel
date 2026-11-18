import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Feather, Compass, Eye } from 'lucide-react';
import './PhilosophySection.css';

export const PhilosophySection = () => {
  return (
    <section className="philosophy-section theme-dark section-padding">
      {/* Decorative architectural background texture with 10% opacity */}
      <div
        className="philosophy-bg-texture"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="container">
        <div className="philosophy-split-layout">
          {/* Left Column: Architectural Photography with subtle parallax frame */}
          <div className="philosophy-visual-col">
            <div className="visual-frame-container">
              <div className="visual-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                  alt="AUREL Minimalist Living Architecture"
                  loading="lazy"
                  className="philosophy-main-image"
                />
              </div>

              {/* Offset Decorative Floating Detail Image */}
              <div className="visual-floating-card glass-panel-dark">
                <div className="floating-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=85"
                    alt="Artisanal Travertine Joint"
                    loading="lazy"
                  />
                </div>
                <div className="floating-card-caption">
                  <span className="caption-sub">TACTILE REVERENCE</span>
                  <p className="caption-text">Raw travertine hand-chiselled at the Tivoli quarry.</p>
                </div>
              </div>

              {/* Architectural Wireframe Stamp */}
              <div className="visual-stamp-wireframe">
                <span>SECT. 03 — SPATIAL PHILOSOPHY</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto Content */}
          <div className="philosophy-content-col">
            <span className="eyebrow eyebrow-dark">Our Architectural Ethos</span>

            <h2 className="philosophy-heading">
              Spaces That Speak.<br />
              <em>Design That Lasts.</em>
            </h2>

            <p className="philosophy-lead">
              We reject the noise of transient trends. At AUREL, we cultivate spaces of profound
              sensory quietude—where light is treated as structural material, stone tells the
              geological memory of the earth, and spatial proportion restores human balance.
            </p>

            <div className="philosophy-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Sensory Proportion</h4>
                  <p className="pillar-desc">
                    Balancing volumetric scale and daylight orientation to create natural acoustic ease.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Feather size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Material Honesty</h4>
                  <p className="pillar-desc">
                    Honoring untreated stones, patinated bronzes, and washed linens that evolve with age.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Eye size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Quiet Craftsmanship</h4>
                  <p className="pillar-desc">
                    Collaborating with generational European master artisans to realize zero-tolerance joinery.
                  </p>
                </div>
              </div>
            </div>

            <div className="philosophy-cta-row">
              <Link to="/about" className="btn btn-outline-light">
                <span>Discover Studio Story</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
