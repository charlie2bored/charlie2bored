/**
 * The site's structured data: one @graph, so every node can point at the
 * others by @id instead of repeating itself.
 *
 * The homepage is a scroll-driven story — an assistant reading the rendered
 * HTML gets all the words but has to infer what is a job, what is a school
 * and what is a project. This states it outright: the Person, the schools and
 * employers as real Organizations, and the four data projects as CreativeWork
 * with their actual repositories attached. Everything here is drawn from the
 * section data so it cannot drift from the page (and from /llms.txt, which
 * reads the same modules).
 */

import { dataChapters } from '@/lib/data';
import { experienceGroups, type ExperienceGroup } from '@/lib/experienceSection';
import { schools } from '@/lib/education';
import { contact } from '@/lib/nav';
import { summary } from '@/lib/llms';
import { SUBSTACK_URL, getSiteUrl } from '@/lib/site';

const sameAs = [
  'https://www.linkedin.com/in/charlie2bored/',
  'https://github.com/charlie2bored',
  'https://x.com/charlie2bored',
  'https://www.instagram.com/charlie2bored/',
  SUBSTACK_URL,
];

/** Homepages for the organisations named on the board, where they have one. */
const orgUrls: Record<string, string> = {
  'Apple Montessori Schools': 'https://www.applemontessorischools.com/',
  'New York Red Bulls': 'https://www.newyorkredbulls.com/',
  'New Jersey Devils': 'https://www.nhl.com/devils/',
  'Brickhouse NYC': 'https://www.brickhousenyc.com/',
  Medara: 'https://medara.co/',
  'Kindling Education Partners': 'https://kindlingep.com/',
  UCVTS: 'https://www.ucvts.tec.nj.us/',
  KEAN: 'https://www.kean.edu/',
  NORTHEASTERN: 'https://www.northeastern.edu/',
};

const org = (name: string) => ({
  '@type': 'Organization',
  name,
  ...(orgUrls[name] ? { url: orgUrls[name] } : {}),
});

const MONTHS: Record<string, string> = {
  jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
};

/**
 * The closing end of a written span as an ISO 8601 date, or nothing.
 *
 * The board writes its dates for a reader — "Oct '23 - May '26", "'21 - '22",
 * "Ongoing" — and schema.org wants a machine date, so only what is actually
 * written is emitted: a month and year where the board gives a month, a bare
 * year where it gives a year, and nothing at all for an open or ongoing span.
 */
function endDateOf(when: string): string | undefined {
  if (/present|ongoing/i.test(when)) return undefined;
  const tail = when.split(/[\u2013\u2014-]/).pop()?.trim() ?? '';
  const match = tail.match(/^(?:([A-Za-z]+)\s+)?[\u2018\u2019']?(\d{2,4})$/);
  if (!match) return undefined;
  const [, month, digits] = match;
  const year = digits.length === 2 ? `20${digits}` : digits;
  const mm = month ? MONTHS[month.slice(0, 3).toLowerCase()] : undefined;
  return mm ? `${year}-${mm}` : year;
}

/**
 * A board entry as schema.org's Role wrapper, which may stand in anywhere an
 * Organization is expected. The Role repeats the property it was reached by —
 * `worksFor` inside `worksFor` — which is how the pattern is specified.
 */
function organizationRoles(property: 'worksFor' | 'memberOf', keys: ExperienceGroup['key'][]) {
  return experienceGroups
    .filter((g) => keys.includes(g.key))
    .flatMap((g) => g.entries)
    .filter((e) => e.org)
    .map((e) => {
      const endDate = endDateOf(e.when);
      return {
        '@type': 'OrganizationRole',
        roleName: e.role,
        description: e.line,
        ...(endDate ? { endDate } : {}),
        [property]: org(e.org!),
      };
    });
}

function educationalOrganizations() {
  return schools.map((s) => ({
    '@type': 'CollegeOrUniversity',
    name: s.fullName,
    alternateName: s.name,
    description: s.line,
    ...(orgUrls[s.name] ? { url: orgUrls[s.name] } : {}),
  }));
}

/** Each data chapter as its own work, with the repository or live site on it. */
function projects(siteUrl: string, personId: string) {
  return dataChapters
    .filter((c) => c.group === 'Projects')
    .map((c) => {
      const code = c.links?.find((l) => l.href.includes('github.com'));
      const live = c.links?.find((l) => !l.href.includes('github.com'));
      return {
        '@type': code ? 'SoftwareSourceCode' : 'CreativeWork',
        '@id': `${siteUrl}/#project-${c.num}`,
        name: c.title,
        headline: c.title,
        abstract: c.problem,
        description: `${c.did} ${c.result}`,
        author: { '@id': personId },
        creator: { '@id': personId },
        isPartOf: { '@id': `${siteUrl}/#webpage` },
        keywords: c.tools.join(', '),
        ...(code ? { codeRepository: code.href, programmingLanguage: 'Python' } : {}),
        ...(live ? { url: live.href } : { url: `${siteUrl}/#data` }),
      };
    });
}

export function PersonJsonLd() {
  const siteUrl = getSiteUrl();
  const personId = `${siteUrl}/#charlie`;

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Charlie Vargas',
    alternateName: ['Charlie "2bored" Vargas', 'Charles Vargas', '2bored'],
    url: siteUrl,
    mainEntityOfPage: { '@id': `${siteUrl}/#webpage` },
    sameAs,
    email: `mailto:${contact.email}`,
    telephone: contact.phone,
    jobTitle: ['Business Intelligence Analyst', 'Product Designer', 'Performer'],
    description: summary,
    homeLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
    },
    workLocation: ['New York, NY', 'New Jersey', 'Connecticut', 'Remote'].map((name) => ({ '@type': 'Place', name })),
    alumniOf: educationalOrganizations(),
    worksFor: organizationRoles('worksFor', ['data', 'design']),
    memberOf: organizationRoles('memberOf', ['dance']),
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Business Intelligence and Operations Analyst',
        skills: 'Power BI, SQL, Python, pandas, forecasting, KPI dashboards, data storytelling',
      },
      { '@type': 'Occupation', name: 'Product and Web Designer', skills: 'Figma, Next.js, TypeScript, brand and editorial design' },
    ],
    hasOccupationalCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'McKinsey Forward Program', credentialCategory: 'certificate' },
      { '@type': 'EducationalOccupationalCredential', name: 'Second-degree black belt', credentialCategory: 'certification' },
    ],
    knowsAbout: [
      'Data Analytics', 'Business Intelligence', 'Operations Analytics', 'SQL', 'Python', 'pandas',
      'Power BI', 'Tableau', 'KPI Dashboards', 'Forecasting', 'Predictive Modeling', 'Data Storytelling',
      'Product Design', 'Web Design', 'Front-end Development', 'Dance', 'Hip-hop Performance',
    ],
  };

  const graph = [
    person,
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Charlie Vargas',
      inLanguage: 'en-US',
      publisher: { '@id': personId },
      about: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Charlie Vargas | Dance, Design & Data',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': personId },
      mainEntity: { '@id': personId },
      inLanguage: 'en-US',
      significantLink: [`${siteUrl}/llms.txt`, `${siteUrl}/llms-full.txt`],
    },
    ...projects(siteUrl, personId),
  ];

  const data = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
