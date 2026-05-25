import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NYC Subway Events Case Study',
  description:
    "A detector that recovers NYC's 2024 event calendar (Knicks, Rangers, Mets and Yankees games, MSG and Barclays concerts, the US Open, parades, NYE) directly from MTA hourly subway ridership, with no event calendar. 96.5% recall against 513 known 2024 events.",
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
      className="min-h-dvh transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
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
              A detector that recovers NYC’s 2024 event calendar (Knicks, Rangers, Mets and
              Yankees games, MSG and Barclays concerts, the US Open, parades, NYE) directly from
              MTA hourly subway ridership, with no event calendar. 96.5% recall against 513 known
              2024 events.
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
              Ingesting the data
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                The ingest stage downloads 2024 hourly ridership counts for five station complexes
                from the MTA’s Open Data. It downloads the ridership once and saves it locally as a
                Parquet file, so re-runs are fast and don’t depend on the MTA’s servers.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Building the baseline
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                The baseline is a table of 168 cells, one per hour of the week (24 hours × 7 days),
                holding the median ridership for each slot. Monday 1pm is a cell; Friday 10pm is a
                cell. The tables are split by season, because building one table for the whole year
                would blend low-ridership winter periods with high-ridership summer periods, and
                the result wouldn’t represent either accurately.
              </p>
              <p>
                The baseline is then refit. When an event is detected, the program flags a 3-hour
                window around it and rebuilds the baseline with those windows excluded, so “normal”
                is built only from quiet, non-event days. Without this, frequent events at a venue
                get learned into the baseline as if they were normal.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Detecting anomalies
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                The program flags an unusual hour two ways. The ratio flag triggers when ridership
                is at least 1.5× the baseline. The z-score flag measures how many standard
                deviations an hour sits above normal, calculated against the last four same-slot
                weeks (a rolling four-week window). The window is kept short so the comparison
                stays local in time and doesn’t average across genuinely different periods.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Validating against known events
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                The detector works only from ridership and never sees a calendar. A separate list
                of 513 known 2024 events is the answer key, used after detection to check whether
                the flagged anomalies line up with real events.
              </p>
              <p>
                That event list was built two ways. Structured, predictable sources were scraped:
                sports-reference has every game in clean tables, and setlist.fm offers an official
                API. Irregular events like parades, which happen only once or twice a year and
                follow no schedule, were curated by hand, because building a scraper for a handful
                of one-off events isn’t worth it.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Fingerprinting and clustering events
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                Each event is reduced to five features. Before clustering, the features are
                z-scored, putting all five on the same scale so a large-number feature doesn’t
                dominate the smaller ones.
              </p>
              <p>
                Events are then grouped with k-means. k-means builds whatever number of clusters
                it’s told to and can’t tell you whether that number was a good choice. Silhouette
                score is the grading tool: it measures how tight and well-separated the clusters
                are, higher being better. I swept k from 2 to 8 and compared silhouette scores.
              </p>
              <p>
                Silhouette favored k=2, but k=2 forces every indoor-arena event into a single
                bucket and hides the venue-versus-sport distinction the project was built to find.
                I used k=6 instead, which surfaces that structure, a deliberate trade of a higher
                metric for an answer to the actual question. I’m explicit about that trade. Ward
                hierarchical clustering was run as a cross-check on k-means, and UMAP was used
                only to visualize the data in 2D, never in the analysis itself, since collapsing
                five dimensions to two loses information.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Testing the findings
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                Differences between event types were checked with p-values. A small p-value means
                a measured difference is unlikely to be luck; a large one means luck can’t be
                ruled out. The Knicks-versus-Rangers peak intensity difference came back at p =
                0.0041: if there were no real difference, a gap that large would appear by chance
                only 0.4% of the time, so luck is a very weak explanation.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              What the refit actually did
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                The event-aware refit moved baseline cells in both directions. At MSG, early-evening
                hours rose and late-evening hours fell. The late hours fell because v1 had treated
                post-game exit crowds as normal ridership, inflating the baseline; v2 excludes
                those event hours, so “normal” reflects genuinely quiet nights. That correction is
                where most of the detection gain came from: once the late-evening baseline is
                accurate, a real game’s exit surge stands out clearly.
              </p>
            </div>
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
