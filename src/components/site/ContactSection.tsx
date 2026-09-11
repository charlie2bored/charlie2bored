'use client';

/**
 * Contact: the section the site ends on.
 *
 * It bookends the opening. The collage comes back in from the edges and piles
 * up (the opening's burst, run in reverse), lifting to make room for the
 * headline. Then the way to reach Charlie, with the email large enough to be
 * the point, and finally his name forming in the data section's halftone as
 * the page bottoms out.
 */

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Photo } from '@/components/site/Opening';
import { photos } from '@/lib/collage';
import { contactBg, contactHeadline, contactIntro, contactLinks, signoff } from '@/lib/contact';
import { contact, copyright } from '@/lib/nav';
import { type Dot, halftone, seeded, titleFont } from '@/lib/halftone';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const SPRING = { stiffness: 200, damping: 18, mass: 0.4, restDelta: 0.0005 };

/* ---------- the collage piles back up ---------- */

function PileBeat() {
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
      {/* The nav's target: the pile formed and the headline in (85% of the
          140vh pin), not the photos still out at the edges. */}
      <span id="contact" aria-hidden="true" className="pointer-events-none absolute left-0 top-[119vh]" />
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: lift, scale: shrink }}>
          {photos.map((ph) => (
            <Photo key={`${ph.id}-${portrait}`} photo={ph} burst={burst} portrait={portrait} />
          ))}
        </motion.div>
        <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute inset-x-0 top-[60vh] px-5 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">06 — contact</p>
          <h2 className="font-title mt-4 text-[clamp(2.4rem,6.4vw,8rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            {contactHeadline.split(/(?<=\?)\s+/).map((part) => (
              <span key={part} className="block">
                {part}
              </span>
            ))}
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- the way to reach him ---------- */

function ContactBlock() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard?.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }, []);

  return (
    // Pulled up under the pile's last frame so the intro follows the headline
    // rather than a screen of empty paper.
    <div className="-mt-[14vh] px-5 pb-[12vh] sm:px-[8vw] lg:px-[6vw]">
      <p className="max-w-[46ch] text-base leading-snug text-black/70 lg:text-[1.15rem]">{contactIntro}</p>

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
        {contactLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-baseline justify-between gap-4 border-b border-black/15 py-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/45">{l.label}</span>
              <span className="font-title text-[clamp(1.05rem,1.5vw,1.4rem)] font-semibold tracking-[-0.01em]">
                {l.value}
                <span className="ml-2 inline-block text-black/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
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

export default function ContactSection() {
  return (
    <section aria-label="Contact" style={{ backgroundColor: contactBg }} className="text-black">
      <PileBeat />
      <ContactBlock />
      <footer className="px-5 pb-5 pt-[6vh] sm:px-[4vw]">
        <DotName text="Charlie Vargas" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-black/15 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-black/50">
          <span>{copyright}</span>
          <span>{signoff}</span>
          <a href="#main-content" className="hover:text-black">
            back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
