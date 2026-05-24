import { SUBSTACK_URL } from '@/lib/site';

export type Essay = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
  href: string;
  substackHref?: string;
};

export const essays: Essay[] = [
  {
    slug: 'electoral-college',
    title: 'I Tried to Save the Electoral College. The Math Wouldn’t Let Me.',
    date: 'May 2026',
    readingTime: '9 min read',
    description: 'Every honest attempt to fix it collapses into the same answer.',
    href: '/writing/electoral-college',
  },
  {
    slug: 'paper-schedule',
    title: 'The Paper Schedule',
    date: 'May 2026',
    readingTime: '12 min read',
    description:
      'There’s a paper schedule on the wall of every train station in Tokyo, and the trains come when it says they will. The MTA has the money to do the same. What’s broken is who answers when they don’t.',
    href: '/writing/paper-schedule',
    substackHref: SUBSTACK_URL,
  },
];
