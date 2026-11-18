import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Compass, Check, Layers, Sparkles } from 'lucide-react';
import { collectionsData } from '../data/collectionsData';
import './CollectionsPage.css';

export const CollectionsPage = () => {
  const [activeTab, setActiveTab] = useState(collectionsData[0].id);

  const scrollToStyle = (id) => {
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="collections-page-wrapper">
      {/* Page Hero Banner */}
      <section className="collections-hero-banner theme-dark">
        <div
          className="collections-hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=2200&q=85')`
          }}
        />
        <div className="collections-hero-veil" />

        <div className="container collections-hero-container">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>Design Typologies</span>
          </span>
          <h1 className="heading-hero collections-hero-title">
            Curated Styles &<br />
            <em>Architectural Aesthetics</em>
          </h1>
          <p className="text-lead collections-hero-lead">
            Explore our six foundational design languages. From the monastic stillness of Japandi
            to the raw structural poetry of Industrial luxury and the sculpted purity of Modern
            Minimalism.
          </p>
        </div>
      </section>

      {/* Horizontal Style Nav Pills Bar */}
      <div className="collections-sticky-bar">
        <div className="container">
          <div className="collections-horizontal-pills">
            {collectionsData.map((col) => (
              <button
                key={col.id}
                onClick={() => scrollToStyle(col.id)}
                className={`col-pill-tab ${activeTab === col.id ? 'col-pill-active' : ''}`}
              >
                <span>{col.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Style Showcases */}
      <div className="collections-sections-list">
        {collectionsData.map((collection, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={collection.id}
              id={collection.id}
              className={`collection-style-section section-padding ${
                isEven ? 'theme-light' : 'theme-soft-beige'
              }`}
            >
              <div className="container">
                <div className={`style-split-grid ${!isEven ? 'grid-reverse' : ''}`}>
                  {/* Visual Column */}
                  <div className="style-visual-column">
                    <div className="style-main-frame">
                      <img
                        src={collection.heroImage}
                        alt={collection.title}
                        loading="lazy"
                        className="style-hero-img"
                      />
                      <div className="style-frame-stamp">
                        <span>COLLECTION 0{index + 1}</span>
                      </div>
                    </div>

                    {collection.secondaryImage && (
                      <div className="style-offset-card glass-panel">
                        <img
                          src={collection.secondaryImage}
                          alt={`${collection.title} detail`}
                          loading="lazy"
                        />
                        <span className="offset-caption">Material & Light Perspective</span>
                      </div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="style-content-column">
                    <div className="style-meta-top">
                      <span className="eyebrow">Design Style 0{index + 1}</span>
                      <span className="style-sub">{collection.subtitle}</span>
                    </div>

                    <h2 className="style-title">{collection.title}</h2>
                    <p className="style-tagline">"{collection.tagline}"</p>
                    <p className="style-desc">{collection.description}</p>

                    {/* Signature Elements */}
                    <div className="style-elements-box">
                      <h4 className="box-title">Signature Design Elements</h4>
                      <ul className="elements-list">
                        {collection.signatureElements.map((el, idx) => (
                          <li key={idx}>
                            <Check size={15} className="check-gold" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materials & Colors */}
                    <div className="style-materials-row">
                      <div className="materials-group">
                        <span className="group-label">Core Materials:</span>
                        <div className="mat-tags-wrapper">
                          {collection.materials.map((m, idx) => (
                            <span key={idx} className="mat-tag">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="colors-group">
                        <span className="group-label">Atmospheric Mood:</span>
                        <div className="color-dots-row">
                          {collection.colors.map((c, idx) => (
                            <span
                              key={idx}
                              className="color-dot"
                              style={{ backgroundColor: c }}
                              title={c}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Explore Link */}
                    <div className="style-cta-row">
                      <Link
                        to={`/projects/${collection.relatedProjectSlug}`}
                        className="btn btn-primary"
                      >
                        <span>Explore {collection.title} Work</span>
                        <ArrowUpRight size={16} />
                      </Link>
                      <Link to="/contact" className="btn btn-outline-gold">
                        <span>Commission This Style</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionsPage;
