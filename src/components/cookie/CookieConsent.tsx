import { AnimatePresence } from 'motion/react';
import { CookieBanner } from './CookieBanner';
import { CookiePreferencesDialog } from './CookiePreferencesDialog';
import { useCookieConsent } from './consentContext';

/**
 * Orchestrates the cookie experience: shows the first-visit banner until a
 * decision is persisted, and the preferences dialog whenever it is opened
 * (from the banner or the footer). Mounted once in MainLayout.
 */
export function CookieConsent() {
  const { decision, preferencesOpen } = useCookieConsent();

  return (
    <>
      <AnimatePresence>{decision === null && <CookieBanner key="cookie-banner" />}</AnimatePresence>
      <AnimatePresence>
        {preferencesOpen && <CookiePreferencesDialog key="cookie-preferences" />}
      </AnimatePresence>
    </>
  );
}
