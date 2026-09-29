import React from 'react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';

/**
 * Performance Section
 * High-tech performance telemetry with metric benchmarks, progress gauges, and radar notes
 */
export const Performance = () => {
  const { performance } = athleteData;

  return (
    <section id="performance" className="section-wrapper section-padding performance-section" aria-label="Performance Metrics">
      <div className="site-container">
        <SectionHeader
          number={performance.sectionNumber}
          title={performance.title}
          subtitle={performance.subtitle}
        />

        <div className="performance-grid">
          {performance.metrics.map((metric, index) => (
            <div key={metric.event} className="metric-card">
              <div>
                <div className="metric-header">
                  <h3 className="metric-event">{metric.event}</h3>
                  <span className="metric-category">{metric.category}</span>
                </div>

                <div className="metric-value-box">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-benchmark">{metric.benchmark}</div>
                </div>
              </div>

              <div>
                {/* Visual Benchmark Gauge Bar */}
                <div className="metric-bar-wrap" role="progressbar" aria-valuenow={metric.percentage} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="metric-bar-fill"
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
                <div className="metric-note">{metric.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
