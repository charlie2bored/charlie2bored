/**
 * When this build was made, as a New York calendar date. next.config.ts
 * stamps the instant at build time, so the server render and the browser read
 * the same value; a date taken from the clock would disagree between them and
 * trip hydration. Each deploy moves it on by itself.
 */
const stamp = new Date(process.env.NEXT_PUBLIC_BUILT_AT ?? '2026-09-11T16:00:00Z');

const part = (type: 'year' | 'month' | 'day') =>
  Number(
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric' })
      .formatToParts(stamp)
      .find((p) => p.type === type)!.value,
  );

export const built = { year: part('year'), month: part('month'), day: part('day') };

/** AP style, as a dateline sets them. */
const AP_MONTHS = ['JAN.', 'FEB.', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG.', 'SEPT.', 'OCT.', 'NOV.', 'DEC.'];

export const builtDateline = `${AP_MONTHS[built.month - 1]} ${built.day}, ${built.year}`;
