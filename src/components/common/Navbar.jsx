import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Heart, Menu, X, ArrowUpRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useSearch } from '../../context/SearchContext';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const { openSearch } = useSearch();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Collections', path: '/collections' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`aurel-header ${isScrolled ? 'header-scrolled' : ''} ${
          !isHomePage && !isScrolled ? 'header-solid-init' : ''
        }`}
      >
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="aurel-brand" aria-label="AUREL Home">
            <span className="brand-mark">A</span>
            <span className="brand-name">AUREL</span>
            <span className="brand-sub">STUDIO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Icons & CTA */}
          <div className="header-actions">
            {/* Search Button */}
            <button
              onClick={openSearch}
              className="action-icon-btn"
              aria-label="Open Search"
              title="Search projects & styles"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="action-icon-btn wishlist-btn"
              aria-label={`Curated Wishlist (${wishlistCount})`}
              title="View Curated Favourites"
            >
              <Heart size={18} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="wishlist-badge">{wishlistCount}</span>
              )}
            </Link>

            {/* Consultation CTA */}
            <Link to="/contact" className="consultation-btn">
              <span>Consultation</span>
              <ArrowUpRight size={14} className="cta-arrow" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <Link to="/" className="aurel-brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-mark">A</span>
            <span className="brand-name">AUREL</span>
          </Link>
          <button
            className="mobile-close-btn"
            onClick={toggleMobileMenu}
            aria-label="Close Navigation"
          >
            <X size={26} />
          </button>
        </div>

        <div className="drawer-content">
          <nav className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-item ${isActive ? 'mobile-active' : ''}`
                }
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <span className="mobile-link-index">0{idx + 1}</span>
                <span className="mobile-link-text">{link.name}</span>
              </NavLink>
            ))}
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-active' : ''}`
              }
              style={{ animationDelay: '0.4s' }}
            >
              <span className="mobile-link-index">07</span>
              <span className="mobile-link-text">Curated Wishlist ({wishlistCount})</span>
            </NavLink>
          </nav>

          <div className="drawer-footer">
            <Link
              to="/contact"
              className="btn btn-gold mobile-drawer-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight size={16} />
            </Link>
            <div className="drawer-locations">
              <span>Milan</span>
              <span className="dot">•</span>
              <span>New York</span>
              <span className="dot">•</span>
              <span>London</span>
              <span className="dot">•</span>
              <span>Kyoto</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
