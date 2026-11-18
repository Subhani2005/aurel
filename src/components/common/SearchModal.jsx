import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Compass, Layers, Sparkles } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { projectsData } from '../../data/projectsData';
import { collectionsData } from '../../data/collectionsData';
import { servicesData } from '../../data/servicesData';
import './SearchModal.css';

export const SearchModal = () => {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const query = searchQuery.trim().toLowerCase();

  const matchingProjects = query
    ? projectsData.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.materials.some((m) => m.name.toLowerCase().includes(query))
      )
    : projectsData.slice(0, 4);

  const matchingCollections = query
    ? collectionsData.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.tagline.toLowerCase().includes(query) ||
          c.materials.some((m) => m.toLowerCase().includes(query))
      )
    : collectionsData.slice(0, 3);

  const matchingServices = query
    ? servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.shortDesc.toLowerCase().includes(query)
      )
    : [];

  const handleSelectProject = (slug) => {
    closeSearch();
    navigate(`/projects/${slug}`);
  };

  const handleSelectCollection = (id) => {
    closeSearch();
    navigate(`/collections#${id}`);
  };

  return (
    <div className="search-modal-backdrop" onClick={closeSearch}>
      <div
        className="search-modal-container glass-panel-dark"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Search Bar */}
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <Search size={22} className="search-icon-field" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by villa, material (travertine, oak), style, or city..."
              className="search-field-input"
            />
            {searchQuery && (
              <button
                className="clear-query-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search Input"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button className="search-modal-close" onClick={closeSearch} aria-label="Close Search">
            <span className="esc-key">ESC</span>
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="search-quick-tags">
          <span className="quick-label">Suggestions:</span>
          {['Travertine', 'Lake Como', 'Japandi', 'Penthouse', 'Minimalist', 'Kitchens'].map(
            (tag) => (
              <button
                key={tag}
                className="quick-tag-btn"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Search Results Display */}
        <div className="search-results-viewport">
          {/* Projects Group */}
          <div className="results-group">
            <div className="group-heading">
              <Compass size={16} />
              <span>{query ? `Selected Projects (${matchingProjects.length})` : 'Featured Architecture'}</span>
            </div>

            {matchingProjects.length > 0 ? (
              <div className="project-results-grid">
                {matchingProjects.map((project) => (
                  <div
                    key={project.id}
                    className="search-project-item"
                    onClick={() => handleSelectProject(project.slug)}
                  >
                    <div className="result-thumb-wrapper">
                      <img src={project.heroImage} alt={project.title} loading="lazy" />
                    </div>
                    <div className="result-item-info">
                      <span className="result-category">{project.category} • {project.location}</span>
                      <h4 className="result-title">{project.title}</h4>
                      <p className="result-snippet">{project.shortDesc}</p>
                    </div>
                    <ArrowRight size={18} className="result-arrow" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-results-text">No architectural projects matched "{query}"</p>
            )}
          </div>

          {/* Collections Group */}
          <div className="results-group">
            <div className="group-heading">
              <Layers size={16} />
              <span>Design Styles & Collections</span>
            </div>
            <div className="collections-results-grid">
              {matchingCollections.map((col) => (
                <div
                  key={col.id}
                  className="search-collection-pill"
                  onClick={() => handleSelectCollection(col.id)}
                >
                  <img src={col.heroImage} alt={col.title} className="col-pill-img" />
                  <div className="col-pill-text">
                    <span className="col-pill-title">{col.title}</span>
                    <span className="col-pill-sub">{col.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Group (if matching) */}
          {matchingServices.length > 0 && (
            <div className="results-group">
              <div className="group-heading">
                <Sparkles size={16} />
                <span>Services</span>
              </div>
              <div className="services-results-list">
                {matchingServices.map((srv) => (
                  <div
                    key={srv.id}
                    className="search-service-item"
                    onClick={() => {
                      closeSearch();
                      navigate('/about');
                    }}
                  >
                    <span className="srv-number">{srv.number}</span>
                    <div>
                      <h5 className="srv-title">{srv.title}</h5>
                      <p className="srv-desc">{srv.shortDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
