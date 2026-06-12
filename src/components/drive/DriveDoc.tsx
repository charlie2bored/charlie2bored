import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

export default function DriveDoc({
  backHref,
  backLabel,
  fileName,
  children,
}: {
  backHref: string;
  backLabel: string;
  fileName: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-dvh flex flex-col"
      style={{ backgroundColor: '#f8fafd', fontFamily: "var(--font-dm), Roboto, Arial, sans-serif" }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="flex items-center gap-3 px-4 py-2.5">
        <Link
          href={backHref}
          aria-label={`Back to ${backLabel}`}
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#e9eef6]"
        >
          <IconArrowLeft size={20} color="#444746" stroke={1.75} aria-hidden="true" />
        </Link>
        <span className="truncate text-[15px] font-medium" style={{ color: '#1f1f1f' }}>
          {fileName}
        </span>
        <Link
          href="/about"
          title="Owner: Charlie Vargas — open README.md"
          className="ml-auto inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#0b57d0' }}
        >
          CV
        </Link>
      </header>

      <main id="main-content" className="flex-1 px-4 pb-10">
        <article
          className="mx-auto max-w-3xl rounded-2xl border bg-white px-6 py-8 sm:px-10 sm:py-10"
          style={{ borderColor: '#dadce0', borderWidth: '0.5px' }}
        >
          {children}
        </article>
      </main>
    </div>
  );
}
