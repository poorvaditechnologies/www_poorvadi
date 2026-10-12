import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui';
import { STATS } from '@/constants/proof';
import styles from './StatsSection.module.css';

/**
 * One stat cell with a viewport-triggered count-up.
 *
 * Under prefers-reduced-motion the final value renders immediately —
 * no ticking animation, same information.
 */
function StatValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reducedMotion) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reducedMotion, value, suffix]);

  return (
    <span ref={ref} className={styles.value}>
      {/* Rendered for no-JS/SSR; the effect replaces it once in view. */}
      {`${value}${suffix}`}
    </span>
  );
}

/** Stats strip (§11) — five figures with tasteful count-up on entry. */
export function StatsSection() {
  return (
    <section aria-label="Key figures" className={`${styles.section} theme-dark`}>
      <Container>
        <ul className={styles.list}>
          {STATS.map((stat) => (
            <li key={stat.label} className={styles.item}>
              <StatValue value={stat.value} suffix={stat.suffix} />
              <span className={styles.label}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
