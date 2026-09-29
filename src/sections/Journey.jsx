import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * Journey Section
 * Artistic, cinematic vertical timeline documenting Subhickshun's athletic progression
 */
export const Journey = () => {
  const { journey } = tributeData;

  return (
    <section id="journey" className="section-wrapper section-padding journey-section" aria-label="The Athlete Journey">
      <div className="site-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <span className="intro-label reveal-blur">CHAPTERS OF DEDICATION</span>
          <h2 className="rolemodel-title reveal-blur delay-1" style={{ marginBottom: 0 }}>
            THE <span>JOURNEY.</span>
          </h2>
        </div>

        {/* Timeline Stream */}
        <div className="journey-timeline-flow">
          {journey.map((item, index) => (
            <div
              key={item.step}
              className={`journey-step-item reveal-blur delay-${(index % 3) + 1}`}
            >
              {/* Step Node */}
              <div className="journey-step-node">
                {item.step}
              </div>

              {/* Step Card */}
              <div className="journey-step-card">
                <h3 className="journey-phase-title">{item.phase}</h3>
                <p className="journey-phase-quote">"{item.quote}"</p>
                <p className="journey-phase-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
