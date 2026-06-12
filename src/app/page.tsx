import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects, categories } from '@/lib/projects';
import { essays } from '@/lib/essays';
import { getDataResumeUrl } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const categoryLabel = Object.fromEntries(categories.map((c) => [c.key, c.label]));

export default function Home() {
  const dataResumeUrl = getDataResumeUrl();
  const latestEssay = essays[0];

  return (
    <div
      className="min-h-dvh transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <Navigation />
      <main
        id="main-content"
        className="pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-12"
      >
        <header className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-14">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-3"
            style={{ color: 'var(--text-color)' }}
          >
            Charlie Vargas
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl leading-relaxed mb-1"
            style={{ color: 'var(--text-secondary)' }}
          >
            BI and operations analyst working mostly in Power BI, SQL, and Python.
          </p>
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            NYC, NJ &amp; CT · Hybrid local or remote
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-base font-medium">
            <a
              href={dataResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
              {...(dataResumeUrl.startsWith('/') ? { download: true } : {})}
            >
              Resume
            </a>
            <Link
              href="/experience"
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
            >
              Experience →
            </Link>
            <Link
              href="/about"
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
            >
              About →
            </Link>
          </div>
        </header>

        <section aria-labelledby="work-heading" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-6">
            <h2
              id="work-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: 'var(--text-color)' }}
            >
              Work
            </h2>
            <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              If you&apos;re going to look at one thing, look at the enrollment forecast.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
            {projects.map((project, index) => (
              <li key={project.slug} className="h-full">
                <Link
                  href={project.href}
                  className="group flex flex-col h-full rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ borderColor: 'var(--text-secondary)' }}
                >
                  <div className="relative aspect-[16/9] w-full bg-neutral-900">
                    <Image
                      src={project.image}
                      alt={`Preview image for ${project.title}`}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <p
                      className="text-xs uppercase tracking-[0.18em] font-semibold"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {categoryLabel[project.category]}
                    </p>
                    <h3
                      className="text-lg font-bold leading-snug"
                      style={{ color: 'var(--text-color)' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.hoverMetric}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
            Latest essay:{' '}
            <Link
              href={latestEssay.href}
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
            >
              {latestEssay.title}
            </Link>{' '}
            ·{' '}
            <Link
              href="/writing"
              className="underline underline-offset-4 hover:opacity-80"
              style={{ color: 'var(--text-color)' }}
            >
              All writing →
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
