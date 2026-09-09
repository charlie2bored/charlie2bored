'use client';

import { motion } from 'framer-motion';
import {
  boardBg,
  boardColumn,
  experienceColumns,
  experienceHeading,
  type ExperienceEntry,
} from '@/lib/experienceSection';

/**
 * Three-column experience board from the Figma frame EXPERIENCE (2003:95),
 * with a staged entrance: the headline shouts across the screen and shrinks
 * into place, the dividers shoot out to cut the columns, the headings land,
 * then the entries arrive.
 *
 * Built as a grid rather than the export's absolute coordinates so it
 * survives viewport changes. Type scales off the frame's own ratios:
 * headings 256/3572 = 7.17vw, entries 32/3572 = 0.9vw.
 *
 * Each entry reserves vertical room for its descriptor line whether or not
 * one is written yet, so filling them in later cannot reflow the board.
 */

/*
 * One shared timeline. The board arrives blank on purpose: nothing is painted
 * until you have actually settled on the section, then the headline shouts and
 * the rest builds under it.
 */
const T = {
  headline: 0.4,
  bars: 2.62,
  headings: 3.02,
  entries: 3.38,
} as const;

const ease = [0.16, 1, 0.3, 1] as const;

/*
 * The whole sequence is driven by variants from the section, not by each
 * element watching the viewport itself. The headline starts at scale 6 offset
 * 34vh, which puts its own bounding box off-screen — so a self-triggered
 * whileInView on it never fires and it sticks at its initial state.
 */
function Entry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: T.entries + index * 0.07, ease } },
      }}
    >
      <p className="text-[clamp(0.85rem,0.9vw,1.4rem)] font-bold leading-snug text-black">
        {entry.title}
      </p>
      {/*
        Reserved slot. Renders empty until the descriptor copy is confirmed;
        min-height keeps the rhythm identical either way.
      */}
      <p
        className="mt-2 min-h-[3.2em] max-w-[34ch] text-[clamp(0.72rem,0.72vw,1.05rem)] font-normal leading-relaxed text-black/70 sm:min-h-[2.6em]"
        data-slot="descriptor"
      >
        {entry.line ?? ''}
      </p>
    </motion.li>
  );
}

/** Vertical rule that shoots out from the centre to cut the columns apart. */
function Divider({ left }: { left: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute top-0 hidden h-full w-px bg-black lg:block"
      style={{ left, originY: 0.5 }}
      variants={{
        hidden: { scaleY: 0 },
        show: { scaleY: 1, transition: { duration: 0.55, delay: T.bars, ease } },
      }}
    />
  );
}

export default function ExperienceBoard() {
  return (
    <motion.section
      id="experience"
      aria-label="Experience"
      className="relative flex min-h-dvh scroll-mt-16 flex-col justify-center overflow-hidden py-14 lg:py-0"
      style={{ backgroundColor: boardBg }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55 }}
    >
      {/*
        Beat 1: the headline comes at the viewer.

        Real perspective rather than scale + translate. Scaling up while
        sliding down reads as two separate 2D moves - a zoom and a slide -
        which is what made this feel like it was sliding rather than
        approaching. translateZ under a perspective grows it out of its own
        position with foreshortening, so there is no travel across the screen
        at all.

        Depths are derived from the apparent scales we want:
        z = P(1 - 1/s) with P = 800. They still compound, so the approach
        accelerates rather than reading as constant speed.
      */}
      <div style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}>
        <motion.p
          className="origin-center text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold text-black lg:pt-[3.9%]"
          variants={{
            hidden: { z: 0, opacity: 0 },
            show: {
              z: [0, 0, 59, 144, 260, 410, 558, 664, 655, 655, 0],
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              transition: {
                duration: 2.2,
                delay: T.headline,
                times: [0, 0.06, 0.13, 0.2, 0.27, 0.33, 0.39, 0.45, 0.5, 0.63, 1],
                ease: [
                  'linear', 'linear', 'linear', 'linear', 'linear',
                  'linear', 'linear',
                  [0.2, 0, 0, 1],
                  'linear',
                  [0.5, 0, 0.15, 1],
                ],
              },
            },
          }}
        >
          {experienceHeading}
        </motion.p>
      </div>

      <div className="relative mt-8 lg:mt-[2%]">
        {/* Beat 2 */}
        <Divider left="33.333%" />
        <Divider left="66.666%" />

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {experienceColumns.map((column, ci) => (
            <motion.div
              key={column.key}
              className="border-b border-black/0 px-6 pb-14 pt-8 last:border-b-0 sm:px-8 lg:border-b-0 lg:px-[3%] lg:pb-[6%] lg:pt-0"
              variants={{
                hidden: { backgroundColor: 'rgba(219,215,209,0)' },
                show: {
                  backgroundColor: boardColumn,
                  transition: { duration: 0.5, delay: T.bars, ease },
                },
              }}
            >
              {/* Beat 3 */}
              <motion.h2
                className="text-center text-[clamp(3rem,7.17vw,10rem)] font-bold leading-none tracking-[-0.02em] text-black lg:pt-[7%]"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: T.headings + ci * 0.1, ease } },
                }}
              >
                {column.heading}
              </motion.h2>

              {/* Beat 4 */}
              <ul className="mt-10 list-none space-y-10 lg:mt-[14%] lg:space-y-[12%]">
                {column.entries.map((entry, i) => (
                  <Entry key={entry.title} entry={entry} index={ci * 0.5 + i} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
