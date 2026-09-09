/**
 * Every claim here traces to lib/experience.ts or lib/projects.ts. Keep it
 * that way — this is the page a hiring manager reads most closely.
 */
export const intro = [
  'Analyst, designer, performer. Most portfolios pick a lane. I never have, and at this point I have stopped treating that as a problem to explain away.',
  'The data work runs deepest: a multi-year BI internship automating KPI dashboards across 20+ school sites, enrollment forecasting, and pricing analysis. The design work is where I make complicated things legible — investor materials and clinical workflow figures for a pre-FDA medical-imaging startup, and shipped sites for clients who had none. The performing is the oldest of the three: four years of conservatory ballet and modern, now arena floors for the New York Red Bulls and the NJ Devils.',
  'They feed each other more than they compete. A dashboard nobody reads and a routine nobody watches fail for the same reason.',
];

export const availability = 'NYC, NJ & CT · Hybrid local or remote';

/**
 * Skills grouped by the three categories the site is built around, so the
 * About reinforces the selector instead of contradicting it.
 */
export const skillsByCategory: { key: 'dance' | 'design' | 'data'; items: string[] }[] = [
  {
    key: 'dance',
    items: [
      'Classical ballet',
      'Modern (Graham / Horton)',
      'Contemporary',
      'Live performance',
      'Stagecraft',
      'Crowd engagement',
      'Brand representation',
    ],
  },
  {
    key: 'design',
    items: [
      'Figma',
      'Framer',
      'Sketch',
      'Adobe Illustrator',
      'Information design',
      'Data visualization',
      'Investor materials',
      'Web & UX',
    ],
  },
  {
    key: 'data',
    items: [
      'SQL',
      'Python',
      'pandas',
      'NumPy',
      'matplotlib',
      'Power BI',
      'Tableau',
      'Excel (advanced)',
      'KPI design',
      'Forecasting models',
      'Data cleaning & ETL',
      'Statistical analysis',
      'Pricing analysis',
      'Stakeholder communication',
    ],
  },
];

export const supporting = 'React, TypeScript, Next.js, Vite, Tailwind CSS, Git / GitHub, Vercel — enough to build and ship this site myself.';

export const linkedin = 'https://www.linkedin.com/in/charlie2bored/';
export const email = 'iamcharlesvargas@gmail.com';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/charlie2bored' },
  { label: 'LinkedIn', href: linkedin },
  { label: 'Twitter', href: 'https://x.com/charlie2bored' },
];
