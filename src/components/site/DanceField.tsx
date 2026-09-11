'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  type DanceTile,
  danceBg,
  danceEntry,
  danceFinale,
  danceHeading,
  danceText,
  danceTiles,
} from '@/lib/dance';

/**
 * The dance field. See lib/dance.ts for why it moves the way it does.
 *
 * Every clip is a short muted loop that loads nothing until it is near the
 * screen and plays only while it is on it — on this page that is two to six
 * of twelve at a time. Sound belongs in a full player, not a field of loops.
 */

const SPRING = { stiffness: 200, damping: 18, mass: 0.4, restDelta: 0.0004 };

const easeOut = (v: number) => 1 - Math.pow(1 - Math.min(Math.max(v, 0), 1), 3);

function Card({
  tile,
  dir,
  travel,
  spread,
}: {
  tile: DanceTile;
  /** -1 left column, 0 middle, 1 right: the side it flies in from. */
  dir: number;
  travel: number;
  spread: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', `start ${danceEntry.landsAt}`],
  });
  const p = useSpring(scrollYProgress, SPRING);

  const scale = useTransform(p, (v) => danceEntry.scaleFrom + (1 - danceEntry.scaleFrom) * easeOut(v));
  const y = useTransform(p, (v) => travel * (1 - easeOut(v)));
  const x = useTransform(p, (v) => dir * spread * (1 - easeOut(v)));

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <motion.figure style={{ scale, x, y }} className="relative will-change-transform" >
        <div style={{ backgroundColor: tile.mat, padding: '7% 7% 11%' }}>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${tile.w} / ${tile.h}` }}>
            {tile.kind === 'video' ? (
              <video
                ref={videoRef}
                src={tile.src}
                poster={tile.poster}
                muted
                loop
                playsInline
                preload="none"
                aria-label={tile.line}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image src={tile.src} alt={tile.line} fill sizes="(min-width: 768px) 34vw, 50vw" className="object-cover" />
            )}
          </div>
        </div>
        <figcaption className="absolute bottom-[3.2%] left-[7%] right-[7%] truncate font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
          {tile.line}
        </figcaption>
      </motion.figure>
    </div>
  );
}

/** Masonry by hand: each card goes to the shortest column so far. */
function distribute(tiles: DanceTile[], cols: number) {
  const out: DanceTile[][] = Array.from({ length: cols }, () => []);
  const heights = new Array(cols).fill(0);
  for (const t of tiles) {
    const i = heights.indexOf(Math.min(...heights));
    out[i].push(t);
    heights[i] += t.h / t.w + 0.24; // + mat and gap, as a share of column width
  }
  return out;
}

export default function DanceField() {
  /*
   * Column count needs JS because the masonry is distributed, not flowed. The
   * server renders three; a phone reflows to two on hydration, which happens
   * several screens above where this section sits, so it is never seen.
   */
  const wide = useMediaQuery('(min-width: 768px)', true);
  const cols = wide ? 3 : 2;
  const columns = useMemo(() => distribute(danceTiles, cols), [cols]);

  // Two columns on a phone: the same gesture, scaled to a screen a third as wide.
  const dirs = cols === 3 ? [-1, 0, 1] : [-1, 1];
  const spread = cols === 3 ? danceEntry.spread : danceEntry.spread * 0.35;
  const travel = cols === 3 ? danceEntry.travel : danceEntry.travel * 0.6;

  return (
    // overflow-x: clip, not hidden — cards spreading in from the sides overhang
    // the page, and `hidden` would turn this into a scroll container.
    <section
      id="dance"
      aria-label="Dance"
      className="relative overflow-x-clip pb-[14vh]"
      style={{ backgroundColor: danceBg, color: danceText }}
    >
      <p className="pb-[12vh] pt-[16vh] text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold">
        {danceHeading}
      </p>

      <div className="mx-auto max-w-[1600px] px-[3vw]">
        <div className="flex gap-[1.6vw]">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-1 flex-col gap-[1.6vw]">
              {col.map((t) => (
                <Card
                  key={t.id}
                  tile={t}
                  dir={dirs[ci]}
                  travel={travel * (danceEntry.stagger[ci] ?? 1)}
                  spread={spread}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-[1.6vw]">
          <Card tile={danceFinale} dir={0} travel={travel} spread={0} />
        </div>
      </div>
    </section>
  );
}
