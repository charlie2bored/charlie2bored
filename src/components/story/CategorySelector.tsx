'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { Category, Work } from '@/lib/story';
import CropLabel from '@/components/story/CropLabel';

/**
 * Poster art rendered in the DOM. Used wherever a screenshot makes a weak
 * full-bleed background — a bare data table, or a screenshot of someone
 * else's chrome — and as the stand-in until real photography exists.
 * The figure sits high so it never collides with the category label below.
 */
function TypePlate({ accent, index }: { accent: string; index: string }) {
  return (
    <span aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <span
        className="absolute inset-0"
        style={{ background: `linear-gradient(158deg, ${accent}e6 0%, ${accent}70 38%, var(--ink) 88%)` }}
      />
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #00000030 0px, #00000030 2px, transparent 2px, transparent 11px)',
        }}
      />
      <span
        className="font-display absolute -right-[0.06em] top-[38%] text-[11rem] font-extrabold leading-none tracking-tighter"
        style={{ color: '#00000024' }}
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
        <>
          <Image
            src={work.image}
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority={priority}
            className="object-cover"
            style={{ objectPosition: work.focus ?? '50% 50%' }}
          />
          {/* Grade photographs toward the accent; plates are already in it. */}
          <span className="gta-tint absolute inset-0" style={{ backgroundColor: accent }} />
        </>
      ) : (
        <TypePlate accent={accent} index={index} />
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
  /*
   * Real photography leads. The panel shows frame 0 at rest, so a category
   * whose only image sits further down the list would never show a picture
   * at all - and never at any point for a viewer with reduced motion, since
   * cycling is disabled for them.
   */
  const frames = useMemo(
    () => [...category.works].sort((a, b) => Number(Boolean(b.image)) - Number(Boolean(a.image))),
    [category.works],
  );
  /*
   * Cycle the artwork while the panel is active - the loading-screen feel.
   * Starts only on interaction, so there is no server/client render to
   * disagree about.
   */
  useEffect(() => {
    if (!active || frames.length < 2) return;
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

      {/*
        Poster figure for whichever frame is showing. Deliberately outside
        .gta-art so the art layer's filter does not grey it down.
      */}
      {!shown.image && shown.plate && (
        <span className="gta-figure pointer-events-none absolute inset-x-0 top-0 flex flex-col items-start p-6 lg:p-8">
          <span
            className="font-display block max-w-full break-words text-[clamp(2.2rem,6.4vw,3.9rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.045em]"
            style={{ color: '#fff', textShadow: '0 2px 22px rgba(0,0,0,0.45)' }}
          >
            {shown.plate.figure}
          </span>
          <span
            className="font-mono-label mt-3 max-w-[24ch] text-[10px] uppercase leading-snug tracking-[0.16em]"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {shown.plate.caption}
          </span>
        </span>
      )}

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
        <CropLabel color={category.accent}>{category.index}</CropLabel>

        <h3
          className="font-display mt-2 text-[clamp(2.4rem,9vw,3.6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em] lg:text-[clamp(2rem,4.4vw,4.5rem)]"
          style={{ color: '#fff', textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
        >
          {category.label}
        </h3>

        <p
          className="font-mono-label mt-2.5 text-[10px] uppercase tracking-[0.16em]"
          style={{ color: 'rgba(255,255,255,0.74)' }}
        >
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
            className="font-mono-label mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em]"
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
      <div className="mb-7 px-2">
        <CropLabel>Select</CropLabel>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
          <h2
            className="font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold uppercase tracking-[-0.03em]"
            style={{ color: 'var(--paper)' }}
          >
            Pick a room.
          </h2>
          <p
            className="font-mono-label text-[10px] uppercase tracking-[0.16em]"
            style={{ color: 'var(--paper-faint)' }}
          >
            Everything in each one, one click away
          </p>
        </div>
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
