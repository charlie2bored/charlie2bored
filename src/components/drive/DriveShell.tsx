'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  IconAddressBook,
  IconBriefcase,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconCode,
  IconFileText,
  IconFileTypePdf,
  IconFolder,
  IconGridDots,
  IconHelp,
  IconInfoCircle,
  IconLayoutGrid,
  IconList,
  IconMasksTheater,
  IconPalette,
  IconSchool,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';
import type { DriveIcon, DriveItem } from '@/lib/drive';

const ICONS: Record<DriveIcon, typeof IconFolder> = {
  folder: IconFolder,
  chart: IconChartBar,
  doc: IconFileText,
  pdf: IconFileTypePdf,
  contact: IconAddressBook,
  briefcase: IconBriefcase,
  masks: IconMasksTheater,
  school: IconSchool,
  code: IconCode,
  palette: IconPalette,
};

export type Crumb = { label: string; href?: string };

function ItemIcon({ item, size = 18 }: { item: DriveItem; size?: number }) {
  const Icon = ICONS[item.icon];
  return <Icon size={size} color={item.color} stroke={1.75} aria-hidden="true" className="shrink-0" />;
}

function OwnerBadge() {
  return (
    <span
      title="Charlie Vargas"
      className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full text-[11px] font-medium text-white"
      style={{ backgroundColor: '#0b57d0' }}
    >
      CV
    </span>
  );
}

function ItemLink({
  item,
  className,
  children,
}: {
  item: DriveItem;
  className?: string;
  children: React.ReactNode;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        className={className}
        onClick={(e) => e.stopPropagation()}
        {...(item.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={(e) => e.stopPropagation()}>
      {children}
    </Link>
  );
}

export default function DriveShell({
  crumbs,
  tagline,
  items,
}: {
  crumbs: Crumb[];
  tagline?: string;
  items: DriveItem[];
}) {
  const router = useRouter();
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [selected, setSelected] = useState<DriveItem | null>(null);

  const current = crumbs[crumbs.length - 1];

  const activate = (item: DriveItem) => {
    if (item.kind === 'folder') {
      router.push(item.href);
      return;
    }
    setSelected((prev) => (prev?.name === item.name ? null : item));
  };

  return (
    <div
      className="min-h-dvh flex flex-col"
      style={{ backgroundColor: '#f8fafd', fontFamily: "var(--font-dm), Roboto, Arial, sans-serif" }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="flex items-center gap-3 px-4 py-2">
        <Link href="/" className="flex min-w-[86px] items-center gap-2" aria-label="Charlie Vargas, home">
          <svg width="26" height="24" viewBox="0 0 24 22" aria-hidden="true">
            <path d="M8.2 1h7.6l8 14h-7.6z" fill="#FFCF63" />
            <path d="M8.2 1L0.2 15l3.8 6.6 8-14z" fill="#11A861" />
            <path d="M4 21.6h16l3.8-6.6H7.8z" fill="#2684FC" />
          </svg>
          <span className="text-[19px]" style={{ color: '#5f6368' }}>
            Drive
          </span>
        </Link>
        <div
          className="hidden sm:flex max-w-[430px] flex-1 items-center gap-2.5 rounded-3xl px-4 py-2"
          style={{ backgroundColor: '#e9eef6' }}
        >
          <IconSearch size={16} color="#444746" stroke={2} aria-hidden="true" />
          <span className="text-[13px]" style={{ color: '#444746' }}>
            Search in Charlie&rsquo;s drive
          </span>
        </div>
        <div className="ml-auto flex items-center gap-3.5" style={{ color: '#444746' }}>
          <IconHelp size={19} stroke={1.75} aria-hidden="true" className="hidden sm:block" />
          <IconSettings size={19} stroke={1.75} aria-hidden="true" className="hidden sm:block" />
          <IconGridDots size={19} stroke={1.75} aria-hidden="true" className="hidden sm:block" />
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: '#5f6368' }}
            title="Viewing as guest"
          >
            ?
          </div>
        </div>
      </header>

      <main
        id="main-content"
        className="mx-2 flex flex-1 flex-col rounded-t-2xl bg-white px-4 pb-5 pt-4 sm:px-5"
      >
        <div className="flex flex-wrap items-center gap-1">
          {crumbs.slice(0, -1).map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-[17px] hover:underline sm:text-[18px]"
                  style={{ color: '#444746' }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[17px] sm:text-[18px]" style={{ color: '#444746' }}>
                  {crumb.label}
                </span>
              )}
              <IconChevronRight size={15} color="#444746" stroke={2} aria-hidden="true" />
            </span>
          ))}
          <h1 className="text-[17px] font-medium sm:text-[18px]" style={{ color: '#1f1f1f' }}>
            {current.label}
          </h1>
          <IconChevronDown size={15} color="#444746" stroke={2} aria-hidden="true" className="ml-0.5" />

          <span
            className="ml-auto inline-flex overflow-hidden rounded-2xl border"
            style={{ borderColor: '#c4c7c5', borderWidth: '0.5px' }}
            role="group"
            aria-label="View options"
          >
            <button
              type="button"
              onClick={() => setView('list')}
              aria-pressed={view === 'list'}
              aria-label="List view"
              className="flex items-center gap-1 border-none px-3 py-1.5"
              style={{ backgroundColor: view === 'list' ? '#c2e7ff' : '#fff' }}
            >
              {view === 'list' && <IconCheck size={13} color="#001d35" stroke={2.5} aria-hidden="true" />}
              <IconList size={15} color={view === 'list' ? '#001d35' : '#444746'} stroke={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setView('grid')}
              aria-pressed={view === 'grid'}
              aria-label="Grid view"
              className="flex items-center gap-1 border-l px-3 py-1.5"
              style={{
                backgroundColor: view === 'grid' ? '#c2e7ff' : '#fff',
                borderColor: '#c4c7c5',
                borderLeftWidth: '0.5px',
              }}
            >
              {view === 'grid' && <IconCheck size={13} color="#001d35" stroke={2.5} aria-hidden="true" />}
              <IconLayoutGrid size={15} color={view === 'grid' ? '#001d35' : '#444746'} stroke={2} aria-hidden="true" />
            </button>
          </span>
          <IconInfoCircle size={17} color="#444746" stroke={1.75} aria-hidden="true" className="ml-2.5" />
        </div>

        {tagline ? (
          <p className="mb-2.5 mt-1 text-xs" style={{ color: '#444746' }}>
            {tagline}
          </p>
        ) : (
          <div className="mt-1.5" />
        )}

        <div className="mb-1.5 flex flex-wrap gap-2">
          {['Type', 'People', 'Modified', 'Source'].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-lg border bg-white px-3 py-1 text-[13px]"
              style={{ borderColor: '#c4c7c5', borderWidth: '0.5px', color: '#444746' }}
            >
              {chip}
              <IconChevronDown size={13} stroke={2} aria-hidden="true" />
            </span>
          ))}
        </div>

        {view === 'list' ? (
          <table className="w-full table-fixed border-collapse text-[13px]">
            <thead>
              <tr className="text-left" style={{ color: '#444746' }}>
                <th
                  className="w-[60%] border-b py-2 pl-2 pr-2 font-medium sm:w-[50%]"
                  style={{ borderColor: '#e0e3e1', borderBottomWidth: '0.5px' }}
                >
                  Name
                </th>
                <th
                  className="hidden w-[11%] border-b px-1.5 py-2 font-medium sm:table-cell"
                  style={{ borderColor: '#e0e3e1', borderBottomWidth: '0.5px' }}
                >
                  Owner
                </th>
                <th
                  className="w-[40%] border-b px-1.5 py-2 font-medium sm:w-[26%]"
                  style={{ borderColor: '#e0e3e1', borderBottomWidth: '0.5px' }}
                >
                  Last modified
                </th>
                <th
                  className="hidden w-[13%] border-b px-1.5 py-2 font-medium sm:table-cell"
                  style={{ borderColor: '#e0e3e1', borderBottomWidth: '0.5px' }}
                >
                  Size
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const isSelected = selected?.name === item.name;
                return (
                  <tr
                    key={item.name}
                    id={item.anchorId}
                    onClick={() => activate(item)}
                    className="cursor-pointer scroll-mt-24 transition-colors"
                    style={{ backgroundColor: isSelected ? '#c2e7ff66' : undefined }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = '#f8fafd';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = '';
                    }}
                  >
                    <td
                      className="border-b py-2 pl-2 pr-2"
                      style={{ borderColor: '#f1f3f4', borderBottomWidth: '0.5px' }}
                    >
                      <span className="flex items-center gap-2.5 overflow-hidden">
                        <ItemIcon item={item} size={17} />
                        <ItemLink
                          item={item}
                          className="truncate font-medium hover:underline"
                        >
                          <span style={{ color: '#1f1f1f' }}>{item.name}</span>
                        </ItemLink>
                      </span>
                    </td>
                    <td
                      className="hidden border-b px-1.5 py-1.5 sm:table-cell"
                      style={{ borderColor: '#f1f3f4', borderBottomWidth: '0.5px' }}
                    >
                      <OwnerBadge />
                    </td>
                    <td
                      className="truncate border-b px-1.5 py-2"
                      style={{ borderColor: '#f1f3f4', borderBottomWidth: '0.5px', color: '#444746' }}
                    >
                      {item.modified}
                    </td>
                    <td
                      className="hidden border-b px-1.5 py-2 sm:table-cell"
                      style={{ borderColor: '#f1f3f4', borderBottomWidth: '0.5px', color: '#444746' }}
                    >
                      {item.size}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <ul className="grid list-none grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <li key={item.name} id={item.anchorId} className="scroll-mt-24">
                <button
                  type="button"
                  onClick={() => activate(item)}
                  className="w-full cursor-pointer rounded-xl border bg-white p-3 text-left transition-colors hover:bg-[#f8fafd]"
                  style={{ borderColor: '#dadce0', borderWidth: '0.5px' }}
                >
                  <span
                    className="mb-2 flex h-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#f8fafd' }}
                  >
                    <ItemIcon item={item} size={28} />
                  </span>
                  <span className="block truncate text-xs font-medium" style={{ color: '#1f1f1f' }}>
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-[11px]" style={{ color: '#444746' }}>
                    {item.modified}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {selected && (
          <div
            className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 border-t pt-2.5 text-[13px]"
            style={{ borderColor: '#e0e3e1', borderTopWidth: '0.5px', color: '#1f1f1f' }}
          >
            <span className="flex items-center gap-1.5 font-medium">
              <ItemIcon item={selected} size={15} />
              {selected.name}
            </span>
            <span style={{ color: '#444746' }}>— {selected.info}</span>
            <ItemLink
              item={selected}
              className="font-medium hover:underline"
            >
              <span style={{ color: '#0b57d0' }}>Open →</span>
            </ItemLink>
          </div>
        )}
      </main>
    </div>
  );
}
