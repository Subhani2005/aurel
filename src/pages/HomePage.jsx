import React, { useState } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FeaturedProjects from '../components/home/FeaturedProjects';
import PhilosophySection from '../components/home/PhilosophySection';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import VideoModal from '../components/common/VideoModal';
import './HomePage.css';

export const HomePage = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <div className="home-page-container">
      {/* Cinematic Showcase Hero */}
      <HeroSlider onOpenShowreel={() => setShowreelOpen(true)} />

      {/* Featured Projects Showcase */}
      <FeaturedProjects />

      {/* Architectural Philosophy Manifesto */}
      <PhilosophySection />

      {/* Services & Spatial Disciplines */}
      <ServicesSection />

      {/* Animated Numerical Track Record */}
      <StatsSection />

      {/* Client Endorsements & Testimonials */}
      <TestimonialsSection />

      {/* Final Architectural Call to Action */}
      <CtaSection />

      {/* Cinematic Showreel Video Modal */}
      <VideoModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </div>
  );
};

export default HomePage;
