import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useId, useRef, type RefObject } from 'react';
import { Button, SocialLinks } from '@/components/ui';
import type { Person } from '@/constants/people';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './ProfileDrawer.module.css';

interface ProfileDrawerProps {
  person: Person | null;
  onClose: () => void;
  /** The card that opened the drawer — focus returns here on close. */
  returnFocusRef: RefObject<HTMLElement | null>;
}

/**
 * Profile detail — right-side drawer on desktop, bottom sheet on mobile.
 * Modal dialog semantics: labelled, focus-trapped, Escape closes, backdrop
 * click closes, scroll-locked, focus restored to the originating card.
 */
export function ProfileDrawer({ person, onClose, returnFocusRef }: ProfileDrawerProps) {
  return (
    <AnimatePresence>
      {person && (
        <ProfilePanel
          key={person.id}
          person={person}
          onClose={onClose}
          returnFocusRef={returnFocusRef}
        />
      )}
    </AnimatePresence>
  );
}

interface ProfilePanelProps extends Omit<ProfileDrawerProps, 'person'> {
  person: Person;
}

function ProfilePanel({ person, onClose, returnFocusRef }: ProfilePanelProps) {
  const isDesktop = useMediaQuery('(min-width: 48rem)');
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useFocusTrap(panelRef, true, onClose, returnFocusRef);

  const panelVariants: Variants = isDesktop
    ? {
        hidden: { x: '100%' },
        visible: { x: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
        exit: { x: '100%', transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } },
      }
    : {
        hidden: { y: '100%' },
        visible: { y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
        exit: { y: '100%', transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close profile">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={styles.imageWrap}>
          <motion.img
            className={styles.image}
            src={person.image}
            alt={`${person.name}, ${person.role}`}
            width={640}
            height={800}
            loading="lazy"
            decoding="async"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className={styles.body}>
          <h2 id={titleId} className={styles.name}>
            {person.name}
          </h2>
          <p className={styles.role}>{person.role}</p>
          <p className={styles.contribution}>{person.contribution}</p>
          <p className={styles.bio}>{person.bio}</p>

          <SocialLinks person={person} />

          {person.contact?.email ? (
            <Button
              href={`mailto:${person.contact.email}`}
              variant="outline"
              size="sm"
              className={styles.contact}
              aria-label={`Email ${person.name}`}
            >
              Contact
            </Button>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
