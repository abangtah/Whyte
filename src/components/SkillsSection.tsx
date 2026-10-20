import React, { useState } from 'react';
import { SKILLS_CATEGORIES } from '../config/content';
import type { SkillProficiency } from '../types';
import {
  Code2,
  Cpu,
  ShieldCheck,
  Coins,
  Video,
  Wrench,
  CheckCircle2,
  Clock
} from 'lucide-react';
import './SkillsSection.css';

export const SkillsSection: React.FC = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 size={18} className="accent-text" />;
      case 1:
        return <Cpu size={18} className="accent-text" />;
      case 2:
        return <ShieldCheck size={18} className="accent-text" />;
      case 3:
        return <Coins size={18} className="accent-text" />;
      case 4:
        return <Video size={18} className="accent-text" />;
      case 5:
        return <Wrench size={18} className="accent-text" />;
      default:
        return <Code2 size={18} className="accent-text" />;
    }
  };

  const getLevelBadge = (level: SkillProficiency) => {
    switch (level) {
      case 'Experienced with':
        return <span className="badge badge-verified font-mono">Experienced with</span>;
      case 'Used in projects':
        return <span className="badge badge-neutral font-mono">Used in projects</span>;
      case 'Currently developing':
        return <span className="badge badge-low font-mono">Currently developing</span>;
    }
  };

  return (
    <section className="section-wrapper skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Technical depth. <span className="accent-text">Practical judgment.</span>
          </h2>
          <p className="section-subtitle">
            Categorized capabilities and genuine experience levels. No fabricated percentages or meaningless
            skill bars—only verifiable tools, workflows, and stacks used across development and testing.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="skills-tab-bar" role="tablist" aria-label="Skill domains">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeTabIdx === idx}
              className={`skills-tab-btn ${activeTabIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveTabIdx(idx)}
            >
              <div className="tab-icon-wrap">{getCategoryIcon(idx)}</div>
              <span className="tab-label">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Domain Panel */}
        <div className="skills-display-panel card-surface">
          <div className="panel-top-row">
            <div className="panel-meta-title">
              <span className="domain-index font-mono">DOMAIN 0{activeTabIdx + 1}</span>
              <h3 className="domain-heading">{SKILLS_CATEGORIES[activeTabIdx].title}</h3>
            </div>
            <p className="domain-desc font-mono">
              {SKILLS_CATEGORIES[activeTabIdx].description}
            </p>
          </div>

          <div className="skills-items-grid">
            {SKILLS_CATEGORIES[activeTabIdx].skills.map((skill, sIdx) => (
              <div key={sIdx} className="skill-item-card">
                <div className="skill-item-top">
                  <h4 className="skill-name">{skill.name}</h4>
                  {getLevelBadge(skill.level)}
                </div>
                {skill.note && (
                  <p className="skill-item-note font-mono">{skill.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* Standards Footer */}
          <div className="skills-panel-footer">
            <div className="legend-strip font-mono">
              <span className="legend-label">STATUS KEY:</span>
              <span className="legend-item text-verified">
                <CheckCircle2 size={12} />
                <span>Experienced with (Primary consulting workflows)</span>
              </span>
              <span className="legend-item text-muted">
                <CheckCircle2 size={12} />
                <span>Used in projects (Applied in live apps)</span>
              </span>
              <span className="legend-item text-low">
                <Clock size={12} />
                <span>Currently developing (Active technical exploration)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
