'use client';

import Image from 'next/image';
import {
  MotionValue,
  cubicBezier,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import {
  type School,
  asOf,
  axisX,
  educationBg,
  educationHeading,
  educationRule,
  educationText,
  educationTextDim,
  fraction,
  headlineTop,
  markSize,
  rowY,
  schools,
  ticks,
} from '@/lib/education';

/**
 * Education, as the third movement after the opening and the board.
 *
 * The marks start piled up the way the collage photos do, then burst onto a
 * time axis. Reusing the burst is deliberate — it is the site's own gesture —
 * but the landing is not another three columns, because the board just did
 * that and education has something the board does not: duration. Kean's bar
 * sits inside UCVTS's rather than after it, and Northeastern's stops at today
 * and finishes as an outline.
 *
 * Same machinery as Opening: a spring on scroll progress so a flick carries
 * through, and every position a percentage of the pinned viewport.
 */

function Mark({ school, burst }: { school: School; burst: MotionValue<number> }) {
  const to = { x: axisX(fraction(school.start)), y: rowY[school.row] };

  // The same small overshoot the collage uses; a linear arrival reads cheap.
  const over = (from: number, toV: number) => toV + (toV - from) * 0.06;
  const x = useTransform(burst, [0, 0.78, 1], [school.from.x, over(school.from.x, to.x), to.x]);
  const y = useTransform(burst, [0, 0.78, 1], [school.from.y, over(school.from.y, to.y), to.y]);
  const rotate = useTransform(burst, [0, 1], [school.from.rotate, 0]);
  const size = useTransform(burst, [0, 1], [markSize.from, markSize.to]);

  const left = useMotionTemplate`${x}%`;
  const top = useMotionTemplate`${y}%`;
  const width = useMotionTemplate`${size}%`;

  return (
    <motion.div
      data-band-motion
      className="absolute aspect-square"
      style={{ left, top, width, rotate, x: '-50%', y: '-50%' }}
    >
      <Image src={school.src} alt={school.alt} fill sizes="16vw" className="object-contain" />
    </motion.div>
  );
}

/**
 * One span. Northeastern is split in two: solid up to `asOf`, outline after,
 * so the degree in progress looks like a degree in progress.
 */
function Bar({ school, p }: { school: School; p: MotionValue<number> }) {
  const from = fraction(school.start);
  const to = fraction(school.end);
  const now = fraction(asOf);
  const unfinished = now < to;

  const solidTo = unfinished ? Math.min(now, to) : to;
  const left = axisX(from);
  const solidW = axisX(solidTo) - left;
  const restW = axisX(to) - axisX(solidTo);

  const start = 0.66 + school.row * 0.05;
  const grow = useTransform(p, [start, start + 0.12], [0, 1]);

  return (
    <div
      className="absolute"
      style={{ left: `${left}%`, top: `${rowY[school.row]}%`, width: `${solidW + restW}%` }}
    >
      <motion.div
        data-band-motion
        className="absolute left-0 top-0 h-[4px] origin-left"
        style={{ width: `${(solidW / (solidW + restW)) * 100}%`, scaleX: grow, backgroundColor: educationRule }}
      />
      {restW > 0 && (
        <motion.div
          data-band-motion
          className="absolute top-0 h-[4px] origin-left border-t-[4px] border-dashed"
          style={{
            left: `${(solidW / (solidW + restW)) * 100}%`,
            width: `${(restW / (solidW + restW)) * 100}%`,
            scaleX: grow,
            borderColor: educationRule,
            opacity: 0.42,
          }}
        />
      )}
    </div>
  );
}

/**
 * The name sits on the bar and the line hangs under it, so the bar is the
 * baseline the row is written along rather than a rule floating near it.
 * Type is set big for the same reason the board's headings are: this site
 * says few things, so the things it says are large.
 */
function Label({ school, p }: { school: School; p: MotionValue<number> }) {
  const start = 0.74 + school.row * 0.05;
  const opacity = useTransform(p, [start, start + 0.1], [0, 1]);
  const y = useTransform(p, [start, start + 0.1], [14, 0]);

  return (
    <motion.div
      data-band-motion
      className="absolute h-0"
      style={{
        left: `${axisX(fraction(school.start)) + markSize.to * 0.6}%`,
        top: `${rowY[school.row]}%`,
        opacity,
        y,
      }}
    >
      <p
        className="font-title absolute bottom-[0.45rem] left-0 whitespace-nowrap text-[clamp(1.2rem,min(3.4vw,7vh),5rem)] font-bold leading-none tracking-[-0.03em]"
        style={{ color: educationText }}
      >
        {school.name}
      </p>
      <p
        className="absolute left-0 top-[0.85rem] w-[34ch] max-w-[34vw] text-[clamp(0.72rem,min(0.72vw,1.6vh),1.05rem)] font-normal leading-relaxed"
        style={{ color: educationTextDim }}
      >
        {school.line}
      </p>
    </motion.div>
  );
}

export default function EducationBand() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 18,
    mass: 0.4,
    restDelta: 0.0004,
  });

  const ease = cubicBezier(0.33, 1, 0.68, 1);

  const headlineOpacity = useTransform(p, [0.02, 0.1], [0, 1]);
  const burst = useTransform(p, [0.2, 0.62], [0, 1], { ease });

  /*
   * The headline reads under the pile, then clears out as the axis assembles.
   * Three interpolations rather than one because the clearance below the pile
   * is a width measurement while the position is a height one — see the note
   * on headlineTop.
   */
  const hBase = useTransform(burst, [0, 1], [headlineTop.base.from, headlineTop.base.to]);
  const hClear = useTransform(burst, [0, 1], [headlineTop.clearVw.from, headlineTop.clearVw.to]);
  const hGap = useTransform(burst, [0, 1], [headlineTop.gapVh.from, headlineTop.gapVh.to]);
  const headlineTopPct = useMotionTemplate`calc(${hBase}% + ${hClear}vw + ${hGap}vh)`;

  const axisOpacity = useTransform(p, [0.6, 0.7], [0, 1]);

  return (
    <div ref={ref} className="relative lg:h-[240vh]">
      {/* The nav's target: where the pinned sequence has played out, not its
          blank first frame. Below lg the section is not pinned, so its top. */}
      <span id="education" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 lg:bottom-0 lg:top-auto lg:h-[100vh]" />
      <section
        aria-label="Education"
        className="py-20 lg:sticky lg:top-0 lg:h-dvh lg:overflow-hidden lg:py-0"
        style={{ backgroundColor: educationBg }}
      >
        {/* Desktop: the pile, the burst and the axis. */}
        <div className="relative hidden h-full lg:block">
          <motion.div
            data-band-motion
            className="absolute left-1/2 w-full -translate-x-1/2 text-center"
            style={{ top: headlineTopPct, opacity: headlineOpacity }}
          >
            <p className="absolute bottom-full left-0 mb-3 w-full font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">
              02 — education
            </p>
            <p className="font-title text-[clamp(0.9rem,1.35vw,2rem)] font-bold" style={{ color: educationText }}>
              {educationHeading}
            </p>
          </motion.div>

          <motion.div data-band-motion className="absolute inset-0" style={{ opacity: axisOpacity }}>
            {ticks.map((t) => (
              <div
                key={t.label}
                className="absolute -translate-x-1/2 text-center"
                style={{ left: `${axisX(fraction(t.at))}%`, top: `${rowY[0] - 14}%` }}
              >
                <span
                  className="font-mono-label text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: educationTextDim }}
                >
                  {t.label}
                </span>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-2 block w-px"
                  style={{ height: '6vh', backgroundColor: educationRule, opacity: 0.3 }}
                />
              </div>
            ))}
          </motion.div>

          {schools.map((s) => (
            <Bar key={`bar-${s.id}`} school={s} p={p} />
          ))}
          {schools.map((s) => (
            <Label key={`label-${s.id}`} school={s} p={p} />
          ))}
          {schools.map((s) => (
            <Mark key={s.id} school={s} burst={burst} />
          ))}
        </div>

        {/* Narrow screens: no pin to scrub, so the same facts stack. */}
        <div className="px-6 sm:px-8 lg:hidden">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-black/50">02 — education</p>
          <p
            className="font-title text-center text-[clamp(0.9rem,3.5vw,1.4rem)] font-bold"
            style={{ color: educationText }}
          >
            {educationHeading}
          </p>
          <ul className="mt-12 list-none space-y-12">
            {schools.map((s) => (
              <li key={s.id} className="flex gap-5">
                <div className="relative h-14 w-14 shrink-0">
                  <Image src={s.src} alt={s.alt} fill sizes="56px" className="object-contain" />
                </div>
                <div>
                  <p
                    className="font-title text-[1.05rem] font-bold leading-none tracking-[-0.02em]"
                    style={{ color: educationText }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="mt-2 text-[0.8rem] font-normal leading-relaxed"
                    style={{ color: educationTextDim }}
                  >
                    {s.line}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
