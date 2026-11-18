import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Calendar,
  Layers,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { useWishlist } from '../context/WishlistContext';
import ProjectCard from '../components/projects/ProjectCard';
import './ProjectDetailPage.css';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [activeLightboxImg, setActiveLightboxImg] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find project by slug or id
  const projectIndex = projectsData.findIndex(
    (p) => p.slug === slug || p.id === slug
  );

  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-not-found section-padding text-center">
        <div className="container">
          <h2 className="heading-section">Monograph Not Found</h2>
          <p className="text-lead" style={{ margin: '1.5rem 0 2rem' }}>
            The requested architectural project could not be located in our archives.
          </p>
          <Link to="/projects" className="btn btn-primary">
            Back to Selected Works
          </Link>
        </div>
      </div>
    );
  }

  // Next / Previous Projects
  const prevProject =
    projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject =
    projectsData[(projectIndex + 1) % projectsData.length];

  // Related Projects (same category or others)
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="project-detail-wrapper">
      {/* Full-Width Project Hero */}
      <section className="detail-hero-section">
        <div
          className="detail-hero-image"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="detail-hero-gradient" />

        <div className="container detail-hero-container">
          <Link to="/projects" className="back-to-portfolio-link">
            <ArrowLeft size={16} />
            <span>Back to Selected Works</span>
          </Link>

          <div className="detail-hero-content">
            <div className="detail-badge-strip">
              <span className="detail-category">{project.category}</span>
              <span className="dot">•</span>
              <span className="detail-year">{project.year}</span>
              <span className="dot">•</span>
              <span className="detail-area">{project.area}</span>
            </div>

            <h1 className="heading-hero detail-project-title">{project.title}</h1>

            <p className="detail-project-tagline">{project.tagline}</p>

            <div className="detail-hero-actions">
              <button
                className={`btn ${
                  isWishlisted(project.id) ? 'btn-gold' : 'btn-light'
                }`}
                onClick={() => toggleWishlist(project.id)}
              >
                <Heart
                  size={16}
                  fill={isWishlisted(project.id) ? 'currentColor' : 'none'}
                />
                <span>
                  {isWishlisted(project.id) ? 'In Curated Wishlist' : 'Save To Wishlist'}
                </span>
              </button>

              <button onClick={handleShare} className="btn btn-outline-light">
                <Share2 size={16} />
                <span>{copiedLink ? 'Link Copied' : 'Share Work'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Meta Bar */}
      <section className="detail-meta-bar">
        <div className="container">
          <div className="meta-bar-grid">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-val">
                <MapPin size={14} className="meta-icon" />
                {project.location}
              </span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Completion Year</span>
              <span className="meta-val">
                <Calendar size={14} className="meta-icon" />
                {project.year}
              </span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Spatial Scale</span>
              <span className="meta-val">{project.area}</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Commission Scope</span>
              <span className="meta-val">{project.client}</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Execution Duration</span>
              <span className="meta-val">{project.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Narrative & Inspiration */}
      <section className="detail-narrative-section section-padding">
        <div className="container">
          <div className="narrative-grid">
            {/* Left Story Column */}
            <div className="narrative-story-col">
              <span className="eyebrow">Spatial Narrative</span>
              <h2 className="narrative-heading">The Architectural Exploration</h2>
              <p className="narrative-body text-lead">{project.description}</p>

              {/* Architectural Highlights Bullet Points */}
              <div className="highlights-box">
                <h4 className="highlights-title">Architectural Highlights & Engineering</h4>
                <ul className="highlights-list">
                  {project.architecturalHighlights.map((highlight, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-gold" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Inspiration & Design Genesis */}
            <div className="narrative-aside-col">
              <div className="inspiration-card glass-panel">
                <span className="eyebrow">Design Genesis</span>
                <h3 className="inspiration-title">Inspiration & Lineage</h3>
                <p className="inspiration-text">{project.designInspiration}</p>

                {/* Secondary Image Callout */}
                {project.secondaryImage && (
                  <div className="inspiration-thumb-frame">
                    <img
                      src={project.secondaryImage}
                      alt={`${project.title} detail`}
                      loading="lazy"
                    />
                    <span className="thumb-caption">Detail Aperture Perspective</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Color Palette Section */}
      <section className="detail-materials-section theme-dark section-padding">
        <div className="container">
          <div className="materials-section-header">
            <span className="eyebrow eyebrow-dark">Material Alchemy</span>
            <h2 className="heading-section">Sensory Textures & Chromatic Mood</h2>
            <p className="materials-intro">
              Every surface was custom specified, calibrated against natural light, and crafted
              in close partnership with regional stonemasons, weavers, and timber joiners.
            </p>
          </div>

          {/* Materials Swatches Grid */}
          <div className="materials-cards-grid">
            {project.materials.map((mat, idx) => (
              <div key={idx} className="material-card">
                <div
                  className="material-swatch-box"
                  style={{ backgroundColor: mat.color }}
                >
                  <span className="swatch-idx">0{idx + 1}</span>
                </div>
                <div className="material-card-info">
                  <h4 className="mat-name">{mat.name}</h4>
                  <p className="mat-role">{mat.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Color Palette Chips */}
          <div className="palette-strip-container">
            <h4 className="palette-strip-title">Project Chromatic Palette</h4>
            <div className="palette-chips-row">
              {project.colorPalette.map((col, idx) => (
                <div key={idx} className="palette-chip-item">
                  <div
                    className="palette-color-block"
                    style={{ backgroundColor: col.hex }}
                  />
                  <div className="palette-chip-meta">
                    <span className="chip-name">{col.name}</span>
                    <span className="chip-hex">{col.hex}</span>
                    <span className="chip-mood">{col.mood}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Large Project Photography Gallery */}
      <section className="detail-gallery-section section-padding">
        <div className="container">
          <div className="gallery-header-block">
            <span className="eyebrow">Monograph Gallery</span>
            <h2 className="heading-section">Visual Perspectives</h2>
            <p className="gallery-caption-hint">Click any frame to inspect in high resolution</p>
          </div>

          <div className="project-detail-gallery-grid">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                className={`gallery-grid-item item-${item.orientation}`}
                onClick={() => setActiveLightboxImg(item)}
              >
                <div className="gallery-img-wrapper">
                  <img src={item.url} alt={item.caption} loading="lazy" />
                  <div className="gallery-hover-overlay">
                    <div className="hover-expand-pill">
                      <Maximize2 size={16} />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>
                <p className="gallery-item-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation (Previous / Next Monograph) */}
      <section className="detail-nav-footer">
        <div className="container">
          <div className="project-pager-grid">
            <Link to={`/projects/${prevProject.slug}`} className="pager-link pager-prev">
              <span className="pager-direction">
                <ArrowLeft size={16} />
                <span>Previous Work</span>
              </span>
              <h3 className="pager-title">{prevProject.title}</h3>
              <span className="pager-cat">{prevProject.category} — {prevProject.location}</span>
            </Link>

            <Link to={`/projects/${nextProject.slug}`} className="pager-link pager-next">
              <span className="pager-direction">
                <span>Next Work</span>
                <ArrowRight size={16} />
              </span>
              <h3 className="pager-title">{nextProject.title}</h3>
              <span className="pager-cat">{nextProject.category} — {nextProject.location}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects Showcase */}
      <section className="detail-related-section section-padding">
        <div className="container">
          <div className="related-header">
            <div>
              <span className="eyebrow">Related Architecture</span>
              <h2 className="heading-sub">Further Selected Works</h2>
            </div>
            <Link to="/projects" className="btn-text-link">
              <span>View All Selected Works</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="related-projects-grid">
            {relatedProjects.map((rel) => (
              <ProjectCard key={rel.id} project={rel} layoutVariant="standard" />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setActiveLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveLightboxImg(null)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>
            <img src={activeLightboxImg.url} alt={activeLightboxImg.caption} />
            <p className="lightbox-caption">{activeLightboxImg.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
