import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    '/',
    '/projects',
    '/projects/clearcore',
    '/projects/nyc-d2-enrollment',
    '/projects/nyc-fare',
    '/projects/nyc-subway-events',
    '/projects/speedreader',
    '/writing',
    '/writing/electoral-college',
    '/writing/paper-schedule',
    '/experience',
    '/experience/apple-montessori',
    '/experience/medara',
    '/experience/stage-and-performance',
    '/education',
    '/education/northeastern-university',
    '/about',
  ];
  const now = new Date();
  return paths.map((path) => ({
    url: path === '/' ? base : `${base}${path}`,
    lastModified: now,
  }));
}
