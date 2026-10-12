/**
 * §10–14 proof content: the Poorvadi Edge, stats, delivery lifecycle,
 * case studies and testimonials. Exact Figma wording.
 * "Purvaji" in testimonial 1 is corrected to "Poorvadi" per the typo rule.
 */

export const EDGE = {
  eyebrow: 'THE POORVADI EDGE',
  heading: 'Why visionary founders choose us',
  supporting:
    'A high-velocity software engineering studio combining tier-one engineering pedigree with flexible financial structures.',
  cards: [
    {
      title: 'End-to-End Delivery',
      description:
        'From UX design to database schema and multi-cloud deployment, everything happens under one unified roof.',
      icon: 'delivery',
    },
    {
      title: 'Result-Based Pricing (RaaS)',
      description:
        'Our pioneering RaaS model guarantees that you only settle fees once target business outcomes are verified.',
      icon: 'pricing',
    },
    {
      title: 'AI-First Architecture',
      description:
        'We embed contextual intelligence, reasoning engines, and automated data pipelines into your existing tech stack.',
      icon: 'architecture',
    },
  ],
} as const;

export const STATS = [
  { value: 6, suffix: '+', label: 'Active Clients' },
  { value: 12, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '', label: 'Proprietary SaaS' },
  { value: 11, suffix: '', label: 'Practice Areas' },
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
] as const;

export const LIFECYCLE = {
  eyebrow: 'DISCIPLINED VELOCITY',
  heading: 'Our 5-Step Delivery Lifecycle',
  steps: [
    {
      index: '01',
      title: 'Discover & Architect',
      description: 'Technical scoping, schema design, and KPI alignment.',
    },
    {
      index: '02',
      title: 'Interactive Design',
      description: 'Figma prototypes, component libraries, and UX testing.',
    },
    {
      index: '03',
      title: 'Agile Development',
      description: 'Two-week sprint cadences and continuous staging previews.',
    },
    {
      index: '04',
      title: 'Rigorous QA & Deploy',
      description: 'Automated tests, security audits, and zero-downtime cutover.',
    },
    {
      index: '05',
      title: 'Maintain & Grow',
      description: 'Continuous uptime monitoring, performance tuning, and scaling.',
    },
  ],
} as const;

export const CASE_STUDIES = {
  eyebrow: 'PROVEN OUTCOMES',
  heading: 'Real engineering for verified scale',
  supporting:
    'See how our tailored software solutions and RaaS delivery model generated verifiable ROI.',
  items: [
    {
      id: 'CASE-01',
      sector: 'FINTECH SCALE',
      metric: '74%',
      metricLabel: 'Reduction in Loan Processing Time',
      problem:
        'Severe operational bottlenecks and manual document checks causing customer abandonment.',
      solution:
        'Deployed automated asynchronous verification microservices with instant KYC verification.',
      category: 'LENDING AUTOMATION',
    },
    {
      id: 'CASE-02',
      sector: 'HEALTH & FITNESS',
      metric: '3.2×',
      metricLabel: 'Boost in On-Time Membership Renewals',
      problem:
        '40%+ churn due to manual cash collection and lack of automated communication channels.',
      solution:
        'Implemented FitPulse CRM with integrated UPI recurring debits and biometric turnstiles.',
      category: 'CLUB OPERATIONS',
    },
    {
      id: 'CASE-03',
      sector: 'ENTERPRISE B2B SAAS',
      metric: '99.98%',
      metricLabel: 'SLA Uptime Achieved',
      problem:
        'Legacy monolithic architecture suffered frequent cascading database lockouts under traffic spikes.',
      solution:
        'Containerized refactoring, managed AWS ECS clusters, and proactive zero-downtime CI/CD pipelines.',
      category: 'CLOUD INFRASTRUCTURE',
    },
  ],
} as const;

export const TESTIMONIALS = {
  eyebrow: 'VERIFIED PARTNER FEEDBACK',
  heading: 'What engineering leaders say',
  items: [
    {
      quote:
        "Working with Poorvadi transformed our underwriting velocity. The team's Result as a Service model meant their skin was in the game from day one. They didn't just deliver clean code; they delivered a 74% efficiency jump.",
      author: '[Client Alpha Leader]',
      role: 'Chief Technology Officer, [FinTech Beta Partner]',
    },
    {
      quote:
        "Poorvadi's engineering squad in Tumkur operates with the rigor of a top Silicon Valley team. Direct engineer communication, flawless sprint execution, and zero unnecessary overhead. FitPulse CRM has redefined our club operations.",
      author: '[HealthStack Founder]',
      role: 'Managing Director, [Regional Fitness Network]',
    },
  ],
} as const;
