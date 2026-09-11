'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contact, copyright, downloads, navItems, owner } from '@/lib/nav';

function BracketLabel({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--rail-dim)' }}>
      <span aria-hidden="true">[</span>
      {children}
      <span aria-hidden="true">]</span>
    </span>
  );
}

/**
 * The dark navigation rail. Rendered inside the split hero and again inside
 * the summoned overlay, so it is a plain presentational component with no
 * animation of its own.
 */
export default function RailPanel({ onNavigate }: { onNavigate?: () => void }) {
  // The sections are anchors on the homepage; from anywhere else (a 404, say)
  // they need the page in front of them.
  const home = usePathname() === '/';
  return (
    <div className="flex h-full flex-col justify-between p-6 sm:p-8">
      <div>
        <div className="flex items-center gap-2.5">
          <Image
            src="/hero/avatar.png"
            alt=""
            width={128}
            height={128}
            aria-hidden="true"
            className="h-[26px] w-[26px] shrink-0 object-contain"
          />
          <span className="text-[13px] font-medium tracking-[0.02em]" style={{ color: 'var(--rail-fg)' }}>
            {owner.name}
          </span>
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.1em]" style={{ color: 'var(--rail-dim)' }}>
          {owner.role}
        </p>

        <nav aria-label="Primary" className="mt-10 sm:mt-14">
          <ul className="list-none space-y-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={home || !item.href.startsWith('#') ? item.href : `/${item.href}`}
                  onClick={onNavigate}
                  className="inline-block text-[clamp(1.5rem,2.4vw,2rem)] font-light leading-[1.35] transition-opacity hover:opacity-60"
                  style={{ color: 'var(--rail-fg)' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-10">
        <BracketLabel>Contact info</BracketLabel>
        <ul className="mt-2.5 list-none space-y-0.5 text-[12px]" style={{ color: 'var(--rail-fg)' }}>
          <li>
            <a href={`mailto:${contact.email}`} className="underline underline-offset-2 hover:opacity-60">
              {contact.email}
            </a>
          </li>
          <li>{contact.phone}</li>
          <li>{contact.social}</li>
        </ul>

        <div className="mt-6">
          <BracketLabel>Downloads</BracketLabel>
          <ul className="mt-2.5 list-none space-y-0.5 text-[12px]" style={{ color: 'var(--rail-fg)' }}>
            {downloads.map((d) => (
              <li key={d.href}>
                <a href={d.href} download={d.download} className="hover:opacity-60">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-[10px] uppercase tracking-[0.1em]" style={{ color: 'var(--rail-dim)' }}>
          {copyright}
        </p>
      </div>
    </div>
  );
}
