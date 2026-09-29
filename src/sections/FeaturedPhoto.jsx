import React from 'react';
import { athleteData } from '../data/athleteData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * FeaturedPhoto Section
 * Full-width cinematic photo banner with bold athletic typography overlay
 */
export const FeaturedPhoto = () => {
  const { featured } = athleteData;

  return (
    <section className="section-wrapper featured-photo-section" aria-label="Featured Athletic Photo">
      <div className="featured-bg-wrap">
        <ImageWithFallback
          src={featured.image}
          alt={featured.imageAlt}
          objectPosition={featured.objectPosition}
          loading="lazy"
          fallbackTitle="CINEMATIC TRACK MOMENTS"
        />
        <div className="featured-overlay-layer" />
      </div>

      <div className="featured-content">
        <h2 className="featured-headline">
          <span>{featured.quoteLine1}</span>
          <span className="accent-line">{featured.quoteLine2}</span>
          <span>{featured.quoteLine3}</span>
        </h2>
        <p className="featured-tagline">
          {featured.tagline}
        </p>
      </div>
    </section>
  );
};

export default FeaturedPhoto;
