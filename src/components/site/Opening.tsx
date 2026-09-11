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
import RailPanel from '@/components/site/RailPanel';
import { dateline } from '@/lib/nav';
import {
  type CollagePhoto,
  clusterCentre,
  clusterUnit,
  collageBg,
  eyebrow,
  frame,
  photos,
  placement,
  portraitGrow,
  portraitPile,
  portraitTextTop,
  portraitUnit,
  statement,
  textTop,
} from '@/lib/collage';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const STATEMENT_CLASS =
  'font-title font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(1.35rem,5.15vw,6.5rem)] [@media(max-aspect-ratio:1/1)]:text-[min(6.8vw,4vh)]';
const EYEBROW_CLASS =
  'font-title font-bold leading-[1.25] tracking-[0.01em] text-[clamp(0.6rem,1.12vw,1.4rem)] [@media(max-aspect-ratio:1/1)]:text-[min(3.2vw,1.9vh)]';

function HeroImage() {
  return (
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
  );
}

/**
 * One photo, interpolating from the clustered state to the scattered one.
 *
 * The box comes from `placement`, so the photo keeps its designed shape at any
 * viewport rather than stretching with the window (see the note in collage.ts).
 * Position is built as `calc(anchor + share x size)`: the anchor slides from
 * the clustered centre to the scattered one while the share slides from 0 to
 * half a box, which lands a bleeding photo hard against its edge no matter
 * what size the box resolved to. Both halves are plain numbers, so framer can
 * drive them and CSS does the arithmetic at paint time.
 */
function Photo({ photo, burst, portrait }: { photo: CollagePhoto; burst: MotionValue<number>; portrait: boolean }) {
  const place = placement(photo);

  // A little overshoot before settling — a linear scatter reads cheap.
  const over = (from: number, to: number) => to + (to - from) * 0.05;

  // Where the burst lands, and in what units the pile and the boxes are
  // measured. Landscape: the Figma edge anchors, the pile in clusterUnit.
  // Portrait: plain centres, everything in the larger portrait unit (see
  // collage.ts). Opening remounts the photos when the mode flips.
  const end = portrait
    ? { x: photo.portrait.x, y: photo.portrait.y, bx: 0, by: 0 }
    : { x: place.x.at, y: place.y.at, bx: place.x.half, by: place.y.half };
  const unit = portrait
    ? {
        x: `(${portraitPile} * ${portraitUnit})`,
        y: `(${(portraitPile * (frame.h / frame.w)).toFixed(4)} * ${portraitUnit})`,
      }
    : clusterUnit;
  const box = portrait
    ? {
        width: `calc(${(photo.w * portraitPile).toFixed(3)} * ${portraitUnit})`,
        height: `calc(${((photo.w * portraitPile) / place.aspect).toFixed(3)} * ${portraitUnit})`,
      }
    : { width: place.width, height: place.height };

  // Three terms per axis, each a plain number CSS multiplies at paint time:
  // the anchor, the photo's offset within the pile, and its share of its own
  // box. At rest only the pile term is live, so the cluster scales as one
  // object; once burst the box term takes over and pins it to its edge.
  const ax = useTransform(burst, [0, 0.78, 1], [clusterCentre.x, over(clusterCentre.x, end.x), end.x]);
  const ay = useTransform(burst, [0, 0.78, 1], [clusterCentre.y, over(clusterCentre.y, end.y), end.y]);
  const px = useTransform(burst, [0, 1], [photo.from.x - clusterCentre.x, 0]);
  const py = useTransform(burst, [0, 1], [photo.from.y - clusterCentre.y, 0]);
  const bx = useTransform(burst, [0, 1], [0, end.bx]);
  const by = useTransform(burst, [0, 1], [0, end.by]);
  const rotate = useTransform(burst, [0, 1], [photo.from.rotate, 0]);
  const scale = useTransform(burst, [0, 1], [1, portrait ? portraitGrow : 1]);

  const left = useMotionTemplate`calc(${ax}vw + ${px} * ${unit.x} + ${bx} * ${box.width})`;
  const top = useMotionTemplate`calc(${ay}vh + ${py} * ${unit.y} + ${by} * ${box.height})`;

  return (
    <motion.div
      className="absolute"
      style={{
        left,
        top,
        rotate,
        scale,
        width: box.width,
        height: box.height,
        x: '-50%',
        y: '-50%',
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={portrait ? '70vw' : '30vw'}
        className="object-cover grayscale"
        style={{ objectPosition: `50% ${photo.focusY}%` }}
      />
    </motion.div>
  );
}

function CollageText({ portrait }: { portrait: boolean }) {
  return (
    <>
      <p
        className={`${EYEBROW_CLASS} absolute left-1/2 w-full -translate-x-1/2 text-center text-black`}
        style={{ top: `${(portrait ? portraitTextTop : textTop).eyebrow}%` }}
      >
        {eyebrow[0]}
        <br />
        {eyebrow[1]}
      </p>
      <h1
        className={`${STATEMENT_CLASS} absolute left-1/2 w-full -translate-x-1/2 px-4 text-center text-black`}
        style={{ top: `${(portrait ? portraitTextTop : textTop).statement}%` }}
      >
        {statement.map((line, i) => (
          <span key={line} className="block">
            {line}
            {i < statement.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h1>
    </>
  );
}

export default function Opening() {
  const ref = useRef<HTMLDivElement>(null);
  const stacked = useMediaQuery('(max-width: 767px)', false);
  const portrait = useMediaQuery('(max-aspect-ratio: 1/1)', false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  /*
   * A spring on the raw progress is what makes this read as playback rather
   * than a scrub: a wheel tick is a discrete jump, and mapping transforms
   * straight off it lands as a step. The spring carries through and settles,
   * so a short flick breaks the panels away and they finish on their own.
   */
  const smooth = useSpring(scrollYProgress, {
    // Critically damped (zeta ~1.0). The first pass was overdamped at ~1.95,
    // which crawled behind the scroll and read as the choppiness: the panels
    // sat still for a few hundred pixels, then snapped.
    stiffness: 200,
    damping: 18,
    mass: 0.4,
    restDelta: 0.0004,
  });

  /*
   * Ease-out cubic, not expo. Expo over a short range finished the parting
   * inside 60px of scroll — less than one wheel tick, which reads as a jump
   * rather than a break-away. This responds on the first flick and completes
   * in roughly two, then holds while the pin runs out.
   */
  const ease = cubicBezier(0.33, 1, 0.68, 1);
  const partPct = useTransform(smooth, [0, 0.3], [0, 100], { ease });
  const railPct = useTransform(partPct, (v) => -v);
  const heroPct = useTransform(smooth, [0, 0.14, 0.3], [0, 76, 100], { ease });
  const burst = useTransform(smooth, [0.38, 0.85], [0, 1], { ease });

  const railX = useTransform(railPct, (v) => (stacked ? '0%' : `${v}%`));
  const railY = useTransform(railPct, (v) => (stacked ? `${v}%` : '0%'));
  const heroX = useTransform(heroPct, (v) => (stacked ? '0%' : `${v}%`));
  const heroY = useTransform(heroPct, (v) => (stacked ? `${v}%` : '0%'));

  const textScale = useTransform(burst, [0.15, 0.8], [0.72, 1]);
  const textOpacity = useTransform(burst, [0.2, 0.7], [0, 1]);

  return (
    <div ref={ref} className="relative h-[200vh]" aria-label="Introduction">
      <div className="sticky top-0 z-40 h-dvh overflow-hidden">
        {/* Underneath: the pile the panels part to reveal. */}
        <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: collageBg }}>
          {photos.map((p) => (
            <Photo key={`${p.id}-${portrait}`} photo={p} burst={burst} portrait={portrait} />
          ))}
          <motion.div
            className="absolute inset-0"
            style={{ scale: textScale, opacity: textOpacity }}
          >
            <CollageText portrait={portrait} />
          </motion.div>
        </div>

        {/* On top: the two panels that slide away. */}
        <div className="relative grid h-full grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 xl:grid-cols-[19.4%_1fr]">
          <motion.div
            style={{ x: railX, y: railY }}
            className="relative z-20 row-start-1 overflow-hidden md:col-start-1"
            data-panel="rail"
          >
            <div className="h-full" style={{ backgroundColor: 'var(--rail-bg)' }}>
              <RailPanel />
            </div>
          </motion.div>

          <motion.div
            style={{ x: heroX, y: heroY }}
            className="relative z-20 row-start-2 overflow-hidden md:col-start-2 md:row-start-1"
            data-panel="hero"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
