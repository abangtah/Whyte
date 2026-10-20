import React, { useState } from 'react';
import { DEMO_VIDEOS } from '../config/content';
import type { DemoVideo, VideoCategory } from '../types';
import { VideoModal } from './VideoModal';
import {
  Play,
  Clock,
  ArrowRight,
  Video as VideoIcon,
  Sparkles
} from 'lucide-react';
import './DemoStudioSection.css';

interface DemoStudioSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const DemoStudioSection: React.FC<DemoStudioSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('all');
  const [activeModalVideo, setActiveModalVideo] = useState<DemoVideo | null>(null);

  const categories: { id: VideoCategory; label: string }[] = [
    { id: 'all', label: 'All Videos' },
    { id: 'walkthroughs', label: 'Product Walkthroughs' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'crypto-web3', label: 'Crypto & Web3' },
    { id: 'technical-demos', label: 'Technical Demos' },
    { id: 'launch-pitch', label: 'Launch & Pitch' },
    { id: 'editing-motion', label: 'Editing & Motion' }
  ];

  const filteredVideos = DEMO_VIDEOS.filter((video) => {
    if (selectedCategory === 'all') return true;
    return video.category === selectedCategory;
  });

  const handleCtaClick = () => {
    onSelectService('Product Demo Video');
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrapper demo-studio-section" id="demo-studio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <VideoIcon size={14} className="accent-text" />
            <span>DEMO STUDIO</span>
          </div>
          <h2 className="section-title">
            Products are built in code.{' '}
            <span className="accent-text">Their value should be clear on screen.</span>
          </h2>
          <p className="section-subtitle">
            Walkthroughs, technical screen recordings, and edited product presentations crafted
            to capture investor attention, guide hackathon judges, and convert prospective customers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="demo-filter-bar">
          <div className="filter-pill-list" role="tablist" aria-label="Demo video categories">
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

        {/* Videos Responsive Grid */}
        <div className="demo-videos-grid">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="video-card card-surface"
              onClick={() => setActiveModalVideo(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalVideo(video);
                }
              }}
              aria-label={`Play demo: ${video.title}`}
            >
              {/* Thumbnail Container */}
              <div className="video-thumb-wrap">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumb-img"
                  loading="lazy"
                />
                <div className="thumb-gradient-overlay"></div>

                {/* Duration Badge */}
                <span className="thumb-duration font-mono">
                  <Clock size={11} />
                  <span>{video.duration}</span>
                </span>

                {/* Play Button Overlay */}
                <div className="play-button-circle">
                  <Play size={18} fill="#090B0F" className="play-icon" />
                </div>

                {/* Category Pill */}
                <span className="thumb-category font-mono">
                  {video.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div className="video-card-body">
                <h3 className="video-card-title">{video.title}</h3>
                <p className="video-card-desc">{video.description}</p>

                {/* Tech Stack Tags */}
                <div className="video-tech-tags font-mono">
                  {video.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Pitch & CTA Banner */}
        <div className="demo-cta-banner card-surface">
          <div className="cta-banner-content">
            <span className="banner-eyebrow font-mono">
              <Sparkles size={14} className="accent-text" />
              <span>BESPOKE DEMO PRODUCTION</span>
            </span>
            <h3 className="banner-title">Need a demo video for your product?</h3>
            <p className="banner-desc">
              Whether you need a 90-second hackathon submission cut, an investor deck walkthrough,
              or a high-converting website hero video, I handle scriptwriting, recording, pacing, and editing.
            </p>
          </div>
          <div className="cta-banner-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleCtaClick}
            >
              <span>Let&apos;s Build Your Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Video Modal Player */}
      <VideoModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
        onBookDemo={handleCtaClick}
      />
    </section>
  );
};
