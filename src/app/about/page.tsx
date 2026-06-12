import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Skills from '@/components/Skills';
import Collaboration from '@/components/Collaboration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getDataResumeUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Charlie Vargas: BI and operations analyst in New York. Power BI, SQL, and Python. Skills, references, and how to reach me.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Charlie Vargas',
  },
};

export default function AboutPage() {
  const dataResumeUrl = getDataResumeUrl();

  return (
    <div
      className="min-h-dvh transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <Navigation />
      <main id="main-content" className="pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <header className="max-w-5xl mx-auto px-4 sm:px-5 pt-8 md:pt-12">
          <p
            className="text-sm uppercase tracking-[0.22em] mb-3 font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            About
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ color: 'var(--text-color)' }}
          >
            Charlie Vargas
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            I&apos;m a BI and operations analyst. I work mostly in Power BI, SQL, and Python. The
            last 2 years of my BI internship taught me what a working BI operation actually does,
            automating KPI dashboards across 20 schools, building enrollment forecasts, and turning
            messy data into something leadership can act on.
          </p>
          <p className="text-sm sm:text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
            NYC, NJ &amp; CT · Hybrid local or remote
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-base sm:text-lg font-medium">
            <a
              href={dataResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
              {...(dataResumeUrl.startsWith('/') ? { download: true } : {})}
            >
              Resume
            </a>
            <Link
              href="/experience"
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
            >
              Experience →
            </Link>
          </div>
        </header>

        <Skills />
        <Collaboration />
        <div id="contact" style={{ scrollMarginTop: '120px' }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
