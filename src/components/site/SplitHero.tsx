'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import RailPanel from '@/components/site/RailPanel';
import { dateline } from '@/lib/nav';
import { useMediaQuery, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

/**
 * The landing state: dark rail and hero image filling the viewport, which part
 * outwards as you scroll to reveal what sits underneath.
 *
 * Scrubbed to scroll progress rather than triggered, so scrolling back up
 * rejoins the panels. The hero leads — its curve is front-loaded so it pulls
 * away faster — but both land at 100% together.
 *
 * Axis follows the layout: horizontal once the split exists, vertical on
 * phones where the panels stack.
 */
export default function SplitHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const stacked = useMediaQuery('(max-width: 767px)', false);

  const { scrollYProgress } = useScroll({
    target: ref,
    // 'end end' so progress hits 1 exactly when the sticky pin releases.
    // With 'end start' the parting finished a full viewport too late and the
    // panels slid away only half-open.
    offset: ['start start', 'end end'],
  });

  // Rail leaves at a constant rate; the hero front-loads and catches up at 1.
  const railPct = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroPct = useTransform(scrollYProgress, [0, 0.55, 1], [0, 76, 100]);

  const railX = useTransform(railPct, (v) => (stacked ? '0%' : `${v}%`));
  const railY = useTransform(railPct, (v) => (stacked ? `${v}%` : '0%'));
  const heroX = useTransform(heroPct, (v) => (stacked ? '0%' : `${v}%`));
  const heroY = useTransform(heroPct, (v) => (stacked ? `${v}%` : '0%'));

  const panelStyle = reduce ? undefined : { x: railX, y: railY };
  const heroStyle = reduce ? undefined : { x: heroX, y: heroY };

  return (
    // Two viewports tall: the second gives the parting room to play out.
    <div ref={ref} className="relative h-[200vh]" aria-label="Introduction">
      <div className="sticky top-0 z-40 h-dvh overflow-hidden">
        <div className="grid h-full grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 xl:grid-cols-[19.4%_1fr]">
          <motion.div
            style={panelStyle}
            className="relative z-40 row-start-1 overflow-hidden md:col-start-1"
            data-panel="rail"
          >
            <div className="h-full" style={{ backgroundColor: 'var(--rail-bg)' }}>
              <RailPanel />
            </div>
          </motion.div>

          <motion.div
            style={heroStyle}
            className="relative z-40 row-start-2 overflow-hidden md:col-start-2 md:row-start-1"
            data-panel="hero"
          >
            <div className="relative h-full" style={{ backgroundColor: 'var(--hero-bg)' }}>
              <Image
                src="/hero/hero-figure-v4.png"
                alt="Figure in a fur coat suspended mid-air against a pale ground"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 81vw"
                className="object-cover object-center"
              />
              <p
                className="absolute left-5 top-5 text-[11px] font-medium uppercase tracking-[0.1em] sm:left-8 sm:top-8"
                style={{ color: 'var(--hero-fg)' }}
              >
                {dateline}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
