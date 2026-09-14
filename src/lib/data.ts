/**
 * The data section: an internship, then three personal projects, each told as
 * problem, what I did, result. Projects carry their real artifacts (the live
 * site, the actual Power BI pages, the actual figures); internal work cannot
 * be shown, so it carries its numbers instead, and says why.
 */

export const dataBg = '#ece9e4';

/** Spelled in dots by the section's opening beat. */
export const dataHeadline = 'guessing? not here.';
export const dataIntro = 'A two-and-a-half-year internship and three projects. The dashboards and figures below are the real ones.';

export type DataFigure = { src: string; w: number; h: number; caption: string; site?: string };
export type DataChapter = {
  num: string;
  group: 'Work' | 'Projects';
  short: string;
  type: string;
  title: string;
  meta: string;
  problem: string;
  did: string;
  result: string;
  tools: string[];
  links?: { href: string; label: string }[];
  figures?: DataFigure[];
  /** For work that cannot be shown: the numbers, typeset. */
  stats?: { value: string; label: string }[];
  note?: string;
};

export const dataChapters: DataChapter[] = [
  {
    num: '01', group: 'Work', short: 'Apple Montessori', type: 'Internship · 2.5 years',
    title: 'BI + Data Analytics Intern', meta: 'Apple Montessori Schools · Oct 2023 – May 2026',
    problem: 'Across 20+ schools, senior people were spending their hours on routine reporting, and the enrollment count was unreliable: one child could sit in several systems, or be missing from one.',
    did: 'Built Power BI KPI dashboards that took the recurring reporting off leadership. Went through every system — CRM, billing, the schools’ own — to confirm each student existed once, and built next year’s enrollment projections on that count. Compiled the regional directors’ work on families who left into dashboards and a record of why.',
    result: 'Leadership got its reporting hours back for the work that needed them. Projections now rest on a verified headcount, and the reasons families gave for leaving went back to the schools as changes to make.',
    tools: ['Power BI', 'SQL', 'Python', 'Excel', 'Tableau'],
    stats: [
      { value: '20+', label: 'schools on one set of KPI dashboards' },
      { value: '~15 hrs', label: 'of reporting a month off leadership, by their estimate' },
      { value: 'Every kid', label: 'matched across CRM, billing and school systems' },
      { value: '3+ yrs', label: 'of CRM and billing data cleaned and joined' },
      { value: 'Why', label: 'families left, compiled from the regional directors’ work' },
      { value: '2.5 yrs', label: 'in the role, working with the CFO and regional directors' },
    ],
    note: 'The dashboards are internal to Apple Montessori, so the numbers stand in for them.',
  },
  {
    num: '02', group: 'Projects', short: 'NYC fares', type: 'Personal project · solo',
    title: 'NYC distance-based fare analysis', meta: 'Research, modeling and the site',
    problem: 'Would a distance-based subway fare change who pays and who saves? Fare debates live in spreadsheets riders can’t use.',
    did: 'Modeled ~1M MTA origin–destination records in Python, routed every trip along the real subway network, and built a site where readers test their own commute.',
    result: 'Surfaced a $913M revenue gap — after catching my own crow-flies error ($280.5M) and publishing the correction. 14.8% of trips would cost less.',
    tools: ['Python', 'pandas', 'NumPy', 'matplotlib', 'TypeScript'],
    links: [
      { href: 'https://nyc-fare-systems-website.vercel.app/', label: 'the site ↗' },
      { href: 'https://github.com/charlie2bored/NYC-Fare-Systems', label: 'code ↗' },
    ],
    figures: [
      { src: '/data/fares-site.jpg', w: 1600, h: 9679, site: 'nyc-fare-systems-website.vercel.app', caption: 'The site — the case, the method, the correction and what it means.' },
    ],
  },
  {
    num: '03', group: 'Projects', short: 'District 2', type: 'Personal project · solo',
    title: 'NYC District 2 enrollment forecasting', meta: '30 elementary schools, three years out',
    problem: 'COVID broke a six-year plateau (~15,800 → ~12,400 K–5 students). Two data points can’t support one confident ML forecast.',
    did: 'Stitched 12 years of DOE and NYSED data, fit a piecewise model with a 2020 break, bounded the future with three scenarios, and shipped a Power BI dashboard.',
    result: 'Back-tested against the real 2022–25 numbers: 8.71% error against Prophet’s 19.20% — 2.2× more accurate.',
    tools: ['Python', 'pandas', 'statsmodels', 'Prophet', 'Power BI'],
    links: [{ href: 'https://github.com/charlie2bored/nyc-d2-enrollment-forecasting', label: 'code ↗' }],
    figures: [
      { src: '/data/d2-summary.png', w: 1407, h: 791, caption: 'Power BI, executive summary — 30 schools, 12 years of actuals and the three-scenario forecast.' },
      { src: '/data/d2-backtest.png', w: 1407, h: 789, caption: 'Power BI, backtest — the base scenario against Prophet once the real 2022–25 numbers came out.' },
    ],
  },
  {
    num: '04', group: 'Projects', short: 'Subway events', type: 'Personal project · solo',
    title: 'NYC subway events from ridership data', meta: 'Hourly MTA ridership, 2024',
    problem: 'Can you tell when a big NYC event happens — a game, a parade, a concert — from subway ridership alone, with no calendar?',
    did: 'Built seasonal baselines per station and hour, scored the residuals, fingerprinted each event on five dimensions and clustered them.',
    result: 'Recovered 495 of 513 known 2024 events — 96.5% recall — without ever giving the model the calendar.',
    tools: ['Python', 'pandas', 'scikit-learn', 'Socrata API', 'NOAA'],
    links: [{ href: 'https://github.com/charlie2bored/nyc-subway-events-from-ridership-data', label: 'code ↗' }],
    figures: [
      { src: '/data/subway-game7.png', w: 1800, h: 945, caption: 'Knicks vs Pacers, Game 7 — Penn Station ridership against its baseline. The event is visible in the data alone.' },
      { src: '/data/subway-fingerprints.png', w: 1800, h: 1198, caption: 'Every event’s fingerprint — peak intensity against arrival/exit asymmetry, clustered.' },
      { src: '/data/subway-day-night.png', w: 1800, h: 1422, caption: 'Yankee Stadium, day games against night games — the same venue, two different signatures.' },
    ],
  },
];
