/**
 * Canonical site URL for SEO, OG tags, and JSON-LD.
 * Override in production: NEXT_PUBLIC_SITE_URL=https://yourdomain.com
 */
export function getSiteUrl(): string {
  const raw =
    typeof process.env.NEXT_PUBLIC_SITE_URL === 'string'
      ? process.env.NEXT_PUBLIC_SITE_URL.trim()
      : '';
  if (raw) return raw.replace(/\/$/, '');
  return 'https://charlie2bored.vercel.app';
}
