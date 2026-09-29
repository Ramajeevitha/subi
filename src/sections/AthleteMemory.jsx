import React from 'react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * AthleteMemory Section
 * Connecting the brotherhood bond back to the athlete who became a role model
 */
export const AthleteMemory = () => {
  const { athleteMemory } = tributeData;

  return (
    <section className="section-wrapper athlete-memory-section" aria-label="The Athlete Memory">
      <div className="athlete-memory-bg-wrap">
        <ImageWithFallback
          src={athleteMemory.image}
          alt={athleteMemory.imageAlt}
          loading="lazy"
          fallbackTitle="SUBHICKSHUN NAREN • THE ATHLETE"
        />
        <div className="athlete-memory-overlay" />
      </div>

      <div className="athlete-memory-content-box">
        <h2 className="athlete-memory-title reveal-blur">
          {athleteMemory.headline}
        </h2>

        <div className="athlete-memory-pillars reveal-blur delay-1">
          {athleteMemory.pillars.map((pillar, idx) => (
            <span key={idx} className="pillar-phrase">
              {pillar}
            </span>
          ))}
        </div>

        <p className="athlete-memory-future reveal-blur delay-2">
          "{athleteMemory.futureNote}"
        </p>

        <h3 className="athlete-memory-grand-statement reveal-blur delay-3">
          {athleteMemory.finalStatement}
        </h3>
      </div>
    </section>
  );
};

export default AthleteMemory;
