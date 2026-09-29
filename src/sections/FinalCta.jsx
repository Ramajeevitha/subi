import React from 'react';
import { ArrowUp } from 'lucide-react';
import { tributeData } from '../data/tributeData';

/**
 * FinalCta Section
 * "THE JOURNEY ISN'T OVER. Whatever comes next, keep moving." with 'KEEP GOING →' scroll to top
 */
export const FinalCta = () => {
  const { cta } = tributeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section-wrapper cta-section" aria-label="Final Call To Action">
      <div className="site-container">
        <div className="cta-box">
          <h2 className="cta-title reveal-blur">
            {cta.title}
          </h2>
          <p className="cta-subtitle reveal-blur delay-1">
            "{cta.subtitle}"
          </p>

          <button
            onClick={scrollToTop}
            className="btn btn-primary btn-lg reveal-blur delay-2"
            aria-label="Scroll back to top to revisit the memories"
          >
            <span>{cta.buttonText}</span>
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
