'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * SSR-safe media query. useSyncExternalStore rather than useEffect + setState:
 * the server snapshot is explicit, so there is no hydration mismatch and no
 * setState inside an effect (which this project's lint config rejects).
 */
export function useMediaQuery(query: string, serverSnapshot = false): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => serverSnapshot, [serverSnapshot]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
