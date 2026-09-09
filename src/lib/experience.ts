export type Role = {
  slug: string;
  year: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
};

export const experiences: Role[] = [
  {
    slug: 'apple-montessori',
    year: 'October 2023 to May 2026',
    title: 'Business Intelligence + Data Analytics Intern',
    company: 'Apple Montessori Schools',
    description: [
      'Automated KPI dashboards in Power BI integrating HR, Finance, and enrollment data across 20+ schools, reducing manual reporting time by 50% and saving leadership more than 15 hours monthly.',
      'Built predictive enrollment models across 20+ schools, improving forecasting accuracy by about 50% and contributing to initiatives that reduced student attrition by about 10%.',
      'Delivered real-time performance analytics that directly informed pricing strategy, staffing decisions, and market expansion planning.',
      'Integrated and cleaned 3+ years of data from multiple CRM systems and billing platforms, mapping the full customer journey and identifying conversion bottlenecks that increased enrollment rates.',
      'Supported annual tuition and fee pricing analysis, organizing complex rate and policy data across 20+ sites, validating accuracy, and enabling timely updates for open enrollment.',
      'Streamlined the acquisition process across 150+ active targets, tightening pipeline review and go/no-go decisions for leadership.',
    ],
    skills: ['Power BI', 'SQL', 'Excel', 'Python', 'Tableau', 'PowerPoint', 'Word'],
  },
  {
    slug: 'medara',
    year: 'March 2026 to Present',
    title: 'Product Designer',
    company: 'Medara',
    description: [
      'Designed the investor-facing pitch deck, one-pager, and product scorecard for a pre-FDA AI medical-imaging startup, translating the product and its clinical workflow into visuals for non-technical stakeholders.',
      'Led a full website redesign and produced the technical and clinical figures (architecture and risk-tier workflow diagrams) that communicate a complex model to investors and clinical partners.',
      'Run the site as a HubSpot super admin: publishing news and award announcements, managing marketing email, and keeping team and product pages current.',
      'Cut short-form clips from company webinars and build social carousels, turning long recorded sessions into material the team can actually post.',
    ],
    skills: ['Web & UX', 'Brand & Creative', 'Information design', 'Investor materials', 'HubSpot', 'Short-form video'],
  },
  {
    slug: 'kindling',
    year: 'May 2026 to Present',
    title: 'Web Design & Development (Contract)',
    company: 'Kindling Education Partners',
    description: [
      'Scoped and built the corporate landing page, arguing for a custom-coded site over Squarespace so the design would not be held to template constraints.',
      'Set the project up under client-owned GitHub and Vercel accounts so Kindling owns its own architecture rather than inheriting a dependency on me.',
      'Aimed the site at acquisition targets, investors, and talent rather than parents, with the existing schools carried as proof of track record and enrollment linking out to where it belongs.',
      'Built a contact form that routes acquisition, investment, careers, and general enquiries, plus a careers landing page for postings to aggregate into.',
    ],
    skills: ['Next.js', 'Tailwind CSS', 'Vercel', 'Client scoping', 'Information architecture'],
  },
  {
    slug: 'rossitech',
    year: 'August 2025 to October 2025',
    title: 'Product Designer',
    company: 'Rossitech LTD',
    description: [
      'Designed and shipped first websites for clients who didn’t have one yet, in Figma and Framer.',
      'Worked off shared token and component systems, so the same rhythm carried across mobile and desktop.',
      'Iterated with clients across rounds before handoff, tightening the click path through each page.',
    ],
    skills: ['Figma', 'Framer', 'Sketch', 'Adobe Illustrator'],
  },
];

export const performance: Role[] = [
  {
    slug: 'team-toro',
    year: 'February 2026 to Present',
    title: 'Team Toro',
    company: 'New York Red Bulls',
    description: [
      'Perform pre-game and halftime activations in front of arena-sized crowds, adjusting pacing and energy on the fly so scripted beats still land when the building is quiet or hot.',
      'Coordinate with operations and creative between games to refine cues, transitions, and choreography across the season.',
    ],
    skills: ['Live performance', 'Stagecraft', 'Cross-functional coordination'],
  },
  {
    slug: 'woo-crew',
    year: 'September 2025 to Present',
    title: '"WOO!" Crew',
    company: 'NJ Devils',
    description: [
      'Represent the team in front of 10,000+ fans per game, running on-ice activations, fan moments, and arena-floor engagement across all three periods.',
      'Hold a high-visibility brand-facing role where tone, timing, and presence have to read clearly on first contact.',
    ],
    skills: ['Live performance', 'Brand representation', 'Crowd engagement'],
  },
  {
    slug: 'academy-performing-arts',
    year: 'September 2020 to May 2024',
    title: 'Performance Ensemble Member',
    company: 'Academy for Performing Arts',
    description: [
      'Four years of conservatory-style training in classical ballet, modern (Graham/Horton), and contemporary techniques, on a daily rehearsal schedule alongside a full academic load.',
      'Performed in 8+ juried showcases and mainstage productions, working with guest choreographers, stage managers, and production teams to land complex repertoire.',
    ],
    skills: ['Performance', 'Collaboration', 'Production Support'],
  },
];

export const education = [
  {
    slug: 'northeastern-university',
    year: 'August 2024 to May 2028',
    degree: 'B.S. in Business Administration (BSBA)',
    institution: 'Northeastern University',
    location: 'New York, NY',
    description: [
      'Relevant Coursework: Business Statistics, Calculus, and Information Systems.',
      'Served as Treasurer for the Fashion Organization, efficiently managing fundraising and revenue, and creating informative and engaging digital media.',
      'Completed the McKinsey Forward Program (2026), covering strategy and execution frameworks, structured problem solving, and communication.',
    ],
  },
];
