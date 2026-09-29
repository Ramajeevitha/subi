import React from 'react';
import { tributeData } from '../data/tributeData';
import ConfettiEffect from '../components/ConfettiEffect';

/**
 * BirthdayReveal Section
 * The emotional birthday celebration with golden particle sparks and warm tribute message
 */
export const BirthdayReveal = () => {
  const { birthday } = tributeData;

  return (
    <section className="section-wrapper birthday-section" aria-label="Happy Birthday Reveal">
      {/* Golden Particle Canvas */}
      <ConfettiEffect />

      <div className="birthday-content">
        <span className="birthday-eyebrow reveal-blur">
          {birthday.eyebrow}
        </span>

        <h2 className="birthday-huge-heading reveal-blur delay-1">
          <span>{birthday.headingLine1}</span><br />
          <span>{birthday.headingLine2}</span><br />
          <span className="name-glow">{birthday.headingLine3}</span>
        </h2>

        <p className="birthday-message-text reveal-blur delay-2">
          "{birthday.message}"
        </p>
      </div>
    </section>
  );
};

export default BirthdayReveal;
