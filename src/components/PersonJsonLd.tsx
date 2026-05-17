import { getSiteUrl } from '@/lib/site';

const sameAs = [
  'https://www.linkedin.com/in/charlie2bored/',
  'https://github.com/charlie2bored',
  'https://x.com/charlie2bored',
];

export function PersonJsonLd() {
  const siteUrl = getSiteUrl();

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Charlie Vargas',
    alternateName: 'Charlie "2bored" Vargas',
    url: siteUrl,
    sameAs,
    description:
      'BI, data, and operations analyst. I work in Power BI, SQL, and Python, mostly from a multi-year BI internship. I’ve automated KPI dashboards, built predictive enrollment models, and done pricing analysis across 20+ sites.',
    knowsAbout: [
      'Data Analytics',
      'Business Intelligence',
      'Operations Analytics',
      'SQL',
      'Python',
      'pandas',
      'Power BI',
      'Tableau',
      'KPI Dashboards',
      'Predictive Modeling',
      'Data Storytelling',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
