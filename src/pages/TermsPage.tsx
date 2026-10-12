import { LegalLayout } from '@/components/layout';
import { TERMS } from '@/constants/legal';

export function TermsPage() {
  return <LegalLayout title={TERMS.title} notice={TERMS.notice} />;
}
