import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * EmotionalMessage Section
 * Full-screen deep emotional sequence: "Life will change... But as my brother."
 */
export const EmotionalMessage = () => {
  const { emotionalMessage } = tributeData;

  return (
    <section className="section-wrapper section-padding emotional-message-section" aria-label="An Unbreakable Bond">
      <div className="site-container">
        <div className="emotional-message-box">
          {/* Line by line progression */}
          <div className="message-lines-sequence">
            {emotionalMessage.lines.map((line, idx) => (
              <p
                key={idx}
                className={`message-flow-line reveal-blur delay-${(idx % 4) + 1}`}
              >
                "{line}"
              </p>
            ))}
          </div>

          {/* Climax Headline */}
          <div className="message-climax-box reveal-blur delay-3">
            <h2 className="message-climax-heading">
              {emotionalMessage.climaxHeadline}
            </h2>
          </div>

          {/* Tribute Echoes */}
          <div className="message-echoes-list">
            {emotionalMessage.tributeEchoes.map((echo, idx) => {
              const isBrother = echo.includes('brother');
              return (
                <p
                  key={idx}
                  className={`echo-item reveal-blur delay-${(idx % 3) + 1} ${isBrother ? 'echo-brother-highlight' : ''}`}
                >
                  {echo}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalMessage;
