import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../../data/statsData';
import './StatsSection.css';

const AnimatedCounter = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2200; // ms
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, target]);

  return (
    <span className="stat-number">
      {count}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section theme-dark">
      {/* Subtle Fixed Architectural Photography Background */}
      <div
        className="stats-fixed-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=80')`
        }}
      />
      <div className="stats-dark-veil" />

      <div className="container stats-container">
        <div className="stats-intro">
          <span className="eyebrow eyebrow-dark">Our Architectural Track Record</span>
          <h2 className="stats-heading">Eighteen Years of Spatial Pedigree</h2>
        </div>

        <div className="stats-numbers-grid">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className="stat-card"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="stat-counter-wrap">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
