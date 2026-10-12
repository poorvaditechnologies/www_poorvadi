import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { useCookieConsent } from './consentContext';
import styles from './CookieBanner.module.css';

/**
 * First-visit consent banner — a compact floating panel on desktop and a
 * bottom sheet on mobile. Deliberately NON-modal: the site stays visible and
 * interactive behind it. All three decisions persist; the banner never
 * returns once a choice is made.
 */
export function CookieBanner() {
  const { acceptAll, rejectOptional, openPreferences } = useCookieConsent();

  return (
    <motion.div
      className={styles.banner}
      role="region"
      aria-label="Cookie consent"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 16, opacity: 0 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className={styles.title}>Your privacy matters</p>
      <p className={styles.text}>
        We use cookies to improve your experience and understand how the website is used. Read our{' '}
        <Link to="/privacy" className={styles.link}>
          Privacy Policy
        </Link>
        .
      </p>

      <div className={styles.actions}>
        <Button type="button" variant="outline" size="sm" onClick={rejectOptional}>
          Reject
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={openPreferences}>
          Manage Preferences
        </Button>
        <Button type="button" size="sm" onClick={acceptAll}>
          Accept
        </Button>
      </div>
    </motion.div>
  );
}
