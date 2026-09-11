/**
 * The design sequence — the section after dance, and the site's one sideways
 * move. Tuned in a throwaway lab; settled on continuous motion at 0.6x pace.
 *
 * Every section above has its own gesture: the burst, the slam, the axis, the
 * field. Design turns sideways. The section pins and vertical scroll drives a
 * track of full-height pages left to right, one piece at a time, so a handful
 * of works reads as a curated sequence rather than a sparse grid.
 *
 * Order signals importance, because attention falls off along a sideways
 * sequence: web first — client work, then Charlie's own projects — then
 * graphics, then illustration. Each piece carries its category as a small
 * label; order, not a sub-label, says client versus personal. It ends on the
 * drawings, so the last thing seen before the pin lets go is his hand, which
 * hands off to About in his own voice.
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
  /** `img` is the flattened photo; without one the page shows a blank sheet. */
  | { kind: 'drawing'; id: string; category: Category; ratio: number; title: string; note: string; img?: string; alt?: string }
  | { kind: 'site'; id: string; category: Category; url: string; img: string; imgW: number; imgH: number; title: string; note: string }
  | { kind: 'series'; id: string; category: Category; imgs: string[]; title: string; note: string }
  /** `href`: the live project. The picture links out to it so people can use the real thing. */
  | { kind: 'image'; id: string; category: Category; img: string; w: number; h: number; title: string; note: string; href?: string };

export type Category = 'Web' | 'Graphics' | 'Illustration';

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

  // Web — client work first.
  {
    kind: 'site', id: 'medara', category: 'Web', url: 'medara.co', img: '/design/medara.jpg', imgW: 1600, imgH: 4754,
    title: 'medara', note: 'Designed the site, and run it day to day — news posts and their covers, copy updates, deploys.',
  },
  {
    kind: 'site', id: 'kindling', category: 'Web', url: 'kindlingep.com', img: '/design/kindling.jpg', imgW: 1600, imgH: 3921,
    title: 'Kindling Education Partners',
    note: 'Scoped and shipped their corporate site, built on the client’s own GitHub and Vercel.',
  },
  // Web — then Charlie's own projects.
  { kind: 'image', id: 'clearcore', category: 'Web', img: '/projects/clearcore-protein.png', w: 1024, h: 552, title: 'ClearCore Protein', note: 'Self-directed, start to finish.', href: 'https://clearcore-tau.vercel.app/' },
  { kind: 'image', id: 'speedreader', category: 'Web', img: '/projects/speedreader.png', w: 2880, h: 1556, title: 'SpeedReader', note: 'Self-directed, start to finish.', href: 'https://speed-reader-weld.vercel.app/' },
  // One frame stands for the whole site: the first thing anyone sees of it.
  { kind: 'image', id: 'this-site', category: 'Web', img: '/design/this-site-hero.jpg', w: 1600, h: 905, title: 'This site — hero and navbar', note: 'Designed in Figma first, then built to move.' },

  // Graphics. The medara logo joins these once it is in.
  { kind: 'series', id: 'medara-covers', category: 'Graphics', imgs: COVERS, title: 'medara — news covers', note: 'Sixteen covers, one system.' },

  // Illustration. Letter-size sheets, photographed flat, then straightened and
  // cropped to the paper's edge; colours left exactly as drawn.
  {
    kind: 'drawing', id: 'run-for-cover', category: 'Illustration', ratio: 8.5 / 11, img: '/design/illustrations/run-for-cover.jpg',
    title: 'RUN FOR COVER', note: 'Charcoal and colored pencil.',
    alt: 'A figure mid-stride casting a long shadow, with the words RUN FOR COVER set into purple perspective rays that meet at him; signed CHARLIE2BORED Vol. 1.',
  },
  {
    kind: 'drawing', id: 'stussy', category: 'Illustration', ratio: 8.5 / 11, img: '/design/illustrations/stussy.jpg',
    title: 'Stüssy — 8-Cube Drop (spec)', note: 'Colored pencil.',
    alt: 'A poster on green: STÜSSY in heavy block letters, a hand lining up a pool cue at an 8-ball cube and a die, headed “HUH? 8-Cube Drop”.',
  },
  {
    kind: 'drawing', id: 'akashi-seijuurou', category: 'Illustration', ratio: 8.5 / 11, img: '/design/illustrations/akashi-seijuurou.jpg',
    title: 'Akashi Seijuurou', note: 'Colored pencil.',
    alt: 'Akashi Seijuurou, red-haired, drawn as a winged figure in black, red and white, reaching forward against a dark pencil ground.',
  },
  {
    kind: 'drawing', id: 'red-sky-forest', category: 'Illustration', ratio: 8.5 / 11, img: '/design/illustrations/red-sky-forest.jpg',
    title: 'red sky forest', note: 'Colored pencil.',
    alt: 'A jagged red sky spreading down through grey masses of forest.',
  },
];

/** Vertical scroll per pixel of sideways travel. Settled in the lab. */
export const designPace = 0.6;

/** Paper shared with every light section above. */
export const designBg = '#ece9e4';
export const designText = '#000000';
