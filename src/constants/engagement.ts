/**
 * Engagement Models (§7) and the RaaS Delivery Loop (§8).
 * Exact Figma wording.
 */

export const ENGAGEMENT = {
  eyebrow: 'FLEXIBLE COLLABORATION',
  heading: 'Two ways to work with us',
  supporting: 'Choose the engagement model that matches your risk profile and operational cadence.',
  models: [
    {
      index: 'MODEL 01',
      title: 'Project-Based Delivery',
      badge: null,
      description: 'You define the roadmap, we engineer and deliver to exact scope.',
      bullets: [
        'Defined scope, milestone-based releases & clear timelines',
        'Fixed or time-and-materials pricing architecture',
        'Complete IP and codebase transfer upon final sign-off',
      ],
      idealFor: 'Well-defined scopes, new MVPs, and infrastructure overhauls.',
      cta: 'Discuss Your Project',
      highlighted: false,
    },
    {
      index: 'MODEL 02',
      title: 'Result as a Service (RaaS)',
      badge: 'NEW & POPULAR',
      description:
        'Zero risk. You only pay when predetermined, verifiable business results are achieved.',
      bullets: [
        'Shared risk and 100% aligned engineering incentives',
        'Tied to delivery metrics (uptime, user adoption, transaction milestones)',
        'Transparent verification before any invoice settlement',
      ],
      idealFor:
        'High-growth founders, performance-driven leaders, and outcomes over billable hours.',
      cta: 'Explore RaaS Model',
      highlighted: true,
    },
  ],
} as const;

export const RAAS_LOOP = {
  eyebrow: 'THE RAAS DELIVERY LOOP',
  heading: 'The RaaS Delivery Loop',
  supporting: 'Verifiable milestones from intake to payment settlement.',
  steps: [
    {
      step: 'STEP 01',
      title: 'Define the Goal',
      description: 'Set verifiable KPIs, SLAs, criteria, and quantitative delivery milestones.',
    },
    {
      step: 'STEP 02',
      title: 'We Build & Execute',
      description:
        'Agile engineering sprints with transparent Git repositories and staging access.',
    },
    {
      step: 'STEP 03',
      title: 'Result is Delivered',
      description: 'Rigorous QA, load-testing, and mutual verification of established KPIs.',
    },
    {
      step: 'STEP 04',
      title: 'You Pay',
      description:
        'Invoice release and financial settlement occur strictly after verified sign-off.',
    },
  ],
} as const;
