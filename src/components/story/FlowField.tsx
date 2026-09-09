'use client';

import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; px: number; py: number; life: number; hue: number };

/** The three category accents, as RGB so we can vary alpha per stroke. */
const PALETTE = [
  [255, 107, 74], // dance
  [167, 139, 250], // design
  [56, 189, 248], // data
];

/**
 * Generative flow field behind the hero. Particles ride a curl-noise vector
 * field and scatter away from the pointer, leaving fading trails.
 *
 * Deliberately hand-rolled canvas rather than a library: it is the first
 * thing a visitor sees, it costs no image assets, and it reacts to them.
 *
 * Guards: capped device pixel ratio, particle count scaled to viewport area,
 * paused when off-screen or backgrounded, and a single static frame under
 * reduced motion so the composition still reads rather than vanishing.
 */
export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let frame = 0;
    let running = true;
    let t = 0;

    const pointer = { x: -9999, y: -9999, active: false };

    const ink = '#08080a';

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, width, height);

      // Roughly one particle per 1,300 px², clamped so phones stay smooth.
      const count = Math.round(Math.min(1900, Math.max(260, (width * height) / 900)));
      particles = Array.from({ length: count }, () => spawn());
    };

    const spawn = (): Particle => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        px: x,
        py: y,
        life: Math.random() * 220 + 60,
        hue: Math.floor(Math.random() * PALETTE.length),
      };
    };

    /** Cheap curl-ish noise. Layered trig reads organic without a noise lib. */
    const angleAt = (x: number, y: number) => {
      const a = Math.sin(x * 0.0021 + t * 0.28) + Math.cos(y * 0.0026 - t * 0.21);
      const b = Math.sin((x + y) * 0.0013 + t * 0.16);
      return (a + b) * 1.4;
    };

    const step = () => {
      // Fade the previous frame instead of clearing: this is what makes trails.
      ctx.fillStyle = 'rgba(8,8,10,0.042)';
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 1.15;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.px = p.x;
        p.py = p.y;

        const ang = angleAt(p.x, p.y);
        let vx = Math.cos(ang) * 1.15;
        let vy = Math.sin(ang) * 1.15;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 26000 && d2 > 0.01) {
            const f = (26000 - d2) / 26000;
            const d = Math.sqrt(d2);
            vx += (dx / d) * f * 4.2;
            vy += (dy / d) * f * 4.2;
          }
        }

        p.x += vx;
        p.y += vy;
        p.life -= 1;

        if (p.life <= 0 || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
          particles[i] = spawn();
          continue;
        }

        const [r, g, b] = PALETTE[p.hue];
        ctx.strokeStyle = `rgba(${r},${g},${b},0.62)`;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      t += 0.0032;
    };

    const loop = () => {
      if (running) step();
      frame = requestAnimationFrame(loop);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    resize();

    if (reduce) {
      // One settled composition, no animation loop at all.
      for (let i = 0; i < 420; i++) step();
      return;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerleave', onLeave);

    // Stop burning frames when the hero is scrolled away or the tab is hidden.
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting && !document.hidden;
    });
    io.observe(canvas);
    const onVisibility = () => {
      running = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ backgroundColor: 'var(--ink)' }}
    />
  );
}
