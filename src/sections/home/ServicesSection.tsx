import { motion } from 'motion/react';
import type { CSSProperties } from 'react';
import { FadeIn } from '@/components/animations';
import { ArrowIcon, Container, SectionIntro } from '@/components/ui';
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
        <SectionIntro
          eyebrow={PORTFOLIO.eyebrow}
          heading={PORTFOLIO.heading}
          headingId="services-heading"
          supporting={PORTFOLIO.supporting}
        />

        <div className={styles.groups}>
          {PORTFOLIO.groups.map((group, groupIndex) => (
            <section
              key={group.label}
              className={styles.group}
              aria-labelledby={`group-${group.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <FadeIn className={styles.groupHeader}>
                <span className={styles.groupIndex} aria-hidden="true">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <div className={styles.groupHeaderBody}>
                  <div className={styles.groupTitleRow}>
                    <h3
                      id={`group-${group.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={styles.groupLabel}
                    >
                      {group.label}
                    </h3>
                    {group.badge ? <span className={styles.badge}>{group.badge}</span> : null}
                  </div>
                  <span className={styles.groupDescriptor}>{group.descriptor}</span>
                </div>
              </FadeIn>

              {/* BUILD renders as the engineering roadmap; the other three
                  groups keep the existing card grid. */}
              {group.label === 'BUILD' ? (
                <BuildRoadmap group={group} />
              ) : (
                <motion.ul
                  className={styles.cards}
                  style={{ '--card-count': group.cards.length } as CSSProperties}
                  variants={stagger(0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {group.cards.map((card, cardIndex) => (
                    <motion.li key={card.title} variants={fadeUp} className={styles.card}>
                      <div className={styles.cardTop}>
                        <CardIcon name={card.icon} className={styles.iconBox} />
                        <span className={styles.cardIndex} aria-hidden="true">
                          {String(cardIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h4 className={styles.cardTitle}>{card.title}</h4>
                      <p className={styles.cardDescription}>{card.description}</p>
                      <ArrowIcon className={styles.cardArrow} />
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
