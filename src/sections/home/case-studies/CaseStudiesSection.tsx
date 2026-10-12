import { motion } from 'motion/react';
import { Container, SectionIntro } from '@/components/ui';
import { CASE_STUDIES } from '@/constants/proof';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './CaseStudiesSection.module.css';

/**
 * Proven Outcomes / Case Studies (§13) — three cards, each with its metric,
 * problem/solution pair and category tag. The corner arrow echoes the Figma's
 * arrow interaction: it travels up-right on hover while the card lifts.
 */
export function CaseStudiesSection() {
  return (
    <section id="case-studies" aria-labelledby="cases-heading" className={styles.section}>
      <Container>
        <SectionIntro
          eyebrow={CASE_STUDIES.eyebrow}
          heading={CASE_STUDIES.heading}
          headingId="cases-heading"
          supporting={CASE_STUDIES.supporting}
        />

        <motion.ul
          className={styles.cards}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CASE_STUDIES.items.map((item) => (
            <motion.li key={item.id} variants={fadeUp} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.caseId}>{item.id}</span>
                <span className={styles.sector}>{item.sector}</span>
                {/* Decorative arrow — the Figma's hover affordance. */}
                <span className={styles.arrow} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    focusable="false"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>

              <p className={styles.metric}>
                <span className={styles.metricValue}>[{item.metric}]</span>
              </p>
              <p className={styles.metricLabel}>{item.metricLabel}</p>

              <dl className={styles.details}>
                <dt className={styles.detailLabel}>Problem:</dt>
                <dd className={styles.detailText}>{item.problem}</dd>
                <dt className={styles.detailLabel}>Solution:</dt>
                <dd className={styles.detailText}>{item.solution}</dd>
              </dl>

              <span className={styles.category}>{item.category}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
