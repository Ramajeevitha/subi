import React from 'react';
import { tributeData } from '../data/tributeData';
import ConfettiEffect from '../components/ConfettiEffect';

/**
 * FinalBirthday Section
 * The concluding mature birthday dedication to Subhickshun Naren
 */
export const FinalBirthday = () => {
  const { finalBirthday } = tributeData;

  return (
    <section className="section-wrapper final-birthday-section" aria-label="Final Birthday Message">
      {/* Subtle Golden Ember Sparkles */}
      <ConfettiEffect />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="final-birthday-box">
          <h2 className="final-birthday-heading reveal-blur">
            {finalBirthday.heading}
          </h2>

          <div className="final-birthday-pillars">
            {finalBirthday.pillars.map((item, idx) => (
              <p
                key={idx}
                className={`birthday-pillar-line reveal-blur delay-${idx + 1}`}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="final-timeline-tag reveal-blur delay-4">
            {finalBirthday.timelineTag}
          </div>

          <div className="final-closing-sign reveal-blur delay-5">
            <span>{finalBirthday.signatureTag}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalBirthday;
