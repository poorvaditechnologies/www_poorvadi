import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps keyboard focus inside `containerRef` while `active`, moves focus in on
 * mount, handles Escape, locks page scroll, and restores focus on unmount
 * (preferring `returnFocusRef` — e.g. the card that opened a drawer — over
 * whatever happened to be focused at the time).
 *
 * Close/return-focus callbacks are read through refs so an inline arrow from
 * the caller never retriggers the effect mid-interaction.
 */
export function useFocusTrap<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  active: boolean,
  onClose?: () => void,
  returnFocusRef?: RefObject<HTMLElement | null>,
) {
  const onCloseRef = useRef(onClose);
  const returnFocusRefInner = useRef(returnFocusRef);

  useEffect(() => {
    onCloseRef.current = onClose;
    returnFocusRefInner.current = returnFocusRef;
  });

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    container?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onCloseRef.current?.();
        return;
      }

      if (event.key !== 'Tab' || !container) return;

      const focusables = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.getClientRects().length > 0);

      if (focusables.length === 0) {
        event.preventDefault();
        container.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || current === container)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);

    // Modal scroll lock — inline style is saved/restored so the stylesheet's
    // `overflow-x: clip` on body survives the round trip.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      const target = returnFocusRefInner.current?.current ?? previouslyFocused;
      target?.focus();
    };
    // containerRef is a stable object; callbacks are read via refs above.
  }, [active, containerRef]);
}
