import React from 'react';
import { ArrowDown } from 'lucide-react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * Hero Section
 * Cinematic full-screen introduction for Subhickshun with line-by-line blur-reveal text
 */
export const Hero = () => {
  const { hero } = tributeData;

  const handleScrollClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#intro');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Tribute Introduction">
      {/* Cinematic Background Layer */}
      <div className="hero-bg-layer">
        <ImageWithFallback
          src={hero.image}
          alt={hero.imageAlt}
          className="hero-bg-image"
          loading="eager"
          fallbackTitle="SUBHICKSHUN NAREN • THE ATHLETE"
        />
        <div className="hero-vignette" />
        <div className="hero-light-streak" />
      </div>

      {/* Hero Foreground Content */}
      <div className="site-container hero-content">
        {/* Campaign Metadata Bar */}
        <div className="hero-top-meta reveal-blur delay-1 is-revealed">
          <span className="hero-meta-badge">{hero.metadata}</span>
          <span className="hero-meta-tag">{hero.eyebrow}</span>
        </div>

        {/* Huge Display Heading (Sports Poster Style) */}
        <h1 className="hero-title reveal-blur delay-2 is-revealed">
          <span className="hero-title-line">{hero.headingLine1}</span>
          <span className="hero-title-line accent-line">{hero.headingLine2}</span>
          <span className="hero-title-line">{hero.headingLine3}</span>
          <span className="hero-title-line">{hero.headingLine4}</span>
        </h1>

        {/* Speed Line Accent */}
        <div className="hero-speed-line-wrap reveal-blur delay-3 is-revealed">
          <div className="hero-speed-line" />
        </div>

        {/* Subtitle Quote */}
        <p className="hero-quote reveal-blur delay-4 is-revealed">
          "{hero.quote}"
        </p>
      </div>

      {/* Scroll Down Trigger */}
      <a
        href="#intro"
        className="hero-scroll-btn"
        onClick={handleScrollClick}
        aria-label="Scroll to begin tribute"
      >
        <span>{hero.scrollPrompt}</span>
        <ArrowDown size={16} className="hero-scroll-arrow" />
      </a>
    </section>
  );
};

export default Hero;
