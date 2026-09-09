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
  collageBg,
  eyebrow,
  photos,
  statement,
  textTop,
} from '@/lib/collage';
import { useMediaQuery, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

const STATEMENT_CLASS =
  'font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(1.35rem,5.15vw,6.5rem)]';
const EYEBROW_CLASS =
  'font-bold leading-[1.25] tracking-[0.01em] text-[clamp(0.6rem,1.12vw,1.4rem)]';

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

/** One photo, interpolating from the clustered state to the scattered one. */
function Photo({ photo, burst }: { photo: CollagePhoto; burst: MotionValue<number> }) {
  // A little overshoot before settling — a linear scatter reads cheap.
  const over = (from: number, to: number) => to + (to - from) * 0.05;
  const x = useTransform(burst, [0, 0.78, 1], [photo.from.x, over(photo.from.x, photo.to.x), photo.to.x]);
  const y = useTransform(burst, [0, 0.78, 1], [photo.from.y, over(photo.from.y, photo.to.y), photo.to.y]);
  const rotate = useTransform(burst, [0, 1], [photo.from.rotate, 0]);
  const left = useMotionTemplate`${x}%`;
  const top = useMotionTemplate`${y}%`;

  return (
    <motion.div
      className="absolute"
      style={{
        left,
        top,
        rotate,
        width: `${photo.w}%`,
        height: `${photo.h}%`,
        x: '-50%',
        y: '-50%',
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="30vw"
        className="object-cover grayscale"
        style={{ objectPosition: `50% ${photo.focusY}%` }}
      />
    </motion.div>
  );
}

/** Static end state, used under reduced motion and as the burst's target. */
function CollageStatic() {
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: collageBg }}>
      {photos.map((p) => (
        <div
          key={p.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.to.x}%`, top: `${p.to.y}%`, width: `${p.w}%`, height: `${p.h}%` }}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="30vw"
            className="object-cover grayscale"
            style={{ objectPosition: `50% ${p.focusY}%` }}
          />
        </div>
      ))}
      <CollageText />
    </div>
  );
}

function CollageText() {
  return (
    <>
      <p
        className={`${EYEBROW_CLASS} absolute left-1/2 w-full -translate-x-1/2 text-center text-black`}
        style={{ top: `${textTop.eyebrow}%` }}
      >
        {eyebrow[0]}
        <br />
        {eyebrow[1]}
      </p>
      <h1
        className={`${STATEMENT_CLASS} absolute left-1/2 w-full -translate-x-1/2 px-4 text-center text-black`}
        style={{ top: `${textTop.statement}%` }}
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
  const reduce = usePrefersReducedMotion();
  const stacked = useMediaQuery('(max-width: 767px)', false);

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

  // Reduced motion: two plain screens, no pinning and no parting.
  if (reduce) {
    return (
      <>
        <section className="h-dvh" aria-label="Introduction">
          <div className="grid h-full grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 xl:grid-cols-[19.4%_1fr]">
            <div style={{ backgroundColor: 'var(--rail-bg)' }}>
              <RailPanel />
            </div>
            <HeroImage />
          </div>
        </section>
        <section className="h-dvh" aria-label="Introduction, continued">
          <CollageStatic />
        </section>
      </>
    );
  }

  return (
    <div ref={ref} className="relative h-[200vh]" aria-label="Introduction">
      <div className="sticky top-0 z-40 h-dvh overflow-hidden">
        {/* Underneath: the pile the panels part to reveal. */}
        <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: collageBg }}>
          {photos.map((p) => (
            <Photo key={p.id} photo={p} burst={burst} />
          ))}
          <motion.div
            className="absolute inset-0"
            style={{ scale: textScale, opacity: textOpacity }}
          >
            <CollageText />
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
