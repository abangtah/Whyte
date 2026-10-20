import type {
  AuditFinding,
  CaseStudy,
  DemoVideo,
  FaqItem,
  GalleryImage,
  ServiceItem,
  SiteSocialLinks,
  SkillCategory
} from '../types';

export const SITE_METADATA = {
  name: 'Diana Whyte',
  professionalTitle: 'Independent Technical Consultant | Product Readiness, XRPL Testing & Demo Production',
  eyebrow: 'INDEPENDENT TECHNICAL CONSULTING',
  headlineStart: 'Your product works.',
  headlineAccent: "Let's make sure it holds up.",
  primaryPositioning: "I help founders find what's broken, fix what matters, and present their products with confidence.",
  supportingStatement:
    'Technical audits, XRPL and Web3 testing, critical bug fixes, product readiness reviews, and polished demo videos for teams building ambitious products.',
  centralIdea:
    "I don't just look at what you've built. I test whether it works, challenge what doesn't, and help you make it demo-ready.",
  manifesto:
    'Honest feedback is useful when it leads to a better product. My job is to make the next technical decision clearer.',
  availabilityStatus: 'AVAILABLE FOR SPRINT & DEMO ENGAGEMENTS',
  locationNote: 'Remote collaboration across global time zones (US, Europe, Asia)',
  ndaNotice:
    'Some client engagements are strictly confidential. Additional technical context and anonymized code walkthroughs can be discussed privately under mutual agreement.'
};

// export const SOCIAL_LINKS: SiteSocialLinks = {
//   email: 'dianawhyteconsultingcom',
//   github: 'https://github.com/dianawhyte',
//   linkedin: 'https://www.linkedin.com/in/diana-whyte',
//   x: 'https://x.com/dianawhyte_tech',
//   contra: 'https://contra.com/diana_whyte',
//   schedulingUrl: 'https://cal.com/diana-whyte/consult'
// };
export const SOCIAL_LINKS: SiteSocialLinks = {
  email: 'dianawhyteconsultingcom',
  github: 'https://github.com/dianawhyte',
  linkedin: 'https://www.linkedin.com/',
  x: 'https://x.com/',
  contra: 'https://contra.com/',
  schedulingUrl: 'https://cal.com/'
};

export const SERVICE_STRIP_ITEMS = [
  'TECHNICAL AUDITS',
  'XRPL & WEB3 QA',
  'BUG-FIX SPRINTS',
  'DEMO PRODUCTION',
  'API RESILIENCE',
  'EDGE-CASE TRIAGE',
  'TESTNET VERIFICATION'
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'hackathon-audit',
    serviceNumber: '01',
    title: 'Hackathon Readiness Audit',
    tagline: 'Find technical weaknesses before judges or users encounter them.',
    description:
      'An independent review of your existing prototype to identify technical weaknesses, incomplete workflows, integration risks, and problems that could undermine your final demonstration.',
    scope: [
      'Repository and codebase review',
      'Application architecture review',
      'Frontend and backend workflow testing',
      'API and integration checks',
      'Authentication and authorization flow review',
      'Error handling and edge-case testing',
      'Deployment and configuration review',
      'Documentation and demo-path assessment',
      'Prioritized technical findings report',
      'Actionable remediation recommendations'
    ],
    deliverables: [
      'Structured audit report with severity ratings',
      'Reproduction steps with curl / CLI test vectors',
      'Remediation guide & high-impact fix list',
      '30-minute technical debrief call'
    ],
    startingPrice: '$150–$250',
    pricingNote: 'Starting price for a tightly scoped pilot. Final pricing depends on repository size, technical complexity, access, and turnaround time.',
    ctaText: 'Request an Audit'
  },
  {
    id: 'bug-fix-sprint',
    serviceNumber: '02',
    title: 'Critical Bug-Fix Sprint',
    tagline: 'When the deadline is close, focus on the problems that actually matter.',
    description:
      'A focused hands-on engineering sprint targeting verified high-priority bugs, broken integration endpoints, and deployment blockers that prevent your product from demonstrating its true value.',
    scope: [
      'Reproducing confirmed bugs with minimal test cases',
      'Debugging application and backend failures',
      'Fixing agreed high-priority issues',
      'Correcting broken API integrations',
      'Improving validation and error handling',
      'Resolving deployment and configuration problems',
      'Retesting affected workflows',
      'Providing a concise summary of changes'
    ],
    deliverables: [
      'Agreed set of implemented, verified fixes',
      'Git pull requests with clear commit logs',
      'Verification notes & regression check tests',
      'Handover summary'
    ],
    startingPrice: '$300–$600',
    pricingNote: 'For a clearly defined sprint. Scoped carefully before accepting—no over-promising or unvetted codebase commitments.',
    ctaText: 'Discuss a Fix Sprint'
  },
  {
    id: 'demo-reliability',
    serviceNumber: '03',
    title: 'Demo Reliability Package',
    tagline: 'Make your product easier to demonstrate, understand, and trust.',
    description:
      'Ensure the critical user journey does not fail during a live presentation, pitch deck demonstration, or hackathon judging session.',
    scope: [
      'Test the main user journey from start to finish',
      'Validate core application functionality',
      'Identify failure points in the demo flow',
      'Check loading, empty, and error states',
      'Review environment and deployment configuration',
      'Verify the accuracy of the demo narrative',
      'Prepare a repeatable demonstration checklist',
      'Retest critical paths',
      'Recommend improvements to the presentation'
    ],
    deliverables: [
      'Demo-readiness report & risk mitigation matrix',
      'Prioritized issue punch list',
      'Step-by-step repeatable demonstration checklist',
      'Mock demo run-through review'
    ],
    startingPrice: '$200–$400',
    pricingNote: 'Depending on user journey length, environment dependencies, and testnet requirements.',
    ctaText: 'Prepare My Demo'
  },
  {
    id: 'demo-video',
    serviceNumber: '04',
    title: 'Product Demo Video & Editing',
    tagline: 'Turn a working product into a clear, compelling demonstration.',
    description:
      'High-impact screen recording, technical narration structuring, pacing, and video editing for product launches, hackathon submissions, and investor updates.',
    scope: [
      'Product walkthrough planning & script outlines',
      'Demo storyboarding & key feature sequence',
      'High-resolution screen recording',
      'Editing, rhythm, and pacing adjustments',
      'Voice-over integration where requested',
      'Captions, zoom callouts, and on-screen labels',
      'Feature callouts & architecture visual overlays',
      'Technical workflow explanations',
      'Product launch clips & hackathon submission cuts',
      'Social media cutdowns (16:9 & 9:16)'
    ],
    deliverables: [
      'Polished master video (4K / 1080p 60fps)',
      'Web-optimized MP4 cuts for embedding & social',
      'SRT subtitle captions',
      'Agreed revision rounds included'
    ],
    startingPrice: 'Request a Quote',
    pricingNote: 'Priced per deliverable based on video duration, scripting needs, and turnaround requirements.',
    ctaText: 'Create a Product Demo'
  },
  {
    id: 'technical-consulting',
    serviceNumber: '05',
    title: 'Technical Product Consulting',
    tagline: 'Independent technical feedback for founders making high-stakes decisions.',
    description:
      'A scoped advisory engagement for founders who want an unbiased second opinion on architecture, product decisions, implementation priorities, integrations, or launch readiness.',
    scope: [
      'Architecture sanity checks & trade-off assessments',
      'API & vendor evaluation (LLM providers, Web3 RPCs, databases)',
      'Pre-launch readiness triage & technical debt assessment',
      'Developer experience & onboarding review',
      'Engineering roadmap prioritization'
    ],
    deliverables: [
      'Written technical memo with trade-off analysis',
      '1-on-1 strategic advisory sessions',
      'Follow-up async Q&A via private channel'
    ],
    startingPrice: 'Hourly or Retainer',
    pricingNote: 'Positioned as scoped technical advisory; does not claim formal legal, financial, or certified security auditing.',
    ctaText: 'Discuss Consulting'
  }
];

export const XRPL_SPECIALIST_DATA = {
  heading: "Building on XRPL? Let's test the parts that matter.",
  supportingCopy:
    'Blockchain applications have critical workflows that deserve more than a quick visual check. I help teams examine how their applications behave across wallet connections, transaction submission, confirmation, error handling, and the user experience surrounding the ledger.',
  disclaimer:
    'Application QA & workflow validation focuses on client resilience, ledger interaction, and user experience. It is not a formal smart-contract cryptographic security audit.',
  officialDocUrl: 'https://xrpl.org/docs',
  capabilityPillars: [
    {
      title: 'Wallet & Account Flows',
      points: [
        'Wallet connection, disconnection, and reconnection handling',
        'Account selection, multi-account switching, and network configuration',
        'State persistence across page reloads and tab closures',
        'Authentication and signature request lifecycle validation'
      ]
    },
    {
      title: 'Transaction Workflow Testing',
      points: [
        'Transaction construction (Payment, Escrow, TrustSet, AMM, NFToken)',
        'Validation, fee estimation, and response handling',
        'Transaction status and finality confirmation on ledger',
        'Failed and rejected transactions handling',
        'Timeouts, retries, and duplicate-submission hazard mitigation',
        'Clear user feedback for pending, successful, and failed operations'
      ]
    },
    {
      title: 'XRPL Integration Checks',
      points: [
        'Mainnet vs. Testnet configuration and endpoint isolation',
        'Ledger response parsing and tesSUCCESS vs. tec/tem codes',
        'API and SDK (xrpl.js / xrpl-py) integration behavior',
        'Balance, reserves (base + owner reserve), and drops consistency',
        'Network failures, WebSocket reconnections, and unavailable RPCs',
        'Testnet demonstration reliability under high latency'
      ]
    },
    {
      title: 'AI & Agentic Finance Boundaries',
      points: [
        'API tool-call schema validation before execution',
        'Strict parameters and boundary checks on automated payments',
        'Failed-action handling and state rollback consistency',
        'Structured logging and traceability for agent ledger events',
        'Human approval checkpoints for critical thresholds',
        'Repeatable test scenarios for autonomous workflows'
      ]
    },
    {
      title: 'Web3 Application Quality',
      points: [
        'Frontend state synchronization with ledger ledger_index',
        'Application-level access control & role validation',
        'User journey reliability from faucet funding to final receipt',
        'Demo and deployment readiness under live network conditions'
      ]
    }
  ],
  reviewSteps: [
    {
      step: '01',
      title: 'Understand Intended Behavior',
      detail: 'Clarify the exact transaction sequence, user story, and expected ledger response.'
    },
    {
      step: '02',
      title: 'Map Critical Workflows',
      detail: 'Identify user and agent touchpoints: wallet connect, signing, RPC submission, confirmation, error states.'
    },
    {
      step: '03',
      title: 'Test Normal & Failure Scenarios',
      detail: 'Inject network delays, rejected signatures, insufficient drops, and out-of-order responses.'
    },
    {
      step: '04',
      title: 'Document Reproducible Findings',
      detail: 'Capture exact payloads, ledger hashes, console logs, and step-by-step reproduction instructions.'
    },
    {
      step: '05',
      title: 'Prioritize by Impact & Likelihood',
      detail: 'Separate catastrophic demo blockers (e.g., duplicate funds drain) from subtle UI warnings.'
    },
    {
      step: '06',
      title: 'Recommend Fixes & Retest',
      detail: 'Provide code remediation patches, verify on testnet, and retest the end-to-end user path.'
    }
  ]
};

export const SAMPLE_AUDIT_FINDINGS: AuditFinding[] = [
  {
    id: 'AUD-001',
    severity: 'critical',
    title: 'Duplicate transaction submission is not adequately prevented in sample payment workflow',
    component: 'PaymentSubmissionModal.tsx / useSubmitTx()',
    observation:
      'Double-clicking the "Confirm XRP Payment" button before the initial RPC response returns fires two concurrent tx_sign requests with identical sequence numbers, resulting in unpredictable RPC rejection or double debit on testnet.',
    reproductionSteps: [
      'Open the Payment Modal with destination rDemoTargetAccount... and Amount 10 XRP',
      'Throttle network to Slow 3G in DevTools',
      'Rapidly double-click "Confirm XRP Payment"',
      'Inspect Network tab: two concurrent POST requests to /api/v1/submit-tx are triggered'
    ],
    potentialImpact:
      'Critical risk of duplicate debit, confusing tefPAST_SEQ error messages, or frozen UI state during live demo.',
    recommendedRemediation:
      'Implement an idempotency key on the client, disable the submission button upon first click, and apply a deterministic pending state machine until the ledger engine emits tx_committed.',
    verificationStatus: 'review required',
    codeSnippet: {
      language: 'typescript',
      before: `// VULNERABLE: Multiple clicks trigger concurrent submits
const handleSendPayment = async () => {
  const result = await client.submitAndWait(txBlob);
  setTxHash(result.hash);
};`,
      after: `// REMEDIATED: Idempotent state lock + UI disable
const [isSubmitting, setIsSubmitting] = useState(false);
const handleSendPayment = async () => {
  if (isSubmitting) return;
  setIsSubmitting(true);
  try {
    const result = await client.submitAndWait(txBlob);
    setTxHash(result.hash);
  } finally {
    setIsSubmitting(false);
  }
};`
    }
  },
  {
    id: 'AUD-002',
    severity: 'high',
    title: 'API failures do not produce actionable feedback / silent error drops',
    component: 'LedgerClientService.ts / fetchAccountLines()',
    observation:
      'When the XRPL WebSocket node returns actNotFound or times out after 10,000ms, the catch block catches the exception and returns an empty array [] without alerting the user or distinguishing an unfunded account from a network disconnect.',
    reproductionSteps: [
      'Enter an invalid or unfunded testnet address into the account inspector',
      'Simulate an RPC 504 gateway timeout',
      'Observe that the interface shows "No trustlines found" instead of "Account not funded on testnet"'
    ],
    potentialImpact:
      'Founders and judges conclude the application is unresponsive or broken rather than recognizing an unactivated testnet account.',
    recommendedRemediation:
      'Map specific XRPL error codes (actNotFound, telINSUF_FEE_P, tecNO_DST) to user-friendly notifications with remediation actions (e.g. "Fund with Testnet Faucet").',
    verificationStatus: 'verified',
    codeSnippet: {
      language: 'typescript',
      before: `// Silent fallback masks root cause
try {
  return await client.request({ command: 'account_lines', account });
} catch (e) {
  return []; // User has no idea what failed
}`,
      after: `// Explicit error discrimination with user action
try {
  return await client.request({ command: 'account_lines', account });
} catch (error: any) {
  if (error.data?.error === 'actNotFound') {
    throw new UnfundedAccountError('Account is not funded. Request drops from testnet faucet.');
  }
  throw new LedgerNetworkError('RPC endpoint timed out. Retrying with backup node...');
}`
    }
  },
  {
    id: 'AUD-003',
    severity: 'medium',
    title: 'Empty state does not explain next step or guide testnet wallet funding',
    component: 'DashboardOverview.tsx',
    observation:
      'A first-time user connecting a fresh testnet wallet is presented with blank cards and zero instructions on how to fund their testnet account or trigger their first transaction.',
    reproductionSteps: [
      'Connect a new testnet wallet with 0 XRP balance',
      'Navigate to the main dashboard',
      'Verify that cards display "0.00" with no prompt or link to the XRPL Testnet Faucet'
    ],
    potentialImpact:
      'First-time testers and hackathon judges abandon the demo flow within 20 seconds because they do not know how to proceed.',
    recommendedRemediation:
      'Detect 0 XRP balance on testnet and render a prominent "Fund Demo Account" callout with one-click faucet integration or direct link to https://faucet.altnet.rippletest.net.',
    verificationStatus: 'verified'
  },
  {
    id: 'AUD-004',
    severity: 'low',
    title: 'Demo configuration is documented inconsistently across README and environment templates',
    component: '.env.example & README.md',
    observation:
      'The README specifies VITE_XRPL_WS_URL=wss://s.altnet.rippletest.net:51233 while .env.example references s1.altnet.rippletest.net. A developer cloning the repo for judging could encounter connection failure on older ports.',
    reproductionSteps: [
      'Compare port definitions in README.md vs .env.example',
      'Notice conflicting WebSocket endpoints'
    ],
    potentialImpact:
      'Friction during hackathon judging or peer reproduction, leading to failed local setup.',
    recommendedRemediation:
      'Standardize environment variables in .env.example and add a pre-flight configuration validation script (validate-env.ts).',
    verificationStatus: 'testing pending'
  }
];

export const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: 'demo-1',
    title: 'LeadSigma: AI-Assisted B2B Lead Intelligence Flow',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    duration: '02:45',
    description:
      'Complete technical walkthrough showing automated domain enrichment, AI scoring pipelines, and resilient backend queue handling.',
    techStack: ['Next.js', 'Python', 'OpenAI API', 'Tailwind', 'PostgreSQL'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    videoType: 'interactive',
    videoUrl: 'https://lead-sigma-rouge.vercel.app/',
    publicationDate: 'Demo Production Showcase',
    projectRelationship: 'Product Demo & Architecture Walkthrough'
  },
  {
    id: 'demo-2',
    title: 'XRPL Testnet Payment & Escrow Workflow Inspection',
    category: 'crypto-web3',
    categoryLabel: 'Crypto & Web3',
    duration: '03:12',
    description:
      'Step-by-step demonstration of XRPL testnet wallet connectivity, sequence verification, multi-signing, and error handling for failed ledger commits.',
    techStack: ['xrpl.js', 'React', 'TypeScript', 'WebSockets', 'XRPL Testnet'],
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80',
    videoType: 'interactive',
    videoUrl: 'https://xrpl.org/docs',
    publicationDate: 'XRPL Lab Demonstration',
    projectRelationship: 'Personal Demonstration of XRPL Client QA'
  },
  {
    id: 'demo-3',
    title: 'ThriveKin: Patient Routine & Notification Engine Demo',
    category: 'walkthroughs',
    categoryLabel: 'Product Walkthrough',
    duration: '03:40',
    description:
      'End-to-end walkthrough illustrating routine tracking, multi-factor caregiver authentication, and dependable cloud notification triggers.',
    techStack: ['React', 'Node.js', 'Database Architecture', 'Cloud Services'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    videoType: 'interactive',
    videoUrl: 'https://thrivekin.care/',
    publicationDate: 'Healthcare SaaS Demo',
    projectRelationship: 'Technical Architecture Walkthrough'
  },
  {
    id: 'demo-4',
    title: 'API Resilience & Chaos Testing: Handling Gateway Drops',
    category: 'technical-demos',
    categoryLabel: 'Technical Demo',
    duration: '01:55',
    description:
      'High-impact screen recording demonstrating how graceful fallbacks, retry backoffs, and circuit breakers preserve UI stability during node outages.',
    techStack: ['TypeScript', 'Vite', 'REST API', 'DevTools Network Chaos'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    videoType: 'interactive',
    videoUrl: '',
    publicationDate: 'QA Reliability Sprint',
    projectRelationship: 'Reliability Engineering Demo'
  },
  {
    id: 'demo-5',
    title: 'High-Pace Hackathon Pitch Video: Pacing & Storyboard Cut',
    category: 'launch-pitch',
    categoryLabel: 'Launch & Pitch',
    duration: '02:00',
    description:
      'Crisp 2-minute pitch demonstration engineered specifically for hackathon judging criteria: Problem, Solution, Live Architecture, and Market Impact.',
    techStack: ['Screen Studio', 'Premiere Pro', 'Motion Graphics', 'Audio Mastering'],
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    videoType: 'interactive',
    videoUrl: '',
    publicationDate: 'Demo Studio Showcase',
    projectRelationship: 'Demo Video Studio Deliverable'
  },
  {
    id: 'demo-6',
    title: 'Micro-Interactions & Technical Motion for Developer Tools',
    category: 'editing-motion',
    categoryLabel: 'Editing & Motion',
    duration: '01:30',
    description:
      'Demonstration of subtle zoom callouts, cursor smoothing, code highlight transitions, and audio sync for technical SaaS demos.',
    techStack: ['Motion Design', 'Video Editing', 'Technical Callouts'],
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    videoType: 'interactive',
    videoUrl: '',
    publicationDate: 'Video Editing Specimen',
    projectRelationship: 'Demo Production Craft'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-thrivekin',
    title: 'ThriveKin',
    category: 'ai-healthcare',
    categoryLabel: 'AI-Enabled Healthcare Platform',
    subtitle: 'Strengthening application workflows, authentication, and backend reliability for a clinical care platform.',
    role: 'Technical Consulting & Application Workflow Testing',
    techStack: ['React', 'Python / Flask', 'REST APIs', 'Database Architecture', 'Notification Systems'],
    problem:
      'The platform required reliable user routine tracking, multi-role caregiver authentication, and dependable backend communication where missed notifications or state inconsistencies could harm patient care experience.',
    workCompleted: [
      'Reviewed authentication and session persistence across caregiver roles',
      'Audited API integration paths for notification triggers and state updates',
      'Identified and documented edge cases in patient routine scheduling',
      'Tested database query consistency during concurrent routine updates',
      'Provided remediation notes for error boundaries and fallback states'
    ],
    verifiableOutcomes: [
      'Documented reproducible findings across 4 key caregiver workflows',
      'Eliminated silent notification drop conditions under low connectivity',
      'Delivered structured handover report for the core engineering team'
    ],
    publicUrl: 'https://thrivekin.care/',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-backend-qa',
    title: 'Backend Systems & QA Framework',
    category: 'backend-qa',
    categoryLabel: 'Backend Engineering & QA',
    subtitle: 'High-impact debugging, API integration testing, and workflow validation for AI-enabled services.',
    role: 'Backend Engineering & QA Practitioner',
    techStack: ['Python', 'SQL', 'FastAPI', 'REST APIs', 'LLM Integration', 'Issue Triage'],
    problem:
      'High-throughput AI pipeline suffered from intermittent request timeouts, unbounded retries, and silent validation drops when external LLM endpoints experienced latency spikes.',
    workCompleted: [
      'Engineered structured reproduction test suites for failing backend endpoints',
      'Implemented robust retry backoff algorithms with jitter to prevent server thundering herds',
      'Standardized API error models and structured logging for observability',
      'Validated end-to-end data pipelines from user input to LLM response sanitization',
      'Created prioritized severity triage matrix for ongoing sprint tracking'
    ],
    verifiableOutcomes: [
      'Reduced uncaught backend exception rates during high-concurrency tests',
      'Cut bug reproduction time by 60% using standardized curl test vectors',
      'Established regression testing documentation and acceptance criteria'
    ],
    isNda: true,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-leadsigma',
    title: 'LeadSigma',
    category: 'b2b-saas',
    categoryLabel: 'AI-Assisted B2B Lead Intelligence',
    subtitle: 'Building and verifying web application features, lead scoring pipelines, and API integrations.',
    role: 'Full-Stack Development & Workflow Testing',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'OpenAI API', 'Data Enrichment APIs', 'Vercel'],
    problem:
      'Lead enrichment workflows needed to balance third-party API rate limits with responsive client-side UI feedback while processing batch domain lists.',
    workCompleted: [
      'Developed responsive frontend views for prospect scoring and filtering',
      'Coordinated frontend state with asynchronous backend qualification jobs',
      'Audited API integration paths for enrichment providers to handle 429 rate limits gracefully',
      'Implemented optimistic UI updates with rollback on submission failure',
      'Streamlined deployment configuration on Vercel'
    ],
    verifiableOutcomes: [
      'Successfully deployed functional SaaS application prototype',
      'Verified zero unhandled UI crashes on malformed CSV lead uploads',
      'Created clear demonstration walkthrough for early customer demos'
    ],
    publicUrl: 'https://lead-sigma-rouge.vercel.app/',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-xrpl-lab',
    title: 'XRPL Testing Lab — Demonstration Project',
    category: 'crypto-xrpl',
    categoryLabel: 'Crypto & XRPL Testing Demonstration',
    subtitle: 'A dedicated test suite validating XRPL testnet account interaction, transaction lifecycle, and client UX.',
    role: 'Independent Technical Investigation & Demo Builder',
    techStack: ['xrpl.js', 'XRP Ledger Testnet', 'TypeScript', 'WebSockets', 'React'],
    problem:
      'Hackathon teams and Web3 founders frequently suffer demo failures due to unhandled sequence numbers, unexpected tec codes, or unclear wallet connection states.',
    workCompleted: [
      'Built a clean interactive testing harness for XRPL Testnet accounts',
      'Constructed deterministic test cases for Payment transactions and sequence handling',
      'Simulated edge cases: insufficient reserves, unfunded accounts, and rejected signatures',
      'Documented clear user feedback patterns mapping tec and tem codes to plain English',
      'Prepared a repeatable test matrix and checklist for hackathon participants'
    ],
    verifiableOutcomes: [
      'Demonstrated 100% handling of all common XRPL testnet error codes',
      'Documented prevention pattern for duplicate transaction submission',
      'Published open test guidelines for XRPL hackathon builders'
    ],
    publicUrl: 'https://xrpl.org/docs',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-demo-studio',
    title: 'Technical Demo & Presentation Studio',
    category: 'demo-production',
    categoryLabel: 'Product Walkthrough & Demo Studio',
    subtitle: 'Transforming complex software architectures into clear, compelling screen demonstrations.',
    role: 'Demo Producer, Scriptwriter & Technical Editor',
    techStack: ['Screen Studio', 'Premiere Pro', 'Figma', 'Technical Storyboarding', 'Audio Engineering'],
    problem:
      'Engineering teams build impressive technical products but struggle to communicate their value in the 2–3 minutes allotted by hackathon judges and investors.',
    workCompleted: [
      'Authored concise walkthrough scripts focusing on value proposition and problem-solution fit',
      'Engineered structured demo paths that avoid empty states and long loading pauses',
      'Recorded crisp 4K screen captures with smooth cursor movements and zoom callouts',
      'Synchronized technical voice-over with dynamic UI highlights and code diagrams',
      'Exported multi-ratio cuts for hackathon submissions, Twitter/X announcements, and landing pages'
    ],
    verifiableOutcomes: [
      'Produced demonstration videos that communicate product core within 90 seconds',
      'Created reusable demo checklists for founder live presentations',
      'Delivered polished assets ready for competition submission'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'XRPL Testnet State Machine & RPC Sequence Flow',
    category: 'xrpl',
    categoryLabel: 'XRPL Workflows',
    caption: 'Architecture mapping client WebSocket connection, transaction signing, and ledger_index confirmation cycles.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    altText: 'Technical diagram of XRPL WebSocket state machine and transaction confirmation steps',
    relatedProjectName: 'XRPL Testing Lab'
  },
  {
    id: 'gal-2',
    title: 'Sample Audit Finding: Idempotency Vulnerability Matrix',
    category: 'audit-reports',
    categoryLabel: 'Audit Reports',
    caption: 'Structured vulnerability breakdown with severity classification, reproduction test vectors, and code remediation.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    altText: 'Technical audit matrix showing severity ratings and reproduction payloads',
    relatedProjectName: 'Hackathon Readiness Audit'
  },
  {
    id: 'gal-3',
    title: 'LeadSigma: Data Enrichment & Scoring Architecture',
    category: 'architecture',
    categoryLabel: 'Technical Architecture',
    caption: 'System flow showing asynchronous domain queue, enrichment API rate-limiters, and frontend optimistic UI updates.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    altText: 'System flowchart of AI lead enrichment pipeline and queue management',
    relatedProjectName: 'LeadSigma'
  },
  {
    id: 'gal-4',
    title: 'ThriveKin: Caregiver Session & Routine Engine State',
    category: 'architecture',
    categoryLabel: 'Technical Architecture',
    caption: 'State diagram mapping multi-role caregiver authentication, routine tracking, and cloud notification triggers.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    altText: 'State machine diagram for healthcare routine notifications and authentication',
    relatedProjectName: 'ThriveKin'
  },
  {
    id: 'gal-5',
    title: 'Demo Video Studio: Storyboard & Narrative Timeline',
    category: 'storyboard',
    categoryLabel: 'Video Storyboards',
    caption: 'Granular 120-second storyboard timing: Problem Hook (0-15s), Core Demo (15-75s), Architecture (75-100s), CTA (100-120s).',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
    altText: 'Demo video timeline with pacing markers, audio waveforms, and visual zoom cues',
    relatedProjectName: 'Demo Video Studio'
  },
  {
    id: 'gal-6',
    title: 'API Resilience Chaos Run: Circuit Breaker Verification',
    category: 'audit-reports',
    categoryLabel: 'Audit Reports',
    caption: 'Telemetry visualization showing automated fallback to cached state during simulated 500/504 gateway failures.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    altText: 'Telemetry dashboard showing latency spikes and circuit breaker recovery curves',
    relatedProjectName: 'Backend QA Systems'
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Software Engineering',
    description: 'Practical backend and frontend development for reliable production applications.',
    skills: [
      { name: 'Python', level: 'Experienced with', note: 'Backend services, scripts, automation' },
      { name: 'JavaScript & TypeScript', level: 'Experienced with', note: 'Modern ES6+, strict typing' },
      { name: 'React', level: 'Experienced with', note: 'Component architecture, state, hooks' },
      { name: 'Flask', level: 'Experienced with', note: 'Lightweight REST APIs, auth' },
      { name: 'SQL & Relational DBs', level: 'Experienced with', note: 'PostgreSQL, MySQL, SQLite' },
      { name: 'REST API Design & Integration', level: 'Experienced with', note: 'Clean schemas, pagination, error handling' },
      { name: 'Authentication Workflows', level: 'Experienced with', note: 'JWT, session tokens, OAuth basics' },
      { name: 'Application Debugging', level: 'Experienced with', note: 'Root-cause analysis, DevTools' }
    ]
  },
  {
    title: 'AI & Automation',
    description: 'Integrating LLMs, handling API variability, and ensuring dependable agentic actions.',
    skills: [
      { name: 'LLM API Integration', level: 'Experienced with', note: 'OpenAI, Anthropic, structured JSON outputs' },
      { name: 'AI-Enabled Product Workflows', level: 'Experienced with', note: 'Prompt orchestration, streaming' },
      { name: 'Input & Output Validation', level: 'Experienced with', note: 'Schema enforcement, hallucination boundaries' },
      { name: 'API Error Handling & Retries', level: 'Experienced with', note: 'Exponential backoff, rate-limit resilience' },
      { name: 'AI Product Evaluation', level: 'Used in projects', note: 'Consistency benchmarks, failure testing' },
      { name: 'Automation Reliability', level: 'Used in projects', note: 'Background task monitoring' }
    ]
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Systematic technical inspection to identify high-impact blockers before users do.',
    skills: [
      { name: 'Functional & Regression Testing', level: 'Experienced with', note: 'End-to-end user path verification' },
      { name: 'API & Integration Testing', level: 'Experienced with', note: 'Payload validation, status codes, mocks' },
      { name: 'Edge-Case & Failure Analysis', level: 'Experienced with', note: 'Timeout injections, invalid inputs' },
      { name: 'Bug Reproduction & Test Vectors', level: 'Experienced with', note: 'Minimal reproducible examples' },
      { name: 'Severity-Based Issue Triage', level: 'Experienced with', note: 'Impact vs. likelihood prioritization' },
      { name: 'Test Documentation', level: 'Experienced with', note: 'Actionable audit memos, checklists' },
      { name: 'Release & Hackathon Readiness', level: 'Experienced with', note: 'Pre-flight checks, smoke tests' }
    ]
  },
  {
    title: 'Crypto & Web3 Workflows',
    description: 'Demonstrated client testing on the XRP Ledger and Web3 application layers.',
    skills: [
      { name: 'XRPL Testnet Workflows', level: 'Used in projects', note: 'Faucet funding, accounts, balance queries' },
      { name: 'Wallet & Transaction Flow Testing', level: 'Used in projects', note: 'Signing, submission, confirmation status' },
      { name: 'Web3 Application Integration', level: 'Used in projects', note: 'Connecting frontend to ledger endpoints' },
      { name: 'Blockchain API / WebSocket Interaction', level: 'Used in projects', note: 'xrpl.js client, node subscriptions' },
      { name: 'Smart Contract Interaction Testing', level: 'Currently developing', note: 'Tested strictly within verified scope' },
      { name: 'Network & State Handling', level: 'Used in projects', note: 'Detecting network lag, dropped sockets' }
    ]
  },
  {
    title: 'Product Presentation & Demo Studio',
    description: 'Crafting concise, professional visual narratives that communicate software value.',
    skills: [
      { name: 'Screen Recording & Pacing', level: 'Experienced with', note: 'Clean cursor paths, 4K resolution' },
      { name: 'Product Walkthrough Planning', level: 'Experienced with', note: 'Feature prioritization, narrative arc' },
      { name: 'Demo Scripting & Voice Sync', level: 'Experienced with', note: 'Clear technical storytelling' },
      { name: 'Video Editing & Motion Callouts', level: 'Experienced with', note: 'Premiere Pro, Screen Studio' },
      { name: 'Captions & Technical Callouts', level: 'Experienced with', note: 'Dynamic zooms, code highlights' },
      { name: 'Demo Asset Preparation', level: 'Experienced with', note: 'Social cutdowns, hackathon exports' }
    ]
  },
  {
    title: 'Tools & Platforms',
    description: 'Genuine daily tools used for development, testing, and presentation.',
    skills: [
      { name: 'GitHub & Git', level: 'Experienced with', note: 'Branching, PRs, code reviews' },
      { name: 'Vercel', level: 'Experienced with', note: 'Deployment, preview URLs, env vars' },
      { name: 'Supabase & Firebase', level: 'Used in projects', note: 'Auth, realtime, Firestore' },
      { name: 'Browser Developer Tools', level: 'Experienced with', note: 'Network throttling, console, DOM inspector' },
      { name: 'API Testing Tools', level: 'Experienced with', note: 'Postman, cURL, HTTPie' },
      { name: 'Screen Studio & Premiere Pro', level: 'Experienced with', note: 'High-end demo production' },
      { name: 'XRPL Developer Tools', level: 'Used in projects', note: 'XRPL Explorer, Faucet, xrpl.js' }
    ]
  }
];

export const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'I look for failure, not just functionality.',
    description:
      'A happy-path demo is not proof that the whole application behaves correctly. I examine edge cases, error handling, network drops, and the subtle workflows users depend on.'
  },
  {
    number: '02',
    title: 'I prioritize what matters.',
    description:
      'Not every issue deserves the same urgency. I help teams separate high-impact blockers that could lose an investor or judge from cosmetic improvements that can wait.'
  },
  {
    number: '03',
    title: 'I connect engineering to presentation.',
    description:
      'A product can be technically functional and still be difficult to demonstrate. I work across product reliability and clear technical storytelling so your work is respected.'
  },
  {
    number: '04',
    title: 'I give actionable feedback.',
    description:
      'Findings should be reproducible, prioritized, and specific enough for a team to act on immediately—complete with curl test vectors and remediation code diffs.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Scope & Context Alignment',
    description:
      'We discuss the product, deadline, technical context, repository access, and your target outcome (hackathon, investor demo, or launch). We define explicit boundaries before any work starts.'
  },
  {
    step: '02',
    title: 'Inspect',
    tagline: 'Rigorous Technical Examination',
    description:
      'I review the agreed application, repository, workflows, APIs, or demo materials. I test normal paths, edge cases, latency variations, and failure scenarios.'
  },
  {
    step: '03',
    title: 'Prioritize',
    tagline: 'Structured Findings & Memos',
    description:
      'I document findings with severity classifications, clear reproduction steps, and practical remediation recommendations. You receive an actionable report, not vague complaints.'
  },
  {
    step: '04',
    title: 'Improve & Verify',
    tagline: 'Hands-on Fixes or Handover',
    description:
      'Where contracted, I implement agreed bug fixes, retest relevant workflows, verify the demo path, and provide a clear handover summary ready for your presentation.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What does a hackathon readiness audit include?',
    answer:
      'A hackathon readiness audit covers an agreed scope of your existing prototype: application workflows, third-party integrations, API error handling, deployment configurations, and the specific demo path judges will follow. You receive a structured audit report with prioritized findings (Critical, High, Medium, Low), reproduction steps, curl/CLI test vectors where applicable, and actionable remediation recommendations.'
  },
  {
    question: 'Do you work with XRPL and Web3 projects?',
    answer:
      'Yes. I provide application-level testing and integration verification for projects building on the XRP Ledger and Web3. This includes wallet connection and account switching, transaction submission, status confirmation, RPC error handling, testnet configuration, and user feedback surrounding the ledger. Specialized protocol engineering or formal cryptographic smart-contract security audits are outside this scope.'
  },
  {
    question: 'Can you fix the issues you discover?',
    answer:
      'Yes, where the issue falls within the agreed scope and technical capabilities. My Critical Bug-Fix Sprint service is specifically designed for this. Implementation is quoted separately when it is not part of the initial audit so you have full control over scope and budget.'
  },
  {
    question: 'Can you create a demo video for my product?',
    answer:
      'Yes. My Demo Studio service handles product walkthrough planning, storyboarding, 4K screen recording, editing, pacing, voice-over integration, captions, zoom callouts, and multi-ratio exports for hackathon submissions, website landing pages, and social announcements.'
  },
  {
    question: 'Do you work with unfinished products?',
    answer:
      'Yes, provided the project has enough functional code to review or demonstrate. Early-stage prototypes and production applications require different testing scopes, which we agree upon before beginning.'
  },
  {
    question: 'Can you sign an NDA?',
    answer:
      'Yes. Confidentiality requirements can be discussed before repository access is granted, and an appropriate mutual non-disclosure agreement (NDA) can be arranged where mutually acceptable.'
  },
  {
    question: 'Do you guarantee that my project will be launch-ready?',
    answer:
      'No independent technical consultant can ethically guarantee the complete absence of every defect or the commercial success of a launch. What I deliver is rigorous testing, verified reproduction evidence, prioritized risk identification, and concrete improvements to agreed workflows so your product is as dependable and well-presented as possible.'
  },
  {
    question: 'How much does a consultation cost?',
    answer:
      'Small, clearly scoped engagements start with published pilot pricing: Hackathon Readiness Audits typically start at $150–$250, Demo Reliability Packages at $200–$400, and focused Bug-Fix Sprints at $300–$600. Larger codebases, custom advisory retainers, and bespoke demo video productions are quoted individually based on repository size, technical complexity, access, and turnaround time.'
  }
];
