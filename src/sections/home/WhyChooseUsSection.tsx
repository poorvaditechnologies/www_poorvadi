import { motion } from 'motion/react';
import type { ReactElement } from 'react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import { EDGE } from '@/constants/proof';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './WhyChooseUsSection.module.css';

const EDGE_ICONS: Record<string, ReactElement> = {
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

/**
 * "Why visionary founders choose us" (§10) — three bordered cards with
 * small icon containers and restrained hover feedback.
 */
export function WhyChooseUsSection() {
  return (
    <section aria-labelledby="edge-heading" className={styles.section}>
      <Container>
        <FadeIn className={styles.intro}>
          <p className={styles.eyebrow}>{EDGE.eyebrow}</p>
          <h2 id="edge-heading" className={styles.heading}>
            {EDGE.heading}
          </h2>
          <p className={styles.supporting}>{EDGE.supporting}</p>
        </FadeIn>

        <motion.ul
          className={styles.cards}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {EDGE.cards.map((card) => (
            <motion.li key={card.title} variants={fadeUp} className={styles.card}>
              <span className={styles.iconBox} aria-hidden="true">
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
                  {EDGE_ICONS[card.icon]}
                </svg>
              </span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
