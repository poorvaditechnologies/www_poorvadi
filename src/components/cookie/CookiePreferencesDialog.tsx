import { motion } from 'motion/react';
import { useId, useRef, useState } from 'react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { Button } from '@/components/ui';
import { useCookieConsent } from './consentContext';
import styles from './CookiePreferencesDialog.module.css';

/**
 * Cookie preferences modal — Necessary cookies are always on; optional
 * analytics are off unless the user turns them on. Modal dialog semantics:
 * labelled, focus-trapped, Escape closes, focus returns to the trigger, and
 * the page behind is scroll-locked while open.
 */
export function CookiePreferencesDialog() {
  const { decision, closePreferences, savePreferences, acceptAll, rejectOptional } =
    useCookieConsent();
  const [analytics, setAnalytics] = useState(() => decision?.analytics ?? false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const necessaryId = useId();
  const analyticsId = useId();

  useFocusTrap(dialogRef, true, closePreferences);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closePreferences();
      }}
    >
      <motion.div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            Cookie preferences
          </h2>
          <button
            type="button"
            className={styles.close}
            onClick={closePreferences}
            aria-label="Close cookie preferences"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <p className={styles.intro}>
          Choose which cookies this website may use. Necessary cookies keep the site working and
          cannot be switched off.
        </p>

        <ul className={styles.preferences}>
          <li className={styles.preference}>
            <div className={styles.preferenceText}>
              <p className={styles.preferenceName} id={necessaryId}>
                Necessary cookies
              </p>
              <p className={styles.preferenceHint}>
                Required for core functionality — always enabled.
              </p>
            </div>
            <input
              type="checkbox"
              role="switch"
              className={styles.switch}
              checked
              disabled
              aria-labelledby={necessaryId}
            />
          </li>

          <li className={styles.preference}>
            <div className={styles.preferenceText}>
              <label className={styles.preferenceName} htmlFor={analyticsId}>
                Analytics / optional cookies
              </label>
              <p className={styles.preferenceHint}>
                Help us understand how the website is used. Off by default.
              </p>
            </div>
            <input
              id={analyticsId}
              type="checkbox"
              role="switch"
              className={styles.switch}
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
            />
          </li>
        </ul>

        <div className={styles.actions}>
          <Button type="button" variant="ghost" size="sm" onClick={rejectOptional}>
            Reject Optional
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => savePreferences(analytics)}
          >
            Save Preferences
          </Button>
          <Button type="button" size="sm" onClick={acceptAll}>
            Accept All
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
