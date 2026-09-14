'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
 * of twelve at a time. Sound belongs in a full player, not a field of loops:
 * clicking a clip opens the whole thing, with sound, over the page.
 */

const SPRING = { stiffness: 200, damping: 18, mass: 0.4, restDelta: 0.0004 };

const easeOut = (v: number) => 1 - Math.pow(1 - Math.min(Math.max(v, 0), 1), 3);

/**
 * The clip's frame. A video with a full cut is a button that opens it, with a
 * tag that appears on hover — and stays up on touch screens, which have no
 * hover to reveal it. A photo is just a frame.
 */
function MediaFrame({ tile, onOpen, children }: { tile: DanceTile; onOpen: (t: DanceTile) => void; children: React.ReactNode }) {
  const ratio = { aspectRatio: `${tile.w} / ${tile.h}` };
  if (!tile.full) {
    return (
      <div className="relative w-full overflow-hidden" style={ratio}>
        {children}
      </div>
    );
  }
  const [title] = tile.line.split(' - ');
  return (
    <button
      type="button"
      onClick={() => onOpen(tile)}
      aria-label={`Play ${title}, the full clip with sound`}
      className="group relative block w-full cursor-pointer overflow-hidden"
      style={ratio}
    >
      {children}
      <span className="pointer-events-none absolute right-3 top-3 bg-black/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
        ▶ full clip
      </span>
    </button>
  );
}

/**
 * The full clip, with sound, over a dimmed page. data-lenis-prevent keeps the
 * smooth scroller out of it, and wheel or drag over the backdrop is swallowed
 * so the field behind cannot move while it plays (drags on the video itself
 * pass through, so its scrubber still works on a phone). Escape, the close
 * button or a click outside closes it, and unmounting stops the video.
 */
function DanceViewer({ tile, onClose }: { tile: DanceTile | null; onClose: () => void }) {
  const overlay = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!tile) return;
    const el = overlay.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const swallowWheel = (e: Event) => e.preventDefault();
    const swallowDrag = (e: Event) => {
      if (!(e.target as Element).closest('video')) e.preventDefault();
    };
    addEventListener('keydown', onKey);
    el?.addEventListener('wheel', swallowWheel, { passive: false });
    el?.addEventListener('touchmove', swallowDrag, { passive: false });
    closeBtn.current?.focus({ preventScroll: true });
    return () => {
      removeEventListener('keydown', onKey);
      el?.removeEventListener('wheel', swallowWheel);
      el?.removeEventListener('touchmove', swallowDrag);
    };
  }, [tile, onClose]);

  if (!tile?.full) return null;
  const [title, credit] = tile.line.split(' - ');

  return (
    <div
      ref={overlay}
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label={`${tile.line}, full clip`}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 p-[3vw] backdrop-blur-sm"
    >
      <button
        ref={closeBtn}
        type="button"
        onClick={onClose}
        className="absolute right-[3vw] top-[3vh] font-mono text-[11px] uppercase tracking-[0.16em] text-white/70 hover:text-white"
      >
        ✕ close
      </button>
      {/* Fits inside 92% of the width and 82% of the height, whichever binds. */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: `${tile.w} / ${tile.h}`, height: `min(82vh, calc(92vw * ${(tile.h / tile.w).toFixed(4)}))` }}
      >
        <video src={tile.full} poster={tile.poster} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
      </div>
      <p onClick={(e) => e.stopPropagation()} className="mt-4 text-center font-mono text-[11px] uppercase leading-[1.5] tracking-[0.14em] text-white/85">
        {title}
        {credit && <>{' '}<span className="block text-white/55">{credit}</span></>}
      </p>
    </div>
  );
}

function Card({
  tile,
  dir,
  travel,
  spread,
  onOpen,
}: {
  tile: DanceTile;
  /** Opens the full clip; only videos have one. */
  onOpen: (t: DanceTile) => void;
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
        <MediaFrame tile={tile} onOpen={onOpen}>
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
        </MediaFrame>
        <figcaption className="py-[0.9em] font-mono text-[10px] uppercase leading-[1.4] tracking-[0.14em] text-white/80">
          {title}
          {credit && <>{' '}<span className="block text-white/55">{credit}</span></>}
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

  const [open, setOpen] = useState<DanceTile | null>(null);
  const close = useCallback(() => setOpen(null), []);

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
          <p className="font-title text-center text-[clamp(2.4rem,6.4vw,8rem)] font-bold leading-[0.95] tracking-[-0.035em]">
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
                  onOpen={setOpen}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-[1.6vw]">
          <Card tile={danceFinale} dir={0} travel={travel} spread={0} onOpen={setOpen} />
        </div>
      </div>
      <DanceViewer tile={open} onClose={close} />
    </section>
  );
}
