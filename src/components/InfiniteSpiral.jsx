import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, X, Maximize2, MoveHorizontal } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import '../styles/infinite-spiral.css';

/**
 * InfiniteSpiral
 * High-performance 3D spiral gallery with auto-rotation, touch/mouse drag,
 * hover pause, responsive perspective scaling, and inspection modal.
 */
export const InfiniteSpiral = ({ items = [] }) => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const animFrameIdRef = useRef(null);

  // Handle window resizing for responsive 3D math
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute responsive 3D parameters
  const isMobile = windowWidth < 768;
  const isSmallMobile = windowWidth < 480;

  const radius = isSmallMobile ? 220 : isMobile ? 320 : 540;
  const heightStep = isSmallMobile ? 18 : isMobile ? 24 : 35;
  const cardCount = items.length || 1;
  const angleStep = (2 * Math.PI) / cardCount;

  // Auto-rotation loop
  useEffect(() => {
    const autoSpeed = isPaused || isHovered ? 0 : 0.22;

    const loop = () => {
      if (!isDraggingRef.current) {
        // Apply velocity decay
        if (Math.abs(velocityRef.current) > 0.01) {
          setRotation((prev) => prev + velocityRef.current);
          velocityRef.current *= 0.95;
        } else {
          velocityRef.current = 0;
          if (autoSpeed > 0) {
            setRotation((prev) => (prev + autoSpeed) % 360);
          }
        }
      }
      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isPaused, isHovered]);

  // Touch & Mouse Drag Handlers
  const handleDragStart = useCallback((clientX) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    lastXRef.current = clientX;
    startRotationRef.current = rotation;
    velocityRef.current = 0;
  }, [rotation]);

  const handleDragMove = useCallback((clientX) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - startXRef.current;
    const deltaFromLast = clientX - lastXRef.current;
    
    // Sensitivity factor
    const sensitivity = 0.35;
    setRotation(startRotationRef.current + deltaX * sensitivity);
    
    velocityRef.current = deltaFromLast * 0.25;
    lastXRef.current = clientX;
  }, []);

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Mouse Events
  const onMouseDown = (e) => {
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  // Touch Events
  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      handleDragStart(e.touches[0].clientX);
    }
  };

  const onTouchMove = (e) => {
    if (e.touches.length === 1) {
      handleDragMove(e.touches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  const rotateStep = (direction) => {
    const step = (360 / cardCount) * direction;
    setRotation((prev) => prev + step);
  };

  return (
    <div className="spiral-gallery-wrapper">
      {/* 3D Interactive Viewport */}
      <div
        ref={containerRef}
        className="spiral-viewport"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={() => {
          onMouseUp();
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="3D Infinite Spiral Gallery"
      >
        <div className="spiral-world">
          {items.map((item, index) => {
            // Calculate 3D cylindrical spiral positioning
            const currentAngle = (rotation * (Math.PI / 180)) + (index * angleStep);
            
            // X, Y, Z coordinates
            const x = Math.sin(currentAngle) * radius;
            const z = Math.cos(currentAngle) * radius - (radius * 0.4);
            const y = (index - (cardCount - 1) / 2) * heightStep * Math.sin(currentAngle * 0.5);

            // Card face rotation angle in degrees
            const rotateYDeg = -(currentAngle * (180 / Math.PI)) + 90;
            
            // Calculate scale & opacity based on Z depth
            const normalizedZ = (z + radius) / (2 * radius);
            const scale = Math.max(0.65, Math.min(1.05, 0.7 + normalizedZ * 0.35));
            const opacity = Math.max(0.35, Math.min(1, 0.4 + normalizedZ * 0.6));
            const isFrontFacing = z > -radius * 0.2;

            return (
              <div
                key={item.id || index}
                className="spiral-card"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateYDeg}deg) scale(${scale})`,
                  opacity: opacity,
                  pointerEvents: isFrontFacing ? 'auto' : 'none',
                  zIndex: Math.round(z + 1000)
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalItem(item);
                }}
                role="button"
                tabIndex={isFrontFacing ? 0 : -1}
                aria-label={`View photo: ${item.title}`}
              >
                <div className="spiral-card-inner">
                  <div className="spiral-card-media">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt || item.title}
                      loading="lazy"
                      fallbackTitle={item.title}
                    />
                  </div>
                  <div className="spiral-card-overlay">
                    {item.category && (
                      <span className="spiral-card-badge">{item.category}</span>
                    )}
                    <h3 className="spiral-card-title">{item.title}</h3>
                    {item.date && (
                      <span className="spiral-card-date">{item.date}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spiral Controls Bar */}
      <div className="spiral-controls">
        <div className="spiral-hint">
          <MoveHorizontal size={16} />
          <span>Drag or swipe to rotate 3D spiral</span>
        </div>

        <div className="spiral-btn-group">
          <button
            className="spiral-ctrl-btn"
            onClick={() => rotateStep(-1)}
            aria-label="Rotate Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="spiral-ctrl-btn"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play rotation" : "Pause rotation"}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>

          <button
            className="spiral-ctrl-btn"
            onClick={() => rotateStep(1)}
            aria-label="Rotate Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Lightbox / Card Detail Modal */}
      {activeModalItem && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close photo preview"
            >
              <X size={22} />
            </button>

            <div className="gallery-modal-image-wrap">
              <ImageWithFallback
                src={activeModalItem.src}
                alt={activeModalItem.alt || activeModalItem.title}
                loading="eager"
              />
            </div>

            <div className="gallery-modal-info">
              <div className="gallery-modal-text">
                <span className="spiral-card-badge">{activeModalItem.category}</span>
                <h3>{activeModalItem.title}</h3>
                <p>{activeModalItem.alt || "Official athlete action capture."} • {activeModalItem.date}</p>
              </div>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={() => setActiveModalItem(null)}
              >
                INQUIRE PHOTO USAGE
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteSpiral;
