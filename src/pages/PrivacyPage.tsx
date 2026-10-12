import { LegalLayout } from '@/components/layout';
import { PRIVACY } from '@/constants/legal';

export function PrivacyPage() {
  return <LegalLayout title={PRIVACY.title} notice={PRIVACY.notice} />;
}
