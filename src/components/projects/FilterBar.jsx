import React from 'react';
import { projectCategories, projectsData } from '../../data/projectsData';
import './FilterBar.css';

export const FilterBar = ({ selectedCategory, onSelectCategory }) => {
  const getCategoryCount = (cat) => {
    if (cat === 'All Projects') return projectsData.length;
    return projectsData.filter((p) => p.category === cat).length;
  };

  return (
    <div className="filter-bar-container" role="tablist" aria-label="Project Categories">
      <div className="filter-scroll-wrapper">
        {projectCategories.map((category) => {
          const isActive = selectedCategory === category;
          const count = getCategoryCount(category);

          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              className={`filter-tab-btn ${isActive ? 'filter-active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              <span className="filter-label">{category}</span>
              <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
