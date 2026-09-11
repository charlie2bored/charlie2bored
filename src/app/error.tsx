'use client';

import Link from 'next/link';
import ErrorFrame, { lineButton, solidButton } from '@/components/site/ErrorFrame';

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFrame
      word="oops"
      eyebrow="error — something broke"
      headline="broken? my bad."
      body="Something on this page failed to load. Try it again, or head back to the start."
    >
      <button type="button" onClick={() => reset()} className={solidButton}>
        try again
      </button>
      <Link href="/" className={lineButton}>
        ← back home
      </Link>
    </ErrorFrame>
  );
}
