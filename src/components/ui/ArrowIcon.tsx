interface ArrowIconProps {
  className?: string;
}

/**
 * Horizontal "view more" arrow — the hover affordance repeated across
 * service cards, person cards, and roadmap milestones. Wrapper styling
 * (colour, hover nudge) stays with the caller's own CSS module.
 */
export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg width="18" height="12" viewBox="0 0 22 12" fill="none" focusable="false">
        <path
          d="M1 6h19M15.5 1.5 20 6l-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
