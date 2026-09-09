'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { SuggestedCard } from '@/lib/drive';
import { ICONS } from '@/components/drive/icons';

function CardBody({ card }: { card: SuggestedCard }) {
  const Icon = ICONS[card.icon];
  return (
    <>
      <span
        className="block overflow-hidden rounded-t-xl border-b"
        style={{ borderColor: 'var(--gd-border-2)', borderBottomWidth: '0.5px', backgroundColor: 'var(--gd-bg)' }}
      >
        <Image
          src={card.image}
          alt=""
          width={640}
          height={360}
          className="h-[104px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </span>
      <span className="block px-3 py-2.5">
        <span className="flex items-center gap-2">
          <Icon size={15} color={card.color} stroke={1.75} aria-hidden="true" className="shrink-0" />
          <span className="truncate text-[13px] font-medium" style={{ color: 'var(--gd-text)' }}>
            {card.name}
          </span>
        </span>
        <span className="mt-1 block text-[11px] leading-snug" style={{ color: 'var(--gd-text-2)' }}>
          {card.reason}
        </span>
        {card.external && <span className="sr-only">(opens in a new tab)</span>}
      </span>
    </>
  );
}

const cardClass =
  'gd-suggested-card group block overflow-hidden rounded-xl border bg-[var(--gd-surface)] transition-colors hover:bg-[var(--gd-bg)]';
const cardStyle = { borderColor: 'var(--gd-border)', borderWidth: '0.5px' } as const;

export default function DriveSuggested({ cards }: { cards: SuggestedCard[] }) {
  if (cards.length === 0) return null;

  return (
    <section aria-labelledby="suggested-heading" className="mb-4">
      <h2
        id="suggested-heading"
        className="mb-2 text-[13px] font-medium"
        style={{ color: 'var(--gd-text-2)' }}
      >
        Suggested
      </h2>
      {/* Horizontal scroller on phones so the file list stays near the fold; grid from sm up. */}
      <ul className="-mx-1 flex list-none snap-x snap-mandatory gap-2.5 overflow-x-auto px-1 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {cards.map((card) => (
          <li key={card.name} className="w-[82%] shrink-0 snap-start sm:w-auto sm:shrink">

            {card.external ? (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                style={cardStyle}
              >
                <CardBody card={card} />
              </a>
            ) : (
              <Link href={card.href} className={cardClass} style={cardStyle}>
                <CardBody card={card} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
