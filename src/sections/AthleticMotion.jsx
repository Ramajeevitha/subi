import React, { useState, useEffect } from 'react';
import { Timer, Zap, Heart, Target } from 'lucide-react';
import { tributeData } from '../data/tributeData';

/**
 * AthleticMotion Section
 * Visual movement telemetry symbolizing the relentless motion of an athlete:
 * Stopwatch simulation, speed trails, heartbeat pulse, and focus meter.
 */
export const AthleticMotion = () => {
  const { athleticMotion } = tributeData;
  const [stopwatch, setStopwatch] = useState({ min: 0, sec: 10, ms: 84 });

  // Live stopwatch millisecond simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStopwatch((prev) => {
        let newMs = prev.ms + 7;
        let newSec = prev.sec;
        let newMin = prev.min;

        if (newMs >= 100) {
          newMs = 0;
          newSec += 1;
        }
        if (newSec >= 60) {
          newSec = 0;
          newMin += 1;
        }

        return { min: newMin, sec: newSec, ms: newMs };
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const m = String(stopwatch.min).padStart(2, '0');
    const s = String(stopwatch.sec).padStart(2, '0');
    const ms = String(stopwatch.ms).padStart(2, '0');
    return `${m}:${s}:${ms}`;
  };

  return (
    <section className="section-wrapper section-padding motion-section" aria-label="Athletic Movement and Telemetry">
      <div className="site-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="intro-label reveal-blur">
            {athleticMotion.tag}
          </span>
          <h2 className="rolemodel-title reveal-blur delay-1" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.4rem)', marginBottom: 0 }}>
            MOTION <span>NEVER STOPPED.</span>
          </h2>
        </div>

        {/* 4 Kinetic Metric Cards */}
        <div className="motion-grid">
          {/* Stopwatch */}
          <div className="motion-card reveal-blur delay-1">
            <Timer size={22} color="var(--accent-primary)" style={{ marginBottom: '0.75rem' }} />
            <span className="motion-label">LIVE TRACK STOPWATCH</span>
            <div className="motion-value" style={{ fontFamily: 'var(--font-mono)' }}>
              {formatTime()}
            </div>
            <span className="motion-tag">START PROTOCOL</span>
          </div>

          {/* Speed */}
          <div className="motion-card reveal-blur delay-2">
            <Zap size={22} color="var(--accent-gold)" style={{ marginBottom: '0.75rem' }} />
            <span className="motion-label">ACCELERATION VECTOR</span>
            <div className="motion-value" style={{ letterSpacing: '0.15em' }}>
              → → → → →
            </div>
            <span className="motion-tag" style={{ color: 'var(--accent-gold)', background: 'rgba(255, 174, 0, 0.12)' }}>
              PEAK VELOCITY
            </span>
          </div>

          {/* Heartbeat Pulse */}
          <div className="motion-card reveal-blur delay-3">
            <Heart size={22} color="var(--accent-heart)" style={{ marginBottom: '0.75rem' }} />
            <span className="motion-label">CARDIAC ENDURANCE</span>
            <div className="motion-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="heartbeat-pulse-ring" />
              <span>178 BPM</span>
            </div>
            <span className="motion-tag" style={{ color: 'var(--accent-heart)', background: 'rgba(255, 46, 91, 0.12)' }}>
              STEADY PULSE
            </span>
          </div>

          {/* Focus */}
          <div className="motion-card reveal-blur delay-4">
            <Target size={22} color="var(--accent-cyan)" style={{ marginBottom: '0.75rem' }} />
            <span className="motion-label">MENTAL CALIBRATION</span>
            <div className="motion-value" style={{ color: 'var(--accent-cyan)' }}>
              100%
            </div>
            <span className="motion-tag" style={{ color: 'var(--accent-cyan)', background: 'rgba(0, 240, 255, 0.12)' }}>
              LOCKED IN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleticMotion;
