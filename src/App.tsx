import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceStrip } from './components/ServiceStrip';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ServicesSection } from './components/ServicesSection';
import { XrplSpecialistSection } from './components/XrplSpecialistSection';
import { AuditPreviewSection } from './components/AuditPreviewSection';
import { DemoStudioSection } from './components/DemoStudioSection';
import { VisualProofSection } from './components/VisualProofSection';
import { SkillsSection } from './components/SkillsSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedService, setSelectedService] = useState<string>('Hackathon Readiness Audit');

  useEffect(() => {
    // Check saved theme or keep dark default
    const savedTheme = localStorage.getItem('dw-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('dw-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleSelectServiceAndScroll = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Sticky Header Navigation */}
      <Navbar
        currentTheme={theme}
        onToggleTheme={toggleTheme}
        onOpenContactWithService={handleSelectServiceAndScroll}
      />

      <main id="main-content">
        {/* Hero: Asymmetric Editorial Layout + Sample Audit Workbench */}
        <Hero onSelectService={handleSelectServiceAndScroll} />

        {/* Dynamic Capability Running Strip */}
        <ServiceStrip />

        {/* Selected Work & Credibility (Case Studies) */}
        <CaseStudiesSection />

        {/* Defined Services & Outcome Packages */}
        <ServicesSection onSelectService={handleSelectServiceAndScroll} />

        {/* XRPL Specialist Section: Testing Verification & Methodology */}
        <XrplSpecialistSection onSelectService={handleSelectServiceAndScroll} />

        {/* Interactive Sample Audit Preview & Finding Inspector */}
        <AuditPreviewSection />

        {/* Demo Video Studio: Walkthroughs, Pitch Videos & Player */}
        <DemoStudioSection onSelectService={handleSelectServiceAndScroll} />

        {/* Inside the Work: Visual Evidence & Technical Diagrams */}
        <VisualProofSection />

        {/* Skills & Technical Capabilities with Honest Proficiency */}
        <SkillsSection />

        {/* What Makes Diana Different: Core Pillars & Manifesto */}
        <DifferentiatorsSection />

        {/* Engagement Process & Transparency Terms */}
        <ProcessSection onStartProject={() => handleSelectServiceAndScroll('Hackathon Readiness Audit')} />

        {/* About Diana: Independent by Design */}
        <AboutSection />

        {/* Trust & Confidentiality Assurance */}
        <SocialProofSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Lead Capture & Project Booking Form */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
