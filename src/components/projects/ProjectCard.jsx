import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ArrowUpRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import './ProjectCard.css';

export const ProjectCard = ({ project, layoutVariant = 'standard' }) => {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(project.id);

  return (
    <article className={`project-card layout-${layoutVariant}`}>
      <Link to={`/projects/${project.slug}`} className="project-card-link" aria-label={`View ${project.title}`}>
        <div className="project-image-box">
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            className="project-card-img"
          />
          <div className="project-card-overlay" />

          {/* Floating Wishlist Heart */}
          <button
            className={`project-wishlist-toggle ${wishlisted ? 'is-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(project.id);
            }}
            aria-label={wishlisted ? 'Remove from curated' : 'Save to curated'}
            title={wishlisted ? 'In your curation' : 'Add to curation'}
          >
            <Heart size={18} fill={wishlisted ? '#AD9470' : 'none'} />
          </button>

          {/* Project Details Reveal Overlay */}
          <div className="project-meta-overlay">
            <div className="meta-header">
              <span className="card-category-tag">{project.category}</span>
              <span className="card-year">{project.year}</span>
            </div>

            <h3 className="card-project-title">{project.title}</h3>

            <div className="card-location-row">
              <MapPin size={13} />
              <span>{project.location}</span>
            </div>

            <p className="card-short-desc">{project.shortDesc}</p>

            <div className="card-footer-action">
              <span className="explore-text">Explore Monograph</span>
              <div className="arrow-badge">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
