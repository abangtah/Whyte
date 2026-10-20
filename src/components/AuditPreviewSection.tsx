import React, { useState } from 'react';
import { SAMPLE_AUDIT_FINDINGS } from '../config/content';
import type { AuditFinding, AuditSeverity } from '../types';
import {
  Filter,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronRight,
  Code2,
  Copy,
  Check
} from 'lucide-react';
import './AuditPreviewSection.css';

export const AuditPreviewSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | AuditSeverity>('all');
  const [activeFinding, setActiveFinding] = useState<AuditFinding>(SAMPLE_AUDIT_FINDINGS[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const filteredFindings = SAMPLE_AUDIT_FINDINGS.filter((finding) => {
    if (selectedFilter === 'all') return true;
    return finding.severity === selectedFilter;
  });

  const getSeverityBadgeClass = (sev: AuditSeverity) => {
    switch (sev) {
      case 'critical':
        return 'badge-critical';
      case 'high':
        return 'badge-high';
      case 'medium':
        return 'badge-medium';
      case 'low':
        return 'badge-low';
    }
  };

  const getSeverityIcon = (sev: AuditSeverity) => {
    switch (sev) {
      case 'critical':
      case 'high':
        return <AlertTriangle size={15} />;
      case 'medium':
      case 'low':
        return <Info size={15} />;
    }
  };

  const handleCopyRemediation = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="section-wrapper audit-preview-section" id="audit-preview">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>INTERACTIVE REPORT SPECIMEN</span>
          </div>
          <h2 className="section-title">
            Here&apos;s what a useful <span className="accent-text">technical review looks like.</span>
          </h2>
          <p className="section-subtitle">
            Audits must be reproducible, prioritized, and actionable. Below is an interactive specimen
            demonstrating the structure, evidence, and remediation guidance delivered in a typical review.
          </p>
        </div>

        {/* Specimen Notice */}
        <div className="specimen-notice-bar font-mono">
          <div className="notice-left">
            <span className="notice-badge">ILLUSTRATIVE AUDIT SPECIMEN</span>
            <span className="notice-text">Hypothetical application dataset // Confidential client audits remain protected</span>
          </div>
          <div className="notice-stats">
            <span>TOTAL ISSUES: {SAMPLE_AUDIT_FINDINGS.length}</span>
            <span>•</span>
            <span className="text-critical">1 CRITICAL</span>
            <span>•</span>
            <span className="text-high">1 HIGH</span>
          </div>
        </div>

        {/* Audit Filter Tabs */}
        <div className="audit-filter-controls">
          <div className="filter-group" role="tablist" aria-label="Filter findings by severity">
            <span className="filter-label font-mono">
              <Filter size={13} />
              <span>SEVERITY:</span>
            </span>
            <button
              type="button"
              role="tab"
              aria-selected={selectedFilter === 'all'}
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All ({SAMPLE_AUDIT_FINDINGS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedFilter === 'critical'}
              className={`filter-btn filter-critical ${selectedFilter === 'critical' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('critical')}
            >
              Critical (1)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedFilter === 'high'}
              className={`filter-btn filter-high ${selectedFilter === 'high' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('high')}
            >
              High (1)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedFilter === 'medium'}
              className={`filter-btn filter-medium ${selectedFilter === 'medium' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('medium')}
            >
              Medium (1)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedFilter === 'low'}
              className={`filter-btn filter-low ${selectedFilter === 'low' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('low')}
            >
              Low (1)
            </button>
          </div>
        </div>

        {/* Workbench Layout: Master Findings List (Left) + Detail Inspector (Right) */}
        <div className="audit-workbench-layout">
          {/* Findings Master List */}
          <div className="findings-master-col" role="region" aria-label="Audit findings list">
            {filteredFindings.map((finding) => (
              <button
                key={finding.id}
                type="button"
                className={`finding-row-card card-surface ${activeFinding.id === finding.id ? 'active-row' : ''}`}
                onClick={() => setActiveFinding(finding)}
                aria-pressed={activeFinding.id === finding.id}
              >
                <div className="finding-row-header">
                  <div className="finding-ids">
                    <span className="finding-code font-mono">{finding.id}</span>
                    <span className={`badge ${getSeverityBadgeClass(finding.severity)}`}>
                      {getSeverityIcon(finding.severity)}
                      <span>{finding.severity}</span>
                    </span>
                  </div>
                  <span className="finding-component-pill font-mono">{finding.component}</span>
                </div>

                <div className="finding-row-title">{finding.title}</div>

                <div className="finding-row-footer font-mono">
                  <span className="finding-status">
                    Status: <strong className="accent-text">{finding.verificationStatus}</strong>
                  </span>
                  <span className="view-details-prompt">
                    <span>Inspect</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Finding Inspector Panel (Right) */}
          <div className="finding-inspector-col card-surface" role="region" aria-label="Finding detail inspector">
            <div className="inspector-header">
              <div className="inspector-meta">
                <span className="inspector-id font-mono">{activeFinding.id}</span>
                <span className={`badge ${getSeverityBadgeClass(activeFinding.severity)}`}>
                  {activeFinding.severity.toUpperCase()} PRIORITY
                </span>
                <span className="badge badge-neutral font-mono">
                  VERIFICATION: {activeFinding.verificationStatus.toUpperCase()}
                </span>
              </div>
              <h3 className="inspector-title">{activeFinding.title}</h3>
              <div className="inspector-component font-mono">
                Component: <span>{activeFinding.component}</span>
              </div>
            </div>

            <div className="inspector-body">
              {/* Observation */}
              <div className="inspector-block">
                <h4 className="block-title font-mono">01 // OBSERVATION &amp; ROOT CAUSE</h4>
                <p className="block-text">{activeFinding.observation}</p>
              </div>

              {/* Reproduction Steps */}
              <div className="inspector-block">
                <h4 className="block-title font-mono">02 // REPRODUCTION TEST VECTORS</h4>
                <ol className="repro-list">
                  {activeFinding.reproductionSteps.map((step, idx) => (
                    <li key={idx} className="repro-step-item">
                      <span className="repro-num font-mono">[{idx + 1}]</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Potential Impact */}
              <div className="inspector-block">
                <h4 className="block-title font-mono">03 // PRODUCT &amp; DEMO IMPACT</h4>
                <div className="impact-box">
                  <AlertTriangle size={16} className="impact-icon" />
                  <p className="impact-text">{activeFinding.potentialImpact}</p>
                </div>
              </div>

              {/* Recommended Remediation */}
              <div className="inspector-block">
                <h4 className="block-title font-mono">04 // RECOMMENDED REMEDIATION</h4>
                <p className="block-text">{activeFinding.recommendedRemediation}</p>

                {/* Code Snippet if present */}
                {activeFinding.codeSnippet && (
                  <div className="remediation-diff-container">
                    <div className="diff-header font-mono">
                      <div className="diff-tags">
                        <Code2 size={14} className="accent-text" />
                        <span>VERIFIED REMEDIATION PATCH ({activeFinding.codeSnippet.language})</span>
                      </div>
                      {activeFinding.codeSnippet.after && (
                        <button
                          type="button"
                          className="copy-btn font-mono"
                          onClick={() => handleCopyRemediation(activeFinding.codeSnippet?.after || '')}
                        >
                          {copiedCode ? (
                            <>
                              <Check size={12} className="accent-text" />
                              <span>COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>COPY PATCH</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    {activeFinding.codeSnippet.after && (
                      <pre className="diff-pre font-mono">
                        <code>{activeFinding.codeSnippet.after}</code>
                      </pre>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="inspector-footer">
              <span className="inspector-footer-note font-mono">
                <CheckCircle2 size={14} className="accent-text" />
                <span>Standard deliverable includes reproducible test vectors &amp; code remediation guides.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
