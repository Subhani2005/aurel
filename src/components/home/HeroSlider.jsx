import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft } from 'lucide-react';
import './HeroSlider.css';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90',
    location: 'Lake Como, Italy',
    project: 'Villa Lumina',
    headingLine1: 'Designing Spaces.',
    headingLine2: 'Creating Experiences.',
    subtext: 'We transform everyday spaces into timeless expressions of comfort, elegance and thoughtful design.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
    location: 'Tribeca, New York',
    project: 'Penthouse Seraph',
    headingLine1: 'Tactile Architecture.',
    headingLine2: 'Serene Sanctuary.',
    subtext: 'Monumental cast-iron columns and bone plaster walls rising forty stories above the Manhattan skyline.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=2400&q=90',
    location: 'Kyoto, Japan',
    project: 'Kyoto Sanctuary',
    headingLine1: 'Mindful Harmony.',
    headingLine2: 'Enduring Light.',
    subtext: 'Ancient Japanese cedar woodworking married with serene Nordic minimalism and meditative waters.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90',
    location: 'Zürich, Switzerland',
    project: 'Casa Allegra',
    headingLine1: 'Quiet Grandeur.',
    headingLine2: 'Bespoke Warmth.',
    subtext: 'Curated low-slung Italian bouclé seating and micro-perforated acoustic timber envelopes.'
  }
];

export const HeroSlider = ({ onOpenShowreel }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef(null);

  const totalSlides = heroSlides.length;

  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => clearInterval(slideTimerRef.current);
  }, [currentSlide, isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const current = heroSlides[currentSlide];

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AUREL Showcase Hero"
    >
      {/* Background Slides with Slow Zoom & Crossfade */}
      <div className="hero-slides-viewport">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide-item ${index === currentSlide ? 'slide-active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className="hero-slide-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Dark & Warm Ivory Vignette Overlays for Maximum Readability */}
            <div className="hero-overlay-gradient" />
          </div>
        ))}
      </div>

      {/* Floating Decorative Architectural Stamp */}
      <div className="hero-decor-stamp">
        <span className="stamp-coords">45.4642° N, 9.1900° E</span>
        <span className="stamp-atelier">MILAN • NEW YORK • LONDON • KYOTO</span>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="container hero-content-container">
        <div className="hero-editorial-wrapper">
          {/* Slide Project Meta Pill */}
          <div className="hero-meta-badge">
            <span className="meta-dot" />
            <span className="meta-project">{current.project}</span>
            <span className="meta-sep">—</span>
            <span className="meta-location">{current.location}</span>
          </div>

          {/* Heading with Word-by-Word Stagger Reveal */}
          <h1 className="hero-heading" key={current.id}>
            <span className="hero-line">
              {current.headingLine1.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="hero-word-reveal"
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </span>
            <span className="hero-line hero-line-italic">
              {current.headingLine2.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="hero-word-reveal"
                  style={{ animationDelay: `${0.35 + i * 0.08}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </span>
          </h1>

          {/* Subtext description */}
          <p className="hero-subtext" key={`sub-${current.id}`}>
            {current.subtext}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions-group">
            <Link to="/projects" className="btn btn-light hero-cta-btn">
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={onOpenShowreel}
              className="btn btn-outline-light hero-showreel-btn"
              aria-label="Watch Cinematic Showreel"
            >
              <div className="play-pulse-icon">
                <Play size={13} fill="currentColor" />
              </div>
              <span>Watch Showreel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Slider Navigation Bar */}
      <div className="hero-bottom-controls">
        <div className="container hero-controls-container">
          {/* Scroll Down Indicator */}
          <a href="#featured-projects" className="hero-scroll-indicator" aria-label="Scroll to featured works">
            <span className="scroll-track">
              <span className="scroll-thumb" />
            </span>
            <span className="scroll-label">Scroll to Explore</span>
          </a>

          {/* Slider Progress Numbers & Manual Arrows */}
          <div className="hero-slider-nav">
            <div className="slider-counter">
              <span className="counter-current">0{currentSlide + 1}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">0{totalSlides}</span>
            </div>

            {/* Slider Dots */}
            <div className="slider-indicators">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot-btn ${i === currentSlide ? 'dot-active' : ''}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Manual Arrows */}
            <div className="slider-arrows">
              <button
                onClick={handlePrev}
                className="slider-arrow-btn"
                aria-label="Previous Project"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="slider-arrow-btn"
                aria-label="Next Project"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
