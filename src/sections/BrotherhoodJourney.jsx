import React from 'react';
import { ArrowRight, Bus, Compass, HeartHandshake, School, Sparkles, Users } from 'lucide-react';
import { tributeData } from '../data/tributeData';

/**
 * BrotherhoodJourney Section
 * "FROM CLASSMATES TO BROTHERS." — 2014 to 2026 timeline with bus ride speed-line animations and typography evolution
 */
export const BrotherhoodJourney = () => {
  const { brotherhoodJourney } = tributeData;

  const getChapterIcon = (id) => {
    switch (id) {
      case '2014': return <School size={20} />;
      case 'neighbour': return <Compass size={20} />;
      case '11th': return <Users size={20} />;
      case 'bus': return <Bus size={20} />;
      case '12th': return <HeartHandshake size={20} />;
      case 'now': return <Sparkles size={20} />;
      default: return <Users size={20} />;
    }
  };

  return (
    <section id="our-journey" className="section-wrapper section-padding brotherhood-journey-section" aria-label="Our Journey from 2014 to Forever">
      <div className="site-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3.5rem, 7vw, 6rem)' }}>
          <span className="intro-label reveal-blur">OUR JOURNEY • 2014 → 2026 → FOREVER</span>
          <h2 className="rolemodel-title reveal-blur delay-1" style={{ marginBottom: 0 }}>
            FROM CLASSMATES <span>TO BROTHERS.</span>
          </h2>
        </div>

        {/* Timeline Grid (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="brotherhood-timeline-grid">
          {brotherhoodJourney.timeline.map((step, idx) => (
            <div
              key={step.id}
              className={`brotherhood-card reveal-blur delay-${(idx % 3) + 1} ${step.id === 'now' ? 'highlight-now-card' : ''}`}
            >
              {/* Animated Road Lines for Bus Rides */}
              {step.hasRoadAnim && (
                <div className="bus-speed-lines-wrap">
                  <div className="bus-road-dash dash-1" />
                  <div className="bus-road-dash dash-2" />
                  <div className="bus-road-dash dash-3" />
                </div>
              )}

              <div className="brotherhood-card-header">
                <span className="brotherhood-badge">{step.badge}</span>
                <span className="brotherhood-year">{step.year}</span>
              </div>

              <div className="brotherhood-icon-bubble">
                {getChapterIcon(step.id)}
              </div>

              <h3 className="brotherhood-title">{step.title}</h3>
              <p className="brotherhood-lead">"{step.lead}"</p>
              <p className="brotherhood-story">{step.story}</p>

              <div className="brotherhood-tag-pill">
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Large Typography Evolution Transition: FRIEND → BEST FRIEND → BROTHER */}
        <div className="evolution-transition-wrap reveal-blur delay-2">
          <div className="evolution-step">
            <span className="evolution-label">01</span>
            <span className="evolution-word">FRIEND</span>
          </div>
          <ArrowRight size={28} className="evolution-arrow" />
          <div className="evolution-step">
            <span className="evolution-label">02</span>
            <span className="evolution-word word-gold">BEST FRIEND</span>
          </div>
          <ArrowRight size={28} className="evolution-arrow" />
          <div className="evolution-step">
            <span className="evolution-label">03</span>
            <span className="evolution-word word-accent">BROTHER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrotherhoodJourney;
