/**
 * Every claim here traces to lib/experience.ts or lib/projects.ts. Keep it
 * that way — this is the page a hiring manager reads most closely.
 */
export const intro =
  'I have to scroll through different resumes every time I apply for a job in different fields. I’ve made my portfolio so it’s all in the same place.';

/** The pushback, quoted so the rebuttal has something to land on. */
export const objections = [
  'It shows you’re uncommitted to your discipline charlie!',
  'It makes you look like a kid who doesn’t know what he’s doing',
];

export const rebuttal =
  'No it doesn’t. All the things I do are part of me, and I’d be a fool if I didn’t show them all off.';

/**
 * The show metaphor, in Charlie's order: backend, marketing, frontend. That
 * builds to the thing he most enjoys, so it does not follow the 01/02/03
 * order the selector uses.
 */
export const stack: { key: 'dance' | 'design' | 'data'; role: string; body: string }[] = [
  {
    key: 'data',
    role: 'Data work is the backend of my show',
    body: 'Why things work, looking into the future, finding discrepancies, and analyzing situations are all critical to the performance.',
  },
  {
    key: 'design',
    role: 'Design work is the marketing',
    body: 'Making memorable, fun, good-looking. It’s no fun if nobody bought tickets.',
  },
  {
    key: 'dance',
    role: 'Dance is the frontend',
    body: 'It’s what people come to see! Getting the crowd engaged, running promotions, and dancing until I pass out is what I enjoy most.',
  },
];

export const closing =
  'These things aren’t restrictive of one another. All 3 work together to make me complete in every stage, canvas, and dashboard.';

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
