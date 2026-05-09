'use client';

import Image from 'next/image';
import Link from 'next/link';

const INV = '#000000';
const ONINV = '#ffffff';
const ONINV_MUTED = 'rgba(255,255,255,0.78)';

const ctaPrimary =
  'inline-flex min-h-[48px] items-center justify-center rounded-lg px-8 py-4 text-lg font-medium shadow-lg transition-all duration-300 touch-manipulation hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto text-center bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200';

const ctaOutline =
  'inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 px-8 py-4 text-lg font-medium shadow-lg transition-all duration-300 touch-manipulation hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto text-center bg-transparent hover:opacity-90';

/** Tight Aerolab-style section label + display heading */
function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] mb-5" style={{ color: 'var(--text-secondary)' }}>
        {kicker}
      </p>
      <h2 className="font-extrabold tracking-[-0.02em] text-[clamp(1.875rem,4.5vw,3.25rem)] leading-[1.06]" style={{ color: 'var(--text-color)' }}>
        {title}
      </h2>
    </header>
  );
}

export default function NycFareCaseStudy() {
  return (
    <article className="min-w-0 pb-12">
      {/* Hero: editorial top */}
      <header
        className="relative w-full pb-16 pt-12 md:pb-20 md:pt-14"
        style={{ backgroundColor: INV, color: ONINV }}
      >
        <div className="mx-auto max-w-[min(100%,42rem)] px-5 text-center lg:max-w-5xl lg:text-left">
          <p
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em]"
            style={{ color: ONINV_MUTED }}
          >
            Data analytics · 2025
          </p>
          <h1 className="mt-6 lg:mt-7 font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,7.5vw,4.5rem)] leading-[0.96] lg:max-w-[14ch]">
            A $277M Setback
          </h1>
          <p className="mt-8 lg:mx-0 lg:max-w-[40ch] mx-auto text-lg sm:text-xl md:text-2xl font-normal leading-[1.45]" style={{ color: ONINV_MUTED }}>
            NYC&apos;s outdated pricing model is costing millions. An analytical deep dive into the inefficiencies of the flat-fare system, and one distance-based proposal that earns back revenue without punishing shorter trips.
          </p>

          <dl className="mt-12 lg:mt-14 grid grid-cols-2 gap-x-6 gap-y-8 text-left lg:grid-cols-5 rounded-2xl border p-6 sm:p-8" style={{ borderColor: 'rgba(255,255,255,0.22)' }}>
            <div className="min-w-0">
              <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider" style={{ color: ONINV_MUTED }}>Type</dt>
              <dd className="mt-2 text-sm sm:text-[15px] font-semibold leading-snug break-words">Independent research</dd>
            </div>
            <div className="min-w-0">
              <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider" style={{ color: ONINV_MUTED }}>Role</dt>
              <dd className="mt-2 text-sm sm:text-[15px] font-semibold leading-snug break-words">Researcher · analyst · developer</dd>
            </div>
            <div className="min-w-0">
              <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider" style={{ color: ONINV_MUTED }}>Timeline</dt>
              <dd className="mt-2 text-sm sm:text-[15px] font-semibold leading-snug break-words">November to December 2025</dd>
            </div>
            <div className="min-w-0">
              <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider" style={{ color: ONINV_MUTED }}>Tools</dt>
              <dd className="mt-2 text-sm sm:text-[15px] font-semibold leading-snug break-words">Python · SQL · Pandas</dd>
            </div>
            <div className="min-w-0 col-span-2 lg:col-span-1">
              <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider" style={{ color: ONINV_MUTED }}>Data period</dt>
              <dd className="mt-2 text-sm sm:text-[15px] font-semibold leading-snug break-words">2023 to 2024</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Anchor stats: Yash-style supersized KPIs */}
      <section aria-label="Key headline metrics">
        <div className="w-full border-y py-14 md:py-[4.25rem]" style={{ backgroundColor: '#070707', color: ONINV, borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="mx-auto grid max-w-[90rem] grid-cols-1 divide-y px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 gap-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            {[
              { k: '$277M', d: 'Modeled surplus vs. flat baseline' },
              { k: '29%', d: 'Share of riders who pay less under distance pricing' },
              { k: '1M', d: 'Origin-destination pairs in scope' },
            ].map((s) => (
              <div key={s.k} className="px-3 py-8 sm:py-10 text-center md:py-12 sm:first:ps-8 sm:last:pe-8">
                <p className="font-extrabold text-[clamp(2.85rem,7vw,4.85rem)] leading-none tracking-tight tabular-nums">{s.k}</p>
                <p className="mt-5 text-base md:text-lg font-normal max-w-[16rem] mx-auto leading-snug" style={{ color: ONINV_MUTED }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed imagery: breathing room */}
      <figure className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-neutral-900">
        <div className="relative aspect-[16/9] md:aspect-[21/9] md:max-h-[min(70vh,520px)] md:mx-auto md:max-w-[100rem]">
          <Image
            src="/projects/nyc-fare-systems.jpg"
            alt="Live NYC fare explorer: borough map with proposed vs. legacy fare overlays from the deployed site."
            fill
            className="object-cover object-[center_40%]"
            priority
            sizes="100vw"
          />
        </div>
        <figcaption className="sr-only">Full-bleed preview of the public NYC Fare Systems deployment used to communicate results.</figcaption>
      </figure>

      <div className="mx-auto max-w-3xl space-y-[5.5rem] px-5 py-16 md:space-y-28 md:py-24 lg:max-w-[44rem]" style={{ color: 'var(--text-color)' }}>
        {/* Objective */}
        <section id="objective" className="scroll-mt-[calc(9rem+env(safe-area-inset-top))]">
          <SectionHead kicker="Problem & question" title="Why the flat fare breaks" />
          <div className="space-y-8">
            <p className="text-xl sm:text-2xl md:text-[1.55rem] font-semibold tracking-tight leading-snug">
              The flat fare is a blunt instrument, same price for everyone, every distance.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
              The MTA charges $2.90 whether you swipe once between Midtown tunnels or commute from Deep Queens. That uniformity looks fair on a poster but it quietly subsidizes short urban hops with cross-borough journeys. It hides an equity wedge and lets revenue walk out the door. This piece asks whether a distance-based tariff can widen the budget{' '}
              <em className="not-italic font-semibold text-[inherit]" style={{ color: 'var(--text-color)' }}>without</em> treating neighborhood riders like an ATM.
            </p>
            <blockquote className="my-14 rounded-3xl px-8 py-10 md:px-12 md:py-12 text-xl sm:text-2xl md:text-[1.6rem] font-light italic leading-[1.42] md:leading-[1.42] shadow-xl" style={{ backgroundColor: INV, color: ONINV }}>
              Can NYC replace flat $2.90 swipes with a distance-based envelope ($2.00 + $0.24/mile) so governmental revenue climbs while passenger fairness improves?
            </blockquote>
          </div>
        </section>

        {/* Approach pillars: Aerolab / Udacity map */}
        <section id="approach" className="scroll-mt-[calc(9rem+env(safe-area-inset-top))]">
          <SectionHead kicker="Method map" title="Collect · Model · Analyze" />
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {[
              {
                label: 'Collect',
                subtitle: 'Ground truth in files you can cite',
                body:
                  'Pulled GTFS-aligned station geometry, hourly stop-pair matrices, fare references from overseas operators, then cleaned until every pairing had coordinates plus valid ridership shells.',
              },
              {
                label: 'Model',
                subtitle: 'Distance + pricing without insider-only fields',
                body:
                  'MTA doesn’t publish trip-distance labels in the datasets I could access, so distances are inferred with Haversine geodesics, then fused with international fare-shape priors.',
              },
              {
                label: 'Analyze',
                subtitle: 'Scale, validate, argue',
                body:
                  'Normalized hourly aggregates to audited annual totals, matched the regulated $3.46B baseline, then modeled alternate pricing and surfaced borough-level deltas before shipping the explorer.',
              },
            ].map((p) => (
              <article
                key={p.label}
                className="rounded-2xl border-2 px-6 py-7 transition-shadow hover:shadow-lg min-h-[12rem]"
                style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'var(--bg-color)' }}
              >
                <h3 className="font-extrabold text-lg tracking-tight uppercase">{p.label}</h3>
                <p className="mt-3 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  {p.subtitle}
                </p>
                <p className="mt-5 text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process: narrative decisions */}
        <section id="process" className="scroll-mt-[calc(9rem+env(safe-area-inset-top))] space-y-16 md:space-y-20">
          <SectionHead kicker="How it actually unfolded" title="Designing the methodology, not polishing a deck" />

          <div className="space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Code and write-up stay public on{' '}
              <a
                href="https://github.com/charlie2bored/NYC-Fare-Systems"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-[5px] decoration-2 hover:opacity-75"
                style={{ color: 'var(--text-color)' }}
              >
                GitHub
              </a>
              . What follows focuses on forks in the road, not just outputs.
            </p>
          </div>

          <article className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-color)' }}>
              Choosing the surface: explorer over notebook-only
            </h3>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Numbers in a Jupyter cell can be right and still unreadable to anyone outside the spreadsheet. Early on I committed to a deployable explorer so someone could roam boroughs and watch fare deltas move with distance. That constraint forced ruthless clarity about inputs, captions, and which cuts of the dataset made it browser-safe, effectively another round of QA on the story itself.
              </p>
              <p>
                The downside is upkeep: infra, copy, UX polish. Worth it because the skepticism gap on policy numbers closes faster when stakeholders can poke the artifact instead of tabbing through notebooks.
              </p>
            </div>
          </article>

          <article className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-color)' }}>
              Building distance estimates without curated trip tapes
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The MTA distributes rich ridership aggregates but doesn’t expose pre-computed OD lengths for every hypothetical pairing. Bridging coordinate pairs via the Haversine formula is blunt; it ignores track geometry transfers and crowding quirks. Transparently acknowledging that approximation, and stressing where better AVL or tap-stream data could tighten error, kept the framing honest rather than falsely precise.
            </p>
          </article>

          <article className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-color)' }}>
              The annualization cliff
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              After first wiring fares to hourly counts, multiplying by “24 × 365” spit out nonsense on the order of $54 billion. Hourly snapshots are not interchangeable with average daily shapes; rush shoulders and nightlife curves matter. Scraping naive math forces you to reconcile with audited totals or look silly in public, so I leaned on NYCT’s published yearly ridership (1.19B riders for 2024) and rewrote scaling as disciplined algebra instead of folklore.
            </p>
            <div
              role="note"
              className="border-l-[5px] border-solid border-amber-500 bg-amber-500/10 px-6 py-5 rounded-r-xl text-[15px] sm:text-base leading-relaxed shadow-sm"
              style={{ color: 'var(--text-color)' }}
            >
              <span className="font-semibold">Challenge · </span>
              Treating hourly slices as interchangeable across the clock produced inflated annual revenue by an order of magnitude.
            </div>
            <div
              role="note"
              className="border-l-[5px] border-solid border-emerald-600 bg-emerald-500/10 px-6 py-5 rounded-r-xl text-[15px] sm:text-base leading-relaxed shadow-sm"
              style={{ color: 'var(--text-color)' }}
            >
              <span className="font-semibold">Fix · </span>
              Applying a 557.33× scaling anchor from official totals and recomputing the flat $2.90 scenario landed on $3.46B farebox receipts, aligning with NYCT disclosures. Distance pricing experiments only ran once that tether held.
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-color)' }}>
              Data inventory
            </h3>
            <div className="overflow-x-auto rounded-2xl border-2" style={{ borderColor: 'var(--text-secondary)' }}>
              <table className="w-full min-w-[540px] text-left text-sm sm:text-[15px]">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'rgba(128,128,128,0.07)' }}>
                    <th className="font-mono text-[11px] uppercase tracking-wider px-4 py-3 w-[20%]" style={{ color: 'var(--text-secondary)' }}>Label</th>
                    <th className="font-mono text-[11px] uppercase tracking-wider px-4 py-3 w-[30%]" style={{ color: 'var(--text-secondary)' }}>File</th>
                    <th className="font-mono text-[11px] uppercase tracking-wider px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Source</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-secondary)' }}>
                  {[
                    ['Dataset 01', '1M_Stop_Pairings.csv', 'MTA public data portal'],
                    ['Dataset 02', 'Master_Stations', 'MTA GTFS data'],
                    ['Dataset 03', 'All_Stops', 'Processed GTFS ingest'],
                    ['Dataset 04', 'Fare_Structures', 'International benchmarking'],
                  ].map(([a, b, c]) => (
                    <tr key={a as string} className="border-b last:border-0" style={{ borderColor: 'var(--text-secondary)' }}>
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-color)' }}>{a}</td>
                      <td className="px-4 py-3 font-mono text-[0.8rem]">{b}</td>
                      <td className="px-4 py-3">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <div>
            <h3 className="mb-6 text-lg font-semibold font-mono tracking-tight uppercase" style={{ color: 'var(--text-secondary)' }}>
              Automation spine (<span className="normal-case">main.py</span>)
            </h3>
            <ol className="space-y-6">
              {[
                ['Data loading · Pandas', 'Import every ingest into typed frames, easier to audit joins than opaque CSV peeking.'],
                ['Validated + cleaned data', 'Null sweeps and unified station naming keeps coordinate merges honest. Validation held at 100% of ingest rows.'],
                ['Distance estimation · Haversine', 'Bridged OD lat/lon gaps where official mileages are unpublished. Approximation surfaced everywhere downstream.'],
                ['Fare ladders', 'Compared modeled distance-based fares with the statutory flat and international precedent shapes before running deltas.'],
                ['Annual normalization', 'Anchored hourly samples to audited annual totals (incl. 557.33× scaler) until flat-fare totals matched disclosures.'],
                ['Revenue scenarios', 'Ran parallel annual receipts for statutory vs modeled distance ladders to isolate surplus and elasticity stories.'],
              ].map(([t, d], idx) => (
                <li key={t as string} className="flex gap-5">
                  <span className="font-mono text-xs shrink-0 w-9 pt-1 tabular-nums" style={{ color: 'var(--text-secondary)' }}>{idx + 1}</span>
                  <div>
                    <p className="font-mono text-[15px] font-semibold" style={{ color: 'var(--text-color)' }}>{t as string}</p>
                    <p className="mt-2 text-[15px] sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{d as string}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-3xl border-2 px-6 py-9 sm:px-10 sm:py-11" style={{ borderColor: 'var(--text-secondary)' }}>
            {[
              ['1M', 'OD pairings enumerated'],
              ['All boroughs', 'Geographic completeness'],
              ['2023 to 2024', 'Ridership window'],
              ['100%', 'Rows passing validation gates'],
            ].map(([label, caption]) => (
              <div key={label}>
                <p className="text-3xl sm:text-[2.125rem] font-extrabold tracking-tight tabular-nums">{label}</p>
                <p className="mt-2 text-sm sm:text-[15px]" style={{ color: 'var(--text-secondary)' }}>{caption}</p>
              </div>
            ))}
          </div>

          <p className="text-lg italic leading-relaxed pl-6 border-l-4" style={{ borderColor: 'var(--text-color)', color: 'var(--text-secondary)' }}>
            Modeling closed with borough-level deltas and choke routes (Penn Station → 5 Ave / 53 St, etc.) to show both equity levers and where revenue concentrates when you contemplate phased rollout.
          </p>
        </section>
      </div>

      {/* Findings: slightly wider grid for table */}
      <section id="findings" className="scroll-mt-[calc(9rem+env(safe-area-inset-top))] px-5 py-8 md:py-14">
        <div className="mx-auto max-w-4xl lg:max-w-[48rem]">
          <SectionHead kicker="Outcomes that stayed surprising" title="Higher revenue without punishing riders" />

          <p className="mb-12 text-xl sm:text-2xl font-normal leading-relaxed max-w-3xl">
            Distance-based envelopes can widen annual fare receipts while materially reducing what almost a third of riders pay, two outcomes pundits incorrectly treat as zero-sum.
          </p>

          <div className="overflow-x-auto rounded-3xl border-2 mb-14" style={{ borderColor: 'var(--text-secondary)' }}>
            <table className="w-full min-w-[420px] text-left text-sm sm:text-[15px]">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'rgba(128,128,128,0.07)' }}>
                  <th className="font-mono text-[11px] uppercase tracking-wider px-5 py-4" style={{ color: 'var(--text-secondary)' }}>Metric</th>
                  <th className="font-mono text-[11px] uppercase tracking-wider px-5 py-4" style={{ color: 'var(--text-secondary)' }}>Rounded</th>
                  <th className="font-mono text-[11px] uppercase tracking-wider px-5 py-4" style={{ color: 'var(--text-secondary)' }}>Exact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                  <td className="px-5 py-4 font-medium" style={{ color: 'var(--text-color)' }}>Current annual revenue</td>
                  <td className="px-5 py-4 font-medium">$3.47B</td>
                  <td className="px-5 py-4 font-mono text-[0.8rem]">$3,465,112,435</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                  <td className="px-5 py-4 font-medium" style={{ color: 'var(--text-color)' }}>Proposed annual revenue</td>
                  <td className="px-5 py-4 font-medium">$3.74B</td>
                  <td className="px-5 py-4 font-mono text-[0.8rem]">$3,743,071,548</td>
                </tr>
                <tr
                  className="border-b bg-emerald-500/13 font-semibold"
                  style={{
                    borderColor: 'var(--text-secondary)',
                    color: 'var(--text-color)',
                    boxShadow: 'inset 4px 0 0 rgb(22 163 74)',
                  }}
                >
                  <td className="px-5 py-4">Revenue surplus</td>
                  <td className="px-5 py-4 tabular-nums">+$277M</td>
                  <td className="px-5 py-4 font-mono font-semibold normal-case text-[0.8rem]">+$277,959,113 · 8.02% increase</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="list-none space-y-7 text-[17px] sm:text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            <li className="pl-8 relative before:absolute before:left-0 before:top-[0.35em] before:h-2 before:w-2 before:rounded-full before:bg-current before:opacity-40">
              <strong className="block mb-2 text-[15px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-color)' }}>29% rider relief</strong>
              Nearly three in ten trips become cheaper relative to legacy swipes, mostly short urban hops that carry outsized socioeconomic weight.
            </li>
            <li className="pl-8 relative before:absolute before:left-0 before:top-[0.35em] before:h-2 before:w-2 before:rounded-full before:bg-current before:opacity-40">
              <strong className="block mb-2 text-[15px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-color)' }}>3.75-mile break-even frontier</strong>
              Trips shorter than roughly 3.75 miles fare better or parity under the modeled $2.00 + $0.24 structure compared with $2.90 flat.
            </li>
            <li className="pl-8 relative before:absolute before:left-0 before:top-[0.35em] before:h-2 before:w-2 before:rounded-full before:bg-current before:opacity-40">
              <strong className="block mb-2 text-[15px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-color)' }}>557.33× reality anchor</strong>
              Applying the audited annual denominator saved the surplus story from drifting ~15× high versus naive extrapolation gymnastics.
            </li>
            <li className="pl-8 relative before:absolute before:left-0 before:top-[0.35em] before:h-2 before:w-2 before:rounded-full before:bg-current before:opacity-40">
              <strong className="block mb-2 text-[15px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-color)' }}>Heavy corridors move the ledger</strong>
              Penn Station routes (e.g., toward Lexington / 53 St corridors) dominate absolute dollars under either scheme, pragmatic candidates for phased tech rollouts before network-wide rewiring.
            </li>
          </ul>
        </div>
      </section>

      {/* Conclusion: split column */}
      <div className="mx-auto max-w-3xl space-y-[5.5rem] px-5 py-14 md:space-y-24 md:py-20 lg:max-w-[44rem]" style={{ color: 'var(--text-color)' }}>
        <section id="conclusion" className="scroll-mt-[calc(9rem+env(safe-area-inset-top))]">
          <SectionHead kicker="Closing synthesis" title={`Policy doesn't improve by accident`} />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
            <blockquote className="rounded-3xl px-8 py-9 text-xl sm:text-2xl lg:text-[1.55rem] font-light italic leading-[1.43] lg:sticky lg:top-40 lg:shadow-lg border shrink-0" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-color)' }}>
              The MTA could bank north of $277M more per year without punishing riders who barely leave their borough block.
            </blockquote>
            <div className="space-y-7 text-[17px] sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Transit agencies don&apos;t chase distance-based regimes because spreadsheets got prettier, Tokyo, Singapore, London all arrived there through decades of ticketing evolution. What differs here is fidelity to audited MTA traffic and fares you can rerun from open repositories.
              </p>
              <p>
                The equity subplot matters as loudly as treasury math: shortening cheap intracity segments helps riders who disproportionately stitch together multiple short hops between shifts. Riders covering longer commuter arcs pay more proportional to roadway-style usage. That redistribution is ethically easier to argue than insisting a single fare token covers every imaginable trip length equally.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection: Yash honest close */}
        <section
          id="reflection"
          className="scroll-mt-[calc(9rem+env(safe-area-inset-top))] rounded-3xl border-2 px-7 py-10 sm:px-10 sm:py-11"
          style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'rgba(128,128,128,0.04)' }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] mb-6" style={{ color: 'var(--text-secondary)' }}>
            Straight talk · what I&apos;d rerun
          </p>
          <h2 className="text-[1.625rem] sm:text-[1.9rem] font-extrabold tracking-tight leading-tight mb-8">
            If I reopened the notebooks tomorrow
          </h2>
          <ul className="space-y-6 text-[17px] sm:text-[1.0625rem] leading-relaxed font-normal max-w-none" style={{ color: 'var(--text-secondary)' }}>
            <li>
              Swap Haversine straight-line estimates for track-graph distances or tap-stream reconstructions wherever MTA publishes enough AVL breadcrumbs, that&apos;s where believability leaps.
            </li>
            <li>
              Model hour-of-week slices explicitly instead of a single scaler so policy teams can simulate crowding mandates or off-peak discounts without ripping out normalization math.
            </li>
            <li>
              Co-design copy and anxiety-reducing FAQs with advocates before another deploy, revenue shocks spook riders faster than spreadsheets admit.
            </li>
            <li>
              Extend politico overlays (who funds capital vs operations) instead of implying revenue alone solves agency solvency; distance fares buy optionality but not magic.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-[calc(9rem+env(safe-area-inset-top))] pb-10">
          <SectionHead kicker="Keep the conversation going" title="Interested in collaborating?" />
          <p className="max-w-xl text-[17px] sm:text-lg leading-relaxed font-normal mb-12" style={{ color: 'var(--text-secondary)' }}>
            Ping me about raw pulls, methodological edge cases, or how the explorer should evolve if you&apos;re iterating on commuter pricing yourself.
          </p>

          <dl className="grid gap-y-10 gap-x-12 sm:grid-cols-2 mb-14 text-[15px] sm:text-[16px]">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Email</dt>
              <dd>
                <a href="mailto:iamcharlesvargas@gmail.com" className="font-semibold underline underline-offset-4 hover:opacity-75 break-all" style={{ color: 'var(--text-color)' }}>
                  iamcharlesvargas@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>LinkedIn</dt>
              <dd>
                <a href="https://www.linkedin.com/in/charlie2bored/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:opacity-75" style={{ color: 'var(--text-color)' }}>
                  charlie2bored ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>GitHub repository</dt>
              <dd>
                <a href="https://github.com/charlie2bored/NYC-Fare-Systems" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:opacity-75" style={{ color: 'var(--text-color)' }}>
                  NYC-Fare-Systems ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Portfolio home</dt>
              <dd>
                <a href="https://charlie2bored.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:opacity-75" style={{ color: 'var(--text-color)' }}>
                  charlie2bored.com ↗
                </a>
              </dd>
            </div>
          </dl>

          <div className="flex flex-col sm:flex-row flex-wrap gap-5">
            <a href="https://nyc-fare-systems-website.vercel.app/" target="_blank" rel="noopener noreferrer" className={ctaPrimary}>
              View Live Site ↗
            </a>
            <a
              href="https://github.com/charlie2bored/NYC-Fare-Systems"
              target="_blank"
              rel="noopener noreferrer"
              className={ctaOutline}
              style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)' }}
            >
              GitHub Repo ↗
            </a>
          </div>
          <p className="mt-12">
            <Link href="/projects" className="text-[15px] font-semibold underline underline-offset-[6px] decoration-2 hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
              ← Back to all projects
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
