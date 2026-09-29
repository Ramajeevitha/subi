import React from 'react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * About Section
 * Split layout with portrait/action image and editorial bio with technical spec blocks
 */
export const About = () => {
  const { about } = athleteData;

  return (
    <section id="about" className="section-wrapper section-padding about-section" aria-label="About the Athlete">
      <div className="site-container">
        <div className="about-grid">
          {/* Left Column: Portrait & Action Photography */}
          <div className="about-media-col">
            <div className="about-image-wrapper">
              <ImageWithFallback
                src={about.image}
                alt={about.imageAlt}
                objectPosition={about.objectPosition}
                loading="lazy"
                fallbackTitle="ATHLETE PROFILE ARCHIVE"
              />
              {/* Corner Framing Markers */}
              <div className="about-frame-corner corner-tl" />
              <div className="about-frame-corner corner-tr" />
              <div className="about-frame-corner corner-bl" />
              <div className="about-frame-corner corner-br" />
            </div>

            {/* Floating Technical Badge */}
            <div className="about-badge-float">
              <div className="badge-title">STANDARDS</div>
              <div className="badge-sub">HIGH PERFORMANCE</div>
            </div>
          </div>

          {/* Right Column: Bio Content & Spec Matrix */}
          <div className="about-content-col">
            <SectionHeader
              number={about.sectionNumber}
              title={about.title}
            />

            <p className="about-text-lead">
              {about.paragraph1}
            </p>

            <p className="about-text-secondary">
              {about.paragraph2}
            </p>

            {/* Coach & Philosophy Highlight Quote */}
            {about.quote && (
              <div className="about-quote-box">
                <p className="about-quote-text">"{about.quote}"</p>
              </div>
            )}

            {/* Info Specification Grid */}
            <div className="about-spec-grid">
              {about.infoBlocks.map((block) => (
                <div key={block.label} className="spec-block">
                  <div className="spec-label">{block.label}</div>
                  <div className="spec-value">{block.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
