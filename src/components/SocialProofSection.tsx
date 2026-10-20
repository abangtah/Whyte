import React from 'react';
import { SITE_METADATA } from '../config/content';
import { ShieldCheck, Lock, FileCheck2, Terminal, CheckCircle2 } from 'lucide-react';
import './SocialProofSection.css';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="section-wrapper social-proof-section" id="credibility">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <ShieldCheck size={14} className="accent-text" />
            <span>VERIFIABLE EVIDENCE &amp; INTEGRITY</span>
          </div>
          <h2 className="section-title">
            Trusted work. <span className="accent-text">Verifiable experience.</span>
          </h2>
          <p className="section-subtitle">
            I don&apos;t fabricate client quotes, invent customer logos, or claim partnerships without proof.
            Trust is earned through rigorous technical evidence, code artifacts, and concrete outcomes.
          </p>
        </div>

        {/* Deliverable Standards Grid */}
        <div className="standards-grid">
          <div className="standard-card card-surface">
            <div className="standard-icon-wrap">
              <Terminal size={20} className="accent-text" />
            </div>
            <h3 className="standard-title">100% Reproducible Test Vectors</h3>
            <p className="standard-desc">
              Every identified weakness is documented with exact reproduction commands (cURL, CLI flags,
              network throttling profiles), preventing endless developer debate over whether a bug exists.
            </p>
          </div>

          <div className="standard-card card-surface">
            <div className="standard-icon-wrap">
              <FileCheck2 size={20} className="accent-text" />
            </div>
            <h3 className="standard-title">Structured Actionable Memos</h3>
            <p className="standard-desc">
              Findings are classified by impact vs. likelihood, with concrete code remediation diffs ready
              for your engineers to review, approve, and merge into production.
            </p>
          </div>

          <div className="standard-card card-surface">
            <div className="standard-icon-wrap">
              <CheckCircle2 size={20} className="accent-text" />
            </div>
            <h3 className="standard-title">Pre-Flight Demo Verification</h3>
            <p className="standard-desc">
              We test critical user journeys under realistic network latency and simulate failure scenarios
              so live presentations to investors and hackathon judges don&apos;t fail unexpectedly.
            </p>
          </div>
        </div>

        {/* NDA & Confidentiality Assurance Banner */}
        <div className="nda-assurance-card card-surface">
          <div className="nda-icon-col">
            <Lock size={24} className="accent-text" />
          </div>
          <div className="nda-text-col">
            <h4 className="nda-title font-mono">CLIENT CONFIDENTIALITY ASSURANCE</h4>
            <p className="nda-body font-mono">
              {SITE_METADATA.ndaNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
