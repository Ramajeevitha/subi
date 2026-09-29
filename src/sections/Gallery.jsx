import React from 'react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';
import InfiniteSpiral from '../components/InfiniteSpiral';

/**
 * Gallery Section
 * 3D Infinite Spiral interactive photo archive
 */
export const Gallery = () => {
  const { gallery } = athleteData;

  return (
    <section id="gallery" className="section-wrapper section-padding" style={{ backgroundColor: '#070707' }} aria-label="Photo Gallery Archive">
      <div className="site-container">
        <SectionHeader
          number={gallery.sectionNumber}
          title={gallery.title}
          subtitle={gallery.subtitle}
        />

        {/* 3D Infinite Spiral Gallery */}
        <InfiniteSpiral items={gallery.images} />
      </div>
    </section>
  );
};

export default Gallery;
