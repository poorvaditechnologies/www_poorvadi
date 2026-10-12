import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerWidth = 'default' | 'narrow' | 'wide';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Render as a different element (e.g. 'section') while keeping the layout. */
  as?: ElementType;
  /** Named width presets. Maps to the container-* CSS module classes. */
  width?: ContainerWidth;
  /** Apply edge-to-edge gutters without the max-width cap. */
  fullBleed?: boolean;
}

/**
 * Centres content on a max-width line with responsive gutters.
 *
 * `className`, `id`, `style` and all other div props pass through, so callers can
 * add spacing/positioning without forking the component. Extra classes are
 * appended after the base class so callers can override it.
 */
export function Container({
  children,
  as: Component = 'div',
  width = 'default',
  fullBleed = false,
  className = '',
  ...rest
}: ContainerProps) {
  const classes = [styles.container, styles[width], fullBleed ? styles.fullBleed : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
