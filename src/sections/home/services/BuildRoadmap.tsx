import { motion, useReducedMotion } from 'motion/react';
import { ArrowIcon } from '@/components/ui';
import type { ServiceGroup } from '@/constants/portfolio';
import { CardIcon } from './serviceIcons';
import styles from './BuildRoadmap.module.css';

/**
 * BUILD — engineering roadmap (Figma §6, group 01).
 *
 * Desktop: a coral S-curve runs through four milestone nodes with the cards
 * alternating above and below the path. On viewport entry the path draws
 * first, then each node and its card reveal in order (node → card, 01→04).
 * Nodes sit at the column centres of a 4-column grid with no column gap, so
 * the path anchors (x = 125/375/625/875 of the viewBox) line up exactly.
 *
 * Mobile/tablet: the curve is dropped for a vertical rail so nothing
 * overflows horizontally — node in the left column, card beside it.
 *
 * Content comes straight from PORTFOLIO (exact Figma wording); only the
 * presentation changes here. Scale & Operate / Intelligence / Grow are
 * untouched.
 */

/** viewBox 0 0 1000 100 — anchors at x = 125/375/625/875, y alternating 30/70. */
const PATH_D =
  'M0 30C70 30 90 30 125 30C250 30 250 70 375 70C500 70 500 30 625 30C750 30 750 70 875 70C940 70 960 70 1000 70';

interface BuildRoadmapProps {
  group: ServiceGroup;
}

export function BuildRoadmap({ group }: BuildRoadmapProps) {
  const reduced = useReducedMotion() ?? false;

  /**
   * Sequence: path draws (0 → DRAW), then node i at DRAW + i·STEP, with its
   * card a beat behind. Under prefers-reduced-motion everything collapses to
   * the final state (MotionConfig additionally disables transform animation).
   */
  const draw = reduced ? 0.01 : 1.3;
  const milestoneDelay = (i: number) => (reduced ? 0 : 1.35 + i * 0.5);
  const cardDelay = (i: number) => (reduced ? 0 : 1.35 + i * 0.5 + 0.18);

  return (
    <motion.div
      className={styles.roadmap}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.ol className={styles.milestones}>
        {/* Decorative track: the roadmap curve itself (desktop only). */}
        <li className={styles.track} aria-hidden="true">
          <svg
            className={styles.trackSvg}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            focusable="false"
          >
            <motion.path
              className={styles.path}
              d={PATH_D}
              fill="none"
              vectorEffect="non-scaling-stroke"
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: 1,
                  transition: { duration: draw, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            />
          </svg>
        </li>

        {group.cards.map((card, i) => {
          const up = i % 2 === 0;
          const classes = [
            styles.milestone,
            up ? styles.up : styles.down,
            styles[`col${i + 1}`],
            i % 2 === 1 ? styles.teal : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <motion.li key={card.title} className={classes}>
              <motion.span
                className={styles.node}
                aria-hidden="true"
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: milestoneDelay(i),
                      duration: reduced ? 0.01 : 0.4,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>

              <motion.div
                className={styles.card}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: cardDelay(i),
                      duration: reduced ? 0.01 : 0.55,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                <CardIcon name={card.icon} className={styles.iconBox} />
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardDescription}>{card.description}</p>
                <ArrowIcon className={styles.cardArrow} />
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ol>
    </motion.div>
  );
}
