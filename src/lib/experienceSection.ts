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
      { title: 'Gen X Crew Member - Brickhouse NYC (Sept. ’26 - Present)' },
      { title: 'Team Toro - New York Red Bulls (Feb. ’26 - Present)' },
      { title: 'WOO! Crew - New Jersey Devils (Sept. ’25 - Present)' },
      { title: 'Head Martial Arts Instructor - Cesar-Kai Academy (’21 - ’22)' },
      { title: 'Company Dancer - UCVTS APA (Sept. ’20 - June ’24)' },
    ],
  },
  {
    key: 'design',
    heading: 'DESIGN',
    entries: [
      { title: 'Product Designer - Medara (Mar. ’26 - Present)' },
      { title: 'Web Designer - Kindling Education Partners (May ’26 - Present)' },
      { title: 'Web Designer - Rossitech LTD (Aug. ’25 - Dec. ’25)' },
      { title: 'Selected Projects / Practice - (Ongoing)' },
    ],
  },
  {
    key: 'data',
    heading: 'DATA',
    entries: [
      { title: 'BI + Data Analytics Intern - Apple Montessori Schools (Oct. ’23 - May ’26)' },
      { title: 'Operations - Kindling Education Partners (May ’26 - Present)' },
      { title: 'McKinsey Forward Program (2026)' },
      { title: 'Selected Projects / Practice - (Ongoing)' },
    ],
  },
];

/**
 * Ground shared with the collage above, so the two light sections read as one
 * surface. Columns stay a step darker than the ground, preserving the
 * relationship in the Figma frame (panels tinted against a lighter page).
 */
export const boardBg = '#ece9e4';
export const boardColumn = '#dbd7d1';
