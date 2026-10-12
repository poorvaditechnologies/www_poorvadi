import { motion } from 'motion/react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import { LIFECYCLE } from '@/constants/proof';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './LifecycleSection.module.css';

/**
 * 5-Step Delivery Lifecycle (§12) — sequential reveal; the index number sits
 * large and quiet behind each card title like the Figma's step markers.
 */
export function LifecycleSection() {
  return (
    <section aria-labelledby="lifecycle-heading" className={styles.section}>
      <Container>
        <FadeIn className={styles.intro}>
          <p className={styles.eyebrow}>{LIFECYCLE.eyebrow}</p>
          <h2 id="lifecycle-heading" className={styles.heading}>
            {LIFECYCLE.heading}
          </h2>
        </FadeIn>

        <motion.ol
          className={styles.steps}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LIFECYCLE.steps.map((step) => (
            <motion.li key={step.index} variants={fadeUp} className={styles.step}>
              {/* The index is decorative: <ol> already announces the position. */}
              <span className={styles.index} aria-hidden="true">
                {step.index}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
