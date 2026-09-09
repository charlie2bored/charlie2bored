import { categories } from '@/lib/story';

/**
 * Continuous ticker between the story and the selector. Pure CSS so it costs
 * nothing, and the track is duplicated so the loop has no visible seam.
 */
export default function Marquee() {
  const items = [...categories, ...categories, ...categories];

  return (
    <div
      className="marquee relative flex overflow-hidden border-y py-5"
      style={{ borderColor: 'var(--rule)' }}
      aria-hidden="true"
    >
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {items.map((c, i) => (
          <span key={`${c.key}-${i}`} className="flex shrink-0 items-center gap-10">
            <span
              className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold uppercase tracking-[-0.03em]"
              style={{ color: 'var(--paper)' }}
            >
              {c.label}
            </span>
            <span className="text-[1.4rem]" style={{ color: c.accent }}>
              &bull;
            </span>
          </span>
        ))}
      </div>
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {items.map((c, i) => (
          <span key={`dup-${c.key}-${i}`} className="flex shrink-0 items-center gap-10">
            <span
              className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold uppercase tracking-[-0.03em]"
              style={{ color: 'var(--paper)' }}
            >
              {c.label}
            </span>
            <span className="text-[1.4rem]" style={{ color: c.accent }}>
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
