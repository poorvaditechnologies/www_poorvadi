import { motion } from 'motion/react';
import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { FadeIn } from '@/components/animations';
import { Button, Container } from '@/components/ui';
import { FINAL_CTA } from '@/constants/contact';
import { SITE } from '@/constants/site';
import { fadeUp, stagger } from '@/lib/motion';
import styles from './FinalCTASection.module.css';

type Status = 'idle' | 'submitting' | 'success';
type Errors = Partial<Record<'name' | 'email' | 'summary', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Final CTA + Architecture Review form (§15).
 *
 * Validation runs on submit with inline, associated error messages. There is
 * no backend in this repo, so a successful submit resolves locally into a
 * success state — swap in a real endpoint in src/services when one exists.
 */
export function FinalCTASection() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const nameId = useId();
  const emailId = useId();
  const preferenceId = useId();
  const summaryId = useId();

  function validate(name: string, email: string, summary: string): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!email.trim()) next.email = 'Please enter your work email.';
    else if (!EMAIL_RE.test(email)) next.email = 'Please enter a valid email address.';
    if (!summary.trim()) next.summary = 'Please tell us a little about the project.';
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next = validate(
      String(data.get('name') ?? ''),
      String(data.get('email') ?? ''),
      String(data.get('summary') ?? ''),
    );
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid field for keyboard/AT users.
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setStatus('submitting');
    // Local-only success: no submission endpoint exists yet.
    window.setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 700);
  }

  const fieldError = (message?: ReactNode) =>
    message ? (
      <p className={styles.error} role="alert">
        {message}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="cta-heading" className={`${styles.section} theme-dark`}>
      <Container className={styles.grid}>
        {/* Left: CTA copy and actions */}
        <motion.div
          className={styles.copy}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className={styles.eyebrow}>
            {FINAL_CTA.eyebrow}
          </motion.p>
          <motion.h2 id="cta-heading" variants={fadeUp} className={styles.heading}>
            {FINAL_CTA.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.supporting}>
            {FINAL_CTA.supporting}
          </motion.p>

          <motion.div variants={fadeUp} className={styles.actions}>
            <Button href={`mailto:${SITE.email}`} size="lg">
              {FINAL_CTA.primaryCta}
            </Button>
            <Button
              href={FINAL_CTA.whatsappHref}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {FINAL_CTA.secondaryCta}
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.emailLine}>
            {FINAL_CTA.emailLead}{' '}
            <a href={`mailto:${SITE.email}`} className={styles.email}>
              {SITE.email}
            </a>
          </motion.p>
        </motion.div>

        {/* Right: architecture review form */}
        <FadeIn className={styles.formCard}>
          <h3 className={styles.formHeading}>{FINAL_CTA.form.heading}</h3>
          <p className={styles.formSupporting}>{FINAL_CTA.form.supporting}</p>

          {status === 'success' ? (
            <p className={styles.success} role="status">
              Thank you — your inquiry has been received. We'll respond within 24 hours with a
              scoped engineering roadmap.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor={nameId} className={styles.label}>
                  {FINAL_CTA.form.nameLabel}
                </label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={styles.input}
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? `${nameId}-error` : undefined}
                />
                {fieldError(errors.name && <span id={`${nameId}-error`}>{errors.name}</span>)}
              </div>

              <div className={styles.field}>
                <label htmlFor={emailId} className={styles.label}>
                  {FINAL_CTA.form.emailLabel}
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={styles.input}
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? `${emailId}-error` : undefined}
                />
                {fieldError(errors.email && <span id={`${emailId}-error`}>{errors.email}</span>)}
              </div>

              <div className={styles.field}>
                <label htmlFor={preferenceId} className={styles.label}>
                  {FINAL_CTA.form.preferenceLabel}
                </label>
                <select
                  id={preferenceId}
                  name="preference"
                  className={styles.input}
                  defaultValue={FINAL_CTA.form.preferences[0]}
                >
                  {FINAL_CTA.form.preferences.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor={summaryId} className={styles.label}>
                  {FINAL_CTA.form.summaryLabel}
                </label>
                <textarea
                  id={summaryId}
                  name="summary"
                  rows={4}
                  className={`${styles.input} ${styles.textarea}`}
                  aria-invalid={errors.summary ? 'true' : undefined}
                  aria-describedby={errors.summary ? `${summaryId}-error` : undefined}
                />
                {fieldError(
                  errors.summary && <span id={`${summaryId}-error`}>{errors.summary}</span>,
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className={styles.submit}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting…' : FINAL_CTA.form.submit}
              </Button>
            </form>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
