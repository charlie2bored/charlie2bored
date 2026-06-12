'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { recommendedSearches, searchIndex, type SearchEntry } from '@/lib/drive';
import { ICONS } from '@/components/drive/icons';

function ResultRow({ entry, onPick }: { entry: SearchEntry; onPick: () => void }) {
  const Icon = ICONS[entry.icon];
  const inner = (
    <>
      <Icon size={16} color={entry.color} stroke={1.75} aria-hidden="true" className="shrink-0" />
      <span className="truncate text-[13px] font-medium" style={{ color: '#1f1f1f' }}>
        {entry.name}
      </span>
      <span className="ml-auto shrink-0 text-[11px]" style={{ color: '#444746' }}>
        {entry.location}
      </span>
    </>
  );
  const className =
    'flex w-full items-center gap-2.5 px-4 py-2 text-left transition-colors hover:bg-[#f8fafd]';
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

export default function DriveSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const all = searchIndex();
  const q = query.trim().toLowerCase();
  const results = q
    ? all.filter((e) => e.name.toLowerCase().includes(q)).slice(0, 7)
    : recommendedSearches
        .map((name) => all.find((e) => e.name === name))
        .filter((e): e is SearchEntry => Boolean(e));

  const close = () => setOpen(false);

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
          backgroundColor: open ? '#fff' : '#e9eef6',
          borderRadius: open ? '16px 16px 0 0' : '24px',
          border: open ? '0.5px solid #dadce0' : '0.5px solid transparent',
          borderBottom: open ? 'none' : undefined,
        }}
      >
        <IconSearch size={16} color="#444746" stroke={2} aria-hidden="true" />
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
            if (e.key === 'Enter' && results[0]) {
              close();
              if (results[0].external) {
                window.open(results[0].href, '_blank', 'noopener,noreferrer');
              } else {
                router.push(results[0].href);
              }
            }
          }}
          placeholder="Search in Charlie’s drive"
          aria-label="Search in Charlie’s drive"
          role="combobox"
          aria-expanded={open}
          aria-controls="drive-search-results"
          className="min-h-0 w-full border-none bg-transparent text-[13px] outline-none"
          style={{ color: '#1f1f1f' }}
        />
      </div>
      {open && (
        <div
          id="drive-search-results"
          className="absolute left-0 right-0 top-full z-20 overflow-hidden rounded-b-2xl bg-white pb-1 shadow-lg"
          style={{ border: '0.5px solid #dadce0', borderTop: 'none' }}
        >
          {!q && (
            <p
              className="px-4 pb-1 pt-2 text-[11px] font-medium uppercase tracking-[0.08em]"
              style={{ color: '#444746' }}
            >
              Suggested
            </p>
          )}
          {results.length > 0 ? (
            results.map((entry) => <ResultRow key={`${entry.location}/${entry.name}`} entry={entry} onPick={close} />)
          ) : (
            <p className="px-4 py-3 text-[13px]" style={{ color: '#444746' }}>
              No results in Charlie&rsquo;s drive
            </p>
          )}
        </div>
      )}
    </div>
  );
}
