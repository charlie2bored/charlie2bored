'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { type CSSProperties, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import {
  type DesignPage,
  type DesignSite,
  designBg,
  designHeading,
  designPace,
  designPages,
  designText,
} from '@/lib/design';

/**
 * The design sequence. See lib/design.ts for why it goes sideways.
 *
 * Mechanics: the section pins, and the track's sideways travel is measured
 * rather than guessed — exactly far enough to bring the last piece to the
 * middle of the screen, at any screen size — so the section is exactly as tall
 * as it needs to be: travel x pace, plus one screen for the pin itself.
 * Scroll progress maps straight onto that travel through the site's usual
 * critically damped spring.
 */

const PANEL_H = 'min(72vh, 820px)';
const SPRING = { stiffness: 200, damping: 18, mass: 0.4, restDelta: 0.5 };

/**
 * A page's box: full height on a desktop, but never wider than most of the
 * screen, so on a phone a wide site frame shrinks to fit instead of running
 * off the edge. Width drives and the aspect ratio follows, so nothing stretches.
 */
const box = (ratio: number): CSSProperties => ({
  width: `min(calc(${PANEL_H} * ${ratio}), 84vw)`,
  aspectRatio: String(ratio),
});

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

function Caption({ title, note }: { title: string; note: string }) {
  return (
    <div className="mt-4 max-w-[46ch]">
      <p className="text-[13px] font-bold">{title}</p>
      <p className="mt-1 text-[12px] text-black/60">{note}</p>
    </div>
  );
}

function BrowserBar({ url, children }: { url: string; children?: ReactNode }) {
  return (
    <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-black/10 bg-[#f3f2f0] px-3">
      <span className="h-2 w-2 rounded-full bg-black/15" />
      <span className="h-2 w-2 rounded-full bg-black/15" />
      <span className="h-2 w-2 rounded-full bg-black/15" />
      <span className="ml-3 truncate rounded bg-white px-2 py-0.5 font-mono text-[10px] text-black/55">{url}</span>
      {children}
    </div>
  );
}

/** A site, still, showing its hero — the top of the full-page capture. */
function SitePage({ p, onOpen }: { p: DesignSite; onOpen: (s: DesignSite) => void }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onOpen(p)}
        aria-label={`Open ${p.title} and scroll the full site`}
        style={box(16 / 10)}
        className="group flex cursor-pointer flex-col overflow-hidden rounded-[6px] bg-white text-left shadow-[0_18px_50px_-20px_rgba(0,0,0,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-20px_rgba(0,0,0,0.45)]"
      >
        <BrowserBar url={p.url} />
        <div className="relative flex-1 overflow-hidden">
          <Image
            src={p.img}
            alt={`${p.title} website, hero section`}
            width={p.imgW}
            height={p.imgH}
            sizes="(min-width: 768px) 70vw, 84vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <span className="absolute bottom-4 right-4 bg-black px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white opacity-75 transition-opacity group-hover:opacity-100">
            click to scroll the site ↗
          </span>
        </div>
      </button>
      <Caption title={p.title} note={p.note} />
    </>
  );
}

/**
 * The opened site: the whole page in a large browser frame, scrolled by hand.
 * data-lenis-prevent hands wheel and touch back to the browser inside it, and
 * wheel or touch over the dim backdrop is swallowed so it cannot drive the
 * sideways track behind. Escape, the close button or a click outside closes it.
 */
function SiteViewer({ site, onClose }: { site: DesignSite | null; onClose: () => void }) {
  const overlay = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!site) return;
    const el = overlay.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const swallow = (e: Event) => {
      if (!scroller.current?.contains(e.target as Node)) e.preventDefault();
    };
    addEventListener('keydown', onKey);
    el?.addEventListener('wheel', swallow, { passive: false });
    el?.addEventListener('touchmove', swallow, { passive: false });
    scroller.current?.focus({ preventScroll: true });
    return () => {
      removeEventListener('keydown', onKey);
      el?.removeEventListener('wheel', swallow);
      el?.removeEventListener('touchmove', swallow);
    };
  }, [site, onClose]);

  if (!site) return null;

  return (
    <div
      ref={overlay}
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label={`${site.title}, full site`}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-[3vw] backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full max-h-[92vh] w-full max-w-[1280px] flex-col overflow-hidden rounded-[8px] bg-white shadow-2xl"
      >
        <BrowserBar url={site.url}>
          <a
            href={`https://${site.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-black/60 hover:text-black"
          >
            visit live site ↗
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-4 shrink-0 px-1 text-[14px] leading-none text-black/60 hover:text-black"
          >
            ✕
          </button>
        </BrowserBar>
        <div ref={scroller} tabIndex={0} className="flex-1 overflow-y-auto overscroll-contain outline-none">
          <Image
            src={site.img}
            alt={`${site.title} website`}
            width={site.imgW}
            height={site.imgH}
            sizes="(min-width: 1280px) 1280px, 94vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}

function Page({ p, onOpen }: { p: DesignPage; onOpen: (s: DesignSite) => void }) {
  switch (p.kind) {
    case 'title':
      return (
        <div className="flex w-[max(58vw,19rem)] shrink-0 flex-col justify-center" style={{ height: PANEL_H }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">04 — design</p>
          <h2 className="mt-6 text-[clamp(2.4rem,6.4vw,8rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            {designHeading}
          </h2>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">
            keep scrolling — it goes sideways →
          </p>
        </div>
      );
    case 'drawing':
      return (
        <div className="shrink-0">
          <div
            style={box(p.ratio)}
            className="flex flex-col items-center justify-center bg-[#f7f5f1] text-center shadow-[0_14px_40px_-18px_rgba(0,0,0,0.35)]"
          >
            <p className="px-6 text-[15px] font-bold">{p.title}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-black/45">scan pending</p>
          </div>
          <Caption title={p.title} note={p.note} />
        </div>
      );
    case 'site':
      return (
        <div className="shrink-0">
          <SitePage p={p} onOpen={onOpen} />
        </div>
      );
    case 'series':
      return (
        <div className="shrink-0">
          <div style={box(16 / 9)} className="grid grid-cols-4 grid-rows-4 gap-[0.5vw]">
            {p.imgs.map((src) => (
              <div key={src} className="relative overflow-hidden bg-black/5">
                <Image src={src} alt="" fill sizes="(min-width: 768px) 16vw, 21vw" className="object-cover" />
              </div>
            ))}
          </div>
          <Caption title={p.title} note={p.note} />
        </div>
      );
    case 'image': {
      const picture = <Image src={p.img} alt={p.title} fill sizes="(min-width: 768px) 80vw, 84vw" className="object-cover" />;
      return (
        <div className="shrink-0">
          {p.href ? (
            // A live project: the picture opens the real thing in a new tab,
            // with the same affordance and lift as the sites that open in place.
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title}, live, in a new tab`}
              style={box(p.w / p.h)}
              className="group relative block overflow-hidden shadow-[0_14px_40px_-18px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-20px_rgba(0,0,0,0.45)]"
            >
              {picture}
              <span className="absolute bottom-4 right-4 bg-black px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white opacity-75 transition-opacity group-hover:opacity-100">
                open the live site ↗
              </span>
            </a>
          ) : (
            <div style={box(p.w / p.h)} className="relative overflow-hidden shadow-[0_14px_40px_-18px_rgba(0,0,0,0.3)]">
              {picture}
            </div>
          )}
          <Caption title={p.title} note={p.note} />
        </div>
      );
    }
  }
}

export default function DesignSequence() {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const travel = useRef(0);

  const [site, setSite] = useState<DesignSite | null>(null);
  const close = useCallback(() => setSite(null), []);

  useEffect(() => {
    const measure = () => {
      const t = track.current;
      const o = outer.current;
      if (!t || !o) return;
      // Travel ends with the last piece centred, not with the track's edge at
      // the screen's edge — a wide last image would otherwise finish half off.
      const last = t.lastElementChild as HTMLElement | null;
      const centre = last ? last.offsetLeft + last.offsetWidth / 2 : t.scrollWidth;
      travel.current = Math.max(0, centre - innerWidth / 2);
      o.style.height = `${Math.round(travel.current * designPace + innerHeight)}px`;
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] });
  const target = useTransform(scrollYProgress, (v) => -clamp01(v) * travel.current);
  const x = useSpring(target, SPRING);

  return (
    <section id="design" aria-label="Design" style={{ backgroundColor: designBg, color: designText }}>
      {/* Height is set from the measured travel; this only holds the space until then. */}
      <div ref={outer} className="relative" style={{ height: '400vh' }}>
        <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
          <motion.div
            ref={track}
            style={{ x }}
            className="relative flex items-start gap-[6vw] pl-[8vw] pr-[8vw] will-change-transform"
          >
            {designPages.map((p) => (
              <Page key={p.id} p={p} onOpen={setSite} />
            ))}
          </motion.div>
        </div>
      </div>
      <SiteViewer site={site} onClose={close} />
    </section>
  );
}
