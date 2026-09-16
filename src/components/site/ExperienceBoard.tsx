'use client';

import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  boardBg,
  boardRule,
  boardText,
  boardTextDim,
  experienceGroups,
  experienceHeading,
  type ExperienceEntry,
} from '@/lib/experienceSection';

/**
 * The experience section: DANCE / DESIGN / DATA as stacked bands, each a
 * table with the dates in their own column. Chosen in the experience lab over
 * the original three-column board.
 *
 * Scroll-driven, like the collage above it. Earlier versions played a timed
 * animation on trigger, which reads as a video playing at you no matter how
 * the curve is shaped; the collage moves as you scroll, so it feels connected
 * to your hand. This works the same way: you push the headline out, it peaks,
 * you push it back, and the bands build under it, row by row.
 *
 * All twelve rows have to fit one pinned screen, so every size and gap below
 * is capped by viewport height as well as width: a short, wide screen tightens
 * instead of clipping.
 *
 * Below lg the bands stack into a section taller than any screen, so there is
 * nothing to pin. The pin and the scrubbed reveal are lg-and-up, with the
 * motion neutralised in CSS on narrow screens (see globals.css).
 */

const ROLE = 'font-title text-[clamp(0.8rem,min(0.95vw,1.75vh),1.35rem)] font-bold leading-tight';
const LINE = 'text-[clamp(0.72rem,min(0.72vw,1.45vh),1.05rem)] leading-snug';
const WHEN = 'font-mono text-[clamp(0.62rem,min(0.62vw,1.35vh),0.85rem)] uppercase tracking-[0.08em] leading-snug';

function Row({ entry, index, p }: { entry: ExperienceEntry; index: number; p: MotionValue<number> }) {
  // Each row takes its own slice of the tail so they arrive in sequence.
  const start = 0.72 + index * 0.014;
  const opacity = useTransform(p, [start, start + 0.06], [0, 1]);
  const y = useTransform(p, [start, start + 0.06], [14, 0]);

  return (
    <li className="border-b border-black/15 last:border-b-0">
      <motion.div
        data-board-motion
        style={{ opacity, y }}
        className="grid grid-cols-[minmax(0,7.5em)_1fr] gap-x-4 gap-y-1 py-[clamp(0.2rem,0.6vh,0.8rem)] lg:grid-cols-[minmax(0,9em)_minmax(0,1.1fr)_minmax(0,1.6fr)]"
      >
        <span className={`${WHEN} pt-[0.25em]`} style={{ color: boardTextDim }}>
          {entry.when}
        </span>
        <span className={ROLE} style={{ color: boardText }}>
          {entry.role}
          {entry.org ? <span className="block font-normal">{entry.org}</span> : null}
        </span>
        <span className={`${LINE} col-start-2 lg:col-start-auto`} style={{ color: boardTextDim }}>
          {entry.line}
        </span>
      </motion.div>
    </li>
  );
}

export default function ExperienceBoard() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Same spring as the opening: takes the step out of each wheel tick without
  // lagging behind the scroll.
  const p = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 18,
    mass: 0.4,
    restDelta: 0.0004,
  });

  // Out, hold, back — driven entirely by how far you have scrolled. The peak
  // puts the words at about 45% of the screen's width; 5.5x filled 69% and read
  // as too big rather than loud.
  const headlineScale = useTransform(p, [0.02, 0.3, 0.4, 0.52], [1, 3.6, 3.6, 1]);
  const headlineOpacity = useTransform(p, [0, 0.03], [0, 1]);

  const headingOpacity = useTransform(p, [0.62, 0.76], [0, 1]);
  const headingY = useTransform(p, [0.62, 0.76], [24, 0]);

  return (
    <div ref={ref} className="relative lg:h-[260vh]">
      {/* The nav's target: where the pinned sequence has played out, not its
          blank first frame. Below lg the section is not pinned, so its top. */}
      <span id="experience" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 lg:bottom-0 lg:top-auto lg:h-[100vh]" />
      <section
        aria-label="Experience"
        className="flex flex-col justify-center px-6 py-20 sm:px-8 lg:sticky lg:top-0 lg:h-dvh lg:overflow-hidden lg:px-[3%] lg:py-0"
        style={{ backgroundColor: boardBg }}
      >
        <motion.p
          data-board-motion
          className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-black/50"
          style={{ opacity: headingOpacity }}
        >
          01 — experience
        </motion.p>
        <motion.p
          data-board-motion
          className="font-title origin-center text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold text-black lg:pt-[clamp(0.25rem,1.2vh,3rem)]"
          style={{ scale: headlineScale, opacity: headlineOpacity }}
        >
          {experienceHeading}
        </motion.p>

        <div className="mx-auto mt-8 w-full max-w-[1500px] lg:mt-[clamp(0.5rem,1.8vh,3rem)]">
          {experienceGroups.map((group, gi) => (
            <div
              key={group.key}
              className="grid grid-cols-1 border-t py-[clamp(0.4rem,1vh,1.5rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,3fr)] lg:gap-x-[3%]"
              style={{ borderColor: boardRule }}
            >
              <motion.h2
                data-board-motion
                className="font-title text-[clamp(2.4rem,min(4.6vw,6.5vh),7rem)] font-bold leading-[0.9] tracking-[-0.02em]"
                style={{ color: boardText, opacity: headingOpacity, y: headingY }}
              >
                {group.heading}
              </motion.h2>
              <ol className="mt-4 list-none lg:mt-0">
                {group.entries.map((entry, i) => (
                  // Offsets run across bands, so DATA's last row lands just before the pin lets go.
                  <Row key={`${entry.role}-${entry.org ?? entry.when}`} entry={entry} index={gi * 2.4 + i} p={p} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
