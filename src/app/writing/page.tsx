import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { essays } from '@/lib/essays';
import { SUBSTACK_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Essays on transit, data, operations, and whatever else I’ve been chewing on.',
  alternates: { canonical: '/writing' },
  openGraph: {
    title: 'Writing | Charlie Vargas',
  },
};

export default function WritingIndexPage() {
  return (
    <div
      className="min-h-dvh transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <Navigation />
      <main id="main-content" className="pt-[140px] pb-[120px]">
        <header className="max-w-3xl mx-auto px-5 mb-16 text-center">
          <p
            className="text-sm uppercase tracking-[0.22em] mb-3 font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            Writing
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ color: 'var(--text-color)' }}
          >
            Essays
          </h1>
          <p
            className="text-xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Thoughts on data, transit, operations, and whatever else I’ve been chewing on.
          </p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 text-base font-medium underline underline-offset-4 hover:opacity-80"
            style={{ color: 'var(--text-color)' }}
          >
            Subscribe on Substack →
          </a>
        </header>

        <ul className="max-w-3xl mx-auto px-5 space-y-6">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <Link
                href={essay.href}
                className="group block p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: 'var(--bg-color)',
                  border: '2px solid var(--text-secondary)',
                }}
                aria-label={`Read essay: ${essay.title}`}
              >
                <div
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm uppercase tracking-wider mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{essay.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{essay.readingTime}</span>
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-3 leading-tight"
                  style={{ color: 'var(--text-color)' }}
                >
                  {essay.title}
                </h2>
                <p
                  className="text-base sm:text-lg leading-relaxed mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {essay.description}
                </p>
                <span
                  className="text-base font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  style={{ color: 'var(--text-color)' }}
                >
                  Read essay
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
              {essay.substackHref && (
                <a
                  href={essay.substackHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 ml-1 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Also on Substack →
                </a>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
