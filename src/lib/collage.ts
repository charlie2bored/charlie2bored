/**
 * The collage, transcribed from the Figma frames START STATE (2003:85) and
 * END STATE (2003:50). Both are 3572 x 2020; every value below is a
 * percentage of that frame so the composition scales with the viewport.
 *
 * The photos are identically sized in both states — only their centre and
 * rotation change, which is exactly what the burst animates.
 */

export type CollagePhoto = {
  id: string;
  src: string;
  alt: string;
  /** Size as % of frame. */
  w: number;
  h: number;
  /** Clustered state: centre as % of frame, plus rotation in degrees. */
  from: { x: number; y: number; rotate: number };
  /** Scattered state. Rotation always resolves to 0 — chaos into order. */
  to: { x: number; y: number };
  /** object-position Y, preserving the crop set on the Figma image fill. */
  focusY: number;
};

export const photos: CollagePhoto[] = [
  {
    id: 'img4',
    src: '/collage/img4.jpg',
    alt: 'Charlie on a stadium stage during a soundcheck, headset on',
    w: 16.309,
    h: 41.683,
    from: { x: 37.941, y: 38.366, rotate: -35 },
    to: { x: 6.586, y: 32.624 },
    focusY: 50,
  },
  {
    id: 'img2',
    src: '/collage/img2.jpg',
    alt: 'Charlie on a subway platform, towel over one shoulder',
    w: 21.649,
    h: 28.713,
    from: { x: 66.693, y: 35.643, rotate: 37 },
    to: { x: 89.174, y: 11.782 },
    focusY: 50,
  },
  {
    id: 'img6',
    src: '/collage/img6.jpg',
    alt: 'Mirror selfie with a friend',
    w: 13.432,
    h: 34.059,
    from: { x: 73.481, y: 53.612, rotate: 55 },
    to: { x: 93.564, y: 58.317 },
    focusY: 50.77,
  },
  {
    id: 'img5',
    src: '/collage/img5.jpg',
    alt: 'Charlie with crewmates in a studio, arms around each other',
    w: 22.709,
    h: 26.892,
    from: { x: 30.09, y: 60.897, rotate: -35 },
    to: { x: 17.157, y: 86.554 },
    focusY: 56.27,
  },
  {
    id: 'img3',
    src: '/collage/img3.jpg',
    alt: 'Full crew group photo in an arena stand',
    w: 24.369,
    h: 23.376,
    // The only photo that never rotates: it anchors the cluster.
    from: { x: 53.15, y: 53.612, rotate: 0 },
    to: { x: 65.334, y: 89.575 },
    focusY: 49.18,
  },
];

export const eyebrow = ['HELLO!', 'I’M CHARLIE'];

export const statement = [
  'I’m a data analyst,',
  'product designer, and',
  'loudest hypeman in NYC.',
];

/** Vertical placement as % of frame, matching the Figma text nodes. */
export const textTop = { eyebrow: 21.089, statement: 29.406 };

/** Ground colour of both Figma frames. */
export const collageBg = '#bfbec2';
