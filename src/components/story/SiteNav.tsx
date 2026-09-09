'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/lib/story';

const secondary = [
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
];

/**
 * Persistent slim nav. The scroll story has no other way out, so this is the
 * only route to the résumé and the essays from the landing page.
 */
export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(8,8,10,0.72)', borderBottom: '1px solid var(--rule)' }}
    >
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-mono-label text-[10px] uppercase tracking-[0.18em] hover:underline"
          style={{ color: 'var(--paper)' }}
        >
          Charlie Vargas
        </Link>

        <span aria-hidden="true" className="hidden h-3 w-px sm:block" style={{ backgroundColor: 'var(--rule)' }} />

        <ul className="flex list-none flex-wrap items-center gap-x-4 gap-y-1">
          {categories.map((c) => {
            const current = pathname === c.href;
            return (
              <li key={c.key}>
                <Link
                  href={c.href}
                  aria-current={current ? 'page' : undefined}
                  className="font-mono-label text-[10px] uppercase tracking-[0.16em] transition-colors hover:underline"
                  style={{ color: current ? c.accent : 'var(--paper-dim)' }}
                >
                  {c.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="ml-auto flex list-none flex-wrap items-center gap-x-4 gap-y-1">
          {secondary.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="font-mono-label text-[10px] uppercase tracking-[0.16em] hover:underline"
                style={{ color: pathname === item.href ? 'var(--paper)' : 'var(--paper-dim)' }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Charles-Vargas-Data.pdf"
              download
              className="font-mono-label text-[10px] uppercase tracking-[0.16em] hover:underline"
              style={{ color: 'var(--paper)' }}
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
