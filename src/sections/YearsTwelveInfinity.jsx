import React from 'react';
import { Infinity as InfinityIcon } from 'lucide-react';
import { tributeData } from '../data/tributeData';

/**
 * YearsTwelveInfinity Section
 * Cinematic milestone numbers: 2014 — 2026, 12 Years, and 2014 → 2026 → ∞ FOREVER
 */
export const YearsTwelveInfinity = () => {
  const { yearsTwelve } = tributeData;

  return (
    <section className="section-wrapper section-padding years-twelve-section" aria-label="12 Years of Brotherhood">
      <div className="site-container">
        <div className="years-twelve-container">
          {/* Main Huge Number Range */}
          <div className="huge-year-range reveal-blur">
            {yearsTwelve.yearRange}
          </div>

          <div className="twelve-summary-box reveal-blur delay-1">
            <h3 className="summary-line">{yearsTwelve.summaryLine1}</h3>
            <h3 className="summary-line">{yearsTwelve.summaryLine2}</h3>
            <h3 className="summary-line summary-brother">{yearsTwelve.summaryLine3}</h3>
          </div>

          <p className="bridge-text reveal-blur delay-2">
            "{yearsTwelve.bridge}"
          </p>

          {/* Infinity Progression Block */}
          <div className="infinity-progression-card reveal-blur delay-3">
            <div className="infinity-equation">
              <span>2014</span>
              <span className="arrow-sep">→</span>
              <span>2026</span>
              <span className="arrow-sep">→</span>
              <span className="infinity-symbol-wrap">
                <InfinityIcon size={38} className="infinity-animated" />
              </span>
            </div>

            <div className="forever-glowing-text">
              {yearsTwelve.foreverTag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearsTwelveInfinity;
