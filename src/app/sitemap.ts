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
    '/experience',
    '/experience/apple-montessori',
    '/experience/medara',
    '/experience/rossitech',
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
