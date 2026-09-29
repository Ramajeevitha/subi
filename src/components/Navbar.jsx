import React, { useState, useEffect } from 'react';
import { tributeData } from '../data/tributeData';
import MobileMenu from './MobileMenu';

/**
 * Navbar
 * Minimal tribute header showing full name on desktop, 'SN' on mobile, and smooth scroll links
 */
export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Monogram on Mobile / Full Name on Desktop */}
          <a
            href="#hero"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label={`${tributeData.recipient.fullName} Tribute`}
          >
            <span className="brand-monogram">
              {tributeData.recipient.initials}<span className="brand-dot">.</span>
            </span>
            <span className="brand-full-name">
              {tributeData.recipient.fullName}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Main Tribute Navigation">
            {tributeData.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`menu-toggle-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close tribute menu" : "Open tribute menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="menu-icon-bars">
              <span className="menu-bar menu-bar-top" />
              <span className="menu-bar menu-bar-mid" />
              <span className="menu-bar menu-bar-bot" />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
