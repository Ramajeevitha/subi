import React from 'react';
import { tributeData } from '../data/tributeData';
import CountUp from '../components/CountUp';

/**
 * AthleteStats Section
 * 4-column desktop / 2-column mobile emotional stats with number counter animations
 */
export const AthleteStats = () => {
  const { stats } = tributeData;

  return (
    <section id="stats" className="section-wrapper stats-section" aria-label="Athletic Career Statistics and Tributes">
      <div className="site-container" style={{ padding: 'clamp(3rem, 6vw, 5rem) var(--section-padding-x)' }}>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`stat-item-card reveal-blur delay-${idx + 1} ${stat.isEmotional ? 'emotional-card' : ''}`}
            >
              <div className="stat-number-line">
                {stat.isEmotional ? (
                  <span className="stat-num-val">{stat.displayVal}</span>
                ) : (
                  <CountUp
                    end={stat.number}
                    duration={2000}
                    className="stat-num-val"
                  />
                )}
                {stat.suffix && <span className="stat-num-suffix">{stat.suffix}</span>}
              </div>

              <h3 className="stat-title">{stat.label}</h3>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteStats;
