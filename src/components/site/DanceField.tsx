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

  // "Song - Choreographer" sets as a credit: the song, then who made it. On its
  // own line the name can never be the part a narrow card cuts off.
  const [title, credit] = tile.line.split(' - ');

  return (
    <div ref={ref}>
      <motion.figure style={{ scale, x, y, backgroundColor: tile.mat }} className="will-change-transform px-[7%] pt-[7%]">
        <div>
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
        <figcaption className="py-[0.9em] font-mono text-[10px] uppercase leading-[1.4] tracking-[0.14em] text-white/80">
          {title}
          {credit && <span className="block text-white/55">{credit}</span>}
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
    // Media is 86% of the column after the mat's side padding; the rest is the
    // mat's top, the caption and the gap, as a share of column width.
    heights[i] += 0.86 * (t.h / t.w) + 0.22;
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
      {/*
        The headline's own beat. The board's and education's headlines are held
        on screen by their sections' pins; this section has none, so set small
        in the flow it was simply scrolled past. Here it rises to the middle of
        the screen and holds while the first cards come up over it — the field
        buries "sitting still?", which is the line acted out. Only the headline
        holds; the grid itself still never pins.

        The stage is 180vh, so the headline is held for 80vh of scroll, and the
        grid is pulled up 90vh into it so the first row arrives mid-hold.
      */}
      <div className="relative h-[180vh]">
        <div className="sticky top-0 flex h-dvh items-center justify-center px-[4vw]">
          <p className="text-center text-[clamp(2.4rem,6.4vw,8rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            {danceHeading.split(/(?<=\?)\s+/).map((part) => (
              <span key={part} className="block">
                {part}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-[90vh] max-w-[1600px] px-[3vw]">
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
