import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ArrowRight, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import ProjectCard from '../components/projects/ProjectCard';
import './WishlistPage.css';

export const WishlistPage = () => {
  const { wishlistProjects, wishlistCount, clearWishlist } = useWishlist();

  return (
    <div className="wishlist-page-wrapper">
      {/* Page Hero Banner */}
      <section className="wishlist-hero-banner theme-dark">
        <div
          className="wishlist-hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85')`
          }}
        />
        <div className="wishlist-hero-veil" />

        <div className="container wishlist-hero-container">
          <span className="eyebrow eyebrow-dark">
            <Heart size={14} className="text-gold" />
            <span>Private Architecture Dossier</span>
          </span>
          <h1 className="heading-hero wishlist-hero-title">
            Your Curated<br />
            <em>Collection</em>
          </h1>
          <p className="text-lead wishlist-hero-lead">
            A personalized assemblage of your favorite architectural spaces, materials, and
            room atmospheres saved for future consultation with our lead architects.
          </p>
        </div>
      </section>

      {/* Main Content Gallery */}
      <section className="wishlist-content-section section-padding">
        <div className="container">
          {wishlistCount > 0 ? (
            <>
              {/* Header Bar with Count & Clear Action */}
              <div className="wishlist-action-bar">
                <div className="wishlist-count-badge">
                  <span>Saved Works:</span>
                  <strong>{wishlistCount} Selected</strong>
                </div>

                <div className="wishlist-bar-right">
                  <Link to="/contact" className="btn btn-gold">
                    <span>Enquire With Saved Works</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <button
                    onClick={clearWishlist}
                    className="clear-wishlist-btn"
                    aria-label="Clear Entire Wishlist"
                  >
                    <Trash2 size={15} />
                    <span>Clear Collection</span>
                  </button>
                </div>
              </div>

              {/* Grid of Saved Projects */}
              <div className="wishlist-grid">
                {wishlistProjects.map((project, idx) => (
                  <div key={project.id} className="wishlist-grid-item animate-fade-up">
                    <ProjectCard project={project} layoutVariant="standard" />
                  </div>
                ))}
              </div>

              {/* Consultation Next Steps Callout */}
              <div className="wishlist-consultation-callout glass-panel">
                <div className="callout-text">
                  <span className="eyebrow">Ready For Discussion</span>
                  <h3 className="callout-title">Bring Your Curated Dossier to Consultation</h3>
                  <p className="callout-desc">
                    Our principal architects will reference these {wishlistCount} saved spaces during
                    your bespoke discovery session to understand your aesthetic aspirations.
                  </p>
                </div>
                <Link to="/contact" className="btn btn-primary">
                  <span>Schedule Consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="wishlist-empty-state">
              <div className="empty-heart-circle">
                <Heart size={38} strokeWidth={1.2} />
              </div>
              <h2 className="empty-title">Your Curation is Currently Empty</h2>
              <p className="empty-lead">
                You have not saved any architectural monographs yet. As you explore our
                portfolio and design collections, select the heart icon to assemble your
                personal design dossier.
              </p>
              <div className="empty-actions">
                <Link to="/projects" className="btn btn-primary">
                  <Compass size={16} />
                  <span>Explore Selected Works</span>
                </Link>
                <Link to="/collections" className="btn btn-secondary">
                  <span>Browse Design Styles</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;
