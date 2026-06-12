export type Category = 'data' | 'design' | 'other';

export type Project = {
  number: string;
  slug: string;
  category: Category;
  href: string;
  title: string;
  role: string;
  description: string;
  approach: { problem: string; decisions: string[] };
  image: string;
  hoverMetric: string;
  tech: string[];
  caseStudy?: string;
  links: { github: string; demo: string };
};

export const categories: { key: Category; label: string }[] = [
  { key: 'data', label: 'Data' },
  { key: 'design', label: 'Design' },
  { key: 'other', label: 'Other' },
];

export const projects: Project[] = [
  {
    number: '(01)',
    slug: 'nyc-d2-enrollment',
    category: 'data',
    href: '/projects/nyc-d2-enrollment',
    title: 'NYC District 2 Elementary Enrollment Forecasting',
    role: 'Solo: data engineering, modeling, dashboard, and writeup',
    description:
      'I forecast 30 NYC public elementary schools three years out, then back-tested the model once NYSED released the actuals for those years. The methodological call, three analyst-bounded scenarios over a single ML default, beat Facebook Prophet on the same data by more than 2x in MAPE.',
    approach: {
      problem:
        'Pre-COVID was a six-year flat plateau at ~15,800 K-5 students. COVID broke it to ~12,400. With only two post-break data points, a Prophet-style ML answer pretends to know more than the data can say.',
      decisions: [
        'Stitched 12 years of NYC DOE and NYSED enrollment data and fit a piecewise linear model with a known structural break at 2020. Bounded the future with three analyst scenarios (decline, stabilization, recovery) instead of a single point forecast.',
        'Back-tested when NYSED published the 2022–25 actuals. The Base scenario landed at 8.71% MAPE. Prophet on the same data landed at 19.20%. The analyst-bounded approach beat the ML default by more than 2x.',
        'Tested the popular "wealthy catchments left first" story and refused to ship it. Pearson r = +0.14 between catchment income and enrollment decline. Lowest-income schools in Chinatown and the Lower East Side declined more than the high-income downtown catchments; the resilient outlier is Roosevelt Island (+13%), suggesting geographic friction of exit is what matters.',
        'Shipped a four-page Power BI dashboard: system-wide fan chart, scenario/model operational matrix, single-school drill-through, and a backtest validation page.',
      ],
    },
    image: '/projects/nyc-d2-enrollment.png',
    hoverMetric: 'Bounded scenarios beat a single ML default by 2x MAPE, measured against the actuals that came out later',
    tech: ['Python', 'pandas', 'NumPy', 'statsmodels', 'Prophet', 'Power BI', 'Census ACS', 'Census Geocoder API'],
    links: { github: 'https://github.com/charlie2bored/nyc-d2-enrollment-forecasting', demo: '' },
  },
  {
    number: '(02)',
    slug: 'nyc-subway-events',
    category: 'data',
    href: '/projects/nyc-subway-events',
    title: 'NYC Subway Events from Ridership Data',
    role: 'Solo: data engineering, modeling, and signature analysis',
    description:
      'Asked whether you can detect when a major NYC event happens (Knicks games, marathons, parades) without ever opening an event calendar, using only MTA hourly ridership. Built seasonal baselines per station, scored the residuals against known 2024 events, and recovered 495 of 513 (96.5%). The signatures cluster by venue.',
    approach: {
      problem:
        'Event detection in cities usually leans on calendars and permits. That leaves out the events nobody publishes a permit for and biases the data toward the venues that are easy to list. I wanted to know how much of the signal lives in the ridership itself.',
      decisions: [
        'Built day-of-week and season-aware ridership baselines per station-hour, so a sold-out Sunday MSG game gets scored against the right Sundays. Without that, the model flags every Friday night.',
        'Quantified each event with five fingerprint dimensions (peak intensity, lead time, lag time, decay half-life, and pre/post asymmetry) instead of just an excess-ridership number. The shape is what tells you Knicks from Rangers from a U2 show.',
        'Clustered the fingerprints and reported the result honestly: the venue dominates the signature. Knicks, Rangers, and MSG concerts land in the same cluster. Yankees day games and night games sit ~3x apart in intensity. Parades stay asymmetric: people arrive early and exit fast.',
        'Validated against a held-out 2024 calendar of 513 events: 96.5% recall, without ever giving the model the calendar.',
      ],
    },
    image: '/projects/nyc-subway-events.webp',
    hoverMetric: '96.5% recall on 513 known 2024 events, recovered from ridership alone',
    tech: ['Python', 'pandas', 'scikit-learn', 'Socrata API', 'NOAA Weather'],
    caseStudy: '/projects/nyc-subway-events',
    links: {
      github: 'https://github.com/charlie2bored/nyc-subway-events-from-ridership-data',
      demo: '',
    },
  },
  {
    number: '(03)',
    slug: 'nyc-fare',
    category: 'data',
    href: 'https://nyc-fare-systems-website.vercel.app/',
    title: 'NYC Distance-Based Fare Analysis',
    role: 'Solo: research, modeling, and frontend',
    description:
      'I treated MTA ridership data as a policy question. Would a distance-based fare actually change who pays and who saves? I modeled the math in Python off the open OD pairings, fare structures, and station metadata. Then I built a small site so a non-technical reader could test the tradeoff for their own commute.',
    approach: {
      problem:
        'Fare debates usually live in spreadsheets and op-eds. Riders can’t see how a policy change would actually affect their own trip.',
      decisions: [
        'Built the analysis in pandas and NumPy off the open MTA OD pairings, fare structures, and station metadata. The whole thing is reproducible, so the model can be re-run when the data changes.',
        'Uncovered roughly $913M in MTA revenue gap between current flat-fare receipts and a distance-based structure, then proposed a pricing optimization that recovers the gap without raising consumer fares.',
        'Reported the loss as well as the gain. About 15% of riders in the model pay less, and the rest pay more. Hiding that would have been a worse choice than reporting a worse number.',
        'Framed the page around a single comparison, your trip today versus the proposed model, so the reader is the one driving the page.',
      ],
    },
    image: '/projects/nyc-fare-systems.png',
    hoverMetric: 'Surfaced $913M in MTA revenue gap from a ~1M-record dataset, with a distance-based fix that recovers it without raising consumer fares',
    tech: ['Python', 'pandas', 'NumPy', 'matplotlib', 'TypeScript', 'Vite', 'Tailwind', 'Data storytelling'],
    links: { github: 'https://github.com/charlie2bored/NYC-Fare-Systems', demo: 'https://nyc-fare-systems-website.vercel.app/' },
  },
  {
    number: '(04)',
    slug: 'clearcore-protein',
    category: 'design',
    href: '/projects/clearcore',
    title: 'ClearCore Protein',
    role: 'Solo build, end to end',
    description:
      'A multi-page React site I built for a fictional CPG brand. I owned the information architecture, the component system, and the frontend. It has real routes for the store locator, flavor pages, and contact, with Framer Motion and GSAP handling the motion. The stack is Vite, TypeScript, and Tailwind v4.',
    approach: {
      problem: 'A new CPG brand needs a site that reads as confident and shoppable before there’s actually anything to ship.',
      decisions: [
        'Built a small token-driven system first, so the flavor pages, the locator, and the marketing pages could share the same rhythm instead of reinventing components for each.',
        'Split the flavor pages out of the catalog. Each SKU has its own URL, image set, and ingredient story, instead of a single overloaded grid.',
        'Used motion to reinforce hierarchy on entry, then quieted it on scroll so the secondary content reads without anything competing for attention.',
      ],
    },
    image: '/projects/clearcore-protein.png',
    hoverMetric: 'Built the whole thing solo: information architecture, components, and the frontend',
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind v4', 'Framer Motion', 'GSAP'],
    caseStudy: '/projects/clearcore',
    links: {
      github: 'https://github.com/charlie2bored/clearcore',
      demo: 'https://clearcore-tau.vercel.app/',
    },
  },
  {
    number: '(05)',
    slug: 'speedreader',
    category: 'other',
    href: 'https://speed-reader-weld.vercel.app/',
    title: 'SpeedReader',
    role: 'Solo build, end to end',
    description:
      'A reading tool that uses Rapid Serial Visual Presentation with an Optimal Recognition Point cue so the eye stays anchored. The real question was attention: how much of the UI can you strip away before the reader loses their place?',
    approach: {
      problem: 'Long-form reading on the web is hostile to focus. Most "speed reader" UIs end up adding controls until the controls become the distraction.',
      decisions: [
        'Stripped the interface down to one fixation point and the controls you need to recover from a misread. Everything else is keyboard.',
        'Tuned the ORP highlight contrast so the focal letter reads as the anchor and doesn’t flicker between words.',
        'Sized the reading column for what’s actually readable at high WPM.',
      ],
    },
    image: '/projects/speedreader.png',
    hoverMetric: 'A reading interface stripped down to one fixation point',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind'],
    links: { github: 'https://github.com/charlie2bored/SpeedReader', demo: 'https://speed-reader-weld.vercel.app/' },
  },
];
