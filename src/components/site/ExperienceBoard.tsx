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
 * One exception to scaling off width: the vertical rhythm. The Figma frame was
 * drawn with no descriptor copy, so its width-derived spacing happened to fill
 * the screen exactly. Real copy adds ~56px of fixed height per entry, and on a
 * wide-but-short viewport the width-derived gaps grow while the screen they
 * have to fit inside does not — so the five-deep DANCE column overflowed the
 * pin. Every gap here is therefore a vh clamp, and the headings are capped at
 * 11vh as well as 7.17vw, so a short screen tightens instead of clipping.
 * DANCE sets the budget; the other two columns simply have room to spare.
 *
 * That budget only balances while the three columns are side by side. Below
 * lg they stack, which is several screens of content and cannot be pinned to
 * one, so the pin, the clipping and the scrubbed reveal are all lg-and-up. On
 * narrow screens the board is simply a tall section you scroll, with the
 * motion neutralised in CSS (see globals.css) since there is no pin to scrub.
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
    <motion.li data-board-motion style={{ opacity, y }}>
      <p className="text-[clamp(0.85rem,min(0.9vw,2vh),1.4rem)] font-bold leading-snug"
        style={{ color: boardText }}>
        {entry.title}
      </p>
      {/*
        The descriptor slot reserves three lines (3 x 1.625em leading = 4.875em)
        at a 44ch measure, which is the tallest any of the written lines wraps
        to. Every entry therefore occupies the same block whether its line runs
        two lines or three, so the columns stay level across the board.
      */}
      <p
        className="mt-2 min-h-[4.875em] max-w-[44ch] text-[clamp(0.72rem,min(0.72vw,1.6vh),1.05rem)] font-normal leading-relaxed"
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
      data-board-motion
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

  // Out, hold, back — driven entirely by how far you have scrolled. The peak
  // puts the words at about 45% of the screen's width; 5.5x filled 69% and read
  // as too big rather than loud.
  const headlineScale = useTransform(p, [0.02, 0.3, 0.4, 0.52], [1, 3.6, 3.6, 1]);
  const headlineOpacity = useTransform(p, [0, 0.03], [0, 1]);

  const headingOpacity = useTransform(p, [0.62, 0.76], [0, 1]);
  const headingY = useTransform(p, [0.62, 0.76], [24, 0]);

  return (
    <div ref={ref} className="relative lg:h-[260vh]" id="experience">
      <section
        aria-label="Experience"
        className="flex flex-col justify-center py-20 lg:sticky lg:top-0 lg:h-dvh lg:overflow-hidden lg:py-0"
        style={{ backgroundColor: boardBg }}
      >
        <motion.p
          data-board-motion
          className="origin-center text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold text-black lg:pt-[clamp(0.5rem,2vh,3rem)]"
          style={{ scale: headlineScale, opacity: headlineOpacity }}
        >
          {experienceHeading}
        </motion.p>

        <div className="relative mt-8 lg:mt-[clamp(0.5rem,1.5vh,2.5rem)]">
          <Divider left="33.333%" p={p} />
          <Divider left="66.666%" p={p} />

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {experienceColumns.map((column, ci) => (
              <div
                key={column.key}
                className="relative px-6 pb-14 pt-8 sm:px-8 lg:px-[3%] lg:pb-[clamp(1rem,2.5vh,4rem)] lg:pt-0"
              >
                <motion.h2
                  data-board-motion
                  className="relative text-center text-[clamp(3rem,min(7.17vw,11vh),10rem)] font-bold leading-none tracking-[-0.02em] lg:pt-[clamp(0.5rem,2vh,3.5rem)]"
                  style={{ color: boardText, opacity: headingOpacity, y: headingY }}
                >
                  {column.heading}
                </motion.h2>

                <ul className="relative mt-10 list-none space-y-10 lg:mt-[clamp(1rem,3vh,4rem)] lg:space-y-[clamp(0.75rem,2.2vh,3rem)]">
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
