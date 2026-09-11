/**
 * The collage, transcribed from the Figma frames START STATE (2003:85) and
 * END STATE (2003:50). Both are 3572 x 2020; every value below is a
 * percentage of that frame so the composition scales with the viewport.
 *
 * The photos are identically sized in both states — only their centre and
 * rotation change, which is exactly what the burst animates.
 *
 * One subtlety about `w` and `h`. They are percentages of DIFFERENT axes —
 * width of the frame's width, height of its height — so reading them straight
 * into CSS only preserves a photo's shape at the frame's own 3572:2020 (1.768)
 * aspect. Away from it every photo stretches by viewportAspect / 1.768: barely
 * anything at 16:9, but +65% on a 2.9-wide window, which squashes the pictures
 * and shoves the edge ones further off screen. `placement` below resolves each
 * photo to a real box instead, and Opening.tsx sizes from that.
 */

export const frame = { w: 3572, h: 2020 };

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
  /** Scattered state on a portrait screen: centre in vw / vh. See `portrait` below. */
  portrait: { x: number; y: number };
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
    portrait: { x: 21, y: 22 },
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
    portrait: { x: 76, y: 16 },
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
    portrait: { x: 79, y: 67 },
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
    portrait: { x: 24, y: 65 },
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
    portrait: { x: 52, y: 86 },
    focusY: 49.18,
  },
];

/**
 * How a photo resolves against a viewport of any shape.
 *
 * Size: the photo takes its designed width, but never more height than it was
 * designed to occupy — `min()` picks whichever budget binds first, and the
 * aspect ratio is carried explicitly so it can never stretch. On a short
 * window the collage gets smaller rather than wider.
 *
 * Position: four of the five photos are drawn hanging off an edge of the
 * frame, and that bleed is the composition. Centring them would pull those
 * edges back on screen as soon as the photo resized, so each is anchored to
 * the edge it bleeds past and only the free axis stays centred.
 */
export type Placement = {
  aspect: number;
  /** CSS lengths, both derived from the same min() so the shape is fixed. */
  width: string;
  height: string;
  /** Anchor and the frame-percentage it pins to. */
  x: { edge: 'left' | 'right' | 'center'; at: number; half: number };
  y: { edge: 'top' | 'bottom' | 'center'; at: number; half: number };
};

const EDGE = 0.5;

export function placement(p: CollagePhoto): Placement {
  const aspect = ((p.w / 100) * frame.w) / ((p.h / 100) * frame.h);

  // vw is a percentage of viewport width and vh of its height, which is
  // exactly what w and h already mean — so the units convert one for one.
  const width = `min(${p.w}vw, ${(p.h * aspect).toFixed(4)}vh)`;
  const height = `min(${(p.w / aspect).toFixed(4)}vw, ${p.h}vh)`;

  const left = p.to.x - p.w / 2;
  const right = p.to.x + p.w / 2;
  const top = p.to.y - p.h / 2;
  const bottom = p.to.y + p.h / 2;

  const x: Placement['x'] =
    left < EDGE
      ? { edge: 'left', at: left, half: 0.5 }
      : right > 100 - EDGE
        ? { edge: 'right', at: right, half: -0.5 }
        : { edge: 'center', at: p.to.x, half: 0 };

  const y: Placement['y'] =
    top < EDGE
      ? { edge: 'top', at: top, half: 0.5 }
      : bottom > 100 - EDGE
        ? { edge: 'bottom', at: bottom, half: -0.5 }
        : { edge: 'center', at: p.to.y, half: 0 };

  return { aspect, width, height, x, y };
}

/**
 * The clustered state is a rigid composition: the photos overlap into a pile,
 * and that overlap is the whole picture. The scattered state is the opposite —
 * it is pinned to the edges of whatever screen it is on.
 *
 * So the two states scale by different rules. Scattered stays in viewport
 * percentages with the edge anchors above. Clustered scales as one object
 * around its own centroid, by exactly the factor the boxes resized by, or the
 * pile comes apart as soon as the window stops being 1.768 wide.
 *
 * That factor is min(1, frameAspect / viewportAspect) horizontally, which is
 * not something CSS can divide out — but multiplied through by 1vw it is just
 * `min(1vw, 1.768vh)`, a length CSS is happy to resolve. Same trick as the
 * photo boxes: one unit that answers to whichever axis binds first.
 */
export const clusterUnit = {
  x: `min(1vw, ${(frame.w / frame.h).toFixed(4)}vh)`,
  y: `min(1vh, ${(frame.h / frame.w).toFixed(4)}vw)`,
};

/** Centre of the pile, the point it contracts toward. */
export const clusterCentre = {
  x: photos.reduce((t, p) => t + p.from.x, 0) / photos.length,
  y: photos.reduce((t, p) => t + p.from.y, 0) / photos.length,
};

export const eyebrow = ['HELLO!', 'I’M CHARLIE'];

export const statement = [
  'I’m a data analyst,',
  'product designer, and',
  'loudest hypeman in NYC.',
];

/** Vertical placement as % of frame, matching the Figma text nodes. */
export const textTop = { eyebrow: 21.089, statement: 29.406 };

/**
 * Portrait screens (phones, tall tablets) get their own scattered state.
 *
 * The Figma composition is 1.768 wide and pins its photos to the edges of the
 * screen; on a 0.46-wide phone that leaves five thumbnails hanging off the
 * edges and the statement floating over an empty middle. So on portrait:
 *
 * - the pile is the same pile, drawn 1.4x larger in `portraitUnit` (1vw, or
 *   0.5vh on a short phone, so an SE does not crowd), offsets and boxes in
 *   the same unit so it holds together exactly as on desktop;
 * - bursting, each photo grows another `portraitGrow` and settles on its
 *   `portrait` centre: two above the statement, three below;
 * - the statement sits in the middle, larger (see Opening.tsx).
 */
export const portraitUnit = 'min(1vw, 0.5vh)';
export const portraitPile = 1.4;
export const portraitGrow = 1.45;
export const portraitTextTop = { eyebrow: 35.5, statement: 40 };

/**
 * Ground shared with the experience board. The Figma frames use #bfbec2, a
 * cool grey that reads as unset placeholder; this is warmer and brighter so
 * the two light sections form one continuous surface with no seam.
 */
export const collageBg = '#ece9e4';
