import React, { useState } from 'react';
import { FAQ_ITEMS } from '../config/content';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './FaqSection.css';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // First 2 open by default

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="section-wrapper faq-section" id="faq">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow">
            <HelpCircle size={14} className="accent-text" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="section-title">
            Clear answers to <span className="accent-text">common questions.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about scopes, deliverables, timelines, and technical engagements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className={`faq-accordion-item card-surface ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="faq-question-btn"
                  onClick={() => toggleIndex(idx)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-icon-box">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="faq-answer-panel"
                  >
                    <p className="faq-answer-text">{item.answer}</p>
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
