import { motion } from 'motion/react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import { TESTIMONIALS } from '@/constants/proof';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './TestimonialsSection.module.css';

/**
 * Verified Partner Feedback (§14) — two quote cards with subtle reveal.
 * Quotes are blockquotes with a visible attribution; no invented avatars.
 */
export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className={styles.section}>
      <Container>
        <FadeIn className={styles.intro}>
          <p className={styles.eyebrow}>{TESTIMONIALS.eyebrow}</p>
          <h2 id="testimonials-heading" className={styles.heading}>
            {TESTIMONIALS.heading}
          </h2>
        </FadeIn>

        <motion.ul
          className={styles.cards}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {TESTIMONIALS.items.map((item) => (
            <motion.li key={item.author} variants={fadeUp} className={styles.card}>
              <span className={styles.mark} aria-hidden="true">
                “
              </span>
              <blockquote className={styles.quote}>
                <p>{item.quote}</p>
              </blockquote>
              <footer className={styles.attribution}>
                <cite className={styles.author}>{item.author}</cite>
                <span className={styles.role}>{item.role}</span>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
