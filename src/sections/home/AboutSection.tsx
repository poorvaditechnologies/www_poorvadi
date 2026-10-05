import { motion } from 'motion/react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import { ABOUT } from '@/constants/site';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <Container>
        {/* Editorial split: the claim on the left, the explanation on the right. */}
        <div className={styles.intro}>
          <FadeIn>
            <p className={styles.eyebrow}>{ABOUT.eyebrow}</p>
            <h2 id="about-heading" className={styles.heading}>
              {ABOUT.heading}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className={styles.lead}>{ABOUT.intro}</p>
          </FadeIn>
        </div>

        <motion.ol
          className={styles.capabilities}
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {ABOUT.capabilities.map((capability) => (
            <motion.li key={capability.title} variants={fadeUp} className={styles.capability}>
              {/* The index is decorative: <ol> already announces the position. */}
              <span className={styles.capabilityIndex} aria-hidden="true">
                {capability.index}
              </span>
              <h3 className={styles.capabilityTitle}>{capability.title}</h3>
              <p className={styles.capabilityText}>{capability.description}</p>
              <span className={styles.capabilityArrow} aria-hidden="true">
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="M1 6h19M15.5 1.5 20 6l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
