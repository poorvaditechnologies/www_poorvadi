import { motion } from 'motion/react';
import { Button, Container, SectionIntro } from '@/components/ui';
import { PRODUCTS } from '@/constants/products';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './ProductsSection.module.css';

/**
 * Proprietary SaaS (§9) — three product cards, each with the Figma's
 * metric/status panel, feature bullets and a Request Demo action.
 */
export function ProductsSection() {
  return (
    <section id="products" aria-labelledby="products-heading" className={styles.section}>
      <Container>
        <SectionIntro
          eyebrow={PRODUCTS.eyebrow}
          heading={PRODUCTS.heading}
          headingId="products-heading"
          supporting={PRODUCTS.supporting}
        />

        <motion.ul
          className={styles.cards}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PRODUCTS.items.map((product) => (
            <motion.li key={product.name} variants={fadeUp} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
              </div>

              {/* Metric/status readout panel — the Figma's dark status strip. */}
              <dl className={styles.panel}>
                {product.panel.map((item) => (
                  <div key={item.label} className={styles.panelItem}>
                    <dt className={styles.panelLabel}>{item.label}</dt>
                    <dd className={styles.panelValue}>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className={styles.bullets}>
                {product.bullets.map((bullet) => (
                  <li key={bullet} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <Button href="#contact" variant="outline" className={styles.cta}>
                {product.cta}
              </Button>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
