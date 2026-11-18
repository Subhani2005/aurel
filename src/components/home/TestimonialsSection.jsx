import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import './TestimonialsSection.css';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonialsData.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="testimonials-header">
          <span className="eyebrow">Client Endorsements</span>
          <h2 className="heading-section">Voices of Discerning Patrons</h2>
        </div>

        <div className="testimonial-card-frame">
          <div className="testimonial-inner-grid" key={current.id}>
            {/* Quote & Editorial Content */}
            <div className="testimonial-content-side">
              <div className="quote-mark-icon">
                <Quote size={40} />
              </div>

              <blockquote className="testimonial-quote">
                "{current.quote}"
              </blockquote>

              <div className="testimonial-author-meta">
                <div className="author-avatar-wrap">
                  {current.avatar ? (
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="author-avatar-img"
                    />
                  ) : (
                    <div className="author-initials-fallback">{current.initials}</div>
                  )}
                </div>

                <div className="author-details">
                  <h4 className="author-name">{current.author}</h4>
                  <p className="author-title">{current.title}</p>
                  <p className="author-project">
                    <span>Commission:</span> {current.project}
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Commission Stamp & Location */}
            <div className="testimonial-location-side">
              <div className="stamp-box">
                <span className="stamp-year">COMPLETED {current.year}</span>
                <h5 className="stamp-city">{current.location}</h5>
                <span className="stamp-verified">Private Commission Verified</span>
              </div>

              {/* Slider Controls */}
              <div className="testimonial-nav-controls">
                <div className="testimonial-counter">
                  <span>0{currentIndex + 1}</span>
                  <span className="counter-divider">/</span>
                  <span>0{total}</span>
                </div>

                <div className="testimonial-arrows">
                  <button
                    onClick={handlePrev}
                    className="t-arrow-btn"
                    aria-label="Previous Testimonial"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="t-arrow-btn"
                    aria-label="Next Testimonial"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
