import type { ReactNode } from 'react';
import type { Person, PersonSocial } from '@/constants/people';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  /** Uses `name` for accessible labels and `social` for the destinations. */
  person: Pick<Person, 'name' | 'social'>;
  /** Extra classes from the caller (e.g. card hover-reveal behaviour). */
  className?: string;
}

/**
 * External profile links. Each anchor carries a meaningful aria-label, opens
 * safely (`noopener noreferrer`), and announces the new-tab behaviour to
 * screen readers. Empty social fields simply render nothing.
 */
export function SocialLinks({ person, className }: SocialLinksProps) {
  const { social } = person;
  if (!social) return null;

  const links: { key: keyof PersonSocial; href: string; label: string; icon: ReactNode }[] = [];

  if (social.linkedin) {
    links.push({
      key: 'linkedin',
      href: social.linkedin,
      label: `${person.name} on LinkedIn`,
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    });
  }
  if (social.github) {
    links.push({
      key: 'github',
      href: social.github,
      label: `${person.name} on GitHub`,
      icon: (
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      ),
    });
  }
  if (social.x) {
    links.push({
      key: 'x',
      href: social.x,
      label: `${person.name} on X`,
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    });
  }
  if (social.website) {
    links.push({
      key: 'website',
      href: social.website,
      label: `${person.name} — website`,
      icon: (
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9z" />
        </g>
      ),
    });
  }

  if (links.length === 0) return null;

  return (
    <ul className={[styles.list, className].filter(Boolean).join(' ')}>
      {links.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            className={styles.link}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              {link.icon}
            </svg>
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
