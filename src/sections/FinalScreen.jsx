import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * FinalScreen Section
 * Pitch-black screen sequence: 2014 → 2014-2026 → AND STILL... → FOREVER.
 */
export const FinalScreen = () => {
  const { finalScreen } = tributeData;

  return (
    <section className="section-wrapper final-black-screen-section" aria-label="Forever Brotherhood">
      <div className="site-container">
        <div className="final-screen-box">
          <div className="final-year-start reveal-blur">
            {finalScreen.yearStart}
          </div>

          <div className="final-year-span reveal-blur delay-1">
            {finalScreen.yearRange}
          </div>

          <p className="final-still-text reveal-blur delay-2">
            {finalScreen.bridge}
          </p>

          <h2 className="final-huge-forever reveal-blur delay-3">
            {finalScreen.hugeForever}
          </h2>

          <div className="forever-accent-line reveal-blur delay-3" />

          <p className="final-family-quote reveal-blur delay-4">
            "{finalScreen.bloodFamilyQuote}"
          </p>

          <div className="final-declarations reveal-blur delay-4">
            <span>{finalScreen.declarationLine1}</span>
            <span>{finalScreen.declarationLine2}</span>
            <span className="declaration-brother">{finalScreen.declarationLine3}</span>
          </div>

          <div className="final-screen-signoff reveal-blur delay-5">
            <span>{finalScreen.finalSign}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalScreen;
