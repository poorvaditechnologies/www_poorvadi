/** §15–16: final CTA / architecture review and footer content. Exact Figma wording. */

export const FINAL_CTA = {
  eyebrow: 'START YOUR JOURNEY',
  heading: "Have an idea? Let's turn it into measurable results.",
  supporting:
    'Whether you need a dedicated development squad or want to explore our Result as a Service model, our team in Karnataka is ready.',
  primaryCta: 'Book a Free Consultation',
  secondaryCta: 'Talk to Us on WhatsApp',
  /** Placeholder: swap in the real WhatsApp number once supplied (wa.me/<number>). */
  whatsappHref: 'https://wa.me/',
  emailLead: 'Or email directly:',
  form: {
    heading: 'Request an Architecture Review',
    supporting: 'Receive a scoped engineering roadmap within 24 hours.',
    nameLabel: 'YOUR NAME',
    emailLabel: 'WORK EMAIL',
    preferenceLabel: 'ENGAGEMENT PREFERENCE',
    summaryLabel: 'PROJECT SUMMARY',
    submit: 'Submit Architecture Inquiry',
    preferences: ['Project-Based Delivery', 'Result as a Service (RaaS)'],
  },
} as const;

export const FOOTER = {
  description:
    'Poorvadi Technologies LLP — Engineering digital products and modern cloud software. Crafted with pride in Tumkur, Karnataka, India.',
  columns: [
    {
      title: 'SERVICES',
      links: [
        { label: 'Build Services', href: '#services' },
        { label: 'Scale & Operate', href: '#services' },
        { label: 'Growth & Intelligence', href: '#services' },
        { label: 'DevOps & Cloud', href: '#services' },
        { label: 'AI Integrations', href: '#services' },
        { label: 'LLM Training', href: '#services' },
      ],
    },
    {
      title: 'PRODUCTS & MODELS',
      links: [
        { label: 'Result as a Service (RaaS)', href: '#engagement' },
        { label: 'Project-Based Delivery', href: '#engagement' },
        { label: 'Financing Engine SaaS', href: '#products' },
        { label: 'Borrower Lead Platform', href: '#products' },
        { label: 'Fitness Cloud CRM', href: '#products' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Preferences', action: 'cookies' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Preferences', action: 'cookies' },
  ],
} as const;
