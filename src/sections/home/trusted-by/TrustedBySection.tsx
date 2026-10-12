import { motion } from 'motion/react';
import { Container } from '@/components/ui';
import { TRUSTED_BY } from '@/constants/site';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './TrustedBySection.module.css';

/**
 * Light trust strip below the hero. Client names are rendered as understated
 * white cards — no fake logos, exactly the Figma's placeholder treatment.
 * Subtle scroll reveal only; no hover states, these are not links.
 */
export function TrustedBySection() {
  return (
    <section className={styles.strip} aria-labelledby="trusted-heading">
      <Container>
        <h2 id="trusted-heading" className={styles.eyebrow}>
          {TRUSTED_BY.eyebrow}
        </h2>

        <motion.ul
          className={styles.cards}
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {TRUSTED_BY.clients.map((client) => (
            <motion.li key={client} variants={fadeUp} className={styles.card}>
              {client}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
