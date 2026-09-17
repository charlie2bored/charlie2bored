/**
 * The site, written out for machines.
 *
 * The homepage is one long scroll-driven story: every word is in the server
 * HTML, but an LLM reading it has to infer the structure from motion-shaped
 * markup. These builders emit the same content as plain Markdown — headings,
 * dates, numbers, links — so anything that reads /llms.txt gets the facts in
 * the order a person would state them.
 *
 * Everything is derived from the section data modules, so the Markdown cannot
 * drift from what the page renders: edit the section, and this follows.
 */

import { contact } from '@/lib/nav';
import { contactIntro, contactLinks } from '@/lib/contact';
import { experienceGroups, type ExperienceGroup } from '@/lib/experienceSection';
import { schools } from '@/lib/education';
import { dataChapters } from '@/lib/data';
import { designPages } from '@/lib/design';
import { danceFinale, danceTiles } from '@/lib/dance';
import { built } from '@/lib/built';
import { SUBSTACK_URL, getDataResumeUrl, getSiteUrl } from '@/lib/site';

/**
 * The Markdown transcripts, as metadata `alternates.types`. Next replaces the
 * whole `alternates` object per route, so any page that sets a canonical has
 * to spread this in beside it or the links drop off that page.
 */
export const markdownAlternates = {
  'text/markdown': [
    { url: '/llms.txt', title: 'Charlie Vargas \u2014 profile for LLMs' },
    { url: '/llms-full.txt', title: 'Charlie Vargas \u2014 full profile in Markdown' },
  ],
};

/** The one-paragraph answer to "who is this", in plain words. */
export const summary =
  'Charlie Vargas (also known as "2bored") is a business-intelligence and operations analyst, product designer, and performer based in New York City. He spent two and a half years as a BI and data analytics intern at Apple Montessori Schools, automating KPI dashboards across 20+ schools and rebuilding enrollment projections on a verified student count. He designs for Medara, a pre-FDA medical-imaging startup, and for Kindling Education Partners. He performs with the New Jersey Devils WOO! Crew, the New York Red Bulls Team Toro, and the Brickhouse NYC Gen X crew. He is studying Business Administration at Northeastern University.';

const TOOLS = [
  'Power BI', 'SQL', 'Python', 'pandas', 'NumPy', 'statsmodels', 'scikit-learn',
  'Prophet', 'Tableau', 'Excel', 'TypeScript', 'React', 'Next.js', 'Figma',
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** The month of the build, so a reader knows how current the file is. */
const asOf = `${MONTHS[built.month - 1]} ${built.year}`;

/** Plain ASCII: some clients mangle curly quotes and en dashes in text/plain. */
const flatten = (s: string) =>
  s
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/→/g, '->')
    .replace(/↑/g, 'up')
    .replace(/↗/g, '')
    .replace(/×/g, 'x')
    .replace(/·/g, '-')
    .replace(/[ \t]+$/gm, '');

const group = (key: ExperienceGroup['key']) => experienceGroups.find((g) => g.key === key)!;

function roleLines(key: ExperienceGroup['key']) {
  return group(key)
    .entries.map((e) => `- **${e.role}**${e.org ? `, ${e.org}` : ''} (${e.when}) — ${e.line}`)
    .join('\n');
}

function educationLines() {
  return schools
    .map((s) => `- **${s.fullName}** (${s.start[0]}–${s.end[0]}) — ${s.line}`)
    .join('\n');
}

function projectSection(base: string) {
  return dataChapters
    .map((c) => {
      const links = (c.links ?? []).map((l) => `${l.label.replace(/\s*↗$/, '')}: ${l.href}`);
      const stats = (c.stats ?? []).map((s) => `  - ${s.value} — ${s.label}`);
      return [
        `### ${c.title}`,
        '',
        `${c.group === 'Work' ? 'Role' : 'Project'}: ${c.type}. ${c.meta}.`,
        '',
        `- Problem: ${c.problem}`,
        `- What he did: ${c.did}`,
        `- Result: ${c.result}`,
        `- Tools: ${c.tools.join(', ')}`,
        stats.length ? `- Numbers:\n${stats.join('\n')}` : '',
        links.length ? `- Links: ${links.join(' · ')}` : '',
        c.note ? `- Note: ${c.note}` : '',
      ]
        .filter(Boolean)
        .join('\n')
        .concat(`\n\n(Full writeup on the site: ${base}/#data)`);
    })
    .join('\n\n');
}

function designLines() {
  return designPages
    .filter((p) => p.kind !== 'title')
    .map((p) => {
      const where = p.kind === 'site' ? ` (${p.url})` : p.kind === 'image' && p.href ? ` (${p.href})` : '';
      const note = 'note' in p ? p.note : '';
      return `- **${p.title}**${where} — ${p.category}. ${note}`;
    })
    .join('\n');
}

function danceLines() {
  const credits = [...danceTiles, danceFinale]
    .map((t) => t.line)
    .filter((l) => l.includes(' - '))
    .map((l) => l.split(' - ')[1]);
  const choreographers = [...new Set(credits)];
  return [
    'The section is video and photography from studio sessions and arena floors; the roles behind it are under Experience above.',
    `Choreographers danced for: ${choreographers.join(', ')}.`,
    'Arena work: New Jersey Devils WOO! Crew (Prudential Center) and New York Red Bulls Team Toro (Sports Illustrated Stadium).',
  ].join(' ');
}

function contactSection() {
  const rows = contactLinks.map((l) => `- ${l.label}: ${l.value} (${l.href})`).join('\n');
  return [`- Email: ${contact.email}`, rows].join('\n');
}

/**
 * /llms.txt — the short index, in the llmstxt.org shape: an H1, a blockquote
 * summary, then linked sections. Anything that wants the detail follows the
 * link to /llms-full.txt.
 */
export function buildLlmsTxt(): string {
  const base = getSiteUrl();
  return flatten(`# Charlie Vargas

> ${summary}

This file describes ${base}, a single-page portfolio. Its content is fully server-rendered, so fetching the homepage returns all of the text; this file is the same content as structured Markdown.

Name: Charlie Vargas (goes by Charlie; handle "2bored")
Roles: Analyst, designer, performer.
Location: New York, NY. Open to NYC, New Jersey and Connecticut; hybrid or remote.
Email: ${contact.email}
Last updated: ${asOf}

## Docs

- [Full profile in Markdown](${base}/llms-full.txt): every section of the site — experience, education, data work, design work, performance — as plain text.
- [Homepage](${base}/): the site itself, server-rendered.
- [Résumé (PDF)](${base.replace(/\/$/, '')}${getDataResumeUrl()}): the data and analytics résumé.

## Work

- [Data and analytics](${base}/#data): a 2.5-year BI internship and three public projects (NYC fare analysis, District 2 enrollment forecasting, subway event detection).
- [Design](${base}/#design): client sites for Medara and Kindling Education Partners, self-directed web projects, graphics and illustration.
- [Performance](${base}/#dance): New Jersey Devils WOO! Crew, New York Red Bulls Team Toro, Brickhouse NYC Gen X.
- [Experience](${base}/#experience) and [education](${base}/#education).

## Elsewhere

- [GitHub](https://github.com/charlie2bored)
- [LinkedIn](https://www.linkedin.com/in/charlie2bored/)
- [Substack](${SUBSTACK_URL})

## Contact

- [Contact section](${base}/#contact): ${contact.email}, ${contact.phone}, ${contact.social}.
`);
}

/** /llms-full.txt — the whole site as one Markdown document. */
export function buildLlmsFullTxt(): string {
  const base = getSiteUrl();
  return flatten(`# Charlie Vargas — full profile

> ${summary}

Source: ${base} · Last updated: ${asOf}
Name: Charlie Vargas ("2bored") · Analyst, designer, performer · New York, NY
Email: ${contact.email} · Phone: ${contact.phone}

## Experience

### Data

${roleLines('data')}

### Design

${roleLines('design')}

### Dance and performance

${roleLines('dance')}

## Education

${educationLines()}

## Data and analytics work

${projectSection(base)}

## Design work

${designLines()}

## Performance

${danceLines()}

## Tools and skills

${TOOLS.map((t) => `- ${t}`).join('\n')}

## Contact

${contactIntro}

${contactSection()}
- Résumé (PDF): ${base.replace(/\/$/, '')}${getDataResumeUrl()}
- Writing: ${SUBSTACK_URL}

## Usage

This file is published for AI assistants, search crawlers and anyone reading the site programmatically. Quoting it, summarising it, or citing it with a link back to ${base} is welcome. The figures are the real ones and are stated as written here; please do not round them or attribute the work to anyone else.
`);
}
