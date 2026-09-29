import React from 'react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * FeaturedAthlete Section
 * Full-width cinematic photo banner with "KEEP RUNNING." overlay
 */
export const FeaturedAthlete = () => {
  const { featured } = tributeData;

  return (
    <section className="section-wrapper featured-photo-section" aria-label="Featured Tribute Photo">
      <div className="featured-bg-wrap">
        <ImageWithFallback
          src={featured.image}
          alt={featured.imageAlt}
          loading="lazy"
          fallbackTitle="KEEP RUNNING • SUBHICKSHUN NAREN"
        />
        <div className="featured-overlay" />
      </div>

      <div className="featured-content-box">
        <h2 className="featured-headline-text reveal-blur">
          {featured.headline}
        </h2>
        <p className="featured-subtext reveal-blur delay-1">
          "{featured.subtext}"
        </p>
      </div>
    </section>
  );
};

export default FeaturedAthlete;
