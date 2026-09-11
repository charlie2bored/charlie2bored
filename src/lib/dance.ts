/**
 * The dance field — the section after education.
 *
 * Tuned in a throwaway lab against the real footage; the settled treatment is
 * the one measured on shopify.design. Every card starts 1.5x oversized, 800px
 * low and 350px out toward its own side, and settles into its slot as it
 * scrolls into view. Nothing is pinned: after three pinned sections this is
 * the release, and each card lands on its own as you pass it.
 *
 * `line` is the caption on each card's mat. Edit freely — nothing else
 * depends on the wording.
 *
 * `mat` is the colour of the light in the room the clip was shot in, sampled
 * from the footage and settled to one weight so no mat shouts over another.
 * Media lives in /public/dance; the camera originals it was cut from are in
 * the gitignored /media-src/dance.
 */

export type DanceTile = {
  id: string;
  kind: 'video' | 'photo';
  src: string;
  poster?: string;
  /** Intrinsic size of the media, for its aspect ratio. */
  w: number;
  h: number;
  mat: string;
  line: string;
};

export const danceHeading = '[dance headline]';

const v = (id: string, w: number, h: number, mat: string, line: string): DanceTile => ({
  id,
  kind: 'video',
  src: `/dance/${id}.mp4`,
  poster: `/dance/${id}.jpg`,
  w,
  h,
  mat,
  line,
});

const p = (id: string, w: number, h: number, mat: string, line: string): DanceTile => ({
  id,
  kind: 'photo',
  src: `/dance/${id}.jpg`,
  w,
  h,
  mat,
  line,
});

/** Display order. Studio, arena and photos interleave so no two of a kind sit together. */
export const danceTiles: DanceTile[] = [
  v('studio-8967', 720, 1280, '#426b29', 'Green room'),
  p('photo-stage', 900, 1301, '#2a2826', 'Red Bulls, on the stage'),
  v('arena-tunnel', 720, 1080, '#6b1b28', 'Team Toro tunnel'),
  v('studio-9166', 720, 1280, '#342c6b', 'Violet room'),
  p('photo-sirens', 900, 1160, '#6b5230', 'Sirens tunnel'),
  v('studio-0075', 720, 1280, '#6b4d30', 'Solo, bright studio'),
  v('arena-hotdog', 720, 1080, '#6b2f2f', 'Hot Dog Toss, Prudential Center'),
  p('photo-defender', 900, 1108, '#6b4130', 'Red Bulls, 26 Defender'),
  v('studio-8179', 720, 1280, '#6b155c', 'Magenta room'),
  p('photo-hotdogs', 900, 711, '#6b3c26', 'Hot dogs, Seton Hall'),
  v('battle', 960, 540, '#6b3053', 'Battle circle'),
  v('studio-9437', 720, 1280, '#6b1533', 'Red room'),
  p('photo-rbny', 900, 1080, '#6b3730', 'RBNY'),
  v('arena-bigscreen', 720, 1080, '#6b3037', 'On the big screen'),
  v('studio-7653', 720, 1280, '#2a2826', 'Haze and light beams'),
  p('photo-mascot', 900, 1123, '#6b3a2f', 'Mascot hat'),
  p('photo-crew-ice', 631, 411, '#6b342c', 'WOO! Crew on the ice'),
  v('studio-0560', 720, 1280, '#6b5e30', 'Yellow-green room'),
  p('photo-maclean', 900, 1278, '#6b1c22', 'A night honoring John MacLean'),
  p('photo-ice-selfie', 584, 587, '#6b3830', 'Devils ice selfie'),
];

/** The one 4K widescreen clip, saved for the end and run full width. */
export const danceFinale: DanceTile = v('finale-deshawn', 1920, 1080, '#6b3325', 'Broadway Dance Center');

/**
 * The entry, exactly as measured on shopify.design. Pixels, not viewport
 * units, because that is what Shopify uses and what was signed off in the lab.
 */
export const danceEntry = {
  scaleFrom: 1.5,
  travel: 800,
  spread: 350,
  /** Per-column travel multipliers, so the columns never land in lockstep. */
  stagger: [1, 1.18, 1.06],
  /** Cards finish landing when their top reaches this far down the screen. */
  landsAt: 0.55,
};

/** Paper shared with the collage, the board and education. */
export const danceBg = '#ece9e4';
export const danceText = '#000000';
