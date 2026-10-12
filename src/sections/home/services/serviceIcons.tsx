import type { ReactElement } from 'react';
import type { ServiceCard as ServiceCardData } from '@/constants/portfolio';

/**
 * Card icons — small inline SVGs in restrained coral/teal accents.
 * Stroke-only, 24px grid, decorative (aria-hidden on the wrapper).
 *
 * Shared by ServicesSection and BuildRoadmap; icon *styling* stays with each
 * section's CSS module, passed in via `className`.
 */
const ICON_PATHS: Record<ServiceCardData['icon'], ReactElement> = {
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
      <path d="M9.5 8.5 7.5 11l2 2.5M14.5 8.5l2 2.5-2 2.5" />
    </>
  ),
  backend: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  design: (
    <>
      <path d="M4 20l4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5 16l-1 4z" />
      <path d="M13.5 6.5l3 3" />
    </>
  ),
  devops: (
    <>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 18H7z" />
      <path d="M12 12v4M10 14h4" />
    </>
  ),
  support: (
    <>
      <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" />
      <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  maintenance: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  ai: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  llm: (
    <>
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M8 11h6M11 8v6" />
    </>
  ),
  growth: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      <path d="M14 6l3-3 3 3" />
    </>
  ),
};

interface CardIconProps {
  name: ServiceCardData['icon'];
  /** Wrapper class from the caller's CSS module — icon box styles live there. */
  className?: string;
}

export function CardIcon({ name, className }: CardIconProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {ICON_PATHS[name]}
      </svg>
    </span>
  );
}
