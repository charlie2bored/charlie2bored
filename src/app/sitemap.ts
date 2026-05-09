import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = ['/', '/projects', '/experience', '/contact'];
  const now = new Date();
  return paths.map((path) => ({
    url: path === '/' ? base : `${base}${path}`,
    lastModified: now,
  }));
}
