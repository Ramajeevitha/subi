import React from 'react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * Introduction Section (01 / A MEMORY • MORE THAN AN ATHLETE)
 * Large portrait with overlapping typography, background watermark 01, and editorial layout
 */
export const Introduction = () => {
  const { intro } = tributeData;

  return (
    <section id="intro" className="section-wrapper section-padding intro-section" aria-label="A Memory - More Than An Athlete">
      {/* Large background number 01 */}
      <div className="watermark-number">
        {intro.numberWatermark}
      </div>

      <div className="site-container">
        <div className="intro-editorial-layout">
          {/* Portrait with Image Clipping */}
          <div className="intro-portrait-wrap reveal-blur">
            <div className="intro-portrait-frame">
              <ImageWithFallback
                src={intro.image}
                alt={intro.imageAlt}
                loading="lazy"
                fallbackTitle="MORE THAN AN ATHLETE"
              />
              <div className="intro-portrait-overlay" />
              <div className="intro-portrait-line" />
            </div>
          </div>

          {/* Overlapping Foreground Typography */}
          <div className="intro-text-content">
            <span className="editorial-label reveal-blur">
              {intro.label}
            </span>

            <h2 className="intro-huge-title reveal-blur delay-1">
              <span>{intro.headlineLine1}</span><br />
              <span className="accent-glow">{intro.headlineLine2}</span>
            </h2>

            <div className="intro-quote-card reveal-blur delay-2">
              <p className="intro-statement-1">
                "{intro.statement1}"
              </p>
              <p className="intro-statement-2">
                {intro.statement2.split("it's a memory")[0]}
                <span className="statement-accent">it's a memory.</span>
              </p>
            </div>

            <p className="intro-paragraph reveal-blur delay-3">
              {intro.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
