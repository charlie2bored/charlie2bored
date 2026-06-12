import Link from 'next/link';
import { IconFileSad } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div
      className="min-h-dvh flex flex-col items-center justify-center gap-4 px-5 text-center"
      style={{ backgroundColor: '#f8fafd', fontFamily: "var(--font-dm), Roboto, Arial, sans-serif" }}
    >
      <IconFileSad size={56} color="#9aa0a6" stroke={1.25} aria-hidden="true" />
      <h1 className="text-[17px] font-medium" style={{ color: '#1f1f1f' }}>
        File not found
      </h1>
      <p className="max-w-md text-[14px] leading-relaxed" style={{ color: '#444746' }}>
        This file may have been moved or deleted, or you may not have permission to view it.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full px-6 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#0b57d0' }}
      >
        Back to Charlie Vargas
      </Link>
    </div>
  );
}
