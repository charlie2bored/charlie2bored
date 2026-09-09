'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { Category, Work } from '@/lib/story';

/**
 * Full-bleed art plate for work with no photograph yet. Reads as a designed
 * colour panel rather than a missing image: accent wash, diagonal hatch, and a
 * huge ghosted numeral sunk into the corner.
 */
function PendingPlate({ accent, index }: { accent: string; index: string }) {
  return (
    <span aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <span
        className="absolute inset-0"
        style={{ background: `linear-gradient(150deg, ${accent}cc 0%, ${accent}55 45%, var(--ink) 100%)` }}
      />
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #00000033 0px, #00000033 2px, transparent 2px, transparent 10px)',
        }}
      />
      <span
        className="font-display absolute -bottom-[0.24em] -right-[0.06em] text-[13rem] font-extrabold leading-none tracking-tighter"
        style={{ color: '#00000026' }}
      >
        {index}
      </span>
    </span>
  );
}

/** One frame of the panel background. Stacked and cross-faded while active. */
function Frame({
  work,
  accent,
  index,
  visible,
  priority,
}: {
  work: Work;
  accent: string;
  index: string;
  visible: boolean;
  priority: boolean;
}) {
  return (
    <span className="absolute inset-0 transition-opacity duration-700 ease-out" style={{ opacity: visible ? 1 : 0 }}>
      {work.image ? (
        <Image
          src={work.image}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          priority={priority}
          className="object-cover object-center"
        />
      ) : (
        <PendingPlate accent={accent} index={index} />
      )}
    </span>
  );
}

function Panel({
  category,
  active,
  dimmed,
  onActivate,
  onRelease,
}: {
  category: Category;
  active: boolean;
  dimmed: boolean;
  onActivate: () => void;
  onRelease: () => void;
}) {
  const [frame, setFrame] = useState(0);
  const frames = category.works;
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  /*
   * Cycle the artwork while the panel is active - the loading-screen feel.
   * Starts only on interaction, so there is no server/client render to
   * disagree about, and it holds on one frame under reduced motion.
   */
  useEffect(() => {
    if (!active || reduceRef.current || frames.length < 2) return;
    const id = window.setInterval(() => setFrame((f) => f + 1), 1600);
    return () => window.clearInterval(id);
  }, [active, frames.length]);

  // Derived rather than reset in an effect, so leaving a panel returns to frame 0
  // without an extra setState pass.
  const shown = frames[active ? frame % frames.length : 0] ?? frames[0];

  return (
    <Link
      href={category.href}
      onMouseEnter={onActivate}
      onMouseLeave={onRelease}
      onFocus={onActivate}
      onBlur={onRelease}
      aria-label={`${category.label} - ${category.line}`}
      className="gta-panel group relative isolate flex min-h-[46vh] cursor-pointer flex-col justify-end overflow-hidden lg:min-h-[74vh]"
      data-active={active}
      data-dimmed={dimmed}
    >
      {/* Art layer: desaturated and held back at rest, full colour when active. */}
      <span aria-hidden="true" className="gta-art absolute inset-0 -z-10">
        {frames.map((work, i) => (
          <Frame
            key={work.title}
            work={work}
            accent={category.accent}
            index={category.index}
            visible={active ? i === frame : i === 0}
            priority={i === 0}
          />
        ))}
      </span>

      {/* Accent grade: pulls screenshots and colour plates into one look. */}
      <span
        aria-hidden="true"
        className="gta-tint absolute inset-0 -z-10"
        style={{ backgroundColor: category.accent }}
      />

      {/* Scrim keeps the type legible over any photograph. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(6,6,8,0.94) 0%, rgba(6,6,8,0.72) 34%, rgba(6,6,8,0.30) 70%, rgba(6,6,8,0.14) 100%)',
        }}
      />

      {/* Accent bar along the bottom edge; wipes in on activation. */}
      <span
        aria-hidden="true"
        className="gta-rule absolute inset-x-0 bottom-0 h-[3px] origin-left"
        style={{ backgroundColor: category.accent }}
      />

      <div className="relative p-6 lg:p-8">
        <p className="font-display text-[12px] font-bold tracking-[0.3em]" style={{ color: category.accent }}>
          {category.index}
        </p>

        <h3
          className="font-display mt-2 text-[clamp(2.4rem,9vw,3.6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em] lg:text-[clamp(2rem,4.4vw,4.5rem)]"
          style={{ color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
        >
          {category.label}
        </h3>

        <p className="mt-2 text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.78)' }}>
          {category.line}
        </p>

        <div className="gta-caption mt-5">
          <p className="min-h-[2.6em] max-w-sm text-[12px] leading-snug" style={{ color: 'rgba(255,255,255,0.72)' }}>
            <span className="font-semibold" style={{ color: '#fff' }}>
              {shown.title}
            </span>{' '}
            &mdash; {shown.context}
          </p>
          <p
            className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]"
            style={{ color: category.accent }}
          >
            See all {category.label.toLowerCase()}
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CategorySelector({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="pick" className="px-4 pb-14 pt-20 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 px-2">
        <h2
          className="font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold uppercase tracking-[-0.03em]"
          style={{ color: 'var(--paper)' }}
        >
          Pick a room.
        </h2>
        <p className="text-[13px]" style={{ color: 'var(--paper-faint)' }}>
          Three categories. Everything in each one, one click away.
        </p>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row">
        {categories.map((category) => (
          <Panel
            key={category.key}
            category={category}
            active={active === category.key}
            dimmed={active !== null && active !== category.key}
            onActivate={() => setActive(category.key)}
            onRelease={() => setActive(null)}
          />
        ))}
      </div>
    </section>
  );
}
