import React from 'react';
import { SITE_METADATA, SOCIAL_LINKS } from '../config/content';
import {
  Mail,
  Calendar,
  ArrowUp,
  Terminal
} from 'lucide-react';
import './Footer.css';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XTwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top-grid">
          {/* Brand & Positioning */}
          <div className="footer-brand-col">
            <div className="footer-brand-lockup">
              <span className="brand-monogram">DW</span>
              <span className="footer-brand-name">{SITE_METADATA.name}</span>
            </div>

            <p className="footer-positioning">
              {SITE_METADATA.primaryPositioning}
            </p>

            <div className="footer-independent-pill font-mono">
              <span className="status-dot"></span>
              <span>INDEPENDENT TECHNICAL CONSULTING</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-col">
            <span className="footer-col-heading font-mono">SITE NAVIGATION</span>
            <ul className="footer-links-list">
              <li><a href="#work">Selected Work</a></li>
              <li><a href="#services">Consulting Services</a></li>
              <li><a href="#xrpl">XRPL &amp; Web3 Testing</a></li>
              <li><a href="#audit-preview">Audit Specimen</a></li>
              <li><a href="#demo-studio">Demo Video Studio</a></li>
              <li><a href="#process">Consulting Process</a></li>
              <li><a href="#about">About Diana</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Services Quick Jump */}
          <div className="footer-services-col">
            <span className="footer-col-heading font-mono">CORE SERVICES</span>
            <ul className="footer-links-list font-mono">
              <li><a href="#service-hackathon-audit">01 // Hackathon Audit</a></li>
              <li><a href="#service-bug-fix-sprint">02 // Critical Bug-Fix Sprint</a></li>
              <li><a href="#service-demo-reliability">03 // Demo Reliability Package</a></li>
              <li><a href="#service-demo-video">04 // Product Demo Video</a></li>
              <li><a href="#service-technical-consulting">05 // Technical Consulting</a></li>
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div className="footer-social-col">
            <span className="footer-col-heading font-mono">CONNECT &amp; VERIFY</span>
            <div className="footer-social-links">
              {SOCIAL_LINKS.github && (
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              )}

              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              )}

              {SOCIAL_LINKS.x && (
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="X / Twitter Profile"
                >
                  <XTwitterIcon />
                  <span>X (Twitter)</span>
                </a>
              )}

              {SOCIAL_LINKS.contra && (
                <a
                  href={SOCIAL_LINKS.contra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Contra Profile"
                >
                  <Terminal size={16} />
                  <span>Contra</span>
                </a>
              )}

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="social-btn"
                aria-label="Email Diana Whyte"
              >
                <Mail size={16} />
                <span>Email Inquiry</span>
              </a>

              {SOCIAL_LINKS.schedulingUrl && (
                <a
                  href={SOCIAL_LINKS.schedulingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Schedule a Scope Call"
                >
                  <Calendar size={16} />
                  <span>Schedule Call</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-left font-mono">
            <span>&copy; {currentYear} {SITE_METADATA.name}. All rights reserved.</span>
            <span className="bottom-meta-sep">•</span>
            <span>Remote Consulting (US / Europe / Asia)</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn font-mono"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
