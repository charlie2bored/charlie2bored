'use client';

import { useSyncExternalStore } from 'react';
import { apDate, builtDateline } from '@/lib/built';

/*
 * Checked once a minute, so a page left open past midnight rolls over. The
 * snapshot is a string, so React only re-renders when the day changes.
 */
const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
};
const today = () => apDate(new Date());
const atBuild = () => builtDateline;

/**
 * Today's date in New York, set for the dateline ("SEPT. 11, 2026").
 *
 * The page is static, so the server renders the build date; React hydrates
 * with that (no mismatch), then swaps in the real day at once.
 */
export function useToday(): string {
  return useSyncExternalStore(subscribe, today, atBuild);
}
