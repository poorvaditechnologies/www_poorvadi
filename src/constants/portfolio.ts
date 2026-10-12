/**
 * Engineering Portfolio — the four service groups (§6 of the spec).
 *
 * Exact Figma wording. Icon keys map to inline SVGs in the ServicesSection so
 * content stays declarative and free of JSX.
 */

export interface ServiceCard {
  title: string;
  description: string;
  icon:
    | 'frontend'
    | 'backend'
    | 'mobile'
    | 'design'
    | 'devops'
    | 'support'
    | 'maintenance'
    | 'ai'
    | 'llm'
    | 'seo'
    | 'growth';
}

export interface ServiceGroup {
  label: string;
  /** Right-side category descriptor, e.g. "01 — ARCHITECT & LAUNCH". */
  descriptor: string;
  /** Optional badge rendered next to the category label (e.g. AI-First). */
  badge?: string;
  cards: ServiceCard[];
}

export const PORTFOLIO = {
  eyebrow: 'ENGINEERING PORTFOLIO',
  heading: 'Everything you need to build and grow digitally',
  supporting: 'From zero-to-one product development to ongoing intelligence and scaling.',
  groups: [
    {
      label: 'BUILD',
      descriptor: '01 — ARCHITECT & LAUNCH',
      cards: [
        {
          title: 'Frontend Development',
          description:
            'Responsive, ultra-fast interfaces engineered with React, Next.js, and modern TypeScript frameworks.',
          icon: 'frontend',
        },
        {
          title: 'Backend Development',
          description:
            'Distributed APIs, asynchronous worker architectures, microservices, and resilient databases.',
          icon: 'backend',
        },
        {
          title: 'Mobile App Development',
          description:
            'Native and hybrid iOS & Android apps designed for frictionless user onboarding and instant responsiveness.',
          icon: 'mobile',
        },
        {
          title: 'Web Design & UI/UX',
          description:
            'Design systems, intentional user journeys, micro-interactions, and conversion-optimized interfaces.',
          icon: 'design',
        },
      ],
    },
    {
      label: 'SCALE & OPERATE',
      descriptor: '02 — RESILIENCE & RUNTIME',
      cards: [
        {
          title: 'DevOps & Cloud',
          description:
            'Zero-downtime CI/CD pipelines, automated AWS/GCP orchestration, Terraform infrastructure as code.',
          icon: 'devops',
        },
        {
          title: 'Existing Application Support',
          description:
            'Taking over legacy codebases, resolving technical debt, security patching, and structural refactoring.',
          icon: 'support',
        },
        {
          title: 'Maintenance & 24/7 Support',
          description:
            'Rigorous SLA-backed monitoring, automated intrusion prevention, and round-the-clock incident response.',
          icon: 'maintenance',
        },
      ],
    },
    {
      label: 'INTELLIGENCE',
      descriptor: '03 — AUTOMATION & REASONING',
      badge: 'AI-First',
      cards: [
        {
          title: 'AI Integrations',
          description:
            'Custom LLM agents, vector embeddings, semantic retrieval systems, and contextual internal workflow automations.',
          icon: 'ai',
        },
        {
          title: 'LLM Training & Fine-Tuning',
          description:
            'Domain-specialized model adaptations, private data distillation, evaluation harnesses, and RLHF pipelines.',
          icon: 'llm',
        },
      ],
    },
    {
      label: 'GROW',
      descriptor: '04 — DISTRIBUTION & REACH',
      cards: [
        {
          title: 'SEO & Performance Optimization',
          description:
            'Core Web Vitals tuning, programmatic indexing architectures, structured metadata, and rendering speeds under 1s.',
          icon: 'seo',
        },
        {
          title: 'Digital Growth & Marketing',
          description:
            'Data-driven user acquisition engines, product-led funnels, attribution tracking, and growth instrumentation.',
          icon: 'growth',
        },
      ],
    },
  ] satisfies ServiceGroup[],
} as const;
