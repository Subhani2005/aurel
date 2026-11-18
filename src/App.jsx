import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { WishlistProvider } from './context/WishlistContext';
import { SearchProvider } from './context/SearchContext';

import SmoothScroll from './components/common/SmoothScroll';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SearchModal from './components/common/SearchModal';
import Toast from './components/common/Toast';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CollectionsPage from './pages/CollectionsPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css';

// Framer motion page transition configuration
const pageVariants = {
  initial: {
    opacity: 0,
    y: 12
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-transition-wrapper"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App = () => {
  return (
    <WishlistProvider>
      <SearchProvider>
        <SmoothScroll>
          <div className="aurel-app-root">
            <CustomCursor />
            <Navbar />
            <main className="main-content-flow">
              <AnimatedRoutes />
            </main>
            <Footer />
            <SearchModal />
            <Toast />
          </div>
        </SmoothScroll>
      </SearchProvider>
    </WishlistProvider>
  );
};

export default App;
