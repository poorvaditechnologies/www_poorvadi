import { motion, type Variants } from 'motion/react';
import { Button, Container } from '@/components/ui';
import { HERO } from '@/constants/site';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './HeroSection.module.css';

/** Diagram reveal: fades in and settles, then rests. No idle looping motion. */
const reveal: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      {/* Faint technical grid. Decorative only. */}
      <div className={styles.backdrop} aria-hidden="true" />

      <Container className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={stagger(0.09)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className={styles.headline}
            variants={stagger(0.08)}
            // A single h1 keeps the document outline correct for assistive tech.
            initial="hidden"
            animate="visible"
          >
            {HERO.headline.map((line) => (
              <motion.span key={line} variants={fadeUp} className={styles.headlineLine}>
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.description}>
            {HERO.description}
          </motion.p>

          <motion.div variants={fadeUp} className={styles.actions}>
            <Button href={HERO.primaryCta.href} size="lg">
              {HERO.primaryCta.label}
            </Button>
            <Button href={HERO.secondaryCta.href} variant="outline" size="lg">
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative systems diagram — hidden from assistive technology. */}
        <motion.div variants={reveal} className={styles.visual} aria-hidden="true">
          <svg
            className={styles.diagram}
            viewBox="0 0 420 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
          >
            {/* Frame */}
            <rect className={styles.frame} x="10.5" y="10.5" width="399" height="299" rx="18" />

            {/* Corner ticks — a drafting-table cue, kept to 1px */}
            <path
              className={styles.tick}
              d="M10.5 46V28.5h17.5M392 28.5h17.5V46M10.5 274v17.5h17.5M392 291.5h17.5V274"
            />

            {/* Structure grid */}
            <path
              className={styles.gridLine}
              d="M120 10.5V309.5M210 10.5V309.5M300 10.5V309.5M10.5 110h399M10.5 210h399"
            />

            {/* Signal paths */}
            <path
              className={styles.trace}
              d="M210 60v150M120 210h180M60 160h300"
              strokeDasharray="4 6"
            />
            <path className={styles.traceSolid} d="M120 110 210 210 300 110" />

            {/* Nodes */}
            <circle className={styles.node} cx="120" cy="110" r="5" />
            <circle className={styles.node} cx="300" cy="110" r="5" />
            <circle className={styles.node} cx="210" cy="260" r="5" />
            <circle className={styles.nodeMuted} cx="60" cy="160" r="4" />
            <circle className={styles.nodeMuted} cx="360" cy="160" r="4" />

            {/* Focal node with one slow pulse ring — the only looping animation. */}
            <motion.circle
              className={styles.pulse}
              cx="210"
              cy="210"
              r="14"
              variants={{
                hidden: { opacity: 0, scale: 0.6 },
                visible: {
                  opacity: [0, 0.45, 0],
                  scale: [0.6, 1.5, 1.5],
                  transition: { duration: 2.6, delay: 0.5, ease: 'easeOut' },
                },
              }}
            />
            <circle className={styles.nodeAccent} cx="210" cy="210" r="9" />
            <circle className={styles.nodeCore} cx="210" cy="210" r="3.5" />
          </svg>
        </motion.div>
      </Container>

      {/* Quiet cue that the page continues below. Decorative, positioned out of
          the layout flow so it cannot shift the hero content. */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollCueLabel}>Scroll</span>
        <span className={styles.scrollCueTrack}>
          <span className={styles.scrollCueDot} />
        </span>
      </div>
    </section>
  );
}
