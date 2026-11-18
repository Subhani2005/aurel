import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ComparisonSlider from '../components/beforeAfter/ComparisonSlider';
import { transformationsData } from '../data/transformationsData';
import { Sparkles, CheckCircle2, ArrowRight, Clock, MapPin, Layers } from 'lucide-react';
import './BeforeAfterPage.css';

export const BeforeAfterPage = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(transformationsData[0].id);

  const currentCase =
    transformationsData.find((t) => t.id === selectedCaseId) ||
    transformationsData[0];

  return (
    <div className="before-after-page-wrapper">
      {/* Hero Banner */}
      <section className="ba-hero-banner theme-dark">
        <div
          className="ba-hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85')`
          }}
        />
        <div className="ba-hero-overlay" />

        <div className="container ba-hero-container">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>Architectural Evolution</span>
          </span>
          <h1 className="heading-hero ba-hero-title">
            Spatial Metamorphosis<br />
            <em>Before & After</em>
          </h1>
          <p className="text-lead ba-hero-lead">
            Witness the complete reimagining of obsolete spaces into timeless, light-infused
            sanctuaries. Drag the slider below to reveal the architectural transformation.
          </p>
        </div>
      </section>

      {/* Main Interactive Comparison Studio */}
      <section className="ba-studio-section section-padding">
        <div className="container">
          {/* Case Study Switcher Pills */}
          <div className="ba-cases-nav">
            {transformationsData.map((item) => (
              <button
                key={item.id}
                className={`case-pill-btn ${
                  selectedCaseId === item.id ? 'case-pill-active' : ''
                }`}
                onClick={() => setSelectedCaseId(item.id)}
              >
                <span className="case-pill-title">{item.title}</span>
                <span className="case-pill-project">{item.project}</span>
              </button>
            ))}
          </div>

          {/* Interactive Draggable Slider */}
          <div className="ba-slider-stage">
            <ComparisonSlider
              key={currentCase.id}
              beforeImage={currentCase.beforeImage}
              afterImage={currentCase.afterImage}
              beforeLabel={currentCase.beforeLabel}
              afterLabel={currentCase.afterLabel}
              initialPosition={50}
            />
            <p className="slider-instruction-text">
              ↔ Click or drag the brass dividing line left and right to inspect the renovation details.
            </p>
          </div>

          {/* Detailed Transformation Breakdown */}
          <div className="ba-details-grid">
            {/* Story & Context */}
            <div className="ba-story-col">
              <span className="eyebrow">Transformation Study</span>
              <h2 className="ba-case-title">{currentCase.title}</h2>
              <p className="ba-case-project">
                <MapPin size={14} />
                <span>{currentCase.project}</span>
              </p>

              <p className="ba-case-story text-lead">{currentCase.story}</p>

              {/* Metrics Strip */}
              <div className="ba-metrics-row">
                <div className="metric-box">
                  <span className="metric-label">Execution Duration</span>
                  <span className="metric-val">
                    <Clock size={14} />
                    {currentCase.duration}
                  </span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Spatial Scale</span>
                  <span className="metric-val">{currentCase.area}</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Investment Tier</span>
                  <span className="metric-val">{currentCase.budgetCategory}</span>
                </div>
              </div>
            </div>

            {/* Architectural Interventions Checklist */}
            <div className="ba-changes-col">
              <div className="changes-card glass-panel">
                <h4 className="changes-card-title">Key Architectural Interventions</h4>
                <ul className="changes-list">
                  {currentCase.keyChanges.map((change, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="check-gold" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>

                <div className="changes-card-footer">
                  <Link to="/contact" className="btn btn-primary btn-full-width">
                    <span>Commission Similar Transformation</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Transformation Studies */}
      <section className="ba-archive-section section-padding-bottom">
        <div className="container">
          <div className="archive-header">
            <span className="eyebrow">Renovation Archives</span>
            <h2 className="heading-sub">All Featured Spatial Case Studies</h2>
          </div>

          <div className="archive-cases-grid">
            {transformationsData.map((item) => (
              <div
                key={item.id}
                className={`archive-case-card ${
                  selectedCaseId === item.id ? 'is-selected' : ''
                }`}
                onClick={() => {
                  setSelectedCaseId(item.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
              >
                <div className="archive-split-thumb">
                  <div className="thumb-half">
                    <img src={item.beforeImage} alt={`${item.title} before`} />
                    <span className="thumb-tag">Before</span>
                  </div>
                  <div className="thumb-half">
                    <img src={item.afterImage} alt={`${item.title} after`} />
                    <span className="thumb-tag thumb-tag-gold">After</span>
                  </div>
                </div>

                <div className="archive-case-info">
                  <span className="archive-cat">{item.category}</span>
                  <h4 className="archive-title">{item.title}</h4>
                  <p className="archive-project">{item.project}</p>
                  <span className="select-case-hint">
                    {selectedCaseId === item.id ? 'Currently Viewing' : 'Inspect Slider'} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterPage;
