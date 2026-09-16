/**
 * The experience section: three bands, DANCE / DESIGN / DATA, each a table
 * with its dates in their own column. Picked in the experience lab over the
 * original three-column board (Figma EXPERIENCE, 2003:95), which set the date
 * in brackets on the end of each title.
 *
 * `when` is set as written, en dash between the ends. `org` is optional:
 * McKinsey Forward and the ongoing practice rows are the organisation or the
 * work itself. `line` is the one-line descriptor under each role.
 */

export type ExperienceEntry = {
  role: string;
  org?: string;
  when: string;
  line: string;
};

export type ExperienceGroup = {
  key: 'dance' | 'design' | 'data';
  heading: string;
  entries: ExperienceEntry[];
};

export const experienceHeading = 'qualified? hell yeah.';

export const experienceGroups: ExperienceGroup[] = [
  {
    key: 'dance',
    heading: 'DANCE',
    entries: [
      {
        role: 'Gen X Crew Member',
        org: 'Brickhouse NYC',
        when: 'Sept ’26 – Present',
        line: 'Made the 26–27 competition and performance crew (40+ at my audition date alone); 28 hours of training a month.',
      },
      {
        role: 'Team Toro',
        org: 'New York Red Bulls',
        when: 'Feb ’26 – Present',
        line: 'Made the team at tryouts; pre-game and halftime activations at Sports Illustrated Stadium, plus community appearances.',
      },
      {
        role: 'WOO! Crew',
        org: 'New Jersey Devils',
        when: 'Sept ’25 – Present',
        line: 'Re-auditioned and made it two seasons running (~80, then ~50 trying out). Shirt tosses, Zamboni rides, fan moments all game.',
      },
      {
        role: 'Head Martial Arts Instructor',
        org: 'Cesar-Kai Academy',
        when: '’21 – ’22',
        line: 'Second-degree black belt. Taught classes of 3 to 25, ages 4 to 17: forms, sparring and discipline.',
      },
      {
        role: 'Company Dancer',
        org: 'UCVTS APA',
        when: 'Sept ’20 – June ’24',
        line: 'Four years of conservatory training: the Cat in the Hat in Seussical, and host of the 2022–23 Art of Creation concert.',
      },
    ],
  },
  {
    key: 'design',
    heading: 'DESIGN',
    entries: [
      {
        role: 'Product Designer',
        org: 'Medara',
        when: 'Mar ’26 – Present',
        line: 'The site, moved off a WordPress template to custom code; pitch decks, research figures and marketing for a pre-FDA imaging startup.',
      },
      {
        role: 'Web Designer',
        org: 'Kindling Education Partners',
        when: 'May ’26 – Present',
        line: 'Their first website, start to finish — built custom instead of on Squarespace, kept current as they add schools.',
      },
      {
        role: 'Web Designer',
        org: 'Rossitech LTD',
        when: 'Aug ’25 – Dec ’25',
        line: 'Contract designer for a UK web agency: Figma designs for a venison supplier and a soccer coach.',
      },
      {
        role: 'Selected Projects / Practice',
        when: 'Ongoing',
        line: 'ClearCore Protein, SpeedReader, and this site — self-directed, start to finish.',
      },
    ],
  },
  {
    key: 'data',
    heading: 'DATA',
    entries: [
      {
        role: 'BI + Data Analytics Intern',
        org: 'Apple Montessori Schools',
        when: 'Oct ’23 – May ’26',
        line: 'KPI dashboards for 20+ schools, and a verified student count behind the enrollment projections.',
      },
      {
        role: 'McKinsey Forward Program',
        when: '2026',
        line: 'Completed, with certificate: structured problem solving, strategy and execution, and communication.',
      },
      {
        role: 'Selected Projects / Practice',
        when: 'Ongoing',
        line: 'A distance-based fare analysis, NYC enrollment forecasting and subway event detection.',
      },
    ],
  },
];

/** One light ground shared with the collage above and education below. */
export const boardBg = '#ece9e4';
export const boardText = '#000000';
export const boardTextDim = 'rgba(0,0,0,0.68)';
export const boardRule = '#000000';
