import React from 'react';
import { SERVICES } from '../config/content';
import {
  Check,
  ArrowRight,
  ShieldAlert,
  Wrench,
  MonitorCheck,
  Video,
  Compass
} from 'lucide-react';
import './ServicesSection.css';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'hackathon-audit':
        return <ShieldAlert size={20} className="accent-text" />;
      case 'bug-fix-sprint':
        return <Wrench size={20} className="accent-text" />;
      case 'demo-reliability':
        return <MonitorCheck size={20} className="accent-text" />;
      case 'demo-video':
        return <Video size={20} className="accent-text" />;
      case 'technical-consulting':
        return <Compass size={20} className="accent-text" />;
      default:
        return <ShieldAlert size={20} className="accent-text" />;
    }
  };

  const handleCtaClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrapper services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>DEFINED CONSULTING PACKAGES</span>
          </div>
          <h2 className="section-title">
            Find the weaknesses <span className="accent-text">before your users do.</span>
          </h2>
          <p className="section-subtitle">
            Every engagement starts with a clear objective, a defined scope, and practical recommendations.
            No vague reports. No unnecessary complexity.
          </p>
        </div>

        {/* Primary 4 Service Cards Grid */}
        <div className="services-grid">
          {SERVICES.slice(0, 4).map((service) => (
            <div key={service.id} className="service-card card-surface" id={`service-${service.id}`}>
              {/* Card Header */}
              <div className="service-card-top">
                <div className="service-meta">
                  <span className="service-num font-mono">{service.serviceNumber}</span>
                  <div className="service-icon-box">{getServiceIcon(service.id)}</div>
                </div>
                <div className="service-pricing-pill font-mono">
                  <span className="price-tag">{service.startingPrice}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-tagline">{service.tagline}</p>
              <p className="service-card-desc">{service.description}</p>

              {/* Scope & Capabilities */}
              <div className="service-scope-section">
                <span className="scope-heading font-mono">TYPICAL SCOPE</span>
                <ul className="service-scope-list">
                  {service.scope.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="scope-list-item">
                      <span className="item-bullet">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="service-deliverables-section">
                <span className="deliverables-heading font-mono">DELIVERABLES</span>
                <div className="deliverable-chips">
                  {service.deliverables.map((deliv, idx) => (
                    <span key={idx} className="deliv-chip">
                      <Check size={12} className="accent-text" />
                      <span>{deliv}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Note */}
              <div className="service-card-bottom">
                <p className="service-pricing-note font-mono">{service.pricingNote}</p>
                <button
                  type="button"
                  className="btn btn-primary service-cta-btn"
                  onClick={() => handleCtaClick(service.title)}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5th Optional Advisory Module: Wide Layout */}
        {SERVICES[4] && (
          <div className="advisory-card card-surface" id="service-technical-consulting">
            <div className="advisory-content">
              <div className="advisory-header-line">
                <span className="service-num font-mono">{SERVICES[4].serviceNumber}</span>
                <div className="section-eyebrow" style={{ margin: 0 }}>
                  <span>SCOPED ADVISORY</span>
                </div>
              </div>

              <h3 className="advisory-title">{SERVICES[4].title}</h3>
              <p className="advisory-desc">{SERVICES[4].description}</p>

              <div className="advisory-scope-chips">
                {SERVICES[4].scope.map((item, idx) => (
                  <span key={idx} className="advisory-chip">
                    <span className="accent-text">•</span> {item}
                  </span>
                ))}
              </div>

              <p className="advisory-disclaimer font-mono">
                {SERVICES[4].pricingNote}
              </p>
            </div>

            <div className="advisory-action-col">
              <div className="advisory-price font-mono">
                <span className="advisory-rate">Scoped Hourly or Retainer</span>
                <span className="advisory-note">Direct 1-on-1 Founder Technical Review</span>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-lg advisory-cta-btn"
                onClick={() => handleCtaClick(SERVICES[4].title)}
              >
                <span>{SERVICES[4].ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
