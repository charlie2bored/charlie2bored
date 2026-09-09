/** Rail content, transcribed from the Figma frame (NAVBAR + HERO, 2001:2). */

export const owner = {
  name: 'CHARLIE “2bored” VARGAS',
  role: 'ANALYST. DESIGNER. PERFORMER.',
};

/** Shown in the hero's top strip. Static text, not a live clock — a rendered
 *  date would disagree between server and client. */
export const dateline = 'NEW YORK, NY / SEPT. 9, 2026 / UPDATE';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Dance', href: '/dance' },
  { label: 'Design', href: '/design' },
  { label: 'Data', href: '/data' },
];

export const contact = {
  email: 'iamcharlesvargas@gmail.com',
  phone: '+1 (908) 510-5281',
  social: '@charlie2bored on all social medias',
};

export const downloads = [{ label: 'Resume', href: '/Charles-Vargas-Data.pdf', download: true }];

/** 2024 is the site's launch year, deliberately, not the current year. */
export const copyright = '© 2024 CHARLIE VARGAS';
