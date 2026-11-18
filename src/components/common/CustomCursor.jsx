import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-target') ||
        target.closest('.comparison-handle') ||
        target.closest('.project-card') ||
        target.closest('.service-card')
      );
      setIsHovered(isInteractive);

      const isDragElement = Boolean(target.closest('.comparison-slider-container'));
      setIsPointer(isDragElement);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`luxury-cursor-dot ${isHovered ? 'cursor-hover' : ''} ${
        isPointer ? 'cursor-drag' : ''
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div className="cursor-ring" />
      <div className="cursor-core" />
      {isPointer && <span className="cursor-label">DRAG</span>}
    </div>
  );
};

export default CustomCursor;
