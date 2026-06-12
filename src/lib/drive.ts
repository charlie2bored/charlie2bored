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
  | 'palette';

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
      size: '3 items',
      info: 'BI internship, product design, and stage work.',
      href: '/experience',
    },
    {
      kind: 'folder',
      icon: 'folder',
      color: GRAY,
      name: 'Education',
      modified: 'Aug 2024 – present',
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
      info: 'I’m a BI and operations analyst. I work mostly in Power BI, SQL, and Python. The last 2 years of my BI internship taught me what a working BI operation actually does.',
      href: '/about',
    },
    {
      kind: 'file',
      icon: 'pdf',
      color: PDF_RED,
      name: 'Resume.pdf',
      modified: 'May 26, 2026',
      size: '198 KB',
      info: 'Data résumé, May 2026 revision. Downloads the real PDF.',
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
  return projects.map((p) => ({
    kind: 'file' as const,
    ...projectIcon[p.category],
    name: p.title,
    modified: projectModified[p.slug] ?? '—',
    size: '—',
    info: p.hoverMetric,
    href: p.href,
    anchorId: p.slug,
  }));
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
    href: e.href,
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
  ];
}

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
