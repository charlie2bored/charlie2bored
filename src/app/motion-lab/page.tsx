'use client';

/**
 * Throwaway tuning page for the experience headline. Not linked from the site
 * and excluded from the sitemap — delete once the motion is settled.
 *
 * Each card replays one treatment on click so they can be compared directly
 * rather than described.
 */

import { motion, useAnimationControls, type Target, type Transition } from 'framer-motion';
import { useState } from 'react';
import { experienceHeading } from '@/lib/experienceSection';

type Variant = {
  id: string;
  name: string;
  note: string;
  perspective?: number;
  keyframes: Target;
  transition: Transition;
};

const VARIANTS: Variant[] = [
  {
    id: 'a',
    name: 'A — Current: Z approach, compounding',
    note: 'What is on the site now. ~0.9s run-up, holds, returns.',
    perspective: 800,
    keyframes: { z: [0, 0, 59, 144, 260, 410, 558, 664, 655, 655, 0], opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    transition: {
      duration: 2.2,
      times: [0, 0.06, 0.13, 0.2, 0.27, 0.33, 0.39, 0.45, 0.5, 0.63, 1],
      ease: ['linear', 'linear', 'linear', 'linear', 'linear', 'linear', 'linear', [0.2, 0, 0, 1], 'linear', [0.5, 0, 0.15, 1]],
    },
  },
  {
    id: 'b',
    name: 'B — Stamp: no run-up at all',
    note: 'Beat of nothing, then it is just THERE, with a recoil. No travel.',
    keyframes: { scale: [1, 1, 6.2, 5.4, 5.5, 5.5, 1], opacity: [0, 1, 1, 1, 1, 1, 1] },
    transition: {
      duration: 1.7,
      times: [0, 0.18, 0.24, 0.29, 0.34, 0.6, 1],
      ease: ['linear', [0.9, 0, 1, 1], [0.2, 0, 0, 1], [0.3, 0, 0.3, 1], 'linear', [0.5, 0, 0.15, 1]],
    },
  },
  {
    id: 'c',
    name: 'C — Rush: very fast approach',
    note: 'Same idea as A but the whole charge happens in ~250ms.',
    perspective: 600,
    keyframes: { z: [0, 0, 120, 330, 500, 497, 497, 0], opacity: [0, 1, 1, 1, 1, 1, 1, 1] },
    transition: {
      duration: 1.6,
      times: [0, 0.2, 0.26, 0.32, 0.37, 0.4, 0.62, 1],
      ease: ['linear', [0.8, 0, 1, 1], [0.8, 0, 1, 1], [0.2, 0, 0, 1], 'linear', 'linear', [0.5, 0, 0.15, 1]],
    },
  },
  {
    id: 'd',
    name: 'D — Spring: overshoots and wobbles',
    note: 'Physics rather than keyframes. Settles by bouncing.',
    keyframes: { scale: [1, 5.5, 1], opacity: [0, 1, 1] },
    transition: { duration: 2, times: [0, 0.45, 1], ease: [[0.34, 1.56, 0.64, 1], [0.34, 1.56, 0.64, 1]] },
  },
  {
    id: 'e',
    name: 'E — Tilt: arrives off-axis',
    note: 'Rotates as it comes, so it reads dimensional rather than flat.',
    perspective: 700,
    keyframes: {
      z: [0, 0, 140, 380, 560, 552, 552, 0],
      rotateX: [0, 0, -18, -10, -3, 0, 0, 0],
      opacity: [0, 1, 1, 1, 1, 1, 1, 1],
    },
    transition: {
      duration: 2,
      times: [0, 0.12, 0.24, 0.34, 0.42, 0.47, 0.64, 1],
      ease: ['linear', [0.75, 0, 1, 1], [0.75, 0, 1, 1], [0.2, 0, 0, 1], [0.3, 0, 0.3, 1], 'linear', [0.5, 0, 0.15, 1]],
    },
  },
  {
    id: 'f',
    name: 'F — Slam and hang',
    note: 'Slow menacing creep, violent last 120ms, long hold.',
    perspective: 900,
    keyframes: { z: [0, 0, 90, 200, 340, 745, 736, 736, 0], opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1] },
    transition: {
      duration: 2.6,
      times: [0, 0.08, 0.22, 0.34, 0.44, 0.5, 0.545, 0.72, 1],
      ease: ['linear', 'linear', 'linear', 'linear', [0.95, 0, 1, 1], [0.2, 0, 0, 1], 'linear', [0.5, 0, 0.15, 1]],
    },
  },
];

function Card({ v }: { v: Variant }) {
  const controls = useAnimationControls();
  const [busy, setBusy] = useState(false);

  const play = async () => {
    if (busy) return;
    setBusy(true);
    const reset: Target = { opacity: 0, z: 0, scale: 1, rotateX: 0 };
    await controls.set(reset);
    await controls.start({ ...v.keyframes, transition: v.transition });
    setBusy(false);
  };

  return (
    <div className="border border-black/15">
      <button
        type="button"
        onClick={play}
        className="flex w-full items-baseline justify-between gap-4 border-b border-black/15 px-4 py-3 text-left"
      >
        <span>
          <span className="block text-[13px] font-bold">{v.name}</span>
          <span className="block text-[11px] opacity-60">{v.note}</span>
        </span>
        <span className="shrink-0 text-[11px] uppercase tracking-widest opacity-60">
          {busy ? 'playing' : 'replay'}
        </span>
      </button>

      <div
        className="relative flex h-[46vh] items-center justify-center overflow-hidden"
        style={{ perspective: v.perspective ? `${v.perspective}px` : undefined }}
      >
        <motion.p
          animate={controls}
          initial={{ opacity: 0 }}
          className="text-center text-[clamp(0.9rem,1.35vw,2rem)] font-bold"
        >
          {experienceHeading}
        </motion.p>
      </div>
    </div>
  );
}

export default function MotionLab() {
  return (
    <main className="min-h-dvh px-6 py-10" style={{ backgroundColor: '#ece9e4', color: '#000' }}>
      <h1 className="text-[15px] font-bold">Headline motion — pick one</h1>
      <p className="mt-1 max-w-prose text-[12px] opacity-70">
        Click any panel to replay it. Tell me the letter, or which half of one you
        liked, and I will put it on the real section.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {VARIANTS.map((v) => (
          <Card key={v.id} v={v} />
        ))}
      </div>
    </main>
  );
}
