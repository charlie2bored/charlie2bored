/** Rail content, transcribed from the Figma frame (NAVBAR + HERO, 2001:2). */

export const owner = {
  name: 'CHARLIE “2bored” VARGAS',
  role: 'ANALYST. DESIGNER. PERFORMER.',
};

/** The hero's top strip, either side of today's date (see useToday). */
export const dateline = { place: 'NEW YORK, NY', tag: 'UPDATE' };

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
