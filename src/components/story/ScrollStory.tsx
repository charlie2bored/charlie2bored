'use client';

import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { RevealText } from '@/components/story/Reveal';
import FlowField from '@/components/story/FlowField';

/*
 * Motion note: reduced-motion is handled once, by <MotionConfig reducedMotion="user">.
 * Branching styles on useReducedMotion() here would desync SSR (null on the server,
 * resolved on the client) and produce a hydration mismatch.
 */

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
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
      <FlowField />

      {/* Keeps the headline legible wherever the field happens to be dense. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(115% 75% at 26% 55%, rgba(8,8,10,0.82) 0%, rgba(8,8,10,0.42) 42%, rgba(8,8,10,0) 100%)',
        }}
      />

      <div className="relative">
        <h1
          className="font-display text-[clamp(3rem,13vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.04em]"
          style={{ color: 'var(--paper)' }}
        >
          <span className="sr-only">Charlie Vargas</span>
          <span aria-hidden="true" className="block">
            <RevealText text="Charlie" as="span" className="block" stagger={0} />
            <RevealText text="Vargas" as="span" className="block" delay={0.09} stagger={0} />
          </span>
        </h1>
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

export default function ScrollStory() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Hero />
    </MotionConfig>
  );
}
