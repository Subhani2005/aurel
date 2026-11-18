import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../components/projects/FilterBar';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../data/projectsData';
import { Sparkles } from 'lucide-react';
import './ProjectsPage.css';

export const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Projects';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All Projects') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  // Assign asymmetric layout variant based on index
  const getLayoutVariant = (index) => {
    const pattern = index % 5;
    if (pattern === 0) return 'large';
    if (pattern === 1) return 'tall';
    if (pattern === 2) return 'standard';
    if (pattern === 3) return 'wide';
    return 'tall';
  };

  return (
    <div className="projects-page-wrapper">
      {/* Editorial Page Hero */}
      <section className="projects-hero-banner">
        <div
          className="projects-hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85')`
          }}
        />
        <div className="projects-hero-overlay" />

        <div className="container projects-hero-content">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>Architectural Portfolio</span>
          </span>
          <h1 className="heading-hero projects-page-title">Our Selected Works</h1>
          <p className="text-lead projects-page-lead">
            A collection of spaces designed with intention, character and timeless elegance.
            Spanning private Mediterranean villas, alpine chalets, and historic city ateliers.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="projects-gallery-section section-padding-bottom">
        <div className="container">
          {/* Dynamic Interactive Filter Bar */}
          <FilterBar
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* Results Count & Current Filter Stamp */}
          <div className="gallery-meta-bar">
            <span className="gallery-count-text">
              Showing <strong>{filteredProjects.length}</strong> of{' '}
              <strong>{projectsData.length}</strong> Works
            </span>
            <span className="gallery-category-badge">{selectedCategory}</span>
          </div>

          {/* Asymmetric Masonry-style Grid */}
          <div className="asymmetric-projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid-cell cell-${getLayoutVariant(index)} animate-fade-up`}
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <ProjectCard
                  project={project}
                  layoutVariant={getLayoutVariant(index)}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-projects-state">
              <p>No projects currently catalogued in this category.</p>
              <button
                onClick={() => handleSelectCategory('All Projects')}
                className="btn btn-primary"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
