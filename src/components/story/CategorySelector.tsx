'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Category, Work } from '@/lib/story';

/**
 * Stand-in frame for work we do not have imagery for yet (all of Dance,
 * two thirds of Design). Sized to match a real thumbnail so dropping the
 * photograph in later changes nothing about the layout.
 */
function PendingFrame({ work, accent }: { work: Work; accent: string }) {
  return (
    <span
      className="flex h-full w-full flex-col justify-end p-2.5"
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${accent}14 0px, ${accent}14 1px, transparent 1px, transparent 7px)`,
        backgroundColor: 'var(--ink-raised)',
      }}
    >
      <span className="text-[9px] font-medium uppercase tracking-[0.16em]" style={{ color: accent }}>
        Photo pending
      </span>
      <span className="mt-0.5 line-clamp-2 text-[11px] leading-tight" style={{ color: 'var(--paper-dim)' }}>
        {work.title}
      </span>
    </span>
  );
}

function WorkThumb({ work, accent }: { work: Work; accent: string }) {
  return (
    <figure className="m-0 min-w-0 flex-1">
      <span
        className="block h-[76px] overflow-hidden rounded-sm border sm:h-[92px]"
        style={{ borderColor: 'var(--rule)' }}
      >
        {work.image ? (
          <Image
            src={work.image}
            alt=""
            width={480}
            height={270}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <PendingFrame work={work} accent={accent} />
        )}
      </span>
      <figcaption className="mt-2 text-[11px] leading-tight" style={{ color: 'var(--paper-faint)' }}>
        <span className="block font-medium" style={{ color: 'var(--paper-dim)' }}>
          {work.title}
        </span>
        {work.context}
      </figcaption>
    </figure>
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
  return (
    <Link
      href={category.href}
      onMouseEnter={onActivate}
      onMouseLeave={onRelease}
      onFocus={onActivate}
      onBlur={onRelease}
      className="group relative flex cursor-pointer flex-col justify-between border-t px-5 py-7 transition-[flex-grow,opacity] duration-500 ease-out lg:border-l lg:border-t-0 lg:px-7 lg:py-10"
      style={{
        borderColor: 'var(--rule)',
        // flex-basis: 0 so flex-grow drives the whole width, not just leftover space.
        flexGrow: active ? 1.75 : 1,
        flexBasis: 0,
        minWidth: 0,
        opacity: dimmed ? 0.45 : 1,
      }}
      aria-label={`${category.label} — ${category.line}`}
    >
      {/*
        Accent rule. Scales in on activation; the global prefers-reduced-motion rule
        zeroes the transition so it simply appears.
      */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left transition-transform duration-500 ease-out lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[2px] lg:origin-top"
        style={{
          backgroundColor: category.accent,
          transform: active ? 'none' : 'scaleX(0)',
        }}
      />

      <div>
        <p className="text-[11px] font-medium tracking-[0.2em]" style={{ color: category.accent }}>
          {category.index}
        </p>
        <h3
          className="font-display mt-3 text-[clamp(2.2rem,7vw,4rem)] font-bold leading-[0.95] tracking-[-0.03em]"
          style={{ color: 'var(--paper)' }}
        >
          {category.label}
        </h3>
        <p className="mt-2 text-[13px]" style={{ color: 'var(--paper-dim)' }}>
          {category.line}
        </p>
      </div>

      {/*
        Thumbnails are always rendered so touch and keyboard users get them too;
        on large screens they fade up as the panel becomes active.
      */}
      <div className="story-reveal mt-8 lg:mt-10" data-active={active}>
        <p className="mb-5 max-w-sm text-[13px] leading-relaxed" style={{ color: 'var(--paper-faint)' }}>
          {category.blurb}
        </p>
        {/* Three at most here; the category page carries the full list. */}
        <div className="flex gap-2.5">
          {category.works.slice(0, 3).map((work) => (
            <WorkThumb key={work.title} work={work} accent={category.accent} />
          ))}
        </div>
        <p
          className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em]"
          style={{ color: category.accent }}
        >
          See all {category.label.toLowerCase()}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}

export default function CategorySelector({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="pick" className="min-h-dvh px-6 pb-16 pt-24 sm:px-10 lg:px-16">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
        <h2
          className="font-display text-[clamp(1.8rem,5vw,3rem)] font-semibold tracking-[-0.03em]"
          style={{ color: 'var(--paper)' }}
        >
          Pick a room.
        </h2>
        <p className="text-[13px]" style={{ color: 'var(--paper-faint)' }}>
          Three categories. Everything in each one, one click away.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:min-h-[62vh]">
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
