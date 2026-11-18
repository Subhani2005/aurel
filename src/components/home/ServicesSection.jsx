import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './ServicesSection.css';

export const ServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section className="services-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div>
            <span className="eyebrow">Atelier Disciplines</span>
            <h2 className="heading-section">Holistic Spatial Capabilities</h2>
          </div>
          <p className="services-header-intro">
            From preliminary volumetric studies to turnkey white-glove handover, we orchestrate
            every phase of architecture, materiality, and bespoke custom furnishing.
          </p>
        </div>

        {/* Interactive Services Showcase */}
        <div className="services-interactive-wrapper">
          {/* Services List (Left) */}
          <div className="services-list-container">
            {servicesData.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  className={`service-item-row ${isActive ? 'service-item-active' : ''}`}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                >
                  <div className="service-row-left">
                    <span className="service-number">{service.number}</span>
                    <div>
                      <h3 className="service-row-title">{service.title}</h3>
                      <p className="service-row-desc">{service.shortDesc}</p>
                    </div>
                  </div>

                  <div className="service-row-right">
                    <span className="service-scope-tag">{service.scope}</span>
                    <div className="service-arrow-circle">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Preview Panel (Right) */}
          <div className="services-preview-panel">
            <div className="preview-image-box">
              <img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                loading="lazy"
                className="preview-img animate-fade-in"
              />
              <div className="preview-gradient" />

              <div className="preview-content-card glass-panel-dark">
                <div className="preview-meta">
                  <span className="preview-badge">{activeService.number}</span>
                  <span className="preview-scope">{activeService.scope}</span>
                </div>
                <h4 className="preview-title">{activeService.title}</h4>
                <p className="preview-desc">{activeService.longDesc}</p>

                <div className="preview-deliverables">
                  <span className="deliverables-heading">Key Scope Deliverables:</span>
                  <ul className="deliverables-list">
                    {activeService.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <Check size={14} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-gold btn-preview-cta">
                  <span>Commission Consultation</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
