import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/story';

/**
 * Full-bleed band that names the next category over its own artwork, so the
 * end of a category page is a door rather than a dead end.
 */
export default function NextUp({ categories: others }: { categories: Category[] }) {
  return (
    <nav aria-label="Other categories" className="mt-24">
      {others.map((other) => {
        const art = other.works.find((w) => w.image);
        return (
          <Link
            key={other.key}
            href={other.href}
            className="nextup group relative isolate flex min-h-[34vh] items-end overflow-hidden border-t lg:min-h-[42vh]"
            style={{ borderColor: 'var(--rule)' }}
          >
            <span aria-hidden="true" className="nextup-art absolute inset-0 -z-10">
              {art?.image ? (
                <Image
                  src={art.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: art.focus ?? '50% 50%' }}
                />
              ) : (
                <span
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(150deg, ${other.accent}cc 0%, ${other.accent}55 45%, var(--ink) 100%)`,
                  }}
                />
              )}
              <span
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(135deg, #00000030 0px, #00000030 2px, transparent 2px, transparent 11px)',
                }}
              />
            </span>

            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'linear-gradient(to top, rgba(6,6,8,0.96) 0%, rgba(6,6,8,0.82) 45%, rgba(6,6,8,0.6) 100%)',
              }}
            />

            <span className="relative flex w-full flex-wrap items-baseline gap-x-4 gap-y-1 p-6 lg:p-10">
              <span
                className="font-mono-label text-[10px] uppercase tracking-[0.2em]"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Next
              </span>
              <span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.4)' }}>
                —
              </span>
              <span
                className="font-display text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.035em]"
                style={{ color: '#fff' }}
              >
                {other.label}
              </span>
              <span
                className="font-mono-label ml-auto self-center text-[10px] uppercase tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: other.accent }}
              >
                {other.line} →
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
