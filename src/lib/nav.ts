/** Rail content, transcribed from the Figma frame (NAVBAR + HERO, 2001:2). */

import { builtDateline } from '@/lib/built';

export const owner = {
  name: 'CHARLIE “2bored” VARGAS',
  role: 'ANALYST. DESIGNER. PERFORMER.',
};

/** Shown in the hero's top strip: the date of the last deploy. */
export const dateline = `NEW YORK, NY / ${builtDateline} / UPDATE`;

/**
 * The rail is a map of the site, so it lists only what exists. The retired
 * routes are gone; Experience and Education came back as homepage sections,
 * so they are anchors rather than pages, and Dance, Design, Data and Contact
 * joined them the same way.
 */
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Dance', href: '#dance' },
  { label: 'Design', href: '#design' },
  { label: 'Data', href: '#data' },
  { label: 'Contact', href: '#contact' },
];

export const contact = {
  email: 'iamcharlesvargas@gmail.com',
  phone: '+1 (908) 510-5281',
  social: '@charlie2bored on all social medias',
};

export const downloads = [{ label: 'Resume', href: '/Charles-Vargas-Data.pdf', download: true }];

/** 2024 is the site's launch year, deliberately, not the current year. */
export const copyright = '© 2024 CHARLIE VARGAS';
