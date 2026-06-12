'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { recommendedSearches, searchIndex, type SearchEntry } from '@/lib/drive';
import { ICONS } from '@/components/drive/icons';
import { useEggs } from '@/components/drive/eggs/EggsProvider';
import { matchSearchEgg, type SearchEgg } from '@/lib/eggs';

function ResultRow({ entry, onPick }: { entry: SearchEntry; onPick: () => void }) {
  const Icon = ICONS[entry.icon];
  const inner = (
    <>
      <Icon size={16} color={entry.color} stroke={1.75} aria-hidden="true" className="shrink-0" />
      <span className="truncate text-[13px] font-medium" style={{ color: 'var(--gd-text)' }}>
        {entry.name}
      </span>
      <span className="ml-auto shrink-0 text-[11px]" style={{ color: 'var(--gd-text-2)' }}>
        {entry.location}
      </span>
    </>
  );
  const className =
    'flex w-full items-center gap-2.5 px-4 py-2 text-left transition-colors hover:bg-[var(--gd-bg)]';
  if (entry.external) {
    return (
      <a href={entry.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onPick}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={entry.href} className={className} onClick={onPick}>
      {inner}
    </Link>
  );
}

function EggResult({ egg, onDone }: { egg: SearchEgg; onDone: () => void }) {
  const router = useRouter();
  const { fireConfetti, openPanel } = useEggs();
  const rowClass =
    'flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] font-medium transition-colors hover:bg-[var(--gd-bg)]';

  if (egg.action.kind === 'confetti-contact') {
    return (
      <button
        type="button"
        className={rowClass}
        style={{ color: 'var(--gd-link)' }}
        onClick={() => {
          fireConfetti();
          onDone();
          router.push('/about#contact');
        }}
      >
        🎉 {egg.label}
      </button>
    );
  }
  if (egg.action.kind === 'bored-toy') {
    return (
      <button
        type="button"
        className={rowClass}
        style={{ color: 'var(--gd-link)' }}
        onClick={() => {
          onDone();
          openPanel('bored');
        }}
      >
        {egg.label} →
      </button>
    );
  }
  if (egg.action.kind === 'profile-card') {
    return (
      <div className="flex items-start gap-3 px-4 py-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-medium text-white"
          style={{ backgroundColor: '#0b57d0' }}
        >
          CV
        </span>
        <div className="min-w-0 text-[13px]">
          <p className="font-medium" style={{ color: 'var(--gd-text)' }}>
            Charlie Vargas
          </p>
          <p style={{ color: 'var(--gd-text-2)' }}>
            BI and operations analyst · New York City, NY · Owner of this drive
          </p>
          <span className="mt-1 flex gap-4">
            <Link href="/about" className="font-medium hover:underline" style={{ color: 'var(--gd-link)' }} onClick={onDone}>
              README.md
            </Link>
            <a href="/Charles-Vargas-Data.pdf" download className="font-medium hover:underline" style={{ color: 'var(--gd-link)' }} onClick={onDone}>
              Resume.pdf
            </a>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 px-4 py-3 text-[13px]">
      <span aria-hidden="true">🎮</span>
      <div className="min-w-0">
        <p className="font-medium" style={{ color: 'var(--gd-text)' }}>
          {egg.action.label}
        </p>
        <p style={{ color: 'var(--gd-text-2)' }}>{egg.action.note}</p>
      </div>
      {egg.action.href ? (
        <a
          href={egg.action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 font-medium hover:underline"
          style={{ color: 'var(--gd-link)' }}
          onClick={onDone}
        >
          Open →
        </a>
      ) : (
        <span
          className="ml-auto shrink-0 rounded-lg border px-2 py-0.5 text-[11px]"
          style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px', color: 'var(--gd-text-2)' }}
        >
          coming soon
        </span>
      )}
    </div>
  );
}

export default function DriveSearch() {
  const router = useRouter();
  const { settings, fireConfetti, openPanel } = useEggs();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const all = searchIndex();
  const q = query.trim().toLowerCase();
  const egg = q ? matchSearchEgg(q) : undefined;
  const results = q
    ? all.filter((e) => e.name.toLowerCase().includes(q)).slice(0, 7)
    : recommendedSearches
        .map((name) => all.find((e) => e.name === name))
        .filter((e): e is SearchEntry => Boolean(e));

  const close = () => setOpen(false);

  const fireEgg = (matched: SearchEgg) => {
    if (matched.action.kind === 'confetti-contact') {
      fireConfetti();
      close();
      router.push('/about#contact');
    } else if (matched.action.kind === 'bored-toy') {
      close();
      openPanel('bored');
    }
  };

  return (
    <div
      ref={boxRef}
      className="relative hidden max-w-[430px] flex-1 sm:block"
      onBlur={(e) => {
        if (!boxRef.current?.contains(e.relatedTarget as Node)) close();
      }}
    >
      <div
        className="flex items-center gap-2.5 px-4 py-2"
        style={{
          backgroundColor: open ? 'var(--gd-surface)' : 'var(--gd-pill)',
          borderRadius: open ? '16px 16px 0 0' : '24px',
          border: open ? '0.5px solid var(--gd-border)' : '0.5px solid transparent',
          borderBottom: open ? 'none' : undefined,
        }}
      >
        <IconSearch size={16} color="var(--gd-text-2)" stroke={2} aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              close();
              e.currentTarget.blur();
            }
            if (e.key === 'Enter') {
              if (egg) {
                fireEgg(egg);
                return;
              }
              if (results[0]) {
                close();
                if (results[0].external) {
                  window.open(results[0].href, '_blank', 'noopener,noreferrer');
                } else {
                  router.push(results[0].href);
                }
              }
            }
          }}
          placeholder={settings.recruiterMode ? 'Search in Charlie’s drive' : 'Procrastinate in Charlie’s drive'}
          aria-label="Search in Charlie’s drive"
          role="combobox"
          aria-expanded={open}
          aria-controls="drive-search-results"
          className="min-h-0 w-full border-none bg-transparent text-[13px] outline-none"
          style={{ color: 'var(--gd-text)' }}
        />
      </div>
      {open && (
        <div
          id="drive-search-results"
          className="absolute left-0 right-0 top-full z-20 overflow-hidden rounded-b-2xl bg-[var(--gd-surface)] pb-1 shadow-lg"
          style={{ border: '0.5px solid var(--gd-border)', borderTop: 'none' }}
        >
          {!q && (
            <p
              className="px-4 pb-1 pt-2 text-[11px] font-medium uppercase tracking-[0.08em]"
              style={{ color: 'var(--gd-text-2)' }}
            >
              Suggested
            </p>
          )}
          {egg ? (
            <EggResult egg={egg} onDone={close} />
          ) : results.length > 0 ? (
            results.map((entry) => <ResultRow key={`${entry.location}/${entry.name}`} entry={entry} onPick={close} />)
          ) : (
            <p className="px-4 py-3 text-[13px]" style={{ color: 'var(--gd-text-2)' }}>
              No results in Charlie&rsquo;s drive
            </p>
          )}
        </div>
      )}
    </div>
  );
}
