import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  CookieConsentContext,
  type ConsentDecision,
  type CookieConsentValue,
} from './consentContext';

const STORAGE_KEY = 'poorvadi:cookie-consent';
const CONSENT_VERSION = 1;

/**
 * Analytics gate — runs ONLY after the user opts in to optional cookies.
 * No analytics provider is configured today, so this is intentionally a
 * no-op. When a provider is chosen, load its script here (it must never be
 * present in index.html or loaded unconditionally).
 */
function loadOptionalAnalytics(): void {
  // Intentionally empty: no analytics provider exists yet.
}

function readDecision(): ConsentDecision | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentDecision>;
    if (typeof parsed.analytics !== 'boolean') return null;
    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics,
      decidedAt: typeof parsed.decidedAt === 'string' ? parsed.decidedAt : '',
    };
  } catch {
    // Private browsing / storage disabled — behave as "no decision yet".
    return null;
  }
}

function writeDecision(decision: ConsentDecision): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(decision));
  } catch {
    // Persistence is best-effort; the in-memory decision still applies.
  }
}

/**
 * Owns the consent state for the whole app: localStorage persistence,
 * the preferences dialog visibility, and the future analytics gate.
 * Mounted once in MainLayout so every route (home, /privacy, /terms) has it.
 */
export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [decision, setDecision] = useState<ConsentDecision | null>(() => readDecision());
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const commit = useCallback((analytics: boolean) => {
    const next: ConsentDecision = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics,
      decidedAt: new Date().toISOString(),
    };
    writeDecision(next);
    setDecision(next);
    setPreferencesOpen(false);
  }, []);

  // Consent-gated analytics: never loads before an explicit opt-in.
  useEffect(() => {
    if (decision?.analytics) {
      loadOptionalAnalytics();
    }
  }, [decision?.analytics]);

  const value = useMemo<CookieConsentValue>(
    () => ({
      decision,
      preferencesOpen,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      acceptAll: () => commit(true),
      rejectOptional: () => commit(false),
      savePreferences: (analytics: boolean) => commit(analytics),
    }),
    [decision, preferencesOpen, commit],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}
