import React from 'react';
import { PROCESS_STEPS } from '../config/content';
import {
  HelpCircle,
  Search,
  ListFilter,
  CheckCircle,
  FileCheck,
  Shield,
  CreditCard,
  Clock,
  ArrowRight
} from 'lucide-react';
import './ProcessSection.css';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <HelpCircle size={20} className="accent-text" />;
      case 1:
        return <Search size={20} className="accent-text" />;
      case 2:
        return <ListFilter size={20} className="accent-text" />;
      case 3:
        return <CheckCircle size={20} className="accent-text" />;
      default:
        return <Search size={20} className="accent-text" />;
    }
  };

  return (
    <section className="section-wrapper process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>ENGAGEMENT WORKFLOW</span>
          </div>
          <h2 className="section-title">
            A clear process. <span className="accent-text">No guesswork.</span>
          </h2>
          <p className="section-subtitle">
            Consulting engagements must be predictable, transparent, and respectful of your team&apos;s time.
            Here is how we transition from initial inquiry to actionable deliverables.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="process-timeline-grid">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="process-step-card card-surface">
              <div className="step-top-line">
                <span className="step-badge font-mono">{step.step}</span>
                <div className="step-icon-wrap">{getStepIcon(idx)}</div>
              </div>
              <h3 className="step-card-heading">{step.title}</h3>
              <span className="step-tagline font-mono">{step.tagline}</span>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Terms of Engagement / Transparency Grid */}
        <div className="terms-grid">
          <div className="term-box card-surface">
            <div className="term-icon-line">
              <FileCheck size={18} className="accent-text" />
              <h4 className="term-heading">Scope Boundaries</h4>
            </div>
            <p className="term-desc">
              Audits and fix sprints are scoped explicitly before kickoff. An audit report delivers diagnostic
              evidence and remediation roadmaps; implementation sprints are contracted separately so you retain full control.
            </p>
          </div>

          <div className="term-box card-surface">
            <div className="term-icon-line">
              <Shield size={18} className="accent-text" />
              <h4 className="term-heading">Confidentiality &amp; NDA</h4>
            </div>
            <p className="term-desc">
              Your source code, proprietary algorithms, and trade secrets remain strictly confidential. Mutual non-disclosure
              agreements (NDAs) are happily signed before repository invitations are accepted.
            </p>
          </div>

          <div className="term-box card-surface">
            <div className="term-icon-line">
              <CreditCard size={18} className="accent-text" />
              <h4 className="term-heading">Milestone Payments</h4>
            </div>
            <p className="term-desc">
              Engagements operate on clear milestone invoices (typically 50% upon contract agreement and 50% upon
              audit report handover or sprint verification) via direct bank wire, Stripe, or stablecoin escrow.
            </p>
          </div>

          <div className="term-box card-surface">
            <div className="term-icon-line">
              <Clock size={18} className="accent-text" />
              <h4 className="term-heading">Turnaround Timelines</h4>
            </div>
            <p className="term-desc">
              Hackathon readiness audits typically complete in 48 to 72 hours for early-stage prototypes. Urgent bug-fix
              sprints can be prioritized based on scheduled presentation or submission deadlines.
            </p>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="process-bottom-cta">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={onStartProject}
          >
            <span>Start an Engagement</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
