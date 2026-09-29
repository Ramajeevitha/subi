import React from 'react';
import { Award, MapPin, Trophy } from 'lucide-react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';

/**
 * Achievements Section
 * Editorial honor roll with medals, competition titles, locations, and interactive hover states
 */
export const Achievements = () => {
  const { achievements } = athleteData;

  const getMedalBadge = (medalType, medalText) => {
    return (
      <div className={`medal-badge ${medalType.toLowerCase()}`}>
        <Trophy size={14} />
        <span>{medalText}</span>
      </div>
    );
  };

  return (
    <section id="achievements" className="section-wrapper section-padding achievements-section" aria-label="Career Achievements">
      <div className="site-container">
        <SectionHeader
          number={achievements.sectionNumber}
          title={achievements.title}
          subtitle={achievements.subtitle}
        />

        <div className="achievements-list">
          {achievements.items.map((item, index) => (
            <div
              key={`${item.year}-${item.competition}-${index}`}
              className={`achievement-card ${item.medalType.toLowerCase()}-card`}
            >
              {/* Year */}
              <div className="achievement-year">
                {item.year}
              </div>

              {/* Medal Badge */}
              <div className="achievement-medal-col">
                {getMedalBadge(item.medalType, item.medal)}
              </div>

              {/* Competition & Event */}
              <div className="achievement-main">
                <h3 className="achievement-title">{item.competition}</h3>
                <p className="achievement-event">{item.event}</p>
              </div>

              {/* Location & Highlight */}
              <div className="achievement-meta">
                <div className="achievement-location">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                {item.highlight && (
                  <span className="achievement-highlight-pill">{item.highlight}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
