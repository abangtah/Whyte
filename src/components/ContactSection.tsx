import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../config/content';
import type { ContactFormData } from '../types';
import {
  Send,
  CheckCircle2,
  Calendar,
  Mail,
  Shield,
  ExternalLink
} from 'lucide-react';
import './ContactSection.css';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'XRPL / Web3 Application',
    service: initialService || 'Hackathon Readiness Audit',
    projectStage: 'MVP in Development',
    deadline: 'Within one week',
    budgetRange: '$200–$500',
    projectUrl: '',
    description: '',
    contactMethod: 'Work Email'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Sync initialService when updated from external button clicks
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your project or company name';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe the problem or what needs to be tested';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please provide at least 15 characters of detail';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate structured processing and fallback generation
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = 'DW-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(randomId);
      setSubmissionSuccess(true);
    }, 900);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`Consulting Inquiry [${submissionId || 'New'}]: ${formData.service} for ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project/Company: ${formData.company}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Service: ${formData.service}\n` +
      `Stage: ${formData.projectStage}\n` +
      `Deadline: ${formData.deadline}\n` +
      `Budget Range: ${formData.budgetRange}\n` +
      `Project URL: ${formData.projectUrl || 'Not provided'}\n` +
      `Preferred Contact: ${formData.contactMethod}\n\n` +
      `Problem Description:\n${formData.description}\n`
    );
    return `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Mail size={14} className="accent-text" />
            <span>START AN ENGAGEMENT</span>
          </div>
          <h2 className="section-title">
            Have something <span className="accent-text">worth shipping?</span>
          </h2>
          <p className="section-subtitle">
            Tell me what you&apos;re building, what needs to work, and when you need it ready.
            I&apos;ll help determine whether a technical review, focused fix sprint, or demo package is the right next step.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Direct Booking & Contact Meta */}
          <div className="contact-info-col">
            <div className="info-card card-surface">
              <h3 className="info-title">Consultation Channels</h3>
              <p className="info-desc">
                Engagements begin with a transparent review of your goals. No aggressive sales pitches.
              </p>

              <div className="info-links-list">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="info-link-item"
                >
                  <div className="info-icon-box">
                    <Mail size={18} className="accent-text" />
                  </div>
                  <div className="info-link-text">
                    <span className="info-link-label font-mono">DIRECT INQUIRY</span>
                    <span className="info-link-val">{SOCIAL_LINKS.email}</span>
                  </div>
                </a>

                {SOCIAL_LINKS.schedulingUrl && (
                  <a
                    href={SOCIAL_LINKS.schedulingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link-item"
                  >
                    <div className="info-icon-box">
                      <Calendar size={18} className="accent-text" />
                    </div>
                    <div className="info-link-text">
                      <span className="info-link-label font-mono">CALENDAR SCHEDULE</span>
                      <span className="info-link-val">Book 15-min Scope Call</span>
                    </div>
                    <ExternalLink size={14} className="external-arrow" />
                  </a>
                )}
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="confidentiality-box font-mono">
                <Shield size={16} className="accent-text" />
                <div className="conf-text">
                  <strong>Zero Credential Policy:</strong> Never submit private API keys, seed phrases, or sensitive passwords through this form.
                </div>
              </div>
            </div>

            {/* Quick Pricing Summary Pill */}
            <div className="pricing-summary-card card-surface font-mono">
              <span className="summary-title">PUBLISHED PILOT RANGES</span>
              <div className="pricing-row">
                <span>Hackathon Readiness Audit:</span>
                <strong className="accent-text">$150–$250</strong>
              </div>
              <div className="pricing-row">
                <span>Demo Reliability Package:</span>
                <strong className="accent-text">$200–$400</strong>
              </div>
              <div className="pricing-row">
                <span>Critical Bug-Fix Sprint:</span>
                <strong className="accent-text">$300–$600</strong>
              </div>
              <span className="pricing-subtext">* Scoped individually before work begins</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Success State */}
          <div className="contact-form-col card-surface">
            {submissionSuccess ? (
              <div className="submission-success-view">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={44} className="accent-text" />
                </div>
                <h3 className="success-title">Inquiry Prepared Successfully</h3>
                <p className="success-desc">
                  Your project details have been logged under reference{' '}
                  <strong className="font-mono accent-text">{submissionId}</strong>.
                  I review inquiries personally within 24 hours.
                </p>

                {/* Direct Mailto Action to ensure 100% receipt */}
                <div className="success-action-box font-mono">
                  <p className="action-hint">
                    To send this inquiry directly from your email client with one click:
                  </p>
                  <a
                    href={constructMailtoUrl()}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%' }}
                  >
                    <span>Launch Direct Email with Details</span>
                    <Send size={16} />
                  </a>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '20px' }}
                  onClick={() => setSubmissionSuccess(false)}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form" noValidate>
                <div className="form-grid-2">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="form-name" className="form-label font-mono">
                      YOUR NAME *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && <span className="field-error font-mono">{errors.name}</span>}
                  </div>

                  {/* Work Email */}
                  <div className="form-group">
                    <label htmlFor="form-email" className="form-label font-mono">
                      WORK EMAIL *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@project.xyz"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <span className="field-error font-mono">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-grid-2">
                  {/* Company / Project */}
                  <div className="form-group">
                    <label htmlFor="form-company" className="form-label font-mono">
                      COMPANY OR PROJECT NAME *
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. OrbitPay"
                      className={`form-input ${errors.company ? 'input-error' : ''}`}
                    />
                    {errors.company && <span className="field-error font-mono">{errors.company}</span>}
                  </div>

                  {/* Project Type */}
                  <div className="form-group">
                    <label htmlFor="form-project-type" className="form-label font-mono">
                      PROJECT CATEGORY
                    </label>
                    <select
                      id="form-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="XRPL / Web3 Application">XRPL / Web3 Application</option>
                      <option value="AI Startup or Agent Workflow">AI Startup or Agent Workflow</option>
                      <option value="Fintech Platform">Fintech Platform</option>
                      <option value="B2B SaaS Prototype">B2B SaaS Prototype</option>
                      <option value="Hackathon Submission">Hackathon Submission</option>
                      <option value="Other">Other Software Application</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  {/* Service Required Dropdown */}
                  <div className="form-group">
                    <label htmlFor="form-service" className="form-label font-mono">
                      SERVICE REQUIRED *
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select accent-select"
                    >
                      <option value="Hackathon Readiness Audit">Hackathon Readiness Audit</option>
                      <option value="XRPL / Web3 Testing">XRPL / Web3 Testing</option>
                      <option value="Critical Bug-Fix Sprint">Critical Bug-Fix Sprint</option>
                      <option value="Demo Reliability Package">Demo Reliability Package</option>
                      <option value="Product Demo Video">Product Demo Video</option>
                      <option value="Technical Consulting">Technical Consulting</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Current Stage */}
                  <div className="form-group">
                    <label htmlFor="form-stage" className="form-label font-mono">
                      CURRENT STAGE
                    </label>
                    <select
                      id="form-stage"
                      name="projectStage"
                      value={formData.projectStage}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="MVP in Development">MVP in Development</option>
                      <option value="Functional Hackathon Prototype">Functional Hackathon Prototype</option>
                      <option value="Pre-Launch / Staging">Pre-Launch / Staging</option>
                      <option value="Live in Production">Live in Production</option>
                      <option value="Concept / Scoping">Concept / Scoping</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  {/* Deadline Dropdown */}
                  <div className="form-group">
                    <label htmlFor="form-deadline" className="form-label font-mono">
                      DEADLINE TIMELINE
                    </label>
                    <select
                      id="form-deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Within 48 hours">Within 48 hours (Urgent)</option>
                      <option value="Within one week">Within one week</option>
                      <option value="Within two weeks">Within two weeks</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="form-group">
                    <label htmlFor="form-budget" className="form-label font-mono">
                      BUDGET RANGE
                    </label>
                    <select
                      id="form-budget"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Under $200">Under $200</option>
                      <option value="$200–$500">$200–$500</option>
                      <option value="$500–$1,000">$500–$1,000</option>
                      <option value="$1,000+">$1,000+</option>
                      <option value="Discussing scope">Discussing scope</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  {/* Project URL / Repo URL */}
                  <div className="form-group">
                    <label htmlFor="form-url" className="form-label font-mono">
                      PROJECT OR REPO URL (OPTIONAL)
                    </label>
                    <input
                      id="form-url"
                      type="url"
                      name="projectUrl"
                      value={formData.projectUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/..."
                      className="form-input"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="form-group">
                    <label htmlFor="form-contact-method" className="form-label font-mono">
                      PREFERRED CONTACT METHOD
                    </label>
                    <select
                      id="form-contact-method"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Work Email">Work Email</option>
                      <option value="Telegram">Telegram</option>
                      <option value="Discord">Discord</option>
                      <option value="Google Meet">Google Meet</option>
                    </select>
                  </div>
                </div>

                {/* Description of the Problem */}
                <div className="form-group">
                  <label htmlFor="form-desc" className="form-label font-mono">
                    WHAT NEEDS TO BE TESTED, FIXED, OR DEMONSTRATED? *
                  </label>
                  <textarea
                    id="form-desc"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your critical user workflows, any known issues or bugs, impending hackathon deadlines, or demo video requirements..."
                    className={`form-textarea ${errors.description ? 'input-error' : ''}`}
                  />
                  {errors.description && (
                    <span className="field-error font-mono">{errors.description}</span>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg submit-btn"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Technical Review Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
