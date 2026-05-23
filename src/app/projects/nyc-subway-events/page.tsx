import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NYC Subway Events Case Study',
  description:
    'How I built a detector that finds major NYC events (concerts, games, parades, marathons) from MTA hourly ridership alone, with no event calendar. Brief, decisions, the k=2 vs k=6 tradeoff, weather confounders, and what I would do differently.',
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
    value: 'Python, pandas, NumPy, scikit-learn, SciPy, UMAP, requests, matplotlib',
  },
];

const decisions: { title: string; body: string }[] = [
  {
    title: 'A seasonal baseline, not a flat average',
    body: 'A Tuesday rush hour in February has nothing to do with a Saturday afternoon in July. I built per-station baselines as hour-of-day x day-of-week medians, holiday-aware. Anything that beat the baseline by enough standard deviations on a 28-day rolling z-score got flagged. The shape of the baseline is half the work; if you get this wrong, every Friday night looks like an event.',
  },
  {
    title: 'Refit the baseline with known events excluded',
    body: 'The first pass landed at 93% recall. When I looked at the misses, most were at MSG. The reason was obvious in retrospect: Knicks and Rangers play so often that their ridership had been learned into the baseline. The detector was being asked to spot events against a baseline that already expected them. I excluded confirmed event windows and rebuilt. Recall jumped to 96.5%. 31 of 36 false negatives were at MSG, and 23 of them came back as true positives after the refit. That contamination loop is the single biggest improvement in the project.',
  },
  {
    title: 'Five fingerprint dimensions, not one excess-ridership number',
    body: 'Two events can move the same total riders and look completely different. A Knicks game spikes hard and decays fast. A parade has people arriving six hours early and leaving in thirty minutes. Reducing each event to a single number throws away the shape. I extracted five features per event: peak intensity, lead time, lag time, decay half-life, and pre/post asymmetry. The shape is what tells Knicks from Rangers from a U2 show.',
  },
  {
    title: 'k=6 clustering over k=2, even though the silhouette said k=2',
    body: 'The silhouette score peaked at k=2 at 0.55, a clean macro split between "fast indoor arena" and "slow outdoor stadium / parade." But k=2 throws away every interesting distinction inside those buckets. I went with k=6 because it produced the taxonomy that actually answered the question I was asking: Knicks, Rangers, and MSG concerts share a cluster (venue dominates sport), Yankees day games and night games separate cleanly (33.5x baseline at night vs 11.8x by day, p < 0.001), parades form their own asymmetric cluster. The silhouette favors macro splits because the big clusters dominate the score. I traded a higher metric for a more meaningful answer and I am explicit about that trade in the docs.',
  },
  {
    title: 'NOAA weather to separate "model missed" from "city stayed home"',
    body: 'A blizzard tanks ridership across every station. Even a sold-out game produces a sub-baseline anomaly when the rest of the city is iced in. Without weather context, those days look like model failures. I joined NOAA Central Park daily summaries and tagged days with more than an inch of rain, more than an inch of snow, or a max under 20F as weather-suppressed. That is how the 18 false negatives split between "weather-explained" and "genuinely unexplained" — different bucket, different debugging path.',
  },
];

const cuts: { title: string; body: string }[] = [
  {
    title: 'A real precision number',
    body: 'I report recall but not precision. The honest reason is that I do not have a confirmed-non-event ground truth at every flagged hour. The 3,812 unexplained anomaly hours are probably mostly Citi Field concerts I never scraped, but some of them are noise. Reporting precision the right way needs scraping every Citi Field show and every minor venue, then re-running the match. That is a real follow-up, not done here.',
  },
  {
    title: 'Multi-year cross-validation',
    body: 'I worked from 2024 only. One year gives me one baseline and zero ability to cross-validate seasonal effects against 2023 or 2025. The model could be overfitting to 2024-specific patterns (the election, a specific weather year, a specific concert lineup) and I cannot tell. A multi-year pipeline is in scope for the next pass.',
  },
  {
    title: 'Citi Field and minor-venue concert scraping',
    body: 'My ground truth covers MSG and Barclays. The unexplained pile is dominated by Citi Field concerts I never had labels for. The fix is more scraper, not more model. I left it on the table because the headline finding (venue dominates signature) did not need it, and the cost-benefit on building more scrapers was not there yet.',
  },
];

const differently: { title: string; body: string }[] = [
  {
    title: 'Replace the decay half-life feature at Penn Station',
    body: 'At low-traffic venues like Yankee Stadium and Barclays, the exponential decay fit on post-event ridership is clean. At Penn Station / MSG, the post-event signal is buried in regular commuter flow. 96% of MSG concerts failed the exponential fit and fell back to a linear estimate or an imputed median. The feature works for half the data and not the other half. Next time I would compute decay differently for high-traffic venues — ratio to a same-hour baseline window — or skip the feature there entirely.',
  },
  {
    title: 'Expand the feature space',
    body: 'Five summary statistics per event compresses a lot. With richer features (say, hourly z-scores across the surrounding eight hours instead of summary stats) within-venue clustering would probably be cleaner. The 5-dimension space was the right starting point for interpretability, but it leaves real signal on the table.',
  },
  {
    title: 'Handle multi-night residencies as their own category',
    body: 'Phish and Billy Joel residencies at MSG run eight to ten consecutive nights. Even after the contamination fix, those nights still partially leak into the baseline because they happen so frequently. I would flag known residencies as a separate category and exclude the whole window from the baseline, not just individual nights.',
  },
  {
    title: 'Split Penn Station into its two real complexes',
    body: 'I aggregated the 1/2/3 line complex and the A/C/E line complex into one Penn Station anomaly. They are physically and operationally distinct — separate fareboxes, separate platforms, different surrounding street life. Separating them would untangle some of the residual MSG noise and let me model each complex against its own baseline.',
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
              This is a detector that finds major NYC events (concerts, games, parades, marathons)
              directly from MTA hourly ridership, with no event calendar of any kind. Below are the
              calls I made, the methodological tradeoff at the center of it, and the limitations I
              would address next.
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
              The question I gave myself
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                Can you detect a major NYC event purely from the subway turnstile data, with no
                event calendar to peek at? If you can, what does the signature look like, and what
                does it tell you about the event itself?
              </p>
              <p>
                The bet was simple. The MTA publishes hourly ridership for every station complex.
                Events leave a footprint: people travel toward the venue before, away from it
                after. If the footprint is consistent enough, you can find the event without being
                told it happened. The more interesting follow-up is what the shape of that
                footprint tells you about the venue, the crowd, and the sport.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              The data, briefly
            </h2>
            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: 'var(--text-color)' }}
            >
              <p>
                I used MTA hourly ridership for all of 2024, broken down by station complex. Five
                of those complexes do most of the work in this analysis: Penn Station / MSG, Yankee
                Stadium, Citi Field, Barclays Center, and the broader Midtown ring.
              </p>
              <p>
                Ground truth came from scraped MLB, NBA, and NHL schedules, MSG concert listings,
                Barclays event calendars, and civic event records like the marathon and major
                parades. 513 known 2024 events ended up in the labeled set.
              </p>
              <p>
                Confounder data: NOAA daily weather at the Central Park station. Without it, every
                blizzard looks like a model failure.
              </p>
              <p>
                The catch I am honest about: this is one year of data. I cannot cross-validate
                across seasons, and I might be overfitting to patterns specific to 2024.
              </p>
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8"
              style={{ color: 'var(--text-color)' }}
            >
              Decisions
            </h2>
            <ol className="space-y-10">
              {decisions.map((decision, index) => (
                <li key={decision.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                  <span
                    className="text-base sm:text-lg font-semibold pt-1"
                    style={{ color: 'var(--text-secondary)' }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3 leading-tight"
                      style={{ color: 'var(--text-color)' }}
                    >
                      {decision.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {decision.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              What got cut
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cuts are part of the work. These are the three biggest, and the reasons hold up.
            </p>
            <div className="space-y-8">
              {cuts.map((cut) => (
                <div
                  key={cut.title}
                  className="border-l-2 ps-5"
                  style={{ borderColor: 'var(--text-secondary)' }}
                >
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {cut.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {cut.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-2xl mx-auto px-5 mb-20">
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              What I would do differently
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Four honest notes. The detector works. These are the things I want to fix before the
              next pass.
            </p>
            <ol className="space-y-8 list-decimal pl-6">
              {differently.map((item) => (
                <li
                  key={item.title}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {item.title}
                  </h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
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
              <li>Five fingerprint dimensions per event (peak intensity, lead time, lag time, decay half-life, asymmetry).</li>
              <li>K-means clustering at k=6 with a Ward hierarchical cross-check; UMAP for 2D visualization only.</li>
              <li>NOAA Central Park weather join that splits 18 false negatives into weather-explained vs genuinely unexplained.</li>
              <li>The headline finding: venue shape dominates the signature more than the sport played in it.</li>
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
