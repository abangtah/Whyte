import React, { useState } from 'react';
import { SITE_METADATA } from '../config/content';
import {
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Terminal,
  Activity,
  Zap,
  Play
} from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onSelectService: (serviceName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'trace' | 'metrics'>('audit');
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleRunSimulation = () => {
    setIsRunningTest(true);
    setTestResult(null);
    setTimeout(() => {
      setIsRunningTest(false);
      setTestResult('Vector Check Passed: Idempotency lock confirmed on tx_submit endpoint (latency: 142ms)');
    }, 1200);
  };

  const handleBookClick = () => {
    onSelectService('Hackathon Readiness Audit');
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDemoTalkClick = () => {
    onSelectService('Product Demo Video');
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container-wide hero-container">
        {/* Left Column: Narrative & Positioning */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <Terminal size={14} className="accent-text" />
            <span>{SITE_METADATA.eyebrow}</span>
          </div>

          <h1 className="hero-headline">
            {SITE_METADATA.headlineStart}
            <br />
            <span className="hero-headline-accent">{SITE_METADATA.headlineAccent}</span>
          </h1>

          <p className="hero-lead">
            {SITE_METADATA.supportingStatement}
          </p>

          <div className="hero-brand-idea-quote">
            <span className="quote-bar"></span>
            <p className="quote-text">
              &ldquo;{SITE_METADATA.centralIdea}&rdquo;
            </p>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleBookClick}
              id="hero-book-audit-cta"
            >
              <span>Book a Technical Review</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#work"
              className="btn btn-secondary btn-lg"
              id="hero-explore-work-cta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore Selected Work</span>
            </a>
          </div>

          <div className="hero-sublink">
            <button
              type="button"
              className="text-link-button"
              onClick={handleDemoTalkClick}
            >
              <span>Have a demo coming up? Let&apos;s talk.</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Credibility Chips */}
          <div className="hero-credibility-strip">
            <div className="cred-chip">
              <ShieldCheck size={14} className="accent-text" />
              <span>Independent &amp; Objective</span>
            </div>
            <div className="cred-chip">
              <Zap size={14} className="accent-text" />
              <span>XRPL &amp; Web3 QA Tested</span>
            </div>
            <div className="cred-chip">
              <Terminal size={14} className="accent-text" />
              <span>Concrete Reproduction Vectors</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Sample Technical Audit Panel */}
        <div className="hero-visual">
          <div className="audit-panel-window">
            {/* Window Header */}
            <div className="panel-window-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <span className="window-title-tag">SAMPLE AUDIT</span>
                <span className="window-subtitle">Illustrative Inspection Model</span>
              </div>
              <div className="window-status-pill">
                <span className="pulse-green"></span>
                <span>HARNESS ONLINE</span>
              </div>
            </div>

            {/* Panel Tabs */}
            <div className="panel-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'audit'}
                className={`panel-tab ${activeTab === 'audit' ? 'active' : ''}`}
                onClick={() => setActiveTab('audit')}
              >
                <span>Findings Breakdown</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'trace'}
                className={`panel-tab ${activeTab === 'trace' ? 'active' : ''}`}
                onClick={() => setActiveTab('trace')}
              >
                <span>Live Test Vectors</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'metrics'}
                className={`panel-tab ${activeTab === 'metrics' ? 'active' : ''}`}
                onClick={() => setActiveTab('metrics')}
              >
                <span>Readiness Score</span>
              </button>
            </div>

            {/* Tab 1: Findings Breakdown */}
            {activeTab === 'audit' && (
              <div className="panel-content-body">
                {/* Severity Count Summary */}
                <div className="severity-metric-row">
                  <div className="severity-pill pill-critical">
                    <span className="severity-num">1</span>
                    <span className="severity-label">Critical</span>
                  </div>
                  <div className="severity-pill pill-high">
                    <span className="severity-num">1</span>
                    <span className="severity-label">High</span>
                  </div>
                  <div className="severity-pill pill-medium">
                    <span className="severity-num">1</span>
                    <span className="severity-label">Medium</span>
                  </div>
                  <div className="severity-pill pill-low">
                    <span className="severity-num">1</span>
                    <span className="severity-label">Low</span>
                  </div>
                </div>

                {/* Workflow Checklist Items */}
                <div className="test-flow-list">
                  <div className="flow-item">
                    <div className="flow-icon">
                      <CheckCircle2 size={16} className="text-verified" />
                    </div>
                    <div className="flow-details">
                      <div className="flow-title">Authentication &amp; Session State</div>
                      <div className="flow-sub">Multi-role token refresh verified under 4G</div>
                    </div>
                    <span className="badge badge-verified">TESTED</span>
                  </div>

                  <div className="flow-item flow-item-warn">
                    <div className="flow-icon">
                      <AlertTriangle size={16} className="text-high" />
                    </div>
                    <div className="flow-details">
                      <div className="flow-title">API Error &amp; Fallback Handling</div>
                      <div className="flow-sub">Silent drops on 504 gateway timeout</div>
                    </div>
                    <span className="badge badge-high">REVIEW REQ</span>
                  </div>

                  <div className="flow-item">
                    <div className="flow-icon">
                      <Clock size={16} className="text-low" />
                    </div>
                    <div className="flow-details">
                      <div className="flow-title">XRPL Transaction Confirmation</div>
                      <div className="flow-sub">WebSocket sequence re-entrancy under load</div>
                    </div>
                    <span className="badge badge-low">PENDING</span>
                  </div>

                  <div className="flow-item">
                    <div className="flow-icon">
                      <CheckCircle2 size={16} className="text-verified" />
                    </div>
                    <div className="flow-details">
                      <div className="flow-title">Demo Presentation Path</div>
                      <div className="flow-sub">Seed script &amp; pre-flight checks ready</div>
                    </div>
                    <span className="badge badge-verified">VERIFIED</span>
                  </div>
                </div>

                {/* Sample Code Remediation Snippet */}
                <div className="panel-code-preview">
                  <div className="code-header">
                    <Terminal size={12} className="accent-text" />
                    <span>PATCH // tx_submission_idempotency.ts</span>
                  </div>
                  <pre className="code-block">
                    <code>
                      <span className="code-comment">// Prevent duplicate submit hazards:</span>{'\n'}
                      <span className="code-keyword">const</span> txLock = <span className="code-func">useIdempotentSubmission</span>();{'\n'}
                      <span className="code-keyword">if</span> (txLock.isCommitted) <span className="code-keyword">return</span> txLock.hash;
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 2: Live Test Vectors */}
            {activeTab === 'trace' && (
              <div className="panel-content-body">
                <div className="vector-console">
                  <div className="console-line">
                    <span className="console-prompt">$</span> xrpl-test-harness --net testnet --trace-flow
                  </div>
                  <div className="console-line console-dim">
                    Connecting to wss://s.altnet.rippletest.net:51233...
                  </div>
                  <div className="console-line console-success">
                    [OK] Ledger validated: index #9421033 (reserves: 10 XRP base)
                  </div>
                  <div className="console-line console-warn">
                    [WARN] Sequence #184 duplicate submit fired within 18ms
                  </div>
                  <div className="console-line console-accent">
                    [PATCH] Client idempotency token applied: nonce=0x4f2a91
                  </div>
                  {testResult && (
                    <div className="console-line console-highlight">
                      {testResult}
                    </div>
                  )}
                </div>

                <div className="vector-action-bar">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleRunSimulation}
                    disabled={isRunningTest}
                  >
                    {isRunningTest ? (
                      <>
                        <Activity size={14} className="spin" />
                        <span>Simulating Vector...</span>
                      </>
                    ) : (
                      <>
                        <Play size={14} />
                        <span>Run Vector Test</span>
                      </>
                    )}
                  </button>
                  <span className="vector-note">Runs safe client-side simulation</span>
                </div>
              </div>
            )}

            {/* Tab 3: Readiness Score */}
            {activeTab === 'metrics' && (
              <div className="panel-content-body">
                <div className="readiness-matrix">
                  <div className="matrix-stat-card">
                    <div className="matrix-number">88<span className="percent">%</span></div>
                    <div className="matrix-label">Demo Reliability</div>
                    <div className="matrix-bar">
                      <div className="matrix-fill" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div className="matrix-stat-card">
                    <div className="matrix-number">95<span className="percent">%</span></div>
                    <div className="matrix-label">Auth &amp; Session Safety</div>
                    <div className="matrix-bar">
                      <div className="matrix-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="matrix-stat-card">
                    <div className="matrix-number">72<span className="percent">%</span></div>
                    <div className="matrix-label">Ledger Error Recovery</div>
                    <div className="matrix-bar">
                      <div className="matrix-fill" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>

                <p className="matrix-summary-text">
                  Illustrative breakdown: audits target the 28% of edge-case scenarios where prototypes quietly break in front of investors and hackathon judges.
                </p>
              </div>
            )}

            {/* Visual Panel Footer Note */}
            <div className="panel-window-footer">
              <span className="footer-disclaimer">
                * Illustrative demonstration data from hypothetical application review.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
