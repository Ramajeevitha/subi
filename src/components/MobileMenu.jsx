import React, { useEffect } from 'react';
import { tributeData } from '../data/tributeData';

/**
 * MobileMenu
 * Fullscreen cinematic dark overlay navigation for mobile screens
 */
export const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    onClose();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <nav
        className="mobile-nav-links"
        onClick={(e) => e.stopPropagation()}
        aria-label="Mobile Navigation"
      >
        {tributeData.navigation?.map((item, index) => {
          const sectionId = item.href.replace('#', '');
          const isActive = activeSection === sectionId;
          const numStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

          return (
            <a
              key={item.name}
              href={item.href}
              className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
            >
              <span>{item.name}</span>
              <span className="link-num">/{numStr}</span>
            </a>
          );
        })}

        <div className="mobile-menu-tribute-tag">
          {tributeData.recipient?.fullName} • 2014 → 2026 → FOREVER
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
