/**
 * The design sequence — the section after dance, and the site's one sideways
 * move. Tuned in a throwaway lab; settled on continuous motion at 0.6x pace.
 *
 * Every section above has its own gesture: the burst, the slam, the axis, the
 * field. Design turns sideways. The section pins and vertical scroll drives a
 * track of full-height pages left to right, one piece at a time, so a handful
 * of works reads as a curated sequence rather than a sparse grid. Drawings
 * come first — the hand before the screen — then the client work.
 *
 * Live sites sit still in a browser frame showing their hero; a click opens
 * the whole page to scroll by hand. (Auto-panning them was tried and dropped:
 * it moved the page for you.)
 *
 * medara: approved by Kendra Batchelder on 2026-09-11, scoped to what is
 * already public — the website, the news cards, the logo, and a short
 * description of the role. Every card matches a live post on medara.co/news,
 * and the site capture is the version with her edits, taken after they
 * deployed.
 */

export type DesignPage =
  | { kind: 'title'; id: string }
  | { kind: 'drawing'; id: string; ratio: number; title: string; note: string }
  | { kind: 'site'; id: string; url: string; img: string; imgW: number; imgH: number; title: string; note: string }
  | { kind: 'series'; id: string; imgs: string[]; title: string; note: string }
  | { kind: 'image'; id: string; img: string; w: number; h: number; title: string; note: string };

export type DesignSite = Extract<DesignPage, { kind: 'site' }>;

export const designHeading = '[design headline]';

const COVERS = [
  'cover-01-rsna-2026', 'cover-02-auntminnie-nci', 'cover-03-nci-grant', 'cover-04-startup-prize',
  'cover-05-purpose-summit', 'cover-06-bendaniel', 'cover-07-nccn-komen', 'cover-08-fertility-news',
  'cover-09-crains', 'cover-10-oncodaily-rsna', 'cover-11-venturewell-30', 'cover-12-hlth-2025',
  'cover-13-aspire-medtech', 'cover-14-advisors', 'cover-15-healthnext', 'cover-16-cornell-tech',
].map((c) => `/design/medara-covers/${c}.jpg`);

export const designPages: DesignPage[] = [
  { kind: 'title', id: 'title' },
  // Placeholders until the flatbed scans; each is a letter-size sheet.
  { kind: 'drawing', id: 'vol1', ratio: 8.5 / 11, title: 'CHARLIE2BORED Vol. 1 — cover', note: 'Charcoal and colored pencil. Scan pending.' },
  { kind: 'drawing', id: 'stussy', ratio: 8.5 / 11, title: 'Stüssy — 8-Cube Drop (spec)', note: 'Colored pencil. Scan pending.' },
  { kind: 'drawing', id: 'figure', ratio: 8.5 / 11, title: 'Figure in red', note: 'Colored pencil. Scan pending.' },
  {
    kind: 'site', id: 'kindling', url: 'kindlingep.com', img: '/design/kindling.jpg', imgW: 1600, imgH: 3921,
    title: 'Kindling Education Partners',
    note: 'Scoped and shipped their corporate site, built on the client’s own GitHub and Vercel.',
  },
  {
    kind: 'site', id: 'medara', url: 'medara.co', img: '/design/medara.jpg', imgW: 1600, imgH: 4754,
    title: 'medara', note: 'Designed the site, and run it day to day — news posts and their covers, copy updates, deploys.',
  },
  { kind: 'series', id: 'medara-covers', imgs: COVERS, title: 'medara — news covers', note: 'Sixteen covers, one system.' },
  { kind: 'image', id: 'clearcore', img: '/projects/clearcore-protein.png', w: 1024, h: 552, title: 'ClearCore Protein', note: 'Self-directed, start to finish.' },
  { kind: 'image', id: 'speedreader', img: '/projects/speedreader.png', w: 2880, h: 1556, title: 'SpeedReader', note: 'Self-directed, start to finish.' },
  // One frame stands for the whole site: the first thing anyone sees of it.
  { kind: 'image', id: 'this-site', img: '/design/this-site-hero.jpg', w: 1600, h: 905, title: 'This site — hero and navbar', note: 'Designed in Figma first, then built to move.' },
];

/** Vertical scroll per pixel of sideways travel. Settled in the lab. */
export const designPace = 0.6;

/** Paper shared with every light section above. */
export const designBg = '#ece9e4';
export const designText = '#000000';
