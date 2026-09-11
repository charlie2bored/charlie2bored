'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { halftone, seeded } from '@/lib/halftone';

const PAPER = '#ece9e4';

/**
 * A word set in the data section's halftone, drawn once, with a share of its
 * dots wandered off across the page — for pages about something having gone
 * missing. Static: nothing here to scroll.
 */
function StrayWord({ word, strays }: { word: string; strays: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    const draw = async () => {
      await document.fonts.ready;
      const cv = canvas.current;
      if (!cv || cancelled) return;
      const W = cv.clientWidth, H = cv.clientHeight;
      if (W < 2 || H < 2) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      const g = cv.getContext('2d')!;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      const { dots, gap } = halftone(word, {
        W,
        H,
        font: getComputedStyle(document.body).fontFamily,
        maxSize: H * 0.36,
        maxWidth: W * 0.8,
        cy: H * 0.34,
      });
      const rand = seeded(404);
      const r = gap * 0.34;
      g.clearRect(0, 0, W, H);
      for (const d of dots) {
        let { x, y } = d;
        let a = 1;
        if (rand() < strays) {
          // Wandered: mostly a short way, a few clear across the page.
          const t = rand() * Math.PI * 2;
          const dist = W * (0.03 + 0.5 * rand() ** 2.2);
          x = Math.min(W - r, Math.max(r, x + Math.cos(t) * dist));
          y = Math.min(H - r, Math.max(r, y + Math.sin(t) * dist));
          a = 0.45 + 0.4 * rand();
        }
        g.globalAlpha = a;
        g.beginPath();
        g.arc(x, y, r, 0, 6.2832);
        g.fill();
      }
      g.globalAlpha = 1;
    };
    draw();
    const ro = new ResizeObserver(draw);
    if (canvas.current) ro.observe(canvas.current);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [word, strays]);

  return <canvas ref={canvas} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}

/**
 * The 404 and error pages: paper, the halftone word up top, and a headline in
 * the site's "question? answer." voice with a way back underneath.
 */
export default function ErrorFrame({
  word,
  eyebrow,
  headline,
  body,
  children,
}: {
  word: string;
  eyebrow: string;
  headline: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" style={{ backgroundColor: PAPER }} className="relative min-h-dvh overflow-hidden text-black">
      <StrayWord word={word} strays={0.08} />
      <div className="relative flex min-h-dvh flex-col items-center justify-end px-5 pb-[9vh] text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">{eyebrow}</p>
        <h1 className="mt-4 text-[clamp(2.2rem,5.4vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.035em]">
          {headline.split(/(?<=\?)\s+/).map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[42ch] text-base leading-snug text-black/70 lg:text-[1.1rem]">{body}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          {children}
        </div>
      </div>
    </main>
  );
}

/** Shared button looks, so both pages offer their way out the same way. */
export const solidButton = 'uppercase bg-black px-5 py-3 text-[#ece9e4] transition-opacity hover:opacity-80';
export const lineButton = 'uppercase border border-black/30 px-5 py-3 transition-colors hover:border-black';
