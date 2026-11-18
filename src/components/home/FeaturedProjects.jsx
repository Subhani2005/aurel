import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart, MapPin, Sparkles } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { projectsData } from '../../data/projectsData';
import './FeaturedProjects.css';

export const FeaturedProjects = () => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  // Pick diverse featured projects
  const primaryProject = projectsData.find((p) => p.id === 'villa-lumina') || projectsData[0];
  const supportingProject1 = projectsData.find((p) => p.id === 'penthouse-seraph') || projectsData[1];
  const supportingProject2 = projectsData.find((p) => p.id === 'kyoto-sanctuary') || projectsData[4];
  const supportingProject3 = projectsData.find((p) => p.id === 'casa-allegra') || projectsData[2];

  return (
    <section id="featured-projects" className="featured-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="featured-header">
          <div>
            <span className="eyebrow">Selected Works</span>
            <h2 className="heading-section">Monographs in Living Stone & Light</h2>
          </div>
          <div className="featured-header-aside">
            <p className="featured-header-desc">
              Every commission is an architectural exploration of place, acoustic silence, and
              artisanal reverence. Explore a curated selection of recent residences.
            </p>
            <Link to="/projects" className="btn-text-link">
              <span>View All 10 Works</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Showcase Grid */}
        <div className="asymmetric-showcase-grid">
          {/* Monumental Hero Showcase (Left Column) */}
          <div className="showcase-monolith-card">
            <div className="card-image-wrapper">
              <img
                src={primaryProject.heroImage}
                alt={primaryProject.title}
                loading="lazy"
                className="monolith-img"
              />
              <div className="card-gradient-overlay" />

              {/* Floating Wishlist Heart */}
              <button
                className={`card-wishlist-btn ${
                  isWishlisted(primaryProject.id) ? 'wishlist-active' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(primaryProject.id);
                }}
                aria-label={`Save ${primaryProject.title}`}
              >
                <Heart
                  size={18}
                  fill={isWishlisted(primaryProject.id) ? '#AD9470' : 'none'}
                />
              </button>

              {/* Floating Glass Meta Panel */}
              <div className="monolith-floating-glass glass-panel-dark">
                <div className="glass-meta-top">
                  <span className="pill-category">{primaryProject.category}</span>
                  <span className="pill-year">{primaryProject.year}</span>
                </div>
                <h3 className="glass-title">{primaryProject.title}</h3>
                <p className="glass-location">
                  <MapPin size={13} />
                  <span>{primaryProject.location}</span>
                </p>
                <p className="glass-desc">{primaryProject.shortDesc}</p>

                <div className="glass-footer">
                  <div className="material-tags">
                    {primaryProject.materials.slice(0, 2).map((m, idx) => (
                      <span key={idx} className="mat-badge">
                        {m.name}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${primaryProject.slug}`}
                    className="view-project-link"
                    aria-label={`View ${primaryProject.title}`}
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Staggered Supporting Column (Right Column) */}
          <div className="showcase-staggered-col">
            {/* Supporting 1: Tall Portrait with subtle parallax */}
            <div className="supporting-card supporting-tall">
              <div className="card-image-wrapper">
                <img
                  src={supportingProject1.heroImage}
                  alt={supportingProject1.title}
                  loading="lazy"
                  className="supporting-img"
                />
                <div className="card-gradient-overlay" />

                <button
                  className={`card-wishlist-btn ${
                    isWishlisted(supportingProject1.id) ? 'wishlist-active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(supportingProject1.id);
                  }}
                  aria-label={`Save ${supportingProject1.title}`}
                >
                  <Heart
                    size={16}
                    fill={isWishlisted(supportingProject1.id) ? '#AD9470' : 'none'}
                  />
                </button>

                <div className="card-info-overlay">
                  <span className="pill-category">{supportingProject1.category}</span>
                  <h4 className="supporting-title">{supportingProject1.title}</h4>
                  <p className="supporting-location">
                    <MapPin size={13} />
                    <span>{supportingProject1.location}</span>
                  </p>
                  <Link
                    to={`/projects/${supportingProject1.slug}`}
                    className="supporting-action-btn"
                  >
                    <span>Explore Space</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Supporting 2: Landscape with Wide Aspect */}
            <div className="supporting-card supporting-wide">
              <div className="card-image-wrapper">
                <img
                  src={supportingProject2.heroImage}
                  alt={supportingProject2.title}
                  loading="lazy"
                  className="supporting-img"
                />
                <div className="card-gradient-overlay" />

                <button
                  className={`card-wishlist-btn ${
                    isWishlisted(supportingProject2.id) ? 'wishlist-active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(supportingProject2.id);
                  }}
                  aria-label={`Save ${supportingProject2.title}`}
                >
                  <Heart
                    size={16}
                    fill={isWishlisted(supportingProject2.id) ? '#AD9470' : 'none'}
                  />
                </button>

                <div className="card-info-overlay">
                  <span className="pill-category">{supportingProject2.category}</span>
                  <h4 className="supporting-title">{supportingProject2.title}</h4>
                  <p className="supporting-location">
                    <MapPin size={13} />
                    <span>{supportingProject2.location}</span>
                  </p>
                  <Link
                    to={`/projects/${supportingProject2.slug}`}
                    className="supporting-action-btn"
                  >
                    <span>Explore Space</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Supporting Horizontal Banner */}
        <div className="showcase-horizontal-strip">
          <div className="strip-image-container">
            <img
              src={supportingProject3.heroImage}
              alt={supportingProject3.title}
              loading="lazy"
              className="strip-img"
            />
          </div>
          <div className="strip-content-container">
            <div className="strip-meta">
              <span className="eyebrow">Spotlight Residence</span>
              <span className="pill-year">{supportingProject3.year}</span>
            </div>
            <h3 className="strip-title">{supportingProject3.title}</h3>
            <p className="strip-location">
              <MapPin size={14} />
              <span>{supportingProject3.location} — {supportingProject3.area}</span>
            </p>
            <p className="strip-desc">{supportingProject3.description}</p>
            <div className="strip-actions">
              <Link to={`/projects/${supportingProject3.slug}`} className="btn btn-primary">
                <span>View Full Case Study</span>
                <ArrowUpRight size={16} />
              </Link>
              <button
                className={`btn btn-secondary ${
                  isWishlisted(supportingProject3.id) ? 'btn-gold' : ''
                }`}
                onClick={() => toggleWishlist(supportingProject3.id)}
              >
                <Heart
                  size={15}
                  fill={isWishlisted(supportingProject3.id) ? '#FFFFFF' : 'none'}
                />
                <span>
                  {isWishlisted(supportingProject3.id) ? 'In Wishlist' : 'Save To Curation'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
