/**
 * The three-column experience board, transcribed from the Figma frame
 * EXPERIENCE (2003:95).
 *
 * `line` is the one-line descriptor under each role. The layout reserves
 * room for it whether or not it is filled, so adding copy later does not
 * reflow the board.
 */

export type ExperienceEntry = {
  title: string;
  line?: string;
};

export type ExperienceColumn = {
  key: 'dance' | 'design' | 'data';
  heading: string;
  entries: ExperienceEntry[];
};

export const experienceHeading = 'qualified? hell yeah.';

export const experienceColumns: ExperienceColumn[] = [
  {
    key: 'dance',
    heading: 'DANCE',
    entries: [
      {
        title: 'Gen X Crew Member - Brickhouse NYC (Sept. ’26 - Present)',
        line: 'Auditioned for 26-27 crew, participating in 28 hours of dance training a month.',
      },
      {
        title: 'Team Toro - New York Red Bulls (Feb. ’26 - Present)',
        line: 'Pre-game and halftime activations at Sports Illustrated Stadium, plus community appearances.',
      },
      {
        title: 'WOO! Crew - New Jersey Devils (Sept. ’25 - Present)',
        line: 'On-ice activations and arena-floor engagement across all three periods at Prudential Center.',
      },
      {
        title: 'Head Martial Arts Instructor - Cesar-Kai Academy (’21 - ’22)',
        line: 'Taught forms and sparring; coached students in discipline, focus, and body control.',
      },
      {
        title: 'Company Dancer - UCVTS APA (Sept. ’20 - June ’24)',
        line: 'Four years of conservatory training; 8+ showcases and mainstage productions.',
      },
    ],
  },
  {
    key: 'design',
    heading: 'DESIGN',
    entries: [
      {
        title: 'Product Designer - Medara (Mar. ’26 - Present)',
        line: 'The site, moved off a WordPress template to custom code; pitch decks, research figures and marketing for a pre-FDA imaging startup.',
      },
      {
        title: 'Web Designer - Kindling Education Partners (May ’26 - Present)',
        line: 'Their first website, start to finish — built custom instead of on Squarespace, kept current as they add schools.',
      },
      {
        title: 'Web Designer - Rossitech LTD (Aug. ’25 - Dec. ’25)',
        line: 'First websites for clients who had none, in Figma and Framer.',
      },
      {
        title: 'Selected Projects / Practice - (Ongoing)',
        line: 'ClearCore Protein, SpeedReader, and this site — self-directed, start to finish.',
      },
    ],
  },
  {
    key: 'data',
    heading: 'DATA',
    entries: [
      {
        title: 'BI + Data Analytics Intern - Apple Montessori Schools (Oct. ’23 - May ’26)',
        line: 'KPI dashboards for 20+ schools, and a verified student count behind the enrollment projections.',
      },
      {
        title: 'McKinsey Forward Program (2026)',
        line: 'Strategy and execution frameworks, structured problem solving, communication.',
      },
      {
        title: 'Selected Projects / Practice - (Ongoing)',
        line: 'A distance-based fare analysis, NYC enrollment forecasting and subway event detection.',
      },
    ],
  },
];

/**
 * One light ground for the collage and the board, so the middle of the page is
 * a single continuous surface. The columns are not tinted panels — they are
 * the same ground, and the dividers are what create them. Tinting them first
 * would mean the bars only draw lines on blocks that already exist.
 */
export const boardBg = '#ece9e4';
export const boardText = '#000000';
export const boardTextDim = 'rgba(0,0,0,0.68)';
export const boardRule = '#000000';
