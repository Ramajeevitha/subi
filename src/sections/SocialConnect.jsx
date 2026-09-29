import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';
import { InstagramIcon, YoutubeIcon, LinkedinIcon, FacebookIcon } from '../components/Icons';

/**
 * SocialConnect Section
 * Dynamic social community cards with follower counts, channel links, and CTA banner
 */
export const SocialConnect = () => {
  const { socialConnect } = athleteData;

  const renderSocialIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'instagram': return <InstagramIcon size={26} />;
      case 'youtube': return <YoutubeIcon size={26} />;
      case 'linkedin': return <LinkedinIcon size={26} />;
      case 'facebook': return <FacebookIcon size={26} />;
      default: return <ArrowUpRight size={26} />;
    }
  };

  return (
    <section id="connect" className="section-wrapper section-padding connect-section" aria-label="Social Channels and Community">
      <div className="site-container">
        <SectionHeader
          number={socialConnect.sectionNumber}
          title={socialConnect.heading}
          subtitle={socialConnect.description}
        />

        {/* Social Platforms 4-Column Grid */}
        <div className="social-cards-grid">
          {socialConnect.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label={`Follow on ${social.name}`}
            >
              <div className="social-icon-bubble">
                {renderSocialIcon(social.icon)}
              </div>
              <h3 className="social-platform-name">{social.name}</h3>
              <span className="social-handle">{social.handle}</span>
              <div className="social-followers">{social.followers}</div>
              <span className="social-followers-label">Followers</span>
            </a>
          ))}
        </div>

        {/* Action Banner */}
        <div className="connect-cta-banner">
          <div className="cta-banner-text">
            <h3>BE PART OF THE ROAD TO VICTORY.</h3>
            <p>Get exclusive training breakdowns, live meet announcements, and athlete updates.</p>
          </div>
          <a
            href={socialConnect.primaryCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <span>{socialConnect.primaryCtaText}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
