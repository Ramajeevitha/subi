import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * MoreThanAFriend Section
 * Full-screen cinematic statement: "YOU ARE MORE THAN A FRIEND. YOU ARE MY NON-BLOOD BROTHER."
 */
export const MoreThanAFriend = () => {
  const { moreThanAFriend } = tributeData;

  return (
    <section id="more-than-a-friend" className="section-wrapper section-padding more-than-friend-section" aria-label="More Than A Friend Tribute">
      <div className="site-container">
        <div className="friend-statement-container">
          <span className="intro-label reveal-blur">
            {moreThanAFriend.label}
          </span>

          <h2 className="friend-huge-title reveal-blur delay-1">
            <span>{moreThanAFriend.headingLine1}</span><br />
            <span>{moreThanAFriend.headingLine2}</span><br />
            <span className="accent-glow">{moreThanAFriend.headingLine3}</span>
          </h2>

          <div className="brother-reveal-box reveal-blur delay-2">
            <h3 className="brother-reveal-title">
              {moreThanAFriend.revealStatement}
            </h3>
          </div>

          <div className="friend-paragraph-box reveal-blur delay-3">
            <p className="friend-quote-line">
              "{moreThanAFriend.paragraphLine1}"
            </p>
            <p className="friend-quote-body" style={{ whiteSpace: 'pre-line' }}>
              {moreThanAFriend.paragraphLine2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanAFriend;
