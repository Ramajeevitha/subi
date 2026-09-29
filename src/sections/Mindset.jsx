import React from 'react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';

/**
 * Mindset Section
 * High-impact quote & core philosophical pillars that drive daily discipline
 */
export const Mindset = () => {
  const { mindset } = athleteData;

  return (
    <section id="mindset" className="section-wrapper section-padding mindset-section" aria-label="Athlete Philosophy and Mindset">
      <div className="site-container">
        {/* Quote Block */}
        <div className="mindset-quote-wrap">
          <div className="mindset-quote-mark">“</div>
          <blockquote className="mindset-quote-text">
            {mindset.quote}
          </blockquote>
          <div className="mindset-author">
            <span className="author-name">— {mindset.author}</span>
            <span className="author-title">{mindset.authorTitle}</span>
          </div>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="principles-grid">
          {mindset.principles.map((principle) => (
            <div key={principle.number} className="principle-card">
              <span className="principle-number">/{principle.number}</span>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-desc">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mindset;
