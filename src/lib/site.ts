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

function trimPublicEnv(key: string): string {
  const v = typeof process.env[key] === 'string' ? process.env[key]!.trim() : '';
  return v;
}

const DEFAULT_UX_RESUME = '/Charles-Vargas-UX-Product.pdf';
const DEFAULT_DATA_RESUME = '/Charles-Vargas-Data.pdf';

/** Site-relative URL or HTTPS URL for the UX/product résumé PDF. */
export function getUxResumeUrl(): string {
  return (
    trimPublicEnv('NEXT_PUBLIC_RESUME_UX_URL') ||
    trimPublicEnv('NEXT_PUBLIC_RESUME_URL') ||
    DEFAULT_UX_RESUME
  );
}

/** Site-relative URL or HTTPS URL for the data/analytics résumé PDF. */
export function getDataResumeUrl(): string {
  return trimPublicEnv('NEXT_PUBLIC_RESUME_DATA_URL') || DEFAULT_DATA_RESUME;
}

/** @deprecated Prefer getUxResumeUrl for clarity. Maps to the same value as UX résumé. */
export function getPublicResumeUrl(): string {
  return getUxResumeUrl();
}
