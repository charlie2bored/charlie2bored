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
      'Product design, social media, and UI/UX, with business intelligence and analytics (Power BI, SQL, Python), for roles where outcomes must be supported with data.',
    knowsAbout: [
      'Data Analytics',
      'Business Intelligence',
      'SQL',
      'Python',
      'UI/UX Design',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
