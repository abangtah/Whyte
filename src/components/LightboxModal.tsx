import React, { useEffect } from 'react';
import type { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import './LightboxModal.css';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages
}) => {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [image, onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="lightbox-bar">
          <div className="lightbox-counter font-mono">
            <span>IMAGE {currentIndex + 1} OF {totalImages}</span>
            <span className="badge badge-neutral font-mono">{image.categoryLabel}</span>
          </div>

          <div className="lightbox-actions">
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Center Stage Image with Navigation Chevrons */}
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav-btn prev-btn"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="lightbox-media-wrap">
            <img
              src={image.imageUrl}
              alt={image.altText}
              className="lightbox-img"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav-btn next-btn"
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div className="lightbox-caption-bar">
          <div className="caption-content">
            <h4 className="caption-title">{image.title}</h4>
            <p className="caption-text">{image.caption}</p>
          </div>
          {image.relatedProjectName && (
            <div className="caption-project-tag font-mono">
              <Tag size={12} className="accent-text" />
              <span>{image.relatedProjectName}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
