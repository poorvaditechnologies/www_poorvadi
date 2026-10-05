import type { NavLink } from '@/types';

// Site-wide content and settings. Edit here instead of hard-coding in components.
export const SITE = {
  name: 'Poorvadi',
  tagline: 'Digital products, engineered for real businesses.',
  email: 'hello@example.com',
  phone: '+91 00000 00000',
} as const;

/**
 * Hero copy. Kept out of the component so wording can change without touching
 * markup. Claims stay factual — no metrics, awards or client counts.
 */
export const HERO = {
  eyebrow: 'Digital Engineering & Technology',
  /** One entry per rendered line; keeps the headline rhythm deliberate. */
  headline: ['Engineering digital experiences', 'that move businesses', 'forward.'],
  description:
    'We design and build digital products for businesses. From the first sketch to production release, we focus on clarity, reliability and the details that make software feel effortless.',
  primaryCta: {
    label: 'Start a conversation',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Explore our work',
    /**
     * Temporary target: the work/projects section does not exist yet, so this
     * points at About to keep the link functional. Swap to '#work' when that
     * section is built — no markup change needed.
     */
    href: '#about',
  },
} as const;

/**
 * "What we do" section copy.
 *
 * Describes capabilities only. Deliberately free of metrics, client names,
 * awards, certifications or years-in-business claims — none of that exists in
 * the repo, so none of it is asserted here.
 */
export const ABOUT = {
  eyebrow: 'What we do',
  heading: 'Technology built around your business.',
  intro:
    'Poorvadi helps businesses design, build, improve and scale the digital products they depend on. We work across strategy, interface design and engineering, shaping technology around how your business actually operates.',
  capabilities: [
    {
      index: '01',
      title: 'Build',
      description: 'Product engineering, web applications, and digital experiences.',
    },
    {
      index: '02',
      title: 'Scale',
      description: 'Reliable architecture, APIs, cloud-ready systems, and performance.',
    },
    {
      index: '03',
      title: 'Intelligence',
      description: 'Data, automation, and intelligent technology solutions.',
    },
    {
      index: '04',
      title: 'Grow',
      description: 'Continuous improvement, optimization, and long-term technology support.',
    },
  ],
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/** Primary call to action rendered in the navbar. */
export const NAV_CTA = {
  label: 'Talk to us',
  href: '#contact',
} as const;
