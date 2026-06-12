import { projects } from '@/lib/projects';
import { essays } from '@/lib/essays';
import { experiences, performance, education } from '@/lib/experience';
import { getDataResumeUrl } from '@/lib/site';

export type DriveIcon =
  | 'folder'
  | 'chart'
  | 'doc'
  | 'pdf'
  | 'contact'
  | 'briefcase'
  | 'masks'
  | 'school'
  | 'code'
  | 'palette'
  | 'video';

export type DriveItem = {
  kind: 'folder' | 'file';
  icon: DriveIcon;
  color: string;
  name: string;
  modified: string;
  size: string;
  info: string;
  href: string;
  external?: boolean;
  download?: boolean;
  anchorId?: string;
  writeupHref?: string;
  egg?: 'stage';
};

const GRAY = '#444746';
const DOC_BLUE = '#2684FC';
const SHEET_GREEN = '#11A861';
const SLIDE_YELLOW = '#FFCF63';
const PDF_RED = '#d93025';

const projectModified: Record<string, string> = {
  'nyc-d2-enrollment': 'Jun 2026',
  'nyc-subway-events': 'May 2026',
  'nyc-fare': 'May 2026',
  'clearcore-protein': 'Apr 2026',
  speedreader: '2025',
};

const projectIcon: Record<string, { icon: DriveIcon; color: string }> = {
  data: { icon: 'chart', color: SHEET_GREEN },
  design: { icon: 'palette', color: SLIDE_YELLOW },
  other: { icon: 'code', color: GRAY },
};

export function rootItems(): DriveItem[] {
  return [
    {
      kind: 'folder',
      icon: 'folder',
      color: GRAY,
      name: 'Projects',
      modified: 'Jun 2026',
      size: `${projects.length} items`,
      info: 'Three data analyses, one design build, one for-fun build. The data work leads.',
      href: '/projects',
    },
    {
      kind: 'folder',
      icon: 'folder',
      color: GRAY,
      name: 'Writing',
      modified: 'May 2026',
      size: `${essays.length} items`,
      info: 'Essays on transit, data, and operations.',
      href: '/writing',
    },
    {
      kind: 'folder',
      icon: 'folder',
      color: GRAY,
      name: 'Experience',
      modified: 'Jun 2026',
      size: `${experiences.length + 1} items`,
      info: 'BI internship, product design, and stage work.',
      href: '/experience',
    },
    {
      kind: 'folder',
      icon: 'folder',
      color: GRAY,
      name: 'Education',
      modified: 'Aug 2024 – May 2028',
      size: '1 item',
      info: 'BSBA at Northeastern University.',
      href: '/education',
    },
    {
      kind: 'file',
      icon: 'doc',
      color: DOC_BLUE,
      name: 'README.md',
      modified: 'Jun 2026',
      size: '2 KB',
      info: 'I’m a BI and operations analyst. I work mostly in Power BI, SQL, and Python. My multi-year BI internship taught me what a working BI operation actually does.',
      href: '/about',
    },
    {
      kind: 'file',
      icon: 'pdf',
      color: PDF_RED,
      name: 'Resume.pdf',
      modified: 'Jun 11, 2026',
      size: '198 KB',
      info: 'Data résumé, June 2026 revision. Downloads the real PDF.',
      href: getDataResumeUrl(),
      external: true,
      download: true,
    },
    {
      kind: 'file',
      icon: 'contact',
      color: SHEET_GREEN,
      name: 'Contact.vcf',
      modified: '—',
      size: '1 KB',
      info: 'iamcharlesvargas@gmail.com · New York City · GitHub, LinkedIn, Twitter. Downloads a real contact card.',
      href: '/Contact.vcf',
      external: true,
      download: true,
    },
  ];
}

export function projectItems(): DriveItem[] {
  return projects.map((p) => {
    const demo = p.links.demo;
    return {
      kind: 'file' as const,
      ...projectIcon[p.category],
      name: p.title,
      modified: projectModified[p.slug] ?? '—',
      size: '—',
      info: p.hoverMetric,
      href: demo || `/preview/${p.slug}`,
      external: Boolean(demo),
      anchorId: p.slug,
      writeupHref: p.caseStudy,
    };
  });
}

export function writingItems(): DriveItem[] {
  return essays.map((e) => ({
    kind: 'file' as const,
    icon: 'doc' as const,
    color: DOC_BLUE,
    name: e.title,
    modified: e.date,
    size: e.readingTime,
    info: e.description,
    href: e.url,
    external: true,
  }));
}

export function experienceItems(): DriveItem[] {
  const roles = experiences.map((r) => ({
    kind: 'file' as const,
    icon: 'briefcase' as const,
    color: GRAY,
    name: r.company,
    modified: r.year.replace(' to ', ' – '),
    size: '—',
    info: `${r.title}. ${r.description[0]}`,
    href: `/experience/${r.slug}`,
  }));
  return [
    ...roles,
    {
      kind: 'file',
      icon: 'masks',
      color: GRAY,
      name: 'Stage & Performance',
      modified: '2020 – present',
      size: `${performance.length} items`,
      info: 'Team Toro (NY Red Bulls), “WOO!” Crew (NJ Devils), and four years of conservatory training at the Academy for Performing Arts.',
      href: '/experience/stage-and-performance',
    },
    {
      kind: 'file',
      icon: 'video',
      color: PDF_RED,
      name: 'IMG_4821.MOV',
      modified: '—',
      size: '—',
      info: 'Looks like a stray phone upload. Open it.',
      href: '/experience',
      egg: 'stage',
    },
  ];
}

export type SearchEntry = {
  name: string;
  href: string;
  external?: boolean;
  icon: DriveIcon;
  color: string;
  location: string;
};

export function searchIndex(): SearchEntry[] {
  const wrap = (items: DriveItem[], location: string): SearchEntry[] =>
    items.map(({ name, href, external, icon, color }) => ({ name, href, external, icon, color, location }));
  return [
    ...wrap(rootItems(), 'Charlie Vargas'),
    ...wrap(projectItems(), 'Projects'),
    ...wrap(writingItems(), 'Writing'),
    ...wrap(experienceItems(), 'Experience'),
    ...wrap(educationItems(), 'Education'),
  ];
}

export const recommendedSearches = [
  'Apple Montessori Schools',
  'NYC Distance-Based Fare Analysis',
  'NYC District 2 Elementary Enrollment Forecasting',
];

export function educationItems(): DriveItem[] {
  return education.map((e) => ({
    kind: 'file' as const,
    icon: 'school' as const,
    color: GRAY,
    name: e.institution,
    modified: e.year.replace(' to ', ' – '),
    size: '—',
    info: `${e.degree}. ${e.description[0]}`,
    href: `/education/${e.slug}`,
  }));
}
