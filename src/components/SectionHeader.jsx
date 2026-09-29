import React from 'react';

/**
 * SectionHeader
 * Reusable header for all sections with number badge, big athletic display title, and subtitle
 */
export const SectionHeader = ({
  number,
  title,
  subtitle,
  align = "left",
  className = ""
}) => {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {number && (
        <div className="section-eyebrow">
          <span>{number}</span>
        </div>
      )}
      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
