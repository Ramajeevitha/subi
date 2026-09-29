import React from 'react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * FinalMemory Section
 * Final full-screen photo with Rama's closing dedication
 */
export const FinalMemory = () => {
  const { finalMemory } = tributeData;

  return (
    <section className="section-wrapper final-memory-section" aria-label="Final Memory Photo">
      <div className="final-memory-bg">
        <ImageWithFallback
          src={finalMemory.image}
          alt={finalMemory.imageAlt}
          loading="lazy"
          fallbackTitle="SUBHICKSHUN NAREN • ETERNAL ATHLETE"
        />
        <div className="final-memory-overlay" />
      </div>

      <div className="final-memory-content">
        <h2 className="final-quote-text reveal-blur">
          "{finalMemory.quote}"
        </h2>
        <div className="final-author-sign reveal-blur delay-1">
          {finalMemory.signOff}
        </div>
      </div>
    </section>
  );
};

export default FinalMemory;
