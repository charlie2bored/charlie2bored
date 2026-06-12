import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    '/',
    '/projects',
    '/projects/clearcore',
    '/projects/nyc-d2-enrollment',
    '/projects/nyc-subway-events',
    '/writing',
    '/writing/electoral-college',
    '/writing/paper-schedule',
    '/experience',
    '/about',
  ];
  const now = new Date();
  return paths.map((path) => ({
    url: path === '/' ? base : `${base}${path}`,
    lastModified: now,
  }));
}
