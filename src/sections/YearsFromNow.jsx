import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * YearsFromNow Section
 * Pitch-black screen with slow sequential reflections across time
 */
export const YearsFromNow = () => {
  const { yearsFromNow } = tributeData;

  return (
    <section className="section-wrapper years-section" aria-label="Years From Now Reflection">
      <div className="site-container">
        <div className="years-sequence-box">
          <h2 className="years-headline reveal-blur">
            {yearsFromNow.line1}
          </h2>

          <p className="years-line-soft reveal-blur delay-1">
            "{yearsFromNow.line2}"
          </p>

          <p className="years-line-soft reveal-blur delay-2">
            "{yearsFromNow.line3}"
          </p>

          <p className="years-line-soft reveal-blur delay-3">
            "{yearsFromNow.line4}"
          </p>

          <h3 className="years-statement-grand reveal-blur delay-4">
            ...and remember the <span>athlete you once were.</span>
          </h3>

          <p className="years-closing reveal-blur delay-5">
            "{yearsFromNow.line6}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default YearsFromNow;
