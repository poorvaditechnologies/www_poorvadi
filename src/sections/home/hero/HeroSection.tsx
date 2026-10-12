import { motion, type Variants } from 'motion/react';
import { Button, Container } from '@/components/ui';
import { HERO } from '@/constants/site';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './HeroSection.module.css';

/** Dashboard reveal: fades in and settles, then rests. No idle looping motion. */
const reveal: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Decorative system-monitor readouts. Static content — these are the Figma
 * dashboard's visible lines, not live data.
 */
const TERMINAL_LINES = [
  { prompt: '$', text: 'poorvadi deploy --edge', tone: 'default' },
  { tone: 'ok', text: '✓ build passed · 12.4s' },
  { tone: 'muted', text: '→ syncing 14 regions…' },
  { prompt: '$', text: 'curl api.poorvadi.com/health', tone: 'default' },
  { tone: 'ok', text: '✓ 200 OK · 38ms' },
] as const;

const SERVICES_STATUS = [
  { name: 'api-gateway', status: 'HEALTHY' },
  { name: 'llm-router', status: 'HEALTHY' },
  { name: 'queue-worker', status: 'SCALING' },
] as const;

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
            {HERO.eyebrow}
          </motion.p>

          <motion.h1 id="hero-heading" className={styles.headline} variants={fadeUp}>
            {HERO.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.description}>
            {HERO.description}
          </motion.p>

          <motion.div variants={fadeUp} className={styles.actions}>
            <Button href={HERO.primaryCta.href} size="lg">
              {HERO.primaryCta.label}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Button>
            <Button href={HERO.secondaryCta.href} variant="outline" size="lg">
              {HERO.secondaryCta.label}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.trust}>
            <span className={styles.trustEmphasis}>{HERO.trustLine.emphasis}</span>
            <span className={styles.trustDot} aria-hidden="true">
              •
            </span>
            <span>{HERO.trustLine.remainder}</span>
          </motion.p>
        </motion.div>

        {/* Technical engineering dashboard — matches the Figma's system-monitor
            visual. Built from HTML/CSS so it stays crisp and responsive.
            Hidden from assistive technology: it carries no unique information. */}
        <motion.div variants={reveal} className={styles.dashboard} aria-hidden="true">
          <div className={styles.dashHeader}>
            <div className={styles.dashDots}>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.dashTitle}>system-monitor — poorvadi/core</span>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              LIVE
            </span>
          </div>

          <div className={styles.dashBody}>
            <div className={styles.terminal}>
              {TERMINAL_LINES.map((line, i) => (
                <p key={i} className={styles.line} data-tone={line.tone}>
                  {'prompt' in line && line.prompt ? (
                    <span className={styles.prompt}>{line.prompt}</span>
                  ) : null}
                  {line.text}
                </p>
              ))}
            </div>

            <div className={styles.services}>
              <p className={styles.panelLabel}>SERVICES</p>
              {SERVICES_STATUS.map((svc) => (
                <p key={svc.name} className={styles.serviceRow}>
                  <span className={styles.serviceName}>{svc.name}</span>
                  <span
                    className={styles.serviceStatus}
                    data-status={svc.status === 'SCALING' ? 'warn' : 'ok'}
                  >
                    {svc.status}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className={styles.throughput}>
            <div className={styles.throughputMeta}>
              <span className={styles.panelLabel}>THROUGHPUT</span>
              <span className={styles.throughputValue}>1.24M req/day</span>
            </div>
            <div className={styles.progressTrack}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: '0%' }}
                animate={{ width: '78%' }}
                transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className={styles.throughputFooter}>
              <span>CPU 34%</span>
              <span>MEM 61%</span>
              <span>P99 42ms</span>
            </div>
          </div>
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
