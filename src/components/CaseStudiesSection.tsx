import React, { useState } from 'react';
import { CASE_STUDIES } from '../config/content';
import type { ProjectCategory } from '../types';
import {
  ExternalLink,
  Lock,
  CheckCircle2,
  FolderGit2,
  ChevronDown,
  ChevronUp,
  ShieldCheck
} from 'lucide-react';
import './CaseStudiesSection.css';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(CASE_STUDIES[0].id);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-healthcare', label: 'AI Healthcare' },
    { id: 'backend-qa', label: 'Backend & QA' },
    { id: 'b2b-saas', label: 'B2B SaaS' },
    { id: 'crypto-xrpl', label: 'XRPL & Web3' },
    { id: 'demo-production', label: 'Demo Studio' }
  ];

  const filteredCases = CASE_STUDIES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedCaseId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-wrapper case-studies-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FolderGit2 size={14} className="accent-text" />
            <span>SELECTED WORK &amp; CASE STUDIES</span>
          </div>
          <h2 className="section-title">
            Selected work &amp; <span className="accent-text">technical experience.</span>
          </h2>
          <p className="section-subtitle">
            A closer look at the systems, workflows, and product problems I have worked on.
            Real engineering challenges, rigorous verification, and practical outcomes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="case-filter-bar">
          <div className="filter-pill-list" role="tablist" aria-label="Project categories">
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

        {/* Editorial Project List */}
        <div className="cases-list">
          {filteredCases.map((cs) => {
            const isExpanded = expandedCaseId === cs.id;

            return (
              <div
                key={cs.id}
                className={`case-card card-surface ${isExpanded ? 'case-expanded' : ''}`}
                id={`case-${cs.id}`}
              >
                {/* Collapsed / Always-Visible Card Overview */}
                <div
                  className="case-summary-row"
                  onClick={() => toggleExpand(cs.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(cs.id);
                    }
                  }}
                >
                  <div className="case-thumb-col">
                    <img
                      src={cs.thumbnail}
                      alt={cs.title}
                      className="case-thumbnail-img"
                      loading="lazy"
                    />
                    {cs.isNda && (
                      <span className="case-nda-badge font-mono">
                        <Lock size={10} />
                        <span>NDA</span>
                      </span>
                    )}
                  </div>

                  <div className="case-overview-col">
                    <div className="case-meta-line font-mono">
                      <span className="case-cat-label">{cs.categoryLabel}</span>
                      <span className="meta-sep">•</span>
                      <span className="case-role-label">{cs.role}</span>
                    </div>

                    <h3 className="case-title">{cs.title}</h3>
                    <p className="case-subtitle">{cs.subtitle}</p>

                    <div className="case-tags font-mono">
                      {cs.techStack.map((tech, idx) => (
                        <span key={idx} className="case-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="case-toggle-col">
                    <button
                      type="button"
                      className="case-expand-btn font-mono"
                      aria-label={isExpanded ? 'Collapse case study' : 'Expand technical details'}
                    >
                      <span>{isExpanded ? 'Collapse' : 'Technical Breakdown'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Deep Dive Panel */}
                {isExpanded && (
                  <div className="case-deep-dive">
                    <div className="deep-dive-grid">
                      {/* Problem & Objectives */}
                      <div className="dive-block">
                        <h4 className="dive-title font-mono">01 // THE TECHNICAL CHALLENGE</h4>
                        <p className="dive-text">{cs.problem}</p>

                        {cs.isNda && (
                          <div className="nda-callout font-mono">
                            <Lock size={13} className="accent-text" />
                            <span>Selected work under NDA — details available upon request.</span>
                          </div>
                        )}
                      </div>

                      {/* Work Completed */}
                      <div className="dive-block">
                        <h4 className="dive-title font-mono">02 // WORK COMPLETED</h4>
                        <ul className="dive-list">
                          {cs.workCompleted.map((item, idx) => (
                            <li key={idx} className="dive-list-item">
                              <span className="item-arrow font-mono">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Verifiable Outcomes */}
                      <div className="dive-block">
                        <h4 className="dive-title font-mono">03 // VERIFIABLE OUTCOMES</h4>
                        <ul className="dive-outcomes-list">
                          {cs.verifiableOutcomes.map((outcome, idx) => (
                            <li key={idx} className="outcome-item">
                              <CheckCircle2 size={15} className="accent-text check-icon" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Actions / Links */}
                    <div className="case-footer-bar">
                      <div className="footer-left font-mono">
                        <ShieldCheck size={14} className="accent-text" />
                        <span>Verified Project Record</span>
                      </div>

                      <div className="footer-right">
                        {cs.publicUrl && (
                          <a
                            href={cs.publicUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-lime btn-sm"
                          >
                            <span>Visit Public Deployment</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
