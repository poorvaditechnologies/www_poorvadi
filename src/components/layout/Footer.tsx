import { Link } from 'react-router-dom';
import { useCookieConsent } from '@/components/cookie/consentContext';
import { Container } from '@/components/ui';
import { FOOTER } from '@/constants/contact';
import { SITE } from '@/constants/site';
import styles from './Footer.module.css';

/**
 * Dark navy footer (§16) — brand block, three link columns, status pill and
 * the legal bottom bar. Structure follows the Figma exactly; the LEGAL column
 * and working privacy/terms/cookie links were added for the trust experience.
 */
export function Footer() {
  const { openPreferences } = useCookieConsent();

  return (
    <footer className={`${styles.footer} theme-dark`}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.brandName}>{SITE.name} LLP</p>
            <p className={styles.description}>{FOOTER.description}</p>

            <ul className={styles.contact}>
              <li>
                <span className={styles.contactLabel}>Email:</span>{' '}
                <a href={`mailto:${SITE.email}`} className={styles.contactValue}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className={styles.contactLabel}>Phone:</span>{' '}
                <span className={styles.contactValue}>{SITE.phone}</span>
              </li>
              <li>
                <span className={styles.contactLabel}>Location:</span>{' '}
                <span className={styles.contactValue}>{SITE.location}</span>
              </li>
            </ul>

            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              Status: {SITE.status}
            </p>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {FOOTER.columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <p className={styles.columnTitle}>{column.title}</p>
                <ul className={styles.columnLinks}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {'action' in link ? (
                        <button
                          type="button"
                          className={styles.columnLink}
                          onClick={openPreferences}
                        >
                          {link.label}
                        </button>
                      ) : link.href.startsWith('/') ? (
                        <Link to={link.href} className={styles.columnLink}>
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className={styles.columnLink}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Crafted with
            precision in Tumkur, Karnataka, India.
          </p>
          <ul className={styles.legal}>
            {FOOTER.legal.map((item) => (
              <li key={item.label}>
                {'action' in item ? (
                  <button type="button" className={styles.legalLink} onClick={openPreferences}>
                    {item.label}
                  </button>
                ) : item.href.startsWith('/') ? (
                  <Link to={item.href} className={styles.legalLink}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className={styles.legalLink}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
