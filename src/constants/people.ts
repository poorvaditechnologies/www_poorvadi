/**
 * PEOPLE — founder & team content.
 */

import teamMember1 from '@/assets/Images/team_member_1.jpg';
import teamMember2 from '@/assets/Images/team_member_2.jpg';
import teamMember3 from '@/assets/Images/team_member_3.jpg';
import teamMember4 from '@/assets/Images/team_member_4.jpg';
import teamMember5 from '@/assets/Images/team_member_5.jpg';
import teamMember6 from '@/assets/Images/team_member_6.jpg';
import teamMember7 from '@/assets/Images/team_member_7.jpg';
import teamMember8 from '@/assets/Images/team_member_8.jpg';
import teamMember9 from '@/assets/Images/team_member_9.jpg';

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
  partnersHeading: 'THE TEAM',
  founder: {
    id: 'achyuth-yadav',
    name: 'Achyuth Yadav',
    role: 'Owner',
    image: teamMember1,
    contribution: 'Setting the vision and steering the company forward.',
    bio: 'Achyuth founded Poorvadi to build products and partnerships that last. He leads company strategy and works closely with every team to keep delivery sharp and outcomes real.',
  },
  partners: [
    {
      id: 'manjunath',
      name: 'Manjunath',
      role: 'Tech Lead',
      image: teamMember2,
      contribution: 'Leading engineering direction and technical quality.',
      bio: 'Manjunath leads the engineering team, setting technical direction and ensuring every build meets a high bar for quality and reliability.',
    },
    {
      id: 'vaibhav',
      name: 'Vaibhva',
      role: 'Software Engineer',
      image: teamMember3,
      contribution: 'Building and shipping core product features.',
      bio: 'Vaibhva works across the stack to build and ship features, with a focus on clean, maintainable code.',
    },
    {
      id: 'sudheendra',
      name: 'Sudheendra',
      role: 'Software Engineer',
      image: teamMember8,
      contribution: 'Building and shipping core product features.',
      bio: 'Sudheendra works across the stack to build and ship features, with a focus on clean, maintainable code.',
    },
    {
      id: 'haleema',
      name: 'Haleema',
      role: 'UI/UX Designer',
      image: teamMember7,
      contribution: 'Designing clear, considered user experiences.',
      bio: 'Haleema designs the interfaces and experiences that bring Poorvadi products to life, balancing clarity with craft.',
    },
    {
      id: 'abc',
      name: 'ABC',
      role: 'Marketing',
      image: teamMember4,
      contribution: 'Growing brand reach and audience engagement.',
      bio: 'ABC drives marketing strategy and campaigns that grow awareness and engagement for Poorvadi.',
    },
    {
      id: 'xyz',
      name: 'XYZ',
      role: 'Marketing',
      image: teamMember5,
      contribution: 'Growing brand reach and audience engagement.',
      bio: 'XYZ drives marketing strategy and campaigns that grow awareness and engagement for Poorvadi.',
    },
    {
      id: 'lavanya',
      name: 'Lavanya',
      role: 'Intern',
      image: teamMember6,
      contribution: 'Supporting the team and learning on the job.',
      bio: 'Lavanya is an intern at Poorvadi, contributing to projects while growing her skills across the team.',
    },
    {
      id: 'priya',
      name: 'Priya',
      role: 'Intern',
      image: teamMember9,
      contribution: 'Supporting the team and learning on the job.',
      bio: 'Priya is an intern at Poorvadi, contributing to projects while growing her skills across the team.',
    },
  ],
};
