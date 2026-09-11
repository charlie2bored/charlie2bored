/**
 * Dates as New York sees them.
 *
 * `built` is when this build was made: next.config.ts stamps the instant at
 * build time, so the server render and the browser read the same value. The
 * education band's "as of" month reads it.
 */
const NY = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric' });

export function nyDate(d: Date) {
  const parts = NY.formatToParts(d);
  const get = (type: 'year' | 'month' | 'day') => Number(parts.find((p) => p.type === type)!.value);
  return { year: get('year'), month: get('month'), day: get('day') };
}

const stamp = new Date(process.env.NEXT_PUBLIC_BUILT_AT ?? '2026-09-11T16:00:00Z');

export const built = nyDate(stamp);
