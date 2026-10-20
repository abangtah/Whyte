import React from 'react';
import { DIFFERENTIATORS, SITE_METADATA } from '../config/content';
import { Crosshair, Target, Presentation, CheckCircle, Quote } from 'lucide-react';
import './DifferentiatorsSection.css';

export const DifferentiatorsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Crosshair size={22} className="accent-text" />;
      case 1:
        return <Target size={22} className="accent-text" />;
      case 2:
        return <Presentation size={22} className="accent-text" />;
      case 3:
        return <CheckCircle size={22} className="accent-text" />;
      default:
        return <Crosshair size={22} className="accent-text" />;
    }
  };

  return (
    <section className="section-wrapper diff-section" id="why-diana">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>CONSULTING PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            More than a <span className="accent-text">code review.</span>
          </h2>
          <p className="section-subtitle">
            Most reviews skim code style or list obvious lint issues. I evaluate whether the application
            survives hostile real-world conditions, network chaos, and high-pressure investor demos.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="diff-grid">
          {DIFFERENTIATORS.map((item, idx) => (
            <div key={idx} className="diff-card card-surface">
              <div className="diff-card-top">
                <span className="diff-number font-mono">{item.number}</span>
                <div className="diff-icon-box">{getIcon(idx)}</div>
              </div>
              <h3 className="diff-title">{item.title}</h3>
              <p className="diff-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Brand Manifesto Quote Banner */}
        <div className="manifesto-card card-surface">
          <div className="manifesto-icon-wrap">
            <Quote size={28} className="accent-text" />
          </div>
          <div className="manifesto-content">
            <blockquote className="manifesto-quote">
              &ldquo;{SITE_METADATA.manifesto}&rdquo;
            </blockquote>
            <cite className="manifesto-author font-mono">
              — {SITE_METADATA.name} // Independent Technical Consultant
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
