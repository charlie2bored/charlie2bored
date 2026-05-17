import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Essays on transit, data, operations, and whatever else I’ve been chewing on.',
  alternates: { canonical: '/writing' },
  openGraph: {
    title: 'Writing | Charlie Vargas',
  },
};

type Essay = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
  href: string;
};

const essays: Essay[] = [
  {
    slug: 'paper-schedule',
    title: 'The Paper Schedule',
    date: 'May 2026',
    readingTime: '12 min read',
    description:
      'There’s a paper schedule on the wall of every train station in Tokyo, and the trains come when it says they will. The MTA has the money to do the same. What’s broken is who answers when they don’t.',
    href: '/writing/paper-schedule',
  },
];

export default function WritingIndexPage() {
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
      <article className="pt-[140px] pb-[120px]">
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
            </li>
          ))}
        </ul>
      </article>
      <Footer />
    </div>
  );
}
