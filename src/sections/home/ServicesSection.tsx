import { motion } from 'motion/react';
import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';
import { PORTFOLIO } from '@/constants/portfolio';
import { fadeUp, stagger } from '@/lib/motion';
import { BuildRoadmap } from './BuildRoadmap';
import { CardIcon } from './serviceIcons';
import styles from './ServicesSection.module.css';

/**
 * Engineering Portfolio — the Figma's four service groups (BUILD, SCALE &
 * OPERATE, INTELLIGENCE, GROW). Group headers pair a category label with a
 * right-side descriptor over a thin divider; cards are white with restrained
 * radius and hairline borders.
 */
export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className={styles.services}>
      <Container>
        <FadeIn className={styles.intro}>
          <p className={styles.eyebrow}>{PORTFOLIO.eyebrow}</p>
          <h2 id="services-heading" className={styles.heading}>
            {PORTFOLIO.heading}
          </h2>
          <p className={styles.supporting}>{PORTFOLIO.supporting}</p>
        </FadeIn>

        <div className={styles.groups}>
          {PORTFOLIO.groups.map((group) => (
            <section
              key={group.label}
              className={styles.group}
              aria-labelledby={`group-${group.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <FadeIn className={styles.groupHeader}>
                <div className={styles.groupTitleRow}>
                  <h3
                    id={`group-${group.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={styles.groupLabel}
                  >
                    {group.label}
                  </h3>
                  {group.badge ? <span className={styles.badge}>{group.badge}</span> : null}
                </div>
                <span className={styles.groupDescriptor} aria-hidden="true">
                  {group.descriptor}
                </span>
              </FadeIn>

              {/* BUILD renders as the engineering roadmap; the other three
                  groups keep the existing card grid. */}
              {group.label === 'BUILD' ? (
                <BuildRoadmap group={group} />
              ) : (
                <motion.ul
                  className={styles.cards}
                  variants={stagger(0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {group.cards.map((card) => (
                    <motion.li key={card.title} variants={fadeUp} className={styles.card}>
                      <CardIcon name={card.icon} className={styles.iconBox} />
                      <h4 className={styles.cardTitle}>{card.title}</h4>
                      <p className={styles.cardDescription}>{card.description}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
