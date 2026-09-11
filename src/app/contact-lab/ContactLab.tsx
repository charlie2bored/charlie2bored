'use client';

/**
 * Throwaway lab: the contact and closing section.
 *
 * The site ends here, so this is two jobs: a way to reach Charlie that takes
 * one tap, and an ending that feels like one. The pieces are switchable from
 * the lab panel:
 *
 * - the closing beat before contact: the collage piling back up (a bookend
 *   to the opening), the "show" lines from the old about section, or none;
 * - the contact block itself, always: headline, the email big enough to be
 *   the point, and the rest as rows;
 * - the footer name: halftone dots that form as you arrive, solid, or off.
 */

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Photo } from '@/components/site/Opening';
import { photos } from '@/lib/collage';
import { closing, stack, socials } from '@/lib/about';
import { contact, copyright } from '@/lib/nav';
import { type Dot, halftone, seeded, titleFont } from '@/lib/halftone';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const PAPER = '#ece9e4';
const SPRING = { stiffness: 200, damping: 18, mass: 0.4, restDelta: 0.0005 };

const X = socials.find((s) => s.label === 'Twitter')!.href;
const LINKS: { label: string; value: string; href: string; download?: boolean }[] = [
  { label: 'Phone', value: contact.phone, href: 'tel:+19085105281' },
  { label: 'LinkedIn', value: 'in/charlie2bored', href: socials.find((s) => s.label === 'LinkedIn')!.href },
  { label: 'Instagram', value: '@charlie2bored', href: 'https://www.instagram.com/charlie2bored/' },
  { label: 'GitHub', value: 'charlie2bored', href: socials.find((s) => s.label === 'GitHub')!.href },
  { label: 'X', value: '@charlie2bored', href: X },
];

const lines = (text: string) =>
  text.split(/(?<=\?)\s+/).map((part) => (
    <span key={part} className="block">
      {part}
    </span>
  ));

/* ---------- beat: the collage piles back up ---------- */

function PileBeat({ headline }: { headline: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const portrait = useMediaQuery('(max-aspect-ratio: 1/1)', false);
  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, SPRING);
  // The opening in reverse: scattered at the edges, then back into the pile,
  // which lifts to make room for the headline underneath.
  const burst = useTransform(p, [0.04, 0.55], [1, 0]);
  const lift = useTransform(p, [0.5, 0.8], ['0vh', portrait ? '-14vh' : '-17vh']);
  const shrink = useTransform(p, [0.5, 0.8], [1, portrait ? 0.9 : 0.72]);
  const textOpacity = useTransform(p, [0.58, 0.78], [0, 1]);
  const textY = useTransform(p, [0.58, 0.78], ['4vh', '0vh']);

  return (
    <div ref={outer} className="relative h-[240vh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: lift, scale: shrink }}>
          {photos.map((ph) => (
            <Photo key={`${ph.id}-${portrait}`} photo={ph} burst={burst} portrait={portrait} />
          ))}
        </motion.div>
        <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute inset-x-0 top-[60vh] px-5 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">06 — contact</p>
          <h2 className="font-title mt-4 text-[clamp(2.4rem,6.4vw,8rem)] font-bold leading-[0.95] tracking-[-0.035em]">{lines(headline)}</h2>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- beat: the show ---------- */

const SHOW = [
  { key: 'data', line: 'data is the backend of my show.', body: stack.find((s) => s.key === 'data')!.body },
  { key: 'design', line: 'design is the marketing.', body: stack.find((s) => s.key === 'design')!.body },
  { key: 'dance', line: 'dance is the frontend.', body: stack.find((s) => s.key === 'dance')!.body },
];

function ShowBeat() {
  const outer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);
  // One line lit at a time, in Charlie's order (backend, marketing, frontend),
  // then all three together for the closing line.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = v < 0.27 ? 0 : v < 0.52 ? 1 : v < 0.76 ? 2 : 3;
    setActive((prev) => (prev === i ? prev : i));
  });

  return (
    <div ref={outer} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-dvh flex-col justify-center px-5 sm:px-[8vw] lg:px-[6vw]">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">why all three</p>
        <ul className="mt-6 space-y-[0.12em]">
          {SHOW.map((s, i) => (
            <li
              key={s.key}
              className={`font-title text-[clamp(2rem,5.6vw,6.5rem)] font-bold leading-[1] tracking-[-0.035em] transition-opacity duration-500 ${active === i || active === 3 ? 'opacity-100' : 'opacity-15'}`}
            >
              {s.line}
            </li>
          ))}
        </ul>
        <div className="relative mt-[5vh] min-h-[6.5em] max-w-[52ch] text-base leading-snug text-black/70 lg:text-[1.15rem]">
          {SHOW.map((s, i) => (
            <p key={s.key} className={`absolute inset-0 transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
              {s.body}
            </p>
          ))}
          <p className={`absolute inset-0 font-semibold text-black transition-opacity duration-500 ${active === 3 ? 'opacity-100' : 'opacity-0'}`}>
            {closing}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- the contact block ---------- */

function ContactBlock({ headline, showHeadline }: { headline: string; showHeadline: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard?.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }, []);

  return (
    <div className={`px-5 pb-[12vh] sm:px-[8vw] lg:px-[6vw] ${showHeadline ? 'pt-[10vh]' : '-mt-[14vh]'}`}>
      {showHeadline && (
        <>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">06 — contact</p>
          <h2 className="font-title mt-4 text-[clamp(2.4rem,6.4vw,8rem)] font-bold leading-[0.95] tracking-[-0.035em]">{lines(headline)}</h2>
        </>
      )}
      <p className={`${showHeadline ? 'mt-6' : ''} max-w-[46ch] text-base leading-snug text-black/70 lg:text-[1.15rem]`}>
        Jobs, gigs, collabs, or just to say hi — email is the fastest way to reach me. Based in New York; NYC, NJ &amp; CT, hybrid or remote.
      </p>

      <div className="mt-[7vh]">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/45">email</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${contact.email}`}
            className="font-title text-[clamp(1.35rem,5.2vw,6.25rem)] font-bold leading-[1] tracking-[-0.03em] underline decoration-black/20 decoration-[0.06em] underline-offset-[0.14em] transition-colors hover:decoration-black"
          >
            {contact.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="border border-black/30 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:border-black"
          >
            {copied ? 'copied ✓' : 'copy'}
          </button>
        </div>
      </div>

      <ul className="mt-[7vh] grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              {...(l.download ? { download: true } : l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-baseline justify-between gap-4 border-b border-black/15 py-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/45">{l.label}</span>
              <span className="font-title text-[clamp(1.05rem,1.5vw,1.4rem)] font-semibold tracking-[-0.01em]">
                {l.value}
                <span className="ml-2 inline-block text-black/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  {l.download ? '↓' : '↗'}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- the footer name, in dots ---------- */

function DotName({ text }: { text: string }) {
  const box = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const field = useRef<{ from: Dot[]; to: Dot[]; delay: number[]; r: number } | null>(null);
  const last = useRef(0);
  // Forms as the footer arrives: scattered when it enters, set by the time
  // the page bottoms out.
  const { scrollYProgress } = useScroll({ target: box, offset: ['start end', 'end end'] });
  const p = useSpring(scrollYProgress, SPRING);

  const draw = useCallback((v: number) => {
    const cv = canvas.current;
    const f = field.current;
    if (!cv || !f) return;
    last.current = v;
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cv.clientWidth, cv.clientHeight);
    const t = Math.min(Math.max((v - 0.1) / 0.8, 0), 1);
    for (let n = 0; n < f.to.length; n++) {
      const q = Math.min(Math.max((t - f.delay[n] * 0.4) / 0.6, 0), 1);
      const e = q < 0.5 ? 4 * q * q * q : 1 - Math.pow(-2 * q + 2, 3) / 2;
      g.globalAlpha = 0.3 + 0.7 * e;
      g.beginPath();
      g.arc(f.from[n].x + (f.to[n].x - f.from[n].x) * e, f.from[n].y + (f.to[n].y - f.from[n].y) * e, f.r, 0, 6.2832);
      g.fill();
    }
    g.globalAlpha = 1;
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
      const { dots, gap } = halftone(text, { W, H, font, maxSize: H * 0.9, maxWidth: W * 0.98 });
      const rand = seeded(7);
      field.current = {
        from: dots.map(() => ({ x: rand() * W, y: rand() * H })),
        to: dots,
        delay: dots.map((_, i) => (i * 0.6180339) % 1),
        r: gap * 0.34,
      };
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
    <div ref={box} className="relative aspect-[5/1] w-full">
      <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full" />
    </div>
  );
}

function Footer({ name }: { name: 'dots' | 'solid' | 'off' }) {
  return (
    <footer className="px-5 pb-5 pt-[6vh] sm:px-[4vw]">
      {name === 'dots' && <DotName text="Charlie Vargas" />}
      {name === 'solid' && (
        <p aria-hidden="true" className="font-title whitespace-nowrap text-center text-[14.4vw] font-bold leading-[0.9] tracking-[-0.05em]">
          Charlie Vargas
        </p>
      )}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-black/15 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-black/50">
        <span>{copyright}</span>
        <span>designed, built and danced by me</span>
        <a href="#main-content" className="hover:text-black">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}

/* ---------- the lab ---------- */

export default function ContactLab() {
  const [beat, setBeat] = useState<'pile' | 'show' | 'none'>('pile');
  const [name, setName] = useState<'dots' | 'solid' | 'off'>('dots');
  const [headline, setHeadline] = useState('still scrolling? let’s talk.');
  const [panel, setPanel] = useState(true);

  return (
    <div id="main-content" style={{ backgroundColor: PAPER }} className="min-h-dvh text-black">
      <div className="flex h-[45vh] flex-col items-center justify-end pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/50">data ends here — scroll</p>
      </div>

      <section aria-label="Contact" key={beat}>
        {beat === 'pile' && <PileBeat headline={headline} />}
        {beat === 'show' && <ShowBeat />}
        <ContactBlock headline={headline} showHeadline={beat !== 'pile'} />
        <Footer name={name} />
      </section>

      {!panel && (
        <button type="button" onClick={() => setPanel(true)} className="fixed bottom-4 right-4 z-50 border border-black/15 bg-white/95 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] shadow-lg">
          lab ▴
        </button>
      )}
      <div hidden={!panel} className="fixed bottom-4 right-4 z-50 w-[250px] border border-black/15 bg-white/95 p-3 font-mono text-[11px] leading-snug shadow-lg backdrop-blur">
        <p className="mb-2 flex justify-between font-bold uppercase tracking-[0.12em]">
          contact lab
          <button type="button" onClick={() => setPanel(false)} className="font-normal normal-case text-black/50 hover:text-black">
            hide ▾
          </button>
        </p>
        <p className="mb-1">before contact</p>
        <div className="mb-3 flex gap-1">
          {(['pile', 'show', 'none'] as const).map((b) => (
            <button key={b} type="button" onClick={() => setBeat(b)} className={`flex-1 border px-1.5 py-1 ${beat === b ? 'border-black bg-black text-white' : 'border-black/20'}`}>
              {b}
            </button>
          ))}
        </div>
        <p className="mb-1">footer name</p>
        <div className="mb-3 flex gap-1">
          {(['dots', 'solid', 'off'] as const).map((n) => (
            <button key={n} type="button" onClick={() => setName(n)} className={`flex-1 border px-1.5 py-1 ${name === n ? 'border-black bg-black text-white' : 'border-black/20'}`}>
              {n}
            </button>
          ))}
        </div>
        <label className="block">
          headline
          <input value={headline} onChange={(e) => setHeadline(e.target.value)} className="mt-1 w-full border border-black/20 px-1.5 py-1" />
        </label>
      </div>
    </div>
  );
}
