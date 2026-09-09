'use client';

import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import type { Beat } from '@/lib/story';

/*
 * Motion note: reduced-motion is handled once, by <MotionConfig reducedMotion="user">.
 * Branching styles on useReducedMotion() here would desync SSR (null on the server,
 * resolved on the client) and produce a hydration mismatch.
 */
const rise = {
  initial: { opacity: 0, y: 24 },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left"
      style={{ scaleX: width, backgroundColor: 'var(--paper)' }}
    />
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center px-6 py-10 sm:px-10 lg:px-16">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,13vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.04em]"
          style={{ color: 'var(--paper)' }}
        >
          Charlie
          <br />
          Vargas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-[15px] leading-relaxed"
          style={{ color: 'var(--paper-dim)' }}
        >
          BI and operations analyst. Product designer. Arena-floor performer. New York City.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-mono-label absolute bottom-10 left-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] sm:left-10 lg:left-16"
        style={{ color: 'var(--paper-faint)' }}
      >
        <span>Scroll</span>
        <span aria-hidden="true" className="h-px w-10" style={{ backgroundColor: 'var(--rule)' }} />
      </motion.div>
    </section>
  );
}

function BeatSection({ beat }: { beat: Beat }) {
  /*
   * data-reveal is the safety net: reduced-motion users get the content
   * unconditionally via CSS, so nothing depends on an IntersectionObserver
   * callback that a fast scroll or an anchor jump can skip entirely.
   */
  const inView = {
    ...rise,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    'data-reveal': true,
  };

  return (
    <section className="flex min-h-dvh items-center px-6 py-24 sm:px-10 lg:px-16">
      <div className="max-w-4xl">
        <motion.h2
          {...inView}
          className="font-display text-[clamp(2rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
          style={{ color: 'var(--paper)' }}
        >
          {beat.line}
        </motion.h2>

        {beat.sub && (
          <motion.p
            {...inView}
            transition={{ ...rise.transition, delay: 0.12 }}
            className="mt-7 max-w-xl text-[16px] leading-relaxed sm:text-[17px]"
            style={{ color: 'var(--paper-dim)' }}
          >
            {beat.sub}
          </motion.p>
        )}

        {beat.evidence && (
          <motion.ul
            {...inView}
            transition={{ ...rise.transition, delay: 0.22 }}
            className="mt-14 grid list-none gap-8 sm:grid-cols-3 sm:gap-6"
          >
            {beat.evidence.map((item) => (
              <li key={item.label} className="border-t pt-4" style={{ borderColor: 'var(--rule)' }}>
                <p
                  className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-bold tracking-[-0.03em]"
                  style={{ color: 'var(--paper)' }}
                >
                  {item.value}
                </p>
                <p
                  className="font-mono-label mt-2 text-[10px] uppercase leading-relaxed tracking-[0.14em]"
                  style={{ color: 'var(--paper-faint)' }}
                >
                  {item.label}
                </p>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}

export default function ScrollStory({ beats }: { beats: Beat[] }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Hero />
      {beats.map((beat) => (
        <BeatSection key={beat.id} beat={beat} />
      ))}
    </MotionConfig>
  );
}
