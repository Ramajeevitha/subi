import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { tributeData } from '../data/tributeData';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * PhotoMemoryWall Section
 * Physical photo wall feel with masonry-style varied card sizing and lightbox inspection
 */
export const PhotoMemoryWall = () => {
  const { gallery } = tributeData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="section-wrapper section-padding gallery-section" aria-label="Photo Memory Wall">
      <div className="site-container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <span className="intro-label reveal-blur">ARCHIVE OF MOMENTS</span>
          <h2 className="rolemodel-title reveal-blur delay-1" style={{ marginBottom: '0.75rem' }}>
            THE MOMENTS <span>I'D KEEP.</span>
          </h2>
          <p className="intro-paragraph reveal-blur delay-2" style={{ margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-tertiary)' }}>
            {gallery.subtitle}
          </p>
        </div>

        {/* Masonry Memory Grid */}
        <div className="gallery-masonry-grid">
          {gallery.items.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-photo-card size-${item.size} reveal-blur delay-${(index % 4) + 1}`}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              aria-label={`View photo memory: ${item.title}`}
            >
              <div className="gallery-photo-media">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  fallbackTitle={item.title}
                />
              </div>

              <div className="gallery-photo-overlay">
                <span className="gallery-photo-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="photo-modal-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="photo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="photo-modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close memory photo"
            >
              <X size={20} />
            </button>

            <div className="photo-modal-img-wrap">
              <ImageWithFallback
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                loading="eager"
              />
            </div>

            <div className="photo-modal-footer">
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>
                  {selectedPhoto.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                  {selectedPhoto.alt}
                </p>
              </div>
              <span className="intro-label" style={{ margin: 0 }}>
                SUBHICKSHUN NAREN
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoMemoryWall;
