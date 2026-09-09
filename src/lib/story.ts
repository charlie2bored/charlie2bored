export type CategoryKey = 'dance' | 'design' | 'data';

export type Work = {
  title: string;
  context: string;
  /** Absolute path under /public. Omit to fall back to the typographic plate. */
  image?: string;
  /** object-position for the image, when the subject is off-centre. */
  focus?: string;
  /**
   * Poster art generated in the DOM. Used wherever a screenshot would be a weak
   * full-bleed background, and as the stand-in until photography exists.
   */
  plate?: { figure: string; caption: string };
  /** Where the work opens. Omit for entries with no page of their own yet. */
  href?: string;
  external?: boolean;
  /** Longer detail, shown on the category page only. */
  detail?: string;
  meta?: string;
};

export type Category = {
  key: CategoryKey;
  index: string;
  label: string;
  href: string;
  /** One line, shown under the label in the selector. */
  line: string;
  /** The claim this category makes, revealed on hover/focus. */
  blurb: string;
  accent: string;
  works: Work[];
};

/**
 * The three categories, in the order they appear in the selector.
 * Accents are the only colour on an otherwise monochrome site.
 */
export const categories: Category[] = [
  {
    key: 'dance',
    index: '01',
    label: 'Dance',
    href: '/dance',
    line: 'Arena floors and mainstages',
    blurb:
      'Four years of conservatory training, then two professional arena crews. Live is the only room where you find out immediately whether it landed.',
    accent: '#FF6B4A',
    works: [
      {
        title: 'Team Toro',
        context: 'New York Red Bulls · pre-game and halftime activations',
        plate: { figure: 'RED BULLS', caption: 'Pre-game and halftime, arena floor' },
        href: '/experience/stage-and-performance',
        meta: 'Feb 2026 — present',
        detail:
          'Pre-game and halftime activations in front of arena-sized crowds, adjusting pacing and energy live so scripted beats still land whether the building is quiet or hot.',
      },
      {
        title: '“WOO!” Crew',
        context: 'NJ Devils · 10,000+ fans a game',
        plate: { figure: '10,000+', caption: 'Fans a game · NJ Devils' },
        href: '/experience/stage-and-performance',
        meta: 'Sep 2025 — present',
        detail:
          'On-ice activations, fan moments, and arena-floor engagement across all three periods. A brand-facing role where tone, timing, and presence have to read on first contact.',
      },
      {
        title: 'Academy for Performing Arts',
        context: 'Ballet, Graham/Horton, contemporary · 8+ juried showcases',
        plate: { figure: '4 YEARS', caption: 'Conservatory training · 8+ showcases' },
        href: '/experience/stage-and-performance',
        meta: 'Sep 2020 — May 2024',
        detail:
          'Four years of conservatory-style training on a daily rehearsal schedule alongside a full academic load, performing in juried showcases and mainstage productions with guest choreographers.',
      },
    ],
  },
  {
    key: 'design',
    index: '02',
    label: 'Design',
    href: '/design',
    line: 'Decks, figures, and interfaces',
    blurb:
      'Investor materials for a pre-FDA medical-imaging startup, clinical workflow figures, and shipped client sites. Complex things, made legible to people outside the room.',
    accent: '#A78BFA',
    works: [
      {
        title: 'Medara',
        context: 'Investor deck, one-pager, and clinical risk-tier figures',
        plate: { figure: 'PRE-FDA', caption: 'Investor deck and clinical figures' },
        href: '/experience/medara',
        meta: 'Mar 2026 — present',
        detail:
          'Investor-facing materials for a pre-FDA AI medical-imaging startup, plus the architecture and risk-tier workflow figures that explain a complex model to clinical partners.',
      },
      {
        title: 'ClearCore Protein',
        context: 'Information architecture, components, and frontend — solo',
        image: '/projects/clearcore-protein.png',
        focus: '50% 45%',
        href: '/projects/clearcore',
        meta: 'Apr 2026',
        detail:
          'Split the flavor pages out of the catalog so each SKU has its own URL, image set, and ingredient story, instead of one overloaded grid.',
      },
      {
        title: 'Rossitech LTD',
        context: 'First websites for clients who had none · Figma and Framer',
        plate: { figure: '0 → 1', caption: 'First websites, Figma and Framer' },
        href: '/experience/rossitech',
        meta: 'Aug 2025 — Oct 2025',
        detail:
          'Designed and shipped first websites off shared token and component systems, iterating with clients across rounds before handoff.',
      },
    ],
  },
  {
    key: 'data',
    index: '03',
    label: 'Data',
    href: '/data',
    line: 'Forecasts, signals, and dashboards',
    blurb:
      'A multi-year BI internship, then three analyses on real public data — each one back-tested or validated against something that came out later.',
    accent: '#38BDF8',
    works: [
      {
        title: 'NYC District 2 Enrollment Forecast',
        context: '8.71% MAPE against the actuals — Prophet got 19.20%',
        plate: { figure: '8.71%', caption: 'MAPE vs Prophet’s 19.20%' },
        href: '/projects/nyc-d2-enrollment',
        meta: 'Jun 2026',
        detail:
          'Forecast 30 NYC public elementary schools three years out, then back-tested once NYSED released the actuals. Three analyst-bounded scenarios beat a single Prophet default by more than 2x in MAPE.',
      },
      {
        title: 'NYC Subway Events',
        context: '96.5% recall on 513 known events, from ridership alone',
        image: '/projects/nyc-subway-events.webp',
        focus: '74% 42%',
        href: '/projects/nyc-subway-events',
        meta: 'May 2026',
        detail:
          'Detected major NYC events without ever opening an event calendar — seasonal baselines per station, residuals scored against known 2024 events. The signatures cluster by venue.',
      },
      {
        title: 'NYC Distance-Based Fare',
        context: '$913M revenue gap surfaced, with a fix that spares riders',
        plate: { figure: '$913M', caption: 'Revenue gap surfaced' },
        href: 'https://nyc-fare-systems-website.vercel.app/',
        external: true,
        meta: 'May 2026',
        detail:
          'Modelled a distance-based fare off open MTA OD pairings and fare structures, then built a small site so a non-technical reader could test the tradeoff for their own commute.',
      },
      {
        title: 'Apple Montessori Schools',
        context: 'Multi-year BI internship · KPI dashboards across 20+ sites',
        plate: { figure: '20+', caption: 'Sites on automated KPI dashboards' },
        href: '/experience/apple-montessori',
        meta: 'Multi-year',
        detail:
          'Automated KPI dashboards and delivered real-time performance analytics that informed pricing, staffing, and market expansion. Integrated 3+ years of CRM and billing data across the customer journey.',
      },
    ],
  },
];

export function getCategory(key: string): Category | undefined {
  return categories.find((c) => c.key === key);
}
