import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * EmotionalLetter Section (Updated)
 * The definitive personal letter from Rama celebrating the 2014-2026 brotherhood,
 * ending with "YOUR FRIEND, FOREVER."
 */
export const EmotionalLetter = () => {
  const { letter } = tributeData;

  return (
    <section id="letter" className="section-wrapper letter-section" aria-label="A Letter From Your Friend">
      <div className="site-container">
        <div className="letter-paper-card reveal-blur">
          {/* Header Label */}
          <span className="letter-header-tag">
            FROM 2014 TO FOREVER
          </span>

          <h2 className="letter-title">
            {letter.heading}
          </h2>

          <div className="letter-salutation">
            {letter.recipientGreeting}
          </div>

          <div className="letter-body-paragraphs">
            {letter.paragraphs.map((para, idx) => {
              const isBrother = para.trim() === 'my brother.' || para.trim() === 'My non-blood brother.';
              const isShort = para.startsWith('My ') || para.startsWith('The ') || para.trim() === 'And now...';
              
              return (
                <p
                  key={idx}
                  className={`${isBrother ? 'brother-emphasis' : ''} ${isShort ? 'short-echo-line' : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {para}
                </p>
              );
            })}
          </div>

          {/* Signature Block (NO Rama heart, exactly "YOUR FRIEND, FOREVER.") */}
          <div className="letter-signature-block">
            <span className="letter-sign-off">{letter.signOff}</span>
            <div className="forever-signature-wrap">
              <span className="letter-signature-forever">{letter.signatureName}</span>
              <div className="forever-glow-underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalLetter;
