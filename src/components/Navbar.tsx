import React, { useState, useEffect } from 'react';
import { SITE_METADATA } from '../config/content';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  currentTheme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenContactWithService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, onToggleTheme, onOpenContactWithService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'XRPL Lab', href: '#xrpl' },
    { label: 'Audit Preview', href: '#audit-preview' },
    { label: 'Demo Studio', href: '#demo-studio' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenContactWithService) {
      onOpenContactWithService('Hackathon Readiness Audit');
    }
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-wide navbar-container">
        {/* Brand / Logo */}
        <a href="#" className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-monogram">DW</span>
          <div className="brand-text">
            <span className="brand-name">{SITE_METADATA.name}</span>
            <span className="brand-tagline">TECH CONSULTING</span>
          </div>
        </a>

        {/* Live Availability Pill */}
        <div className="navbar-status-pill desktop-only">
          <span className="status-dot"></span>
          <span className="status-text">{SITE_METADATA.availabilityStatus}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Theme toggle + Discuss CTA) */}
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {currentTheme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="#contact"
            className="btn btn-primary btn-sm desktop-only"
            onClick={handleDiscussClick}
          >
            <span>Discuss a Project</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="mobile-drawer-header">
            <div className="navbar-brand">
              <span className="brand-monogram">DW</span>
              <div className="brand-text">
                <span className="brand-name">{SITE_METADATA.name}</span>
                <span className="brand-tagline">CONSULTING</span>
              </div>
            </div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-status-strip">
            <span className="status-dot"></span>
            <span>{SITE_METADATA.availabilityStatus}</span>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
              onClick={handleDiscussClick}
            >
              <span>Discuss a Project</span>
              <ArrowUpRight size={16} />
            </a>
            <p className="mobile-drawer-meta">
              Direct technical reviews for AI, fintech &amp; XRPL teams.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
