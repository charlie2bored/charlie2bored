import Link from 'next/link';
import ErrorFrame, { lineButton, solidButton } from '@/components/site/ErrorFrame';
import { navItems } from '@/lib/nav';

export default function NotFound() {
  return (
    <ErrorFrame
      word="404"
      eyebrow="404 — page not found"
      headline="lost? it happens."
      body="This page doesn’t exist, or it moved when the site was rebuilt. Everything lives on one page now."
    >
      <Link href="/" className={solidButton}>
        ← back home
      </Link>
      {navItems
        .filter((n) => n.href.startsWith('#'))
        .map((n) => (
          <Link key={n.href} href={`/${n.href}`} className={lineButton}>
            {n.label}
          </Link>
        ))}
    </ErrorFrame>
  );
}
