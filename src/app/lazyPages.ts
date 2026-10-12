import { lazy } from 'react';

// Legal/error pages are rarely visited — keep them out of the initial bundle
// that every landing-page visitor has to download. Split into their own
// module so react-refresh doesn't flag router.tsx for mixing a non-component
// export (`router`) with component definitions.
export const PrivacyPage = lazy(() =>
  import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })),
);
export const TermsPage = lazy(() =>
  import('@/pages/TermsPage').then((m) => ({ default: m.TermsPage })),
);
export const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);
