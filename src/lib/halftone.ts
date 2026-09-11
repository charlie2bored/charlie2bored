/**
 * Type read back as dots — the data headline's halftone, shared with the 404
 * and error pages.
 */

export type Dot = { x: number; y: number };

/** Small, fast, seedable: the same scatter on every load. */
export function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Set the text in an offscreen canvas and read it back as a hex halftone: one
 * dot per grid point that lands on ink. A headline breaks after its question
 * mark, one line per half. The type starts at `maxSize` and shrinks until the
 * widest line fits `maxWidth`; the grid spacing follows the type size, so a
 * phone gets the same texture as a desktop, just fewer dots.
 */
export function halftone(
  text: string,
  o: { W: number; H: number; font: string; maxSize: number; maxWidth: number; cx?: number; cy?: number },
) {
  const { W, H, font, maxWidth } = o;
  const cx = o.cx ?? W / 2;
  const cy = o.cy ?? H / 2;
  const off = document.createElement('canvas');
  off.width = Math.round(W);
  off.height = Math.round(H);
  const g = off.getContext('2d')!;
  const lines = text.split(/(?<=\?)\s+/);
  let size = o.maxSize;
  const fit = () => {
    g.font = `700 ${size}px ${font}`;
    return Math.max(...lines.map((l) => g.measureText(l).width));
  };
  while (fit() > maxWidth && size > 12) size *= 0.96;
  g.fillStyle = '#000';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  lines.forEach((l, i) => g.fillText(l, cx, cy + (i - (lines.length - 1) / 2) * size));
  const img = g.getImageData(0, 0, off.width, off.height).data;
  const gap = Math.min(6.5, Math.max(3.6, size / 26));
  const rowH = gap * 0.866;
  const dots: Dot[] = [];
  let top = H, bottom = 0;
  for (let r = 0, y = rowH / 2; y < off.height; r++, y += rowH)
    for (let x = (r % 2 ? gap / 2 : 0) + gap / 4; x < off.width; x += gap)
      if (img[(Math.round(y) * off.width + Math.round(x)) * 4 + 3] > 140) {
        dots.push({ x, y });
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
      }
  return { dots: dots.slice(0, 6000), gap, top, bottom };
}

/**
 * The title face (Space Grotesk, via next/font's --font-grotesk on body),
 * loaded before it is drawn: a canvas cannot wait for a font the way text
 * can, so a face nothing has used yet would otherwise draw as the fallback.
 */
export async function titleFont() {
  const family = getComputedStyle(document.body).getPropertyValue('--font-grotesk').trim();
  const stack = `${family ? `${family}, ` : ''}ui-sans-serif, system-ui, sans-serif`;
  try {
    await document.fonts.load(`700 100px ${stack}`);
  } catch {}
  await document.fonts.ready;
  return stack;
}
