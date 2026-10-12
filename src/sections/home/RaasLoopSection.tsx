import { motion } from 'motion/react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import { RAAS_LOOP } from '@/constants/engagement';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './RaasLoopSection.module.css';

/**
 * RaaS Delivery Loop (Figma §8) — its own dark navy band directly after the
 * Engagement Models section. Structure follows the Figma: eyebrow + heading +
 * supporting line, then four step cards (index / title / description) that
 * reveal in sequence — deliberately not a generic timeline with connectors.
 */
export function RaasLoopSection() {
  return (
    <section
      id="raas-loop"
      aria-labelledby="raas-loop-heading"
      className={`${styles.section} theme-dark`}
    >
      <Container>
        <FadeIn className={styles.intro}>
          <p className={styles.eyebrow}>{RAAS_LOOP.eyebrow}</p>
          <h2 id="raas-loop-heading" className={styles.heading}>
            {RAAS_LOOP.heading}
          </h2>
          <p className={styles.supporting}>{RAAS_LOOP.supporting}</p>
        </FadeIn>

        <motion.ol
          className={styles.steps}
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {RAAS_LOOP.steps.map((step) => (
            <motion.li key={step.step} variants={fadeUp} className={styles.step}>
              {/* The step label is decorative: <ol> announces the position. */}
              <span className={styles.stepIndex} aria-hidden="true">
                {step.step}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
