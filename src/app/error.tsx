'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <main
        id="main-content"
        className="max-w-xl mx-auto px-5 pb-24 pt-[calc(10rem+env(safe-area-inset-top,0px))]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-secondary)' }}>
          Something went wrong
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">We couldn&apos;t load this view</h1>
        <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          Sorry about that. You can retry, or go home and browse from there again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg px-8 py-4 font-semibold text-lg border-2 hover:opacity-80 transition-opacity"
            style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)' }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity text-center"
            style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
