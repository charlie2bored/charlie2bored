import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
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
          Error 404
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">This page isn&apos;t here</h1>
        <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          The link may be outdated, or something was typed wrong. Want to pick up back on the home page?
        </p>
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center justify-center rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
