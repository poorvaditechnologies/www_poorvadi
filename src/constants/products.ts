/**
 * Proprietary SaaS products (§9). Exact Figma wording.
 * `panel` holds the metric/status readouts shown in the Figma product cards;
 * `bullets` are the visible feature lists.
 */

export interface Product {
  name: string;
  category: string;
  description: string;
  panel: { label: string; value: string }[];
  bullets: string[];
  cta: string;
}

export const PRODUCTS = {
  eyebrow: 'PROPRIETARY SAAS',
  heading: 'Products built and operated by Poorvadi',
  supporting:
    'In addition to client engineering, we build and scale proprietary SaaS platforms across lending, qualification, and operational software.',
  items: [
    {
      name: 'FundPulse',
      category: 'FINANCING ENGINE SAAS',
      description:
        'Next-gen underwriting, credit line orchestration, and disbursement platform for modern non-banking lending institutions.',
      panel: [
        { label: 'STATUS', value: 'LIVE' },
        { label: 'UPTIME', value: '99.98%' },
        { label: 'MODEL', value: 'NBFC CORE' },
      ],
      bullets: [
        'Automated borrower assessment engine',
        'Multi-bank API routing & reconciliation',
        'Real-time statutory compliance ledger',
      ],
      cta: 'Request Demo',
    },
    {
      name: 'BorrowerIQ',
      category: 'LEAD PLATFORM',
      description:
        'High-conversion borrower acquisition platform built for financial firms to capture, KYC-qualify, and route pre-vetted leads.',
      panel: [
        { label: 'STATUS', value: 'LIVE' },
        { label: 'CONVERSION', value: 'OPTIMIZED' },
        { label: 'PIPELINE', value: 'KYC-ROUTED' },
      ],
      bullets: [
        'Dynamic eligibility & rate calculator',
        'Automated CIBIL and KYC verification',
        'Direct CRM handoff pipeline',
      ],
      cta: 'Request Demo',
    },
    {
      name: 'FitPulse CRM',
      category: 'CLUB OPERATING SYSTEM',
      description:
        'End-to-end management software for fitness centers, athletic clubs, and multi-location health studios.',
      panel: [
        { label: 'STATUS', value: 'LIVE' },
        { label: 'RENEWALS', value: 'AUTO-UPI' },
        { label: 'ACCESS', value: 'BIOMETRIC' },
      ],
      bullets: [
        'Automated UPI subscription renewals',
        'Biometric attendance device syncing',
        'Member workout & churn retention tracking',
      ],
      cta: 'Request Demo',
    },
  ] satisfies Product[],
} as const;
