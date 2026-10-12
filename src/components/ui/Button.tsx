import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

/** Anchor form — the original public API, unchanged. */
type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

/** Native button form — used when no `href` is supplied, so `disabled` works. */
type ActionButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | ActionButtonProps;

/**
 * Primary action control.
 *
 * Renders an `<a>` when `href` is provided (backwards compatible with existing
 * call sites) and a `<button>` otherwise, which is what makes the native
 * `disabled` attribute meaningful.
 */
export function Button(props: ButtonProps) {
  // Destructured per branch so each element only receives attributes valid for
  // it, and `rest` keeps the correct narrowed type in either case.
  if (props.href !== undefined) {
    const { children, variant = 'primary', size = 'md', className = '', ...rest } = props;

    return (
      <a
        className={[styles.button, styles[variant], styles[size], className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={[styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
