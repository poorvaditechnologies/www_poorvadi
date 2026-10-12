import styles from './BrandMark.module.css';

interface BrandMarkProps {
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * The gradient square brand mark — shared by the navbar and footer so the
 * identity reads as the same brand in both places. Built from tokens, no
 * image asset required.
 */
export function BrandMark({ size = 'sm', className }: BrandMarkProps) {
  const classes = [styles.mark, styles[size], className].filter(Boolean).join(' ');
  return <span className={classes} aria-hidden="true" />;
}
