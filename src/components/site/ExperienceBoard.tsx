'use client';

import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  boardBg,
  boardRule,
  boardText,
  boardTextDim,
  experienceColumns,
  experienceHeading,
  type ExperienceEntry,
} from '@/lib/experienceSection';

/**
 * Three-column experience board from the Figma frame EXPERIENCE (2003:95).
 *
 * Scroll-driven, like the collage above it. Earlier versions played a timed
 * animation on trigger, which reads as a video playing at you no matter how
 * the curve is shaped; the collage moves as you scroll, so it feels connected
 * to your hand. This works the same way: you push the headline out, it peaks,
 * you push it back, and the board builds under it.
 *
 * Built as a grid rather than the export's absolute coordinates so it survives
 * viewport changes. Type scales off the frame's own ratios: headings
 * 256/3572 = 7.17vw, entries 32/3572 = 0.9vw.
 *
 * Each entry reserves vertical room for its descriptor line whether or not one
 * is written yet, so filling them in later cannot reflow the board.
 */

function Entry({
  entry,
  index,
  p,
}: {
  entry: ExperienceEntry;
  index: number;
  p: MotionValue<number>;
}) {
  // Each entry takes its own slice of the tail so they arrive in sequence.
  const start = 0.74 + index * 0.018;
  const opacity = useTransform(p, [start, start + 0.06], [0, 1]);
  const y = useTransform(p, [start, start + 0.06], [18, 0]);

  return (
    <motion.li style={{ opacity, y }}>
      <p className="text-[clamp(0.85rem,0.9vw,1.4rem)] font-bold leading-snug"
        style={{ color: boardText }}>
        {entry.title}
      </p>
      {/*
        Reserved slot. Renders empty until the descriptor copy is confirmed;
        min-height keeps the rhythm identical either way.
      */}
      <p
        className="mt-2 min-h-[3.2em] max-w-[34ch] text-[clamp(0.72rem,0.72vw,1.05rem)] font-normal leading-relaxed sm:min-h-[2.6em]"
        style={{ color: boardTextDim }}
        data-slot="descriptor"
      >
        {entry.line ?? ''}
      </p>
    </motion.li>
  );
}

function Divider({ left, p }: { left: string; p: MotionValue<number> }) {
  const scaleY = useTransform(p, [0.54, 0.66], [0, 1]);
  return (
    <motion.span
      aria-hidden="true"
      className="absolute top-0 z-10 hidden h-full w-px lg:block"
      style={{ left, scaleY, originY: 0.5, backgroundColor: boardRule }}
    />
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

  // Out, hold, back — driven entirely by how far you have scrolled.
  const headlineScale = useTransform(p, [0.02, 0.3, 0.4, 0.52], [1, 5.5, 5.5, 1]);
  const headlineOpacity = useTransform(p, [0, 0.03], [0, 1]);

  const headingOpacity = useTransform(p, [0.62, 0.76], [0, 1]);
  const headingY = useTransform(p, [0.62, 0.76], [24, 0]);

  return (
    <div ref={ref} className="relative h-[260vh]" id="experience">
      <section
        aria-label="Experience"
        className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden"
        style={{ backgroundColor: boardBg }}
      >
        <motion.p
          className="origin-center text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold text-black lg:pt-[3.9%]"
          style={{ scale: headlineScale, opacity: headlineOpacity }}
        >
          {experienceHeading}
        </motion.p>

        <div className="relative mt-8 lg:mt-[2%]">
          <Divider left="33.333%" p={p} />
          <Divider left="66.666%" p={p} />

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {experienceColumns.map((column, ci) => (
              <div
                key={column.key}
                className="relative px-6 pb-14 pt-8 sm:px-8 lg:px-[3%] lg:pb-[6%] lg:pt-0"
              >
                <motion.h2
                  className="relative text-center text-[clamp(3rem,7.17vw,10rem)] font-bold leading-none tracking-[-0.02em] lg:pt-[7%]"
                  style={{ color: boardText, opacity: headingOpacity, y: headingY }}
                >
                  {column.heading}
                </motion.h2>

                <ul className="relative mt-10 list-none space-y-10 lg:mt-[14%] lg:space-y-[12%]">
                  {column.entries.map((entry, i) => (
                    <Entry key={entry.title} entry={entry} index={ci * 0.6 + i} p={p} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
