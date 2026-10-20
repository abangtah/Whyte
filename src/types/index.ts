export type AuditSeverity = 'critical' | 'high' | 'medium' | 'low';

export interface AuditFinding {
  id: string;
  severity: AuditSeverity;
  title: string;
  component: string;
  observation: string;
  reproductionSteps: string[];
  potentialImpact: string;
  recommendedRemediation: string;
  verificationStatus: 'verified' | 'review required' | 'testing pending' | 'retested';
  codeSnippet?: {
    language: string;
    before?: string;
    after?: string;
  };
}

export type ServiceId = 
  | 'hackathon-audit' 
  | 'bug-fix-sprint' 
  | 'demo-reliability' 
  | 'demo-video' 
  | 'technical-consulting';

export interface ServiceItem {
  id: ServiceId;
  serviceNumber: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  deliverables: string[];
  startingPrice: string;
  pricingNote: string;
  ctaText: string;
}

export type VideoCategory = 
  | 'all'
  | 'walkthroughs' 
  | 'ai-automation' 
  | 'crypto-web3' 
  | 'technical-demos' 
  | 'launch-pitch' 
  | 'editing-motion';

export interface DemoVideo {
  id: string;
  title: string;
  category: VideoCategory;
  categoryLabel: string;
  duration: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  videoType: 'mp4' | 'youtube' | 'vimeo' | 'interactive';
  videoUrl: string;
  publicationDate?: string;
  projectRelationship?: string;
}

export type ProjectCategory = 
  | 'all'
  | 'ai-healthcare'
  | 'backend-qa'
  | 'b2b-saas'
  | 'crypto-xrpl'
  | 'demo-production';

export interface CaseStudy {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subtitle: string;
  role: string;
  techStack: string[];
  problem: string;
  workCompleted: string[];
  verifiableOutcomes: string[];
  isNda?: boolean;
  publicUrl?: string;
  thumbnail: string;
  demoVideoId?: string;
}

export type ImageGalleryCategory = 'all' | 'architecture' | 'audit-reports' | 'xrpl' | 'storyboard';

export interface GalleryImage {
  id: string;
  title: string;
  category: ImageGalleryCategory;
  categoryLabel: string;
  caption: string;
  imageUrl: string;
  altText: string;
  relatedProjectName?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export type SkillProficiency = 'Experienced with' | 'Used in projects' | 'Currently developing';

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: SkillProficiency;
    note?: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteSocialLinks {
  github?: string;
  linkedin?: string;
  x?: string;
  contra?: string;
  email: string;
  schedulingUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  service: string;
  projectStage: string;
  deadline: string;
  budgetRange: string;
  projectUrl: string;
  description: string;
  contactMethod: string;
}
