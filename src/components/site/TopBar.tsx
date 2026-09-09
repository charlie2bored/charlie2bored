'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import RailPanel from '@/components/site/RailPanel';
import { owner } from '@/lib/nav';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

/**
 * Slim persistent bar plus the summoned rail overlay.
 *
 * Scrolling back to the top rejoins the split hero on its own, so this exists
 * for the case that actually matters: reaching another part of the site from
 * deep in the page without scrolling all the way back up.
 */
export default function TopBar() {
  const [open, setOpen] = useState(false);
  const reduce = usePrefersReducedMotion();

  // Escape closes, and the page must not scroll behind the overlay.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md"
          style={{ backgroundColor: 'rgba(10,10,12,0.55)' }}
        >
          <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
            <span className="h-px w-full" style={{ backgroundColor: 'var(--rail-fg)' }} />
            <span className="h-px w-full" style={{ backgroundColor: 'var(--rail-fg)' }} />
            <span className="h-px w-full" style={{ backgroundColor: 'var(--rail-fg)' }} />
          </span>
        </button>

        <span
          className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] backdrop-blur-md"
          style={{ backgroundColor: 'rgba(10,10,12,0.55)', color: 'var(--rail-dim)' }}
        >
          {owner.name}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="rail-overlay"
            className="fixed inset-0 z-50"
            initial={reduce ? false : { x: '-100%' }}
            animate={{ x: '0%' }}
            exit={reduce ? { opacity: 0 } : { x: '-100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="relative h-full w-full max-w-md" style={{ backgroundColor: 'var(--rail-bg)' }}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 z-10 text-[18px] leading-none"
                style={{ color: 'var(--rail-fg)' }}
              >
                &times;
              </button>
              <RailPanel onNavigate={() => setOpen(false)} />
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-y-0 right-0 left-0 -z-10 w-full cursor-default"
              style={{ backgroundColor: 'rgba(6,6,8,0.6)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
