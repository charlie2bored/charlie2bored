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

const DEFAULT_DATA_RESUME = '/Charles-Vargas-Data.pdf';

/** Site-relative URL or HTTPS URL for the data/analytics résumé PDF. */
export function getDataResumeUrl(): string {
  const raw = process.env.NEXT_PUBLIC_RESUME_DATA_URL;
  return (typeof raw === 'string' ? raw.trim() : '') || DEFAULT_DATA_RESUME;
}

export const SUBSTACK_URL = 'https://charlie2bored.substack.com';
