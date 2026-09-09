import Image from 'next/image';
import Link from 'next/link';
import type { Category, Work } from '@/lib/story';
import { categories } from '@/lib/story';

function WorkFigure({ work, accent }: { work: Work; accent: string }) {
  return (
    <div
      className="overflow-hidden rounded-md border"
      style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--ink-raised)' }}
    >
      <div className="relative aspect-[16/9]">
        {work.image ? (
          <Image
            src={work.image}
            alt={`${work.title} — preview`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="flex h-full w-full items-end p-4"
            style={{
              backgroundImage: `repeating-linear-gradient(135deg, ${accent}14 0px, ${accent}14 1px, transparent 1px, transparent 8px)`,
            }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em]" style={{ color: accent }}>
              Photo pending
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkRow({ work, accent }: { work: Work; accent: string }) {
  const heading = (
    <h3
      className="font-display text-[clamp(1.4rem,3.2vw,2rem)] font-semibold leading-tight tracking-[-0.02em]"
      style={{ color: 'var(--paper)' }}
    >
      {work.title}
    </h3>
  );

  return (
    <article
      className="grid gap-6 border-t py-10 md:grid-cols-[1fr_minmax(0,26rem)] md:gap-12"
      style={{ borderColor: 'var(--rule)' }}
    >
      <div className="order-2 md:order-1">
        {work.meta && (
          <p className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: 'var(--paper-faint)' }}>
            {work.meta}
          </p>
        )}
        {heading}
        <p className="mt-2 text-[13px]" style={{ color: 'var(--paper-dim)' }}>
          {work.context}
        </p>
        {work.detail && (
          <p className="mt-5 max-w-prose text-[15px] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
            {work.detail}
          </p>
        )}
        {work.href &&
          (work.external ? (
            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] hover:underline"
              style={{ color: accent }}
            >
              Open
              <span aria-hidden="true">→</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <Link
              href={work.href}
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] hover:underline"
              style={{ color: accent }}
            >
              Open
              <span aria-hidden="true">→</span>
            </Link>
          ))}
      </div>
      <div className="order-1 md:order-2">
        <WorkFigure work={work} accent={accent} />
      </div>
    </article>
  );
}

export default function CategoryPage({ category }: { category: Category }) {
  const others = categories.filter((c) => c.key !== category.key);

  return (
    <div className="min-h-dvh" style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
      <main id="main-content" className="px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <nav aria-label="Breadcrumb" className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] hover:underline"
            style={{ color: 'var(--paper-faint)' }}
          >
            <span aria-hidden="true">←</span> Charlie Vargas
          </Link>
        </nav>

        <header className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.2em]" style={{ color: category.accent }}>
            {category.index}
          </p>
          <h1
            className="font-display mt-3 text-[clamp(3rem,11vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.04em]"
            style={{ color: 'var(--paper)' }}
          >
            {category.label}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed sm:text-[17px]" style={{ color: 'var(--paper-dim)' }}>
            {category.blurb}
          </p>
        </header>

        <section aria-label={`${category.label} work`} className="mt-20">
          {category.works.map((work) => (
            <WorkRow key={work.title} work={work} accent={category.accent} />
          ))}
        </section>

        <nav aria-label="Other categories" className="mt-24 border-t pt-10" style={{ borderColor: 'var(--rule)' }}>
          <p className="mb-6 text-[11px] uppercase tracking-[0.18em]" style={{ color: 'var(--paper-faint)' }}>
            Elsewhere
          </p>
          <ul className="flex list-none flex-col gap-4 sm:flex-row sm:gap-10">
            {others.map((other) => (
              <li key={other.key}>
                <Link href={other.href} className="group inline-flex items-baseline gap-3 hover:underline">
                  <span className="text-[11px] tracking-[0.2em]" style={{ color: other.accent }}>
                    {other.index}
                  </span>
                  <span
                    className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold tracking-[-0.02em]"
                    style={{ color: 'var(--paper)' }}
                  >
                    {other.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
