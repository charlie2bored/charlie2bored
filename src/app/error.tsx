'use client';

import Link from 'next/link';
import { IconRefreshAlert } from '@tabler/icons-react';

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="min-h-dvh flex flex-col items-center justify-center gap-4 px-5 text-center"
      style={{ backgroundColor: 'var(--gd-bg)', fontFamily: "var(--font-dm), Roboto, Arial, sans-serif" }}
    >
      <IconRefreshAlert size={56} color="#9aa0a6" stroke={1.25} aria-hidden="true" />
      <h1 className="text-[17px] font-medium" style={{ color: 'var(--gd-text)' }}>
        Something went wrong
      </h1>
      <p className="max-w-md text-[14px] leading-relaxed" style={{ color: 'var(--gd-text-2)' }}>
        Drive couldn&apos;t load this view. You can retry, or go back to the folder.
      </p>
      <div className="mt-2 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full px-6 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#0b57d0' }}
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border px-6 py-2.5 text-[14px] font-medium transition-colors hover:bg-[var(--gd-surface)]"
          style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px', color: 'var(--gd-link)' }}
        >
          Back to Charlie Vargas
        </Link>
      </div>
    </div>
  );
}
