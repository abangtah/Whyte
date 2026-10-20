import React, { useEffect, useRef } from 'react';
import type { DemoVideo } from '../types';
import { X, Clock, Tag, ExternalLink, Terminal } from 'lucide-react';
import './VideoModal.css';

interface VideoModalProps {
  video: DemoVideo | null;
  onClose: () => void;
  onBookDemo: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onBookDemo }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!video) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  // Determine embed type
  const isYouTube = video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be');
  const isVimeo = video.videoUrl.includes('vimeo.com');
  const isDirectMp4 = video.videoUrl.endsWith('.mp4');

  // Helper for YouTube embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <div
      className="video-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="video-modal-container card-surface"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Modal Top Bar */}
        <div className="video-modal-header">
          <div className="video-header-meta">
            <span className="badge badge-neutral font-mono">{video.categoryLabel}</span>
            <span className="modal-duration font-mono">
              <Clock size={12} />
              <span>{video.duration}</span>
            </span>
          </div>
          <button
            type="button"
            className="video-modal-close"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close video player"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="video-player-frame">
          {isYouTube ? (
            <iframe
              src={getYouTubeEmbedUrl(video.videoUrl)}
              title={video.title}
              className="embed-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isVimeo ? (
            <iframe
              src={`https://player.vimeo.com/video/${video.videoUrl.split('/').pop()}?autoplay=1`}
              title={video.title}
              className="embed-iframe"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : isDirectMp4 ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              playsInline
              poster={video.thumbnail}
              className="html5-video"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            /* Interactive Simulated Technical Walkthrough Player */
            <div className="interactive-video-player">
              <div className="player-canvas-screen">
                <div className="player-hud-top font-mono">
                  <div className="hud-status">
                    <span className="pulse-green"></span>
                    <span>STUDIO WALKTHROUGH PLAYBACK // 60 FPS</span>
                  </div>
                  <div className="hud-time">00:01:24 / {video.duration}</div>
                </div>

                <div className="player-center-stage">
                  <div className="stage-diagram">
                    <Terminal size={32} className="accent-text mb-2" />
                    <h4 className="stage-title">{video.title}</h4>
                    <p className="stage-desc">{video.description}</p>
                    <div className="stage-tags">
                      {video.techStack.map((tech, idx) => (
                        <span key={idx} className="font-mono stage-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="player-hud-bottom font-mono">
                  <div className="timeline-track">
                    <div className="timeline-progress" style={{ width: '45%' }}></div>
                  </div>
                  <div className="hud-footer-line">
                    <span>TIMELINE: Hook [0:15] › Architecture [0:45] › Core Flow [1:30]</span>
                    <span className="accent-text">AUDIO SYNC: OK</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Info Footer */}
        <div className="video-modal-footer">
          <div className="video-footer-info">
            <h3 id="video-modal-title" className="video-modal-heading">{video.title}</h3>
            <p className="video-modal-text">{video.description}</p>
            {video.projectRelationship && (
              <div className="video-relationship font-mono">
                <Tag size={12} className="accent-text" />
                <span>Relationship: {video.projectRelationship}</span>
              </div>
            )}
          </div>

          <div className="video-footer-actions">
            {video.videoUrl && video.videoUrl.startsWith('http') && (
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>External Link</span>
                <ExternalLink size={13} />
              </a>
            )}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                onClose();
                onBookDemo();
              }}
            >
              <span>Request Similar Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
