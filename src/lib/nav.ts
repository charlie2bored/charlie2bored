/** Rail content, transcribed from the Figma frame (NAVBAR + HERO, 2001:2). */

export const owner = {
  name: 'CHARLIE “2bored” VARGAS',
  role: 'ANALYST. DESIGNER. PERFORMER.',
};

/** Shown in the hero's top strip. Static text, not a live clock — a rendered
 *  date would disagree between server and client. */
export const dateline = 'NEW YORK, NY / SEPT. 9, 2026 / UPDATE';

/**
 * The rail is a map of the site, so it lists only what exists. The old
 * Experience / Education / Dance / Design / Data routes were the retired
 * design and have been removed; each label comes back here as its page is
 * built, rather than sitting in the rail pointing at a 404.
 */
export const navItems = [{ label: 'Home', href: '/' }];

export const contact = {
  email: 'iamcharlesvargas@gmail.com',
  phone: '+1 (908) 510-5281',
  social: '@charlie2bored on all social medias',
};

export const downloads = [{ label: 'Resume', href: '/Charles-Vargas-Data.pdf', download: true }];

/** 2024 is the site's launch year, deliberately, not the current year. */
export const copyright = '© 2024 CHARLIE VARGAS';
