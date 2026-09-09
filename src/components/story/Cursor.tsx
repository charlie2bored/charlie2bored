'use client';

import { useEffect, useRef } from 'react';

/**
 * Trailing cursor ring that swells over anything interactive. Rendered only
 * for fine pointers, and skipped entirely under reduced motion — the native
 * cursor is never hidden, so nothing is lost if this does not run.
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    // Shown by the effect rather than by state, so the server and client
    // agree on the initial markup and no setState runs inside the effect.
    const el = ring.current;
    if (el) el.style.opacity = '1';

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let scale = 1;
    let targetScale = 1;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const el = e.target as HTMLElement | null;
      targetScale = el?.closest?.('a, button, [role="button"], input, summary') ? 2.6 : 1;
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      scale += (targetScale - scale) * 0.14;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-6 w-6 rounded-full border mix-blend-difference"
      style={{ borderColor: '#fff', willChange: 'transform', opacity: 0 }}
    />
  );
}
