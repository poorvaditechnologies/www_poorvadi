import { motion } from 'motion/react';
import { Container, SectionIntro } from '@/components/ui';
import { EDGE } from '@/constants/proof';
import { fadeUp, stagger } from '@/lib/motion';
import { EdgeIcon } from './edgeIcons';
import styles from './WhyChooseUsSection.module.css';

/**
 * "Why visionary founders choose us" (§10) — three bordered cards with
 * small icon containers and restrained hover feedback.
 */
export function WhyChooseUsSection() {
  return (
    <section aria-labelledby="edge-heading" className={styles.section}>
      <Container>
        <SectionIntro
          eyebrow={EDGE.eyebrow}
          heading={EDGE.heading}
          headingId="edge-heading"
          supporting={EDGE.supporting}
        />

        <motion.ul
          className={styles.cards}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {EDGE.cards.map((card) => (
            <motion.li key={card.title} variants={fadeUp} className={styles.card}>
              <EdgeIcon name={card.icon} className={styles.iconBox} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
