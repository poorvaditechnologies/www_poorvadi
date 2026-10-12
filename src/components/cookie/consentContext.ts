import { createContext, useContext } from 'react';

/** Persisted cookie decision — stored under STORAGE_KEY in localStorage. */
export interface ConsentDecision {
  version: number;
  /** Necessary cookies are always on; the field exists for clarity/audit. */
  necessary: true;
  /** Optional analytics — false unless explicitly enabled by the user. */
  analytics: boolean;
  decidedAt: string;
}

export interface CookieConsentValue {
  decision: ConsentDecision | null;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (analytics: boolean) => void;
}

export const CookieConsentContext = createContext<CookieConsentValue | null>(null);

/** Access the consent state. Must be used inside <CookieConsentProvider>. */
export function useCookieConsent(): CookieConsentValue {
  const value = useContext(CookieConsentContext);
  if (!value) {
    throw new Error('useCookieConsent must be used within a <CookieConsentProvider>.');
  }
  return value;
}
