import React, { useState } from 'react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * MemoriesArchive Section (Complete Redesign)
 * Asymmetric editorial photo archive with controlled card rotations, overlay typography,
 * full-width hero athlete card with travelling speed line, and emotional ending transition.
 */
export const MemoriesArchive = () => {
  const { memoriesArchive } = tributeData;
  const { heroCard, endingTransition } = memoriesArchive;

  return (
    <section id="memories-archive" className="section-wrapper section-padding archive-section" aria-label="Athletic Memories">
      {/* Watermark Background Number */}
      <div className="watermark-number">
        {memoriesArchive.numberWatermark}
      </div>

      <div className="site-container">
        {/* Section Header */}
        <div className="archive-header-wrap">
          <span className="editorial-label reveal-blur">
            {memoriesArchive.label}
          </span>

          <h2 className="archive-title reveal-blur delay-1">
            {memoriesArchive.titleLine1} <span className="title-accent-keep">{memoriesArchive.titleAccent}</span>
          </h2>

          <p className="archive-subtitle reveal-blur delay-2">
            {memoriesArchive.subtitle}
          </p>

          <div className="archive-header-divider reveal-blur delay-2" />
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="archive-editorial-grid">
          {memoriesArchive.items.map((item, idx) => (
            <div
              key={item.id}
              className={`archive-card ${item.gridClass} reveal-blur delay-${(idx % 3) + 1}`}
              style={{ '--desktop-rotate': `${item.rotation}deg` }}
            >
              {/* Card Media with Zoom Transition */}
              <div className="archive-card-media">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  objectPosition={item.objectPosition || "center top"}
                  fallbackTitle={item.title}
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="archive-card-overlay" />

              {/* Tiny Editorial Number Top-Right */}
              <div className="archive-card-num">
                {item.num}
              </div>

              {/* Information OVER Image at Bottom-Left */}
              <div className="archive-card-content">
                <span className="archive-card-year">{item.year}</span>
                <h3 className="archive-card-heading">{item.title}</h3>
                <p className="archive-card-desc">{item.description}</p>
                <div className="archive-hover-line" />
              </div>
            </div>
          ))}
        </div>

        {/* ====================================================================
           FINAL ATHLETE CARD (THE VISUAL HERO OF MEMORIES)
           ==================================================================== */}
        <div className="athlete-hero-card-container reveal-blur delay-2">
          <div className="athlete-hero-card">
            {/* Background Media */}
            <div className="athlete-hero-bg">
              <ImageWithFallback
                src={heroCard.image}
                alt={heroCard.imageAlt}
                loading="lazy"
                fallbackTitle="THE ATHLETE HERO"
              />
            </div>

            {/* Dark Gradients & Glow Layers */}
            <div className="athlete-hero-overlay" />
            <div className="athlete-hero-radial-glow" />

            {/* Bottom-Left Typography */}
            <div className="athlete-hero-content">
              <span className="athlete-hero-label">
                {heroCard.label}
              </span>

              <h2 className="athlete-hero-headline">
                {heroCard.headlineLead}<br />
                <span className="headline-accent">{heroCard.headlineAccent}</span>
              </h2>

              <p className="athlete-hero-p1">
                "{heroCard.p1}"
              </p>

              <div className="athlete-hero-lead-box">
                <p className="athlete-hero-p2">{heroCard.p2}</p>
                <p className="athlete-hero-highlight">{heroCard.pHighlight}</p>
                <p className="athlete-hero-p3">"{heroCard.p3}"</p>
              </div>
            </div>

            {/* Animated Travelling Speed Line */}
            <div className="athlete-travelling-line-wrap">
              <div className="athlete-travelling-line">
                <span className="speed-line-tag">{heroCard.speedLineText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
           MEMORY SECTION ENDING TRANSITION
           ==================================================================== */}
        <div className="archive-ending-transition">
          <span className="editorial-label reveal-blur">
            {endingTransition.label}
          </span>

          <h2 className="ending-transition-headline reveal-blur delay-1">
            {endingTransition.headline}
          </h2>

          <h3 className="ending-keep-statement reveal-blur delay-2">
            {endingTransition.keepStatement}
          </h3>

          <p className="ending-subtext reveal-blur delay-3">
            "{endingTransition.subtext}"
          </p>

          <div className="ending-watermark-rolemodel reveal-blur delay-4">
            {endingTransition.watermarkRoleModel}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesArchive;
