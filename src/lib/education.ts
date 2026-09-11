/**
 * The education band, transcribed from the Figma frame (2017:2).
 *
 * The frame is 3572 x 1722 — the same authoring width as the collage frames,
 * so the clustered geometry below is expressed the same way: percentages of
 * the frame, which become percentages of the pinned viewport.
 *
 * Figma defines the START state only: three school marks piled up with the
 * headline over them, exactly like the collage's clustered state. Where they
 * land is defined here, because it is the one thing education can say that
 * the experience board cannot.
 *
 * The board lists roles, and a role is a point — you either held it or you
 * did not. Schooling is a span. Kean was dual enrollment through senior year,
 * so it runs *inside* the UCVTS span rather than after it, and Northeastern
 * has not finished. Three equal columns would flatten all of that, so the
 * marks burst onto a time axis instead: overlap stays overlap, and the last
 * bar visibly has not arrived yet.
 */

import { built } from '@/lib/built';

export type School = {
  id: string;
  src: string;
  alt: string;
  /** Big label, in the board's voice. */
  name: string;
  /** The one line under it, same rule as the board's descriptors. */
  line: string;
  /** Inclusive start and exclusive end as [year, monthIndex], Jan = 0. */
  start: [number, number];
  end: [number, number];
  /** Clustered state from the Figma frame: centre as % of frame, rotation in deg. */
  from: { x: number; y: number; rotate: number };
  /** Which row of the axis it settles on, top to bottom. */
  row: 0 | 1 | 2;
};

export const schools: School[] = [
  {
    id: 'ucvts',
    src: '/education/ucvts.png',
    alt: 'Union County Vocational-Technical Schools seal',
    name: 'UCVTS',
    line: 'Academy for Performing Arts — four years of conservatory dance training.',
    start: [2020, 8],
    end: [2024, 5],
    from: { x: 42.172, y: 44.507, rotate: -45 },
    row: 0,
  },
  {
    id: 'kean',
    src: '/education/kean.png',
    alt: 'Kean University Cougar mark',
    name: 'KEAN',
    line: 'Dual enrollment through senior year — college credit while still at APA.',
    start: [2023, 8],
    end: [2024, 5],
    from: { x: 50.784, y: 44.425, rotate: 0 },
    row: 1,
  },
  {
    id: 'northeastern',
    src: '/education/northeastern.png',
    alt: 'Northeastern University Husky mark',
    name: 'NORTHEASTERN',
    line: 'B.S. Business Administration, New York. Treasurer, Fashion Organization.',
    start: [2024, 7],
    end: [2028, 4],
    from: { x: 58.415, y: 44.507, rotate: 27 },
    row: 2,
  },
];

export const educationHeading = 'learning? yeah that too.';

/**
 * Where the band has got to: the month of the last deploy, like the hero's
 * dateline (see built.ts). The only thing it moves is where the Northeastern
 * bar stops being solid.
 */
export const asOf: [number, number] = [built.year, built.month];

const months = ([y, m]: [number, number]) => y * 12 + m;

const FIRST = months(schools[0].start);
const LAST = Math.max(...schools.map((s) => months(s.end)));
const SPAN = LAST - FIRST;

/** A date's position along the axis, 0 at the first term and 1 at the last. */
export const fraction = (d: [number, number]) => (months(d) - FIRST) / SPAN;

/** Clustered marks are ~447/3572 of the frame; on the axis they are badges. */
const markSizeFrom = 12.514;
export const markSize = { from: markSizeFrom, to: 6.4 };

/** The axis inset, leaving room for a mark centred on each bar's start. */
export const axis = { left: 12, right: 88 };
export const axisX = (f: number) => axis.left + f * (axis.right - axis.left);

/** Row centres as % of the pinned viewport. */
export const rowY = [36, 57, 78] as const;

/**
 * Headline travel. In the frame the text node sits under the marks in z-order
 * at 48.23%, which buries it — the pile is painted straight over it. It reads
 * instead as a caption below the pile, then rises out of the axis's way.
 *
 * "Below the pile" cannot be a fixed percentage: the marks are sized off the
 * viewport's WIDTH, so on a wide, short screen they grow while the height they
 * sit in does not. The clearance is therefore measured the way the pile is —
 * half the tallest mark's rotated bounding box (12.514% x sqrt(2) / 2) in vw,
 * plus a little air in vh — so the caption sits just under it at any shape.
 */
export const headlineTop = {
  /** % of viewport height: the pile's centre, then the settled position. */
  base: { from: 44.507, to: 11 },
  /** vw: clearance below the pile's lowest corner, gone once it has burst. */
  clearVw: { from: (markSizeFrom * Math.SQRT2) / 2, to: 0 },
  /** vh: the gap between pile and caption. */
  gapVh: { from: 3.2, to: 0 },
};

/** Ticks worth naming. The middle one is the handover year. */
export const ticks: { label: string; at: [number, number] }[] = [
  { label: '2020', at: [2020, 8] },
  { label: '2024', at: [2024, 0] },
  { label: '2028', at: [2028, 4] },
];

/** Shared with the collage and the board, so the light run reads continuous. */
export const educationBg = '#ece9e4';
export const educationText = '#000000';
export const educationTextDim = 'rgba(0,0,0,0.68)';
export const educationRule = '#000000';
