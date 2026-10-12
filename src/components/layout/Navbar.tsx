import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container } from '@/components/ui';
import { NAV_CTA, NAV_LINKS, SITE } from '@/constants/site';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './Navbar.module.css';

/**
 * Resolves a nav href against the current route.
 *
 * In-page anchors only work on the page that owns the target. On any other
 * route a bare `#services` resolves to `/404#services`, so hashes are rewritten to
 * `/#services` and React Router performs a real navigation to the home page.
 */
function resolveHref(href: string, pathname: string) {
  if (href.startsWith('#') && pathname !== '/') {
    return `/${href}`;
  }
  return href;
}

function isHrefActive(href: string, pathname: string, hash: string) {
  if (!href.startsWith('#')) {
    return pathname === href;
  }
  // `#top` is the implicit landing target when no hash is present.
  const target = href === '#top' ? '' : href;
  return pathname === '/' && hash === target;
}

export function Navbar() {
  const scrolled = useScrolled(8);
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLocation, setOpenLocation] = useState({ pathname, hash });
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close the drawer whenever navigation happens, including hash changes.
  // Uses the "adjust state when props change" pattern during render rather than
  // an effect, which avoids a cascading re-render on every location change.
  if (openLocation.pathname !== pathname || openLocation.hash !== hash) {
    setOpenLocation({ pathname, hash });
    setMenuOpen(false);
  }

  // Escape closes the drawer and returns focus to the toggle that opened it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Prevent background scrolling while the drawer is open.
  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const renderLink = (label: string, href: string, className: string, onNavigate?: () => void) => {
    const active = isHrefActive(href, pathname, hash);
    const target = resolveHref(href, pathname);
    const ariaCurrent = active ? ('true' as const) : undefined;

    // Same-page hashes stay native anchors so smooth scrolling and
    // `scroll-padding-top` keep working; cross-page targets use the router.
    if (target === href) {
      return (
        <a href={href} className={className} aria-current={ariaCurrent} onClick={onNavigate}>
          {label}
        </a>
      );
    }

    return (
      <Link to={target} className={className} aria-current={ariaCurrent} onClick={onNavigate}>
        {label}
      </Link>
    );
  };

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled || menuOpen ? 'true' : 'false'}
      data-menu-open={menuOpen ? 'true' : 'false'}
    >
      <Container className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label={`${SITE.name} — home`}>
          <span className={styles.logoMark} aria-hidden="true" />
          <span className={styles.logoText}>{SITE.name}</span>
          {/* Legal-structure badge, exactly as shown in the Figma navbar. */}
          <span className={styles.badge}>{SITE.badge}</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>{renderLink(link.label, link.href, styles.link)}</li>
            ))}
          </ul>
          {/* Utility/chat-style icon — decorative affordance leading to contact. */}
          <a
            href="#contact"
            className={styles.utility}
            aria-label="Open chat with our team"
            title="Chat with our team"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
          <Button href={NAV_CTA.href} size="sm" className={styles.cta}>
            {NAV_CTA.label}
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.toggleIcon} aria-hidden="true" data-open={menuOpen} />
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id={menuId}
            className={styles.drawer}
            // Short, purposeful reveal — no bounce, no stagger.
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className={styles.drawerInner}>
              <nav aria-label="Mobile">
                <ul className={styles.drawerLinks}>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      {renderLink(link.label, link.href, styles.drawerLink, closeMenu)}
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                href={NAV_CTA.href}
                size="lg"
                className={styles.drawerCta}
                onClick={closeMenu}
              >
                {NAV_CTA.label}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
