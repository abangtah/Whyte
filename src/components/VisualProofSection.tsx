import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../config/content';
import type { GalleryImage, ImageGalleryCategory } from '../types';
import { LightboxModal } from './LightboxModal';
import { Eye, Maximize2, Tag } from 'lucide-react';
import './VisualProofSection.css';

export const VisualProofSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageGalleryCategory>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryImage | null>(null);

  const categories: { id: ImageGalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'xrpl', label: 'XRPL Workflows' },
    { id: 'audit-reports', label: 'Audit Reports' },
    { id: 'architecture', label: 'Technical Architecture' },
    { id: 'storyboard', label: 'Video Storyboards' }
  ];

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (selectedCategory === 'all') return true;
    return img.category === selectedCategory;
  });

  const currentIndex = activeLightboxImage
    ? filteredImages.findIndex((img) => img.id === activeLightboxImage.id)
    : 0;

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % filteredImages.length;
    setActiveLightboxImage(filteredImages[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setActiveLightboxImage(filteredImages[prevIdx]);
  };

  return (
    <section className="section-wrapper visual-proof-section" id="inside-the-work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Eye size={14} className="accent-text" />
            <span>VISUAL EVIDENCE</span>
          </div>
          <h2 className="section-title">
            Inside the <span className="accent-text">work.</span>
          </h2>
          <p className="section-subtitle">
            A visual record of technical diagrams, audit matrices, ledger sequence explorers,
            telemetry chaos runs, and demo storyboards produced during consulting engagements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="gallery-filter-bar">
          <div className="filter-pill-list" role="tablist" aria-label="Visual proof categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item-card card-surface"
              onClick={() => setActiveLightboxImage(image)}
              role="button"
              tabIndex={0}
              aria-label={`View artifact: ${image.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLightboxImage(image);
                }
              }}
            >
              <div className="gallery-img-wrap">
                <img
                  src={image.imageUrl}
                  alt={image.altText}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="expand-indicator">
                    <Maximize2 size={16} />
                    <span className="font-mono">EXPAND ARTIFACT</span>
                  </div>
                </div>

                <span className="gallery-category-tag font-mono">
                  {image.categoryLabel}
                </span>
              </div>

              <div className="gallery-caption-box">
                <h3 className="gallery-item-title">{image.title}</h3>
                <p className="gallery-item-caption">{image.caption}</p>
                {image.relatedProjectName && (
                  <div className="gallery-item-meta font-mono">
                    <Tag size={11} className="accent-text" />
                    <span>{image.relatedProjectName}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      <LightboxModal
        image={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
        totalImages={filteredImages.length}
      />
    </section>
  );
};
