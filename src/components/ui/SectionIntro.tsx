import type { ReactNode } from 'react';
import { FadeIn } from '@/components/animations';
import styles from './SectionIntro.module.css';

interface SectionIntroProps {
  eyebrow: string;
  heading: ReactNode;
  headingId: string;
  supporting?: ReactNode;
  /** Light sections draw a short rule before the eyebrow; dark bands skip it. */
  accentRule?: boolean;
  className?: string;
}

/**
 * Eyebrow + heading + optional supporting line, wrapped in the section's
 * scroll-reveal — the intro pattern nearly every home section repeats.
 * Colour comes from `--color-eyebrow`, which `.theme-dark` repoints, so this
 * reads correctly on both light and navy bands without a dark-mode prop.
 */
export function SectionIntro({
  eyebrow,
  heading,
  headingId,
  supporting,
  accentRule = true,
  className,
}: SectionIntroProps) {
  const introClassName = className ? `${styles.intro} ${className}` : styles.intro;

  return (
    <FadeIn className={introClassName}>
      <p className={accentRule ? styles.eyebrow : `${styles.eyebrow} ${styles.noRule}`}>
        {eyebrow}
      </p>
      <h2 id={headingId} className={styles.heading}>
        {heading}
      </h2>
      {supporting ? <p className={styles.supporting}>{supporting}</p> : null}
    </FadeIn>
  );
}
