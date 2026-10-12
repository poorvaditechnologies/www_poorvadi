import { motion } from 'motion/react';
import { FadeIn } from '@/components/animations';
import { Button, Container } from '@/components/ui';
import { ENGAGEMENT } from '@/constants/engagement';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './EngagementSection.module.css';

/** Teal check icon used across both model cards' bullet lists. */
function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Dark navy engagement band: the two collaboration models (§7). The RaaS
 * Delivery Loop (§8) lives next door in RaasLoopSection — same dark band,
 * its own section. Uses the `theme-dark` scope so every inner element picks
 * up the navy-section semantic tokens automatically.
 */
export function EngagementSection() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-heading"
      className={`${styles.section} theme-dark`}
    >
      <Container>
        <FadeIn className={styles.intro}>
          <p className={styles.eyebrow}>{ENGAGEMENT.eyebrow}</p>
          <h2 id="engagement-heading" className={styles.heading}>
            {ENGAGEMENT.heading}
          </h2>
          <p className={styles.supporting}>{ENGAGEMENT.supporting}</p>
        </FadeIn>

        <motion.ul
          className={styles.models}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ENGAGEMENT.models.map((model) => (
            <motion.li
              key={model.index}
              variants={fadeUp}
              className={
                model.highlighted ? `${styles.model} ${styles.modelHighlighted}` : styles.model
              }
            >
              <div className={styles.modelHeader}>
                <span className={styles.modelIndex}>{model.index}</span>
                {model.badge ? <span className={styles.modelBadge}>{model.badge}</span> : null}
              </div>

              <h3 className={styles.modelTitle}>{model.title}</h3>
              <p className={styles.modelDescription}>{model.description}</p>

              <ul className={styles.bullets}>
                {model.bullets.map((bullet) => (
                  <li key={bullet} className={styles.bullet}>
                    <CheckIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className={styles.ideal}>
                <span className={styles.idealLabel}>IDEAL FOR:</span> <span>{model.idealFor}</span>
              </p>

              <Button
                href="#contact"
                variant={model.highlighted ? 'primary' : 'outline'}
                className={styles.modelCta}
              >
                {model.cta}
              </Button>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
