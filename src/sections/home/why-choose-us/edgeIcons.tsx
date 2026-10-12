import type { ReactElement } from 'react';

export type EdgeIconName = 'delivery' | 'pricing' | 'architecture';

/**
 * "Why choose us" icons — small inline SVGs, same stroke-only 24px-grid
 * convention as serviceIcons.tsx. Kept in its own registry (rather than
 * folded into CardIcon) since the icon set belongs to a different domain.
 */
const ICON_PATHS: Record<EdgeIconName, ReactElement> = {
  delivery: (
    <>
      <path d="M12 3l8 4v5c0 4.5-3.2 8.2-8 10-4.8-1.8-8-5.5-8-10V7l8-4z" />
      <path d="M8.5 12l2.5 2.5 4.5-4.5" />
    </>
  ),
  pricing: (
    <>
      <path d="M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 1.6 2.6 5 3.2 5 1.5 5 3.3-2.2 3-5 3-5-1.1-5-3" />
    </>
  ),
  architecture: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <path d="M13 16.5h7M16.5 13v7" />
    </>
  ),
};

interface EdgeIconProps {
  name: EdgeIconName;
  className?: string;
}

export function EdgeIcon({ name, className }: EdgeIconProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg
        width="20"
        height="20"
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
