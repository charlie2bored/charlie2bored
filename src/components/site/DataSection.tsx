'use client';

/**
 * Data: the real work.
 *
 * Opens on its headline spelled in dots, the one place a dot field earns its
 * keep. After that, for a data role the most credible proof is the work
 * itself: the actual Power BI pages, the actual figures, the live site. So
 * each chapter holds its brief on the left while the real artifacts scroll
 * past on the right, captioned, and any of them opens full-size.
 *
 * Internal work (Apple Montessori) cannot be shown, so its right side is a
 * typeset panel of the real numbers and responsibilities, and says why.
 *
 * Not pinned. Design already took the pinned sideways move; data is the
 * section you read. An index bar follows you down it, Work then Projects, the
 * current chapter lit, each item a jump link.
 */

import Image from 'next/image';
import { useScroll, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { type Dot, halftone, seeded, titleFont } from '@/lib/halftone';
import { dataBg, dataChapters, dataHeadline, dataIntro, type DataChapter, type DataFigure } from '@/lib/data';

/* ---------- the full-size viewer ---------- */

function Viewer({ fig, onClose }: { fig: DataFigure | null; onClose: () => void }) {
  const overlay = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!fig) return;
    const el = overlay.current;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
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
  }, [fig, onClose]);
  if (!fig) return null;
  const tall = fig.h / fig.w > 1.6;
  return (
    <div
      ref={overlay}
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label={fig.caption}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/80 p-[3vw] backdrop-blur-sm"
    >
      {/* In flow above the figure, so the figure can never cover it. A site
          also links out: on a phone the live site reads better than a capture. */}
      <div onClick={(e) => e.stopPropagation()} className="flex w-full max-w-[1400px] items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em]">
        {fig.site ? (
          <a href={`https://${fig.site}/`} target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 text-black hover:bg-white/85">
            open the live site ↗
          </a>
        ) : (
          <span />
        )}
        <button type="button" onClick={onClose} className="py-2 text-white/70 hover:text-white">
          ✕ close
        </button>
      </div>
      <div
        ref={scroller}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-[1400px] bg-white outline-none ${tall ? 'h-[76vh] overflow-y-auto overscroll-contain' : ''}`}
      >
        <Image src={fig.src} alt={fig.caption} width={fig.w} height={fig.h} sizes="94vw" style={{ width: '100%', height: 'auto' }} />
      </div>
      <p onClick={(e) => e.stopPropagation()} className="max-w-[70ch] text-center font-mono text-[11px] uppercase leading-[1.5] tracking-[0.12em] text-white/80">
        {fig.caption}
      </p>
    </div>
  );
}

/* ---------- a chapter ---------- */

function FigureCard({ fig, onOpen }: { fig: DataFigure; onOpen: (f: DataFigure) => void }) {
  // A site capture shows its hero at a browser-like shape; figures show whole.
  const ratio = fig.site ? 16 / 10 : fig.w / fig.h;
  return (
    <figure data-reveal-fig className="translate-y-6 opacity-0 transition-[opacity,transform] duration-700 data-[in=true]:translate-y-0 data-[in=true]:opacity-100">
      <button
        type="button"
        onClick={() => onOpen(fig)}
        aria-label={`Open full size: ${fig.caption}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden bg-white shadow-[0_14px_40px_-18px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1"
        style={{ aspectRatio: String(ratio) }}
      >
        {fig.site && (
          <span className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-black/10 bg-[#f3f2f0] px-3">
            <span className="h-2 w-2 rounded-full bg-black/15" />
            <span className="h-2 w-2 rounded-full bg-black/15" />
            <span className="h-2 w-2 rounded-full bg-black/15" />
            <span className="ml-3 rounded bg-white px-2 py-0.5 font-mono text-[10px] text-black/55">{fig.site}</span>
          </span>
        )}
        <Image
          src={fig.src}
          alt={fig.caption}
          width={fig.w}
          height={fig.h}
          sizes="(min-width: 1024px) 55vw, 92vw"
          className={fig.site ? 'absolute left-0 top-7 w-full' : 'h-full w-full object-contain'}
        />
        <span className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:none)]:opacity-100">
          <span className="[@media(hover:none)]:hidden">{fig.site ? 'click to scroll the site' : 'view full size'}</span>
          <span className="hidden [@media(hover:none)]:inline">{fig.site ? 'tap to scroll the site' : 'tap for full size'}</span>
        </span>
      </button>
      <figcaption className="mt-3 max-w-[70ch] font-mono text-[10px] uppercase leading-[1.55] tracking-[0.12em] text-black/55">{fig.caption}</figcaption>
    </figure>
  );
}

function Brief({ c }: { c: DataChapter }) {
  return (
    <div className="max-w-[62ch]">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/50">{c.type}</p>
      <h3 className="font-title mt-2 text-[clamp(1.6rem,2.6vw,2.8rem)] font-bold leading-[1.02] tracking-[-0.02em]">{c.title}</h3>
      <p className="mt-1 text-sm text-black/60 lg:text-[13px]">{c.meta}</p>
      <dl className="mt-6 space-y-5 text-base leading-snug lg:space-y-4 lg:text-[clamp(0.9rem,1vw,1.05rem)]">
        {(
          [
            ['Problem', c.problem],
            ['What I did', c.did],
            ['Result', c.result],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="grid gap-1 lg:grid-cols-[6.5rem_1fr] lg:gap-3">
            <dt className="pt-[0.25em] font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">{k}</dt>
            <dd className={k === 'Result' ? 'font-semibold' : ''}>{v}</dd>
          </div>
        ))}
      </dl>
      {c.tools.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {c.tools.map((t) => (
            <li key={t} className="border border-black/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-black/70">
              {t}
            </li>
          ))}
        </ul>
      )}
      {c.links && (
        <p className="mt-5 flex gap-6 font-mono text-[12px] uppercase tracking-[0.14em] lg:text-[11px]">
          {c.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="py-2 underline decoration-black/30 underline-offset-4 hover:decoration-black lg:py-0">
              {l.label}
            </a>
          ))}
        </p>
      )}
    </div>
  );
}

function Stats({ c }: { c: DataChapter }) {
  return (
    <div data-reveal-fig className="translate-y-6 opacity-0 transition-[opacity,transform] duration-700 data-[in=true]:translate-y-0 data-[in=true]:opacity-100">
      <div className="grid grid-cols-2 gap-px bg-black/15">
        {c.stats!.map((s) => (
          <div key={s.label} className="bg-[#ece9e4] p-[clamp(1rem,2vw,2rem)]">
            <p className="font-title text-[clamp(1.8rem,3.4vw,3.6rem)] font-bold leading-none tracking-[-0.03em]">{s.value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase leading-[1.5] tracking-[0.12em] text-black/55">{s.label}</p>
          </div>
        ))}
      </div>
      {c.note && <p className="mt-3 font-mono text-[10px] uppercase leading-[1.55] tracking-[0.12em] text-black/45">{c.note}</p>}
    </div>
  );
}

/* ---------- the headline, spelled in dots ---------- */

const HEAD_SPRING = { stiffness: 200, damping: 18, mass: 0.4, restDelta: 0.0005 };

/**
 * The one place the dot field survives: the headline. It has its own held
 * beat, like the dance headline — the stage pins, and scrolling pulls dots
 * scattered across the whole screen into the words, each dot leaving at its
 * own moment so it reads as a swarm, then holds as a halftone headline. The
 * real text sits behind it for screen readers.
 */
function DotHeadline({ text }: { text: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const field = useRef<{ from: Dot[]; to: Dot[]; delay: number[]; r: number } | null>(null);
  const last = useRef(0);
  const [formed, setFormed] = useState(false);
  // Where the formed words sit, so the eyebrow and the intro frame them.
  const [box, setBox] = useState<{ top: number; bottom: number } | null>(null);

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, HEAD_SPRING);

  const draw = useCallback((v: number) => {
    const cv = canvas.current;
    const f = field.current;
    if (!cv || !f) return;
    last.current = v;
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cv.clientWidth, cv.clientHeight);
    // Forms over the first 55% of the stage, then holds.
    const t = Math.min(Math.max((v - 0.04) / 0.51, 0), 1);
    g.fillStyle = '#000';
    for (let n = 0; n < f.to.length; n++) {
      const q = Math.min(Math.max((t - f.delay[n] * 0.4) / 0.6, 0), 1);
      const e = q < 0.5 ? 4 * q * q * q : 1 - Math.pow(-2 * q + 2, 3) / 2;
      g.globalAlpha = 0.35 + 0.65 * e;
      g.beginPath();
      g.arc(f.from[n].x + (f.to[n].x - f.from[n].x) * e, f.from[n].y + (f.to[n].y - f.from[n].y) * e, f.r, 0, 6.2832);
      g.fill();
    }
    g.globalAlpha = 1;
    const isFormed = t >= 0.98;
    setFormed((prev) => (prev === isFormed ? prev : isFormed));
  }, []);

  useEffect(() => {
    let cancelled = false;
    const build = async () => {
      const font = await titleFont();
      const cv = canvas.current;
      if (!cv || cancelled) return;
      const W = cv.clientWidth, H = cv.clientHeight;
      if (W < 2 || H < 2) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      cv.getContext('2d')!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const { dots, gap, top, bottom } = halftone(text, { W, H, font, maxSize: H * 0.17, maxWidth: W * 0.86 });
      const rand = seeded(42);
      for (let i = dots.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [dots[i], dots[j]] = [dots[j], dots[i]];
      }
      field.current = {
        from: dots.map(() => ({ x: rand() * W, y: rand() * H })),
        to: dots,
        delay: dots.map((_, i) => (i * 0.6180339) % 1),
        // Dots a third of the grid spacing: a halftone, letters still legible.
        r: gap * 0.34,
      };
      setBox({ top, bottom });
      draw(last.current);
    };
    build();
    const ro = new ResizeObserver(build);
    if (canvas.current) ro.observe(canvas.current);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [text, draw]);

  useEffect(() => p.on('change', draw), [p, draw]);

  return (
    <div ref={outer} className="relative h-[190vh]">
      {/* The nav's target: the headline already formed (62% of the 90vh
          pin), not a screen of scattered dots. */}
      <span id="data" aria-hidden="true" className="pointer-events-none absolute left-0 top-[56vh]" />
      <div className="sticky top-0 h-dvh">
        <h2 className="sr-only">{text}</h2>
        <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full" />
        <p
          className="absolute left-1/2 -translate-x-1/2 -translate-y-full font-mono text-[11px] uppercase tracking-[0.18em] text-black/50"
          style={{ top: box ? box.top - 28 : '30%' }}
        >
          05 — data
        </p>
        <p
          className="absolute left-1/2 w-[min(44ch,86vw)] -translate-x-1/2 text-center text-[clamp(1rem,1.2vw,1.25rem)] leading-snug text-black/70 transition-opacity duration-700"
          style={{ top: box ? box.bottom + 36 : '66%', opacity: formed ? 1 : 0 }}
        >
          {dataIntro}
        </p>
      </div>
    </div>
  );
}

/* ---------- the section ---------- */

export default function DataSection() {
  const [active, setActive] = useState(-1);
  const [fig, setFig] = useState<DataFigure | null>(null);
  const close = useCallback(() => setFig(null), []);
  const nav = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  // On phones the index sticks under the site header; once it is stuck its
  // paper backing reaches up behind the header so text never shows through.
  useEffect(() => {
    const check = () => {
      const el = nav.current;
      if (!el) return;
      const is = el.getBoundingClientRect().top <= parseFloat(getComputedStyle(el).top) + 1;
      setStuck((prev) => (prev === is ? prev : is));
    };
    check();
    addEventListener('scroll', check, { passive: true });
    return () => removeEventListener('scroll', check);
  }, []);

  // Which chapter is on screen, for the index; and reveal figures as they arrive.
  useEffect(() => {
    const chapters = [...document.querySelectorAll<HTMLElement>('[data-chapter]')];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.chapter));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    chapters.forEach((c) => io.observe(c));
    const figs = [...document.querySelectorAll<HTMLElement>('[data-reveal-fig]')];
    const io2 = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) (e.target as HTMLElement).dataset.in = 'true';
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    figs.forEach((f) => io2.observe(f));
    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  return (
    <section aria-label="Data" style={{ backgroundColor: dataBg }} className="text-black">
      {/* The headline, spelled in dots — the one place the field survives. */}
      <DotHeadline text={dataHeadline} />

      {/* The index follows you down the section. On desktop it runs the
          full list between the site's fixed menu button and name pill; on
          phones it sits under the header as five numbered stops and the
          current chapter's name. */}
      <nav
        ref={nav}
        aria-label="Data work"
        data-stuck={stuck}
        className="sticky top-[68px] z-20 border-b border-black/10 bg-[#ece9e4]/95 px-4 py-2 sm:px-[8vw] backdrop-blur before:absolute before:inset-x-0 before:bottom-full before:hidden before:h-[68px] before:bg-[#ece9e4]/95 data-[stuck=true]:before:block lg:top-0 lg:border-t lg:py-3 lg:pl-[max(5vw,6rem)] lg:pr-[max(5vw,15rem)] lg:before:hidden lg:data-[stuck=true]:before:hidden"
      >
        <div className="flex items-center gap-3 lg:hidden">
          <ol className="flex gap-1">
            {dataChapters.map((c, n) => (
              <li key={c.num} className={n > 0 && c.group !== dataChapters[n - 1].group ? 'ml-2' : ''}>
                <a
                  href={`#data-${c.num}`}
                  aria-label={`${c.num} ${c.short}`}
                  aria-current={active === n ? 'true' : undefined}
                  className={`grid h-10 w-9 place-items-center border font-mono text-[11px] transition-colors ${active === n ? 'border-black bg-black text-[#ece9e4]' : 'border-black/20 text-black/50'}`}
                >
                  {c.num}
                </a>
              </li>
            ))}
          </ol>
          <p className="min-w-0 font-mono text-[10px] uppercase leading-[1.35] tracking-[0.1em]">
            <span className="block text-black/40">{active >= 0 ? dataChapters[active].group : 'Work · Projects'}</span>
            <span className="block truncate text-black">{active >= 0 ? dataChapters[active].short : 'the index'}</span>
          </p>
        </div>
        <ul className="hidden flex-wrap items-center gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] lg:flex">
          {(['Work', 'Projects'] as const).map((grp) => (
            <li key={grp} className="flex flex-wrap items-center gap-x-4">
              <span className="text-black/35">{grp}</span>
              {dataChapters.map((c, n) =>
                c.group !== grp ? null : (
                  <a key={c.num} href={`#data-${c.num}`} className={`transition-colors ${active === n ? 'text-black' : 'text-black/40 hover:text-black/75'}`}>
                    <span className={active === n ? 'underline decoration-2 underline-offset-4' : ''}>{c.num}</span> {c.short}
                  </a>
                ),
              )}
            </li>
          ))}
        </ul>
      </nav>

      {dataChapters.map((c, n) => (
        <article key={c.num} id={`data-${c.num}`} data-chapter={n} className="scroll-mt-32 border-t border-black/10 px-5 py-16 first-of-type:border-t-0 sm:px-[8vw] lg:scroll-mt-14 lg:px-[5vw] lg:py-[12vh]">
          <div className="grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-[4vw]">
            <div className="lg:sticky lg:top-[14vh] lg:self-start">
              <p className="font-title text-[clamp(3rem,6vw,6.5rem)] font-bold leading-none tracking-[-0.04em] text-black/10">{c.num}</p>
              <div className="mt-1 lg:-mt-[0.6em]">
                <Brief c={c} />
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:gap-[6vh]">
              {c.figures?.map((f) => <FigureCard key={f.src} fig={f} onOpen={setFig} />)}
              {c.stats && <Stats c={c} />}
            </div>
          </div>
        </article>
      ))}

      <Viewer fig={fig} onClose={close} />
    </section>
  );
}
