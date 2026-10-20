import React from 'react';
import { SITE_METADATA } from '../config/content';
import { Terminal, Globe, Laptop, CheckSquare } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-wrapper about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Strong Typographic Editorial Monogram Card */}
          <div className="about-visual-col">
            <div className="about-identity-card card-surface">
              <div className="identity-top-bar font-mono">
                <span className="identity-tag">INDEPENDENT PRACTITIONER</span>
                <span className="identity-status">
                  <span className="status-dot"></span> AVAILABLE
                </span>
              </div>

              <div className="identity-hero-monogram">
                <span className="mono-initials font-heading">DW</span>
                <div className="mono-accent-circle"></div>
              </div>

              <div className="identity-info-box">
                <h3 className="identity-name">{SITE_METADATA.name}</h3>
                <p className="identity-title font-mono">{SITE_METADATA.professionalTitle}</p>
              </div>

              {/* Verified Practice Meta */}
              <div className="identity-badges-list font-mono">
                <div className="id-badge-item">
                  <Laptop size={14} className="accent-text" />
                  <span>Independent Consulting</span>
                </div>
                <div className="id-badge-item">
                  <Globe size={14} className="accent-text" />
                  <span>Remote Collaboration (Global)</span>
                </div>
                <div className="id-badge-item">
                  <CheckSquare size={14} className="accent-text" />
                  <span>Project-Based &amp; Sprint Engagements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="about-narrative-col">
            <div className="section-eyebrow">
              <span>BACKGROUND &amp; PHILOSOPHY</span>
            </div>
            <h2 className="section-title">
              Independent by <span className="accent-text">design.</span>
            </h2>

            <div className="narrative-body">
              <p>
                I&apos;m an independent software engineering and technical consulting practitioner working across
                backend systems, AI-enabled applications, product QA, and technical demonstrations.
              </p>
              <p>
                I enjoy examining how products behave beneath the surface: where workflows break, where integrations
                become unreliable, and where a small technical decision can create a larger product problem.
              </p>
              <p>
                My approach is straightforward: understand the intended behavior, test the important paths,
                challenge weak assumptions, and deliver recommendations that teams can actually use.
              </p>
              <p>
                I also help teams communicate their work through clear product walkthroughs and demonstration videos.
                Whether you&apos;re preparing for a hackathon, getting ready to launch, or trying to make an existing product
                more reliable, I focus on practical work that moves the project forward.
              </p>
            </div>

            {/* Operating Principles */}
            <div className="operating-principles-box card-surface">
              <div className="principles-header font-mono">
                <Terminal size={14} className="accent-text" />
                <span>HOW I WORK WITH FOUNDERS</span>
              </div>
              <div className="principles-list">
                <div className="principle-item">
                  <strong className="principle-title">Direct Communication:</strong>
                  <span className="principle-text"> No account managers or delegated juniors. You work directly with me.</span>
                </div>
                <div className="principle-item">
                  <strong className="principle-title">Evidence Over Opinion:</strong>
                  <span className="principle-text"> Every issue discovered includes reproduction steps and impact assessments.</span>
                </div>
                <div className="principle-item">
                  <strong className="principle-title">High-Speed Execution:</strong>
                  <span className="principle-text"> Focused reviews designed to meet impending hackathon or investor demo deadlines.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
