/**
 * Dates as New York sees them.
 *
 * `built` is when this build was made: next.config.ts stamps the instant at
 * build time, so the server render and the browser read the same value. The
 * static page ships with it, and anything that must match on first paint
 * (the hero dateline before it goes live, the education band's "as of"
 * month) reads it. The live dateline itself is useToday.ts.
 */
const NY = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric' });

export function nyDate(d: Date) {
  const parts = NY.formatToParts(d);
  const get = (type: 'year' | 'month' | 'day') => Number(parts.find((p) => p.type === type)!.value);
  return { year: get('year'), month: get('month'), day: get('day') };
}

/** AP style, as a dateline sets them. */
const AP_MONTHS = ['JAN.', 'FEB.', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG.', 'SEPT.', 'OCT.', 'NOV.', 'DEC.'];

/** A date set for the dateline, e.g. "SEPT. 11, 2026", in New York. */
export function apDate(d: Date) {
  const { year, month, day } = nyDate(d);
  return `${AP_MONTHS[month - 1]} ${day}, ${year}`;
}

const stamp = new Date(process.env.NEXT_PUBLIC_BUILT_AT ?? '2026-09-11T16:00:00Z');

export const built = nyDate(stamp);
export const builtDateline = apDate(stamp);
