import React, { useState } from 'react';
import { Activity } from 'lucide-react';

/**
 * ImageWithFallback
 * Loads images gracefully with a shimmer skeleton, custom object-position,
 * and a robust athletic fallback graphic if missing or load errors occur.
 */
export const ImageWithFallback = ({
  src,
  alt = "Athlete Photo",
  className = "",
  objectPosition = "center",
  loading = "lazy",
  fallbackTitle = "OFFICIAL ATHLETE ARCHIVE",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`image-container ${loaded ? 'is-loaded' : 'is-loading'} ${className}`}>
      {!loaded && !hasError && <div className="image-skeleton" />}
      
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          style={{ objectPosition }}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      ) : (
        <div className="image-fallback-art">
          <Activity size={36} className="image-fallback-icon" />
          <span className="image-fallback-text">{fallbackTitle}</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
