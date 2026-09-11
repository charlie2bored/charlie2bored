/**
 * The contact section, the one the site ends on. Email is the point, so it is
 * set large on its own; everything else is a row.
 */

import { contact } from '@/lib/nav';

export const contactBg = '#ece9e4';

export const contactHeadline = 'still scrolling? let’s talk.';

export const contactIntro =
  'Jobs, gigs, collabs, or just to say hi — email is the fastest way to reach me. Based in New York; NYC, NJ & CT, hybrid or remote.';

export const contactLinks: { label: string; value: string; href: string }[] = [
  { label: 'Phone', value: contact.phone, href: 'tel:+19085105281' },
  { label: 'LinkedIn', value: 'in/charlie2bored', href: 'https://www.linkedin.com/in/charlie2bored/' },
  { label: 'Instagram', value: '@charlie2bored', href: 'https://www.instagram.com/charlie2bored/' },
  { label: 'GitHub', value: 'charlie2bored', href: 'https://github.com/charlie2bored' },
  { label: 'X', value: '@charlie2bored', href: 'https://x.com/charlie2bored' },
];

/** The footer's small print. */
export const signoff = 'designed, built and danced by me';
