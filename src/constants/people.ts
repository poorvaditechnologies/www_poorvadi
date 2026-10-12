/**
 * PEOPLE — founder & partners content.
 *
 * ⚠ DATA DELIBERATELY EMPTY. Names, roles, portraits, biographies, contact
 * details and social URLs must all come from the business owner — nothing is
 * invented here. The PeopleSection stays hidden while `founder` is null and
 * `partners` is empty; populating the fields below is all that is needed to
 * ship the section.
 *
 * `image` paths point at files served from `public/images/people/`
 * (e.g. '/images/people/founder.webp').
 */

export interface PersonSocial {
  linkedin?: string;
  github?: string;
  x?: string;
  website?: string;
}

export interface PersonContact {
  email?: string;
}

export interface Person {
  /** Stable key — also used for drawer animation identity. */
  id: string;
  name: string;
  role: string;
  /** Portrait file path; 4:5 crops work best with the layout. */
  image: string;
  /** One-line contribution shown under the role. */
  contribution: string;
  /** Short biography (2–4 sentences). */
  bio: string;
  social?: PersonSocial;
  contact?: PersonContact;
}

export interface PeopleContent {
  heading: string;
  supporting: string;
  partnersHeading: string;
  founder: Person | null;
  partners: Person[];
}

export const PEOPLE: PeopleContent = {
  heading: 'THE PEOPLE BEHIND POORVADI',
  supporting: 'Building the engineering culture behind every outcome.',
  partnersHeading: 'KEY PARTNERS & LEADERS',
  founder: null,
  partners: [],
};
