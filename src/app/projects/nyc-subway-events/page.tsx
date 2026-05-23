import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NYC Subway Events Case Study',
  description:
    'A detector that finds major NYC events (concerts, games, parades, marathons) directly from MTA hourly ridership, with no event calendar. 96.5% recall against 513 known 2024 events.',
  alternates: { canonical: '/projects/nyc-subway-events' },
  openGraph: {
    title: 'NYC Subway Events Case Study | Charlie Vargas',
  },
};

const facts: { label: string; value: string }[] = [
  { label: 'Role', value: 'Solo: data engineering, modeling, signature analysis' },
  { label: 'Timeline', value: 'Several weeks of evenings, spring 2026' },
  { label: 'Scope', value: 'Pipeline, baselines, ground-truth scraping, clustering, viz' },
  {
    label: 'Stack',
    value:
      'Python, pandas, NumPy, scikit-learn, SciPy, UMAP, holidays, beautifulsoup4, requests, matplotlib',
  },
];

export default function NycSubwayEventsCaseStudyPage() {
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
      <main id="main-content">
        <article className="pt-[140px] pb-[120px]">
          <header className="max-w-3xl mx-auto px-5 mb-12">
            <p
              className="text-sm uppercase tracking-[0.22em] mb-3 font-semibold"
              style={{ color: 'var(--text-secondary)' }}
            >
              Case study · 2026
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
              style={{ color: 'var(--text-color)' }}
            >
              NYC Subway Events from Ridership Data
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A detector that finds major NYC events (concerts, games, parades, marathons)
              directly from MTA hourly ridership, with no event calendar.
            </p>
          </header>

          <div className="max-w-3xl mx-auto px-5 mb-16">
            <div
              className="rounded-2xl overflow-hidden border-2"
              style={{ borderColor: 'var(--text-secondary)' }}
            >
              <div className="relative aspect-video w-full bg-neutral-900">
                <Image
                  src="/projects/nyc-subway-events.webp"
                  alt="Penn Station / MSG ridership during the 2024 Knicks vs Pacers Game 7, showing a sharp post-game spike above the event-aware baseline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://github.com/charlie2bored/nyc-subway-events-from-ridership-data"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-lg text-sm sm:text-base font-medium"
                style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
              >
                View source on GitHub
              </a>
            </div>
          </div>

          <section
            className="max-w-3xl mx-auto px-5 mb-20 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-b py-10"
            style={{ borderColor: 'var(--text-secondary)' }}
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <p
                  className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {fact.label}
                </p>
                <p className="text-base sm:text-lg" style={{ color: 'var(--text-color)' }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              What shipped
            </h2>
            <ul
              className="space-y-3 text-base sm:text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <li>A reproducible Python pipeline: ingest, baseline, anomaly, ground truth, match, fingerprint, viz.</li>
              <li>96.5% recall against 513 known 2024 events, up from 93.0% on the naive baseline.</li>
              <li>Found the 2024 World Series unprompted: Yankees vs Dodgers Game 4 on October 29 was the year&apos;s peak anomaly at +15,507 riders above baseline at Yankee Stadium.</li>
              <li>Five fingerprint dimensions per event (peak intensity, lead time, lag time, decay half-life, asymmetry).</li>
              <li>K-means clustering at k=6 with a Ward hierarchical cross-check; UMAP for 2D visualization only.</li>
              <li>NOAA Central Park weather join that splits 18 false negatives into weather-explained vs genuinely unexplained.</li>
              <li>Headline finding: venue shape dominates the signature more than the sport played in it.</li>
            </ul>
          </section>

          <footer
            className="max-w-2xl mx-auto px-5 pt-10 border-t flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between"
            style={{ borderColor: 'var(--text-secondary)' }}
          >
            <Link
              href="/projects"
              className="text-base sm:text-lg font-medium hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-color)' }}
            >
              ← All projects
            </Link>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/charlie2bored/nyc-subway-events-from-ridership-data"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-lg text-sm sm:text-base font-medium"
                style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
              >
                View source on GitHub
              </a>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
