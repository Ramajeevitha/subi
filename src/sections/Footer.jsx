import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * Footer Section
 * Minimal, mature, cinematic closing signature
 */
export const Footer = () => {
  const { footer } = tributeData;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <h3 className="footer-name">
          {footer.recipientName}
        </h3>
        <p className="footer-quote">
          {footer.tributeQuote}
        </p>
        <div className="footer-meta">
          <span>{footer.timeline} • {footer.creator}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
