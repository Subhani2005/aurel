import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';
import './ComparisonSlider.css';

export const ComparisonSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Transformation',
  afterLabel = 'AUREL Architectural Vision',
  initialPosition = 50
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  // Handle direct click anywhere on the comparison canvas
  const handleContainerClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`comparison-slider-container ${isDragging ? 'is-dragging' : ''}`}
      onClick={handleContainerClick}
      role="region"
      aria-label="Interactive Before and After Image Comparison"
    >
      {/* AFTER IMAGE (Bottom Layer / Full Viewport) */}
      <div className="image-layer image-after">
        <img src={afterImage} alt={afterLabel} loading="lazy" />
        <div className="label-pill label-after">
          <Sparkles size={13} className="text-gold" />
          <span>{afterLabel}</span>
        </div>
      </div>

      {/* BEFORE IMAGE (Top Layer / Clipped by slider percentage) */}
      <div
        className="image-layer image-before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt={beforeLabel} loading="lazy" />
        <div className="label-pill label-before">
          <span>{beforeLabel}</span>
        </div>
      </div>

      {/* DRAGGABLE DIVIDER LINE & HANDLE */}
      <div
        className="slider-divider-line"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="comparison-handle" aria-label="Drag comparison slider">
          <ChevronsLeftRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
