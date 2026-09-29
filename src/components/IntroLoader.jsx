import React, { useState, useEffect } from 'react';

/**
 * IntroLoader
 * Athletic starter countdown: "READY?" -> "SET." -> "GO." -> Reveal website
 */
export const IntroLoader = ({ onComplete }) => {
  const [step, setStep] = useState(0); // 0: READY?, 1: SET., 2: GO., 3: Done
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(3);
      if (onComplete) onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 900);   // SET.
    const t2 = setTimeout(() => setStep(2), 1800);  // GO.
    const t3 = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setStep(3);
        if (onComplete) onComplete();
      }, 700);
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (step >= 3) return null;

  return (
    <div className={`intro-loader ${isFading ? 'is-hidden' : ''}`} role="status" aria-label="Starting countdown">
      <div className="intro-loader-content">
        <div className="loader-track-line" />

        {step === 0 && (
          <div className="loader-word word-ready">READY?</div>
        )}
        {step === 1 && (
          <div className="loader-word word-set">SET.</div>
        )}
        {step === 2 && (
          <div className="loader-word word-go">GO.</div>
        )}

        <div className="loader-subtitle">
          A TRIBUTE TO SUBHICKSHUN NAREN
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
