import type { NavLink } from '@/types';

// Site-wide content and settings. Edit here instead of hard-coding in components.
export const SITE = {
  name: 'Poorvadi',
  legalName: 'Poorvadi Technologies LLP',
  badge: 'LLP',
  tagline: 'Engineering digital products and modern cloud software.',
  email: 'contact@poorvadi.com',
  /** Placeholder until the real number is supplied from the Figma/contact sheet. */
  phone: '+91 00000 00000',
  location: 'Tumkur, Karnataka 572101, India',
  status: 'GSTIN & LLP verified',
} as const;

/**
 * Hero copy. Kept out of the component so wording can change without touching
 * markup. Exact Figma wording.
 */
export const HERO = {
  eyebrow: 'FULL-STACK ENGINEERING & SAAS STUDIO • TUMKUR, KARNATAKA',
  headline: 'Engineering outcomes, not just code.',
  description:
    'From web and mobile apps to AI integrations and DevOps, Poorvadi builds, scales, and maintains technology that drives real business results.',
  primaryCta: {
    label: 'Start a Project',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Explore Our Products',
    href: '#products',
  },
  trustLine: {
    /** Rendered bold/foreground; the remainder stays muted. */
    emphasis: 'Trusted by 6 growing businesses',
    remainder: 'Delivering worldwide from India',
  },
} as const;

/** Light trust strip directly below the hero. */
export const TRUSTED_BY = {
  eyebrow: 'TRUSTED BY INNOVATIVE TEAMS & SCALING BUSINESSES',
  clients: [
    'Client Alpha',
    'FinTech Beta',
    'LogiSync',
    'HealthStack',
    'Apex Retail',
    'VentureFlow',
  ],
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Engagement Models', href: '#engagement' },
  { label: 'Products', href: '#products' },
  { label: 'Case Studies', href: '#case-studies' },
];

/** Primary call to action rendered in the navbar. */
export const NAV_CTA = {
  label: 'Book Consultation',
  href: '#contact',
} as const;
