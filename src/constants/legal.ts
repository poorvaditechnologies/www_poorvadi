/**
 * Legal pages — structure only.
 *
 * ⚠ No legal wording has been supplied or approved, so none is written here.
 * The pages render a clearly marked "content pending" placeholder. Real text
 * must be provided by the business owner and reviewed by qualified counsel
 * before publication — nothing on these pages is legal advice or a legally
 * valid policy.
 */
export interface LegalPageContent {
  title: string;
  /** Prominent placeholder notice rendered at the top of the page. */
  notice: string;
}

const PENDING_SUFFIX =
  'The final wording must be reviewed and approved by Poorvadi Technologies and qualified legal counsel before publication. Nothing here constitutes legal advice or a legally valid policy.';

export const PRIVACY: LegalPageContent = {
  title: 'Privacy Policy',
  notice: `This page is a structure placeholder — the Privacy Policy text has not yet been provided or approved. ${PENDING_SUFFIX}`,
};

export const TERMS: LegalPageContent = {
  title: 'Terms of Service',
  notice: `This page is a structure placeholder — the Terms of Service text has not yet been provided or approved. ${PENDING_SUFFIX}`,
};
