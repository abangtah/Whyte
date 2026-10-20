import React, { useState } from 'react';
import { XRPL_SPECIALIST_DATA } from '../config/content';
import {
  ExternalLink,
  ShieldAlert,
  Wallet,
  ArrowRightLeft,
  Cpu,
  Bot,
  Layers,
  ArrowRight,
  Terminal,
  CheckCircle
} from 'lucide-react';
import './XrplSpecialistSection.css';

interface XrplSpecialistSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const XrplSpecialistSection: React.FC<XrplSpecialistSectionProps> = ({ onSelectService }) => {
  const [activeCapabilityIdx, setActiveCapabilityIdx] = useState(0);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Wallet size={18} className="accent-text" />;
      case 1:
        return <ArrowRightLeft size={18} className="accent-text" />;
      case 2:
        return <Cpu size={18} className="accent-text" />;
      case 3:
        return <Bot size={18} className="accent-text" />;
      case 4:
        return <Layers size={18} className="accent-text" />;
      default:
        return <Terminal size={18} className="accent-text" />;
    }
  };

  const handleAuditRequest = () => {
    onSelectService('XRPL / Web3 Testing');
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrapper xrpl-section" id="xrpl">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>XRPL &amp; WEB3 TECHNICAL TESTING</span>
          </div>
          <h2 className="section-title">
            Building on XRPL? <span className="accent-text">Let&apos;s test the parts that matter.</span>
          </h2>
          <p className="section-subtitle">
            {XRPL_SPECIALIST_DATA.supportingCopy}
          </p>
        </div>

        {/* Clear Scope Disclaimer Box */}
        <div className="xrpl-disclaimer-card">
          <div className="disclaimer-icon">
            <ShieldAlert size={20} className="accent-text" />
          </div>
          <div className="disclaimer-text">
            <span className="disclaimer-strong">Scope Clarity: </span>
            {XRPL_SPECIALIST_DATA.disclaimer}
          </div>
          <a
            href={XRPL_SPECIALIST_DATA.officialDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="xrpl-doc-link"
          >
            <span>Official XRPL Docs</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Capabilities Explorer: 2 Columns */}
        <div className="xrpl-capabilities-grid">
          {/* Left Column: Capability Selectors */}
          <div className="capability-nav-list" role="tablist" aria-label="XRPL Testing Pillars">
            {XRPL_SPECIALIST_DATA.capabilityPillars.map((pillar, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeCapabilityIdx === idx}
                className={`capability-nav-item ${activeCapabilityIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveCapabilityIdx(idx)}
              >
                <div className="cap-icon-box">{getPillarIcon(idx)}</div>
                <div className="cap-meta">
                  <span className="cap-title">{pillar.title}</span>
                  <span className="cap-count font-mono">{pillar.points.length} verification checks</span>
                </div>
                <ArrowRight size={16} className="cap-arrow" />
              </button>
            ))}
          </div>

          {/* Right Column: Active Inspection Checklist & Technical Vector */}
          <div className="capability-detail-panel card-surface">
            <div className="detail-panel-header">
              <div className="detail-tag font-mono">
                PILLAR 0{activeCapabilityIdx + 1} // INSPECTION DOMAIN
              </div>
              <h3 className="detail-title">
                {XRPL_SPECIALIST_DATA.capabilityPillars[activeCapabilityIdx].title}
              </h3>
            </div>

            <div className="detail-checklist">
              <span className="checklist-subhead font-mono">TEST SCENARIOS &amp; HAZARD CHECKS</span>
              <ul className="checklist-items">
                {XRPL_SPECIALIST_DATA.capabilityPillars[activeCapabilityIdx].points.map((pt, pIdx) => (
                  <li key={pIdx} className="checklist-item">
                    <CheckCircle size={15} className="accent-text check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Test Vector Specimen */}
            <div className="testnet-specimen-box font-mono">
              <div className="specimen-header">
                <Terminal size={13} className="accent-text" />
                <span>XRPL TESTNET HARNESS // STATUS SIMULATION</span>
              </div>
              <div className="specimen-code">
                <span className="code-dim">// Testing ledger failure response mapping:</span>{'\n'}
                <span className="code-key">input:</span> tx_blob [Payment: 25 XRP, seq: 104]{'\n'}
                <span className="code-warn">simulated_engine_result:</span> &quot;tecUNFUNDED_PAYMENT&quot;{'\n'}
                <span className="code-green">client_recovery:</span> mapped to UI prompt &quot;Balance below reserve limit (10 XRP base)&quot;
              </div>
            </div>

            <div className="detail-panel-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleAuditRequest}
              >
                <span>Request XRPL Application Review</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* "How I approach a technical review" 6-Step Workflow */}
        <div className="xrpl-process-wrapper">
          <div className="process-header-center">
            <span className="section-eyebrow">METHODICAL EXECUTION</span>
            <h3 className="process-section-title">How I approach a technical review</h3>
            <p className="process-section-sub">
              Reproducible, transparent findings that turn edge-case vulnerabilities into documented improvements.
            </p>
          </div>

          <div className="review-steps-grid">
            {XRPL_SPECIALIST_DATA.reviewSteps.map((step) => (
              <div key={step.step} className="review-step-card card-surface">
                <div className="step-num font-mono">{step.step}</div>
                <h4 className="step-card-title">{step.title}</h4>
                <p className="step-card-detail">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
