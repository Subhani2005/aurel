import React from 'react';
import { Link } from 'react-router-dom';
import {
  studioManifesto,
  studioTeam,
  studioProcess,
  studioMilestones,
  studioLocations
} from '../data/studioData';
import { statsData } from '../data/statsData';
import { ArrowRight, Compass, Sparkles, MapPin, Award } from 'lucide-react';
import './AboutPage.css';

export const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      {/* Editorial Page Hero */}
      <section className="about-hero-banner theme-dark">
        <div
          className="about-hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85')`
          }}
        />
        <div className="about-hero-veil" />

        <div className="container about-hero-container">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>Studio Monograph</span>
          </span>
          <h1 className="heading-hero about-hero-title">
            The Philosophy of<br />
            <em>Tactile Silence</em>
          </h1>
          <p className="text-lead about-hero-lead">
            AUREL is an international architectural interior design atelier devoted to the
            creation of poetic, humanistic spaces defined by natural materiality, acoustic ease,
            and enduring spatial proportion.
          </p>
        </div>
      </section>

      {/* Studio Manifesto Section */}
      <section className="about-manifesto-section section-padding">
        <div className="container">
          <div className="manifesto-grid">
            <div className="manifesto-left-quote">
              <span className="eyebrow">{studioManifesto.eyebrow}</span>
              <h2 className="manifesto-heading">{studioManifesto.heading}</h2>
              <blockquote className="manifesto-pullquote">
                "{studioManifesto.quote}"
              </blockquote>
            </div>

            <div className="manifesto-right-text">
              {studioManifesto.body.map((p, idx) => (
                <p key={idx} className="manifesto-paragraph text-lead">
                  {p}
                </p>
              ))}

              <div className="manifesto-signature-block">
                <div className="sig-author">
                  <span className="sig-name">Aurelia De Montfort</span>
                  <span className="sig-role">Founder & Principal Architect</span>
                </div>
                <div className="sig-year">Milan, EST. 2006</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Atmosphere Photography Collage */}
      <section className="about-gallery-collage">
        <div className="collage-grid">
          <div className="collage-item collage-item-1">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="AUREL Studio Drawing Room"
              loading="lazy"
            />
            <span className="collage-caption">The Drawing Atelier • Milan</span>
          </div>
          <div className="collage-item collage-item-2">
            <img
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85"
              alt="Stone & Joinery Samples"
              loading="lazy"
            />
            <span className="collage-caption">Material Archives & Quarry Blocks</span>
          </div>
          <div className="collage-item collage-item-3">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
              alt="Acoustic Spatial Prototyping"
              loading="lazy"
            />
            <span className="collage-caption">Acoustic Prototyping & Custom Furniture</span>
          </div>
        </div>
      </section>

      {/* The 4-Stage Architectural Process */}
      <section className="about-process-section section-padding theme-dark">
        <div className="container">
          <div className="process-header">
            <span className="eyebrow eyebrow-dark">Methodology</span>
            <h2 className="heading-section">Our Four-Stage Architectural Journey</h2>
            <p className="process-header-desc">
              Every commission follows a rigorous yet deeply intuitive methodology to ensure
              flawless translation from initial spatial listening to white-glove handover.
            </p>
          </div>

          <div className="process-cards-grid">
            {studioProcess.map((step) => (
              <div key={step.phase} className="process-step-card glass-panel-dark">
                <div className="step-phase-number">{step.phase}</div>
                <span className="step-timeline">{step.timeline}</span>
                <h3 className="step-title">{step.name}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Leadership Team */}
      <section className="about-team-section section-padding">
        <div className="container">
          <div className="team-header">
            <div>
              <span className="eyebrow">Atelier Leadership</span>
              <h2 className="heading-section">Principal Architects & Directors</h2>
            </div>
            <p className="team-header-desc">
              A collective of seasoned architectural minds uniting Italian rationalism, British
              conservation, and Japanese mindfulness.
            </p>
          </div>

          <div className="team-grid">
            {studioTeam.map((member, idx) => (
              <div key={idx} className="team-member-card">
                <div className="team-photo-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="team-photo"
                  />
                  <div className="team-photo-tint" />
                  <span className="team-focus-pill">{member.focus}</span>
                </div>

                <div className="team-member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="about-timeline-section section-padding">
        <div className="container container-narrow">
          <div className="timeline-header text-center">
            <span className="eyebrow">Studio Chronology</span>
            <h2 className="heading-section">Eighteen Years of Milestones</h2>
          </div>

          <div className="timeline-track">
            {studioMilestones.map((item, idx) => (
              <div key={idx} className="timeline-node">
                <div className="node-year-badge">
                  <span>{item.year}</span>
                </div>
                <div className="node-content-card glass-panel">
                  <h3 className="node-title">{item.title}</h3>
                  <p className="node-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ateliers Banner */}
      <section className="about-ateliers-section section-padding theme-dark">
        <div className="container">
          <div className="ateliers-header text-center">
            <span className="eyebrow eyebrow-dark">International Footprint</span>
            <h2 className="heading-section">Four Global Ateliers</h2>
          </div>

          <div className="ateliers-grid">
            {studioLocations.map((loc) => (
              <div key={loc.city} className="atelier-card glass-panel-dark">
                <h3 className="atelier-city-name">{loc.city}</h3>
                <span className="atelier-role-badge">{loc.role}</span>
                <p className="atelier-street">{loc.address}</p>
                <div className="atelier-contact-meta">
                  <span>{loc.phone}</span>
                  <span>{loc.email}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ateliers-cta text-center">
            <Link to="/contact" className="btn btn-gold">
              <span>Initiate A Commission Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
