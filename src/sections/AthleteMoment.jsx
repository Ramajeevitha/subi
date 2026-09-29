import React from 'react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * AthleteMoment Section
 * Cinematic action image with kinetic speed lines and emotional overlay
 */
export const AthleteMoment = () => {
  const { athleteMoment } = tributeData;

  return (
    <section id="athlete-moment" className="section-wrapper section-padding moment-section" aria-label="The Moment You Became an Athlete">
      <div className="site-container">
        <div className="moment-card reveal-blur">
          {/* Animated Speed Lines Layer */}
          <div className="speed-lines-container">
            <div className="speed-line" style={{ top: '20%', width: '60%', animationDelay: '0s' }} />
            <div className="speed-line" style={{ top: '45%', width: '80%', animationDelay: '1.2s' }} />
            <div className="speed-line" style={{ top: '75%', width: '50%', animationDelay: '2.4s' }} />
          </div>

          <div className="moment-media">
            <ImageWithFallback
              src={athleteMoment.image}
              alt={athleteMoment.imageAlt}
              loading="lazy"
              fallbackTitle="SUBHICKSHUN IN MOTION"
            />
          </div>

          <div className="moment-overlay">
            <h2 className="moment-title reveal-blur delay-1">
              {athleteMoment.heading}
            </h2>
            <p className="moment-caption reveal-blur delay-2">
              {athleteMoment.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteMoment;
