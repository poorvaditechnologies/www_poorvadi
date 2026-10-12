import type { ReactNode } from 'react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import styles from './LegalLayout.module.css';

interface LegalLayoutProps {
  title: string;
  /** Placeholder notice from @/constants/legal — never real policy wording. */
  notice: string;
  children?: ReactNode;
}

/**
 * Shared shell for /privacy and /terms — warm off-white band, narrow reading
 * measure, the site's eyebrow/heading pattern, hairline structure. Content is
 * supplied by the caller; until real text exists the pages show only the
 * clearly marked pending placeholder.
 */
export function LegalLayout({ title, notice, children }: LegalLayoutProps) {
  return (
    <article className={styles.page}>
      <Container width="narrow">
        <FadeIn className={styles.header}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>{title}</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.notice} role="note">
            <p className={styles.noticeLabel}>Content pending</p>
            <p className={styles.noticeText}>{notice}</p>
          </div>

          <div className={styles.body}>
            {children ?? (
              <p className={styles.placeholder}>
                Section content will appear here once it has been supplied and approved.
              </p>
            )}
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}
