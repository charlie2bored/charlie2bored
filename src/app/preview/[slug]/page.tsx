import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IconArrowLeft, IconFileSad } from '@tabler/icons-react';
import { projects } from '@/lib/projects';

const previewless = projects.filter((p) => !p.links.demo);

export function generateStaticParams() {
  return previewless.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = previewless.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.hoverMetric,
    alternates: { canonical: `/preview/${slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = previewless.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div
      className="min-h-dvh flex flex-col"
      style={{ backgroundColor: '#1f1f1f', fontFamily: "var(--font-dm), Roboto, Arial, sans-serif" }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="flex items-center gap-3 px-4 py-2.5">
        <Link
          href="/projects"
          aria-label="Back to Projects"
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <IconArrowLeft size={20} color="#e3e3e3" stroke={1.75} aria-hidden="true" />
        </Link>
        <h1 className="truncate text-[15px] font-medium" style={{ color: '#e3e3e3' }}>
          {project.title}
        </h1>
        <span
          title="Charlie Vargas"
          className="ml-auto inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-white"
          style={{ backgroundColor: '#0b57d0' }}
        >
          CV
        </span>
      </header>

      <main id="main-content" className="flex flex-1 flex-col items-center justify-center gap-4 px-5 pb-16 text-center">
        <IconFileSad size={56} color="#9aa0a6" stroke={1.25} aria-hidden="true" />
        <p className="text-[15px]" style={{ color: '#e3e3e3' }}>
          No preview available
        </p>
        <p className="max-w-md text-[13px] leading-relaxed" style={{ color: '#9aa0a6' }}>
          {project.hoverMetric}
        </p>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full bg-white px-6 py-2.5 text-[14px] font-medium transition-opacity hover:opacity-90"
          style={{ color: '#1f1f1f' }}
        >
          Open on GitHub
        </a>
        <Link
          href={project.href}
          className="text-[13px] hover:underline"
          style={{ color: '#8ab4f8' }}
        >
          Read the writeup →
        </Link>
      </main>
    </div>
  );
}
