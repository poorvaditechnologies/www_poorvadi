import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { FadeIn } from '@/components/animations';
import { ArrowIcon, Button, Container, SocialLinks } from '@/components/ui';
import { PEOPLE, type Person } from '@/constants/people';
import { fadeUp, stagger } from '@/lib/motion';
import { ProfileDrawer } from './ProfileDrawer';
import styles from './PeopleSection.module.css';

/**
 * The People Behind Poorvadi — editorial founder feature + partner card grid.
 *
 * Renders NOTHING until real data exists (see src/constants/people.ts):
 * `founder` is null and `partners` is empty today, so this section is hidden
 * exactly as planned. Populating that file — plus photos in
 * public/images/people/ — is all that is needed to ship it.
 */
export function PeopleSection() {
  const { founder, partners } = PEOPLE;
  const [activePerson, setActivePerson] = useState<Person | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  if (!founder && partners.length === 0) return null;

  const openProfile = (person: Person, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActivePerson(person);
  };

  return (
    <section id="people" aria-labelledby="people-heading" className={styles.section}>
      <Container>
        <FadeIn className={styles.intro}>
          <h2 id="people-heading" className={styles.heading}>
            {PEOPLE.heading}
          </h2>
          <p className={styles.supporting}>{PEOPLE.supporting}</p>
        </FadeIn>

        {founder && (
          <motion.article
            className={styles.founder}
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className={styles.portrait} variants={fadeUp}>
              <img
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                width={640}
                height={800}
                loading="eager"
                decoding="async"
              />
            </motion.div>

            <div className={styles.founderBody}>
              <motion.h3 variants={fadeUp} className={styles.founderName}>
                {founder.name}
              </motion.h3>
              <motion.p variants={fadeUp} className={styles.founderRole}>
                {founder.role}
              </motion.p>
              <motion.p variants={fadeUp} className={styles.contribution}>
                {founder.contribution}
              </motion.p>
              <motion.p variants={fadeUp} className={styles.bio}>
                {founder.bio}
              </motion.p>
              <motion.div variants={fadeUp} className={styles.founderMeta}>
                <SocialLinks person={founder} />
                {founder.contact?.email ? (
                  <Button
                    href={`mailto:${founder.contact.email}`}
                    variant="outline"
                    size="sm"
                    aria-label={`Email ${founder.name}`}
                  >
                    Contact
                  </Button>
                ) : null}
              </motion.div>
            </div>
          </motion.article>
        )}

        {partners.length > 0 && (
          <div>
            <FadeIn>
              <h3 className={styles.partnersHeading}>{PEOPLE.partnersHeading}</h3>
            </FadeIn>

            <motion.ul
              className={styles.grid}
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {partners.map((person) => (
                <motion.li key={person.id} variants={fadeUp} className={styles.card}>
                  <button
                    type="button"
                    className={styles.cardTrigger}
                    aria-haspopup="dialog"
                    onClick={(event) => openProfile(person, event.currentTarget)}
                  >
                    <span className={styles.cardImage}>
                      <img
                        src={person.image}
                        alt={`${person.name}, ${person.role}`}
                        width={640}
                        height={800}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>

                    <span className={styles.cardBody}>
                      <span className={styles.cardName}>{person.name}</span>
                      <span className={styles.cardRole}>{person.role}</span>
                      <span className={styles.cardContribution}>{person.contribution}</span>
                    </span>

                    <span className={styles.cardFooter}>
                      <span className={styles.cardCta}>
                        View profile
                        <ArrowIcon className={styles.cardArrow} />
                      </span>
                    </span>
                  </button>

                  {/* Sits above the card-wide trigger overlay (z-index) so the
                      links stay independently clickable. */}
                  {person.social ? (
                    <SocialLinks person={person} className={styles.cardSocials} />
                  ) : null}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}
      </Container>

      <ProfileDrawer
        person={activePerson}
        onClose={() => setActivePerson(null)}
        returnFocusRef={triggerRef}
      />
    </section>
  );
}
