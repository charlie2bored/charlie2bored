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
      'Analyst, designer, and performer. A 2.5-year BI internship automating KPI dashboards across 20+ school sites, investor and clinical design work for a pre-FDA medical-imaging startup, and arena performance for the New York Red Bulls and NJ Devils.',
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
