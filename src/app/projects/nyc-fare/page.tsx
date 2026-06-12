import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';

const project = projects.find((p) => p.slug === 'nyc-fare')!;

export const metadata: Metadata = {
  title: 'NYC Distance-Based Fare Analysis',
  description: project.hoverMetric,
  alternates: { canonical: '/projects/nyc-fare' },
  openGraph: {
    title: 'NYC Distance-Based Fare Analysis | Charlie Vargas',
  },
};

export default function NycFarePage() {
  return (
    <div
      className="min-h-dvh transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <Navigation />
      <main id="main-content">
        <article className="pt-[calc(8rem+env(safe-area-inset-top,0px))] pb-20">
          <header className="max-w-3xl mx-auto px-5 mb-10">
            <p
              className="text-sm uppercase tracking-[0.22em] mb-3 font-semibold"
              style={{ color: 'var(--text-secondary)' }}
            >
              Data project
            </p>
            <h1
              className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight"
              style={{ color: 'var(--text-color)' }}
            >
              {project.title}
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-4 font-medium"
              style={{ color: 'var(--text-color)' }}
            >
              {project.hoverMetric}.
            </p>
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.role}
            </p>
          </header>

          <div className="max-w-3xl mx-auto px-5">
            <div
              className="mb-10 rounded-2xl overflow-hidden border-2"
              style={{ borderColor: 'var(--text-secondary)' }}
            >
              <div className="relative aspect-video w-full bg-neutral-900">
                <Image
                  src={project.image}
                  alt={`Preview image for ${project.title}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>

            <p
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            <section aria-labelledby="approach-heading" className="mb-10">
              <h2
                id="approach-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--text-color)' }}
              >
                Approach
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed mb-5 font-medium"
                style={{ color: 'var(--text-color)' }}
              >
                {project.approach.problem}
              </p>
              <ul
                className="text-base sm:text-lg leading-relaxed space-y-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.approach.decisions.map((decision) => (
                  <li key={decision.slice(0, 40)} className="flex items-start">
                    <span className="mr-3 mt-1 shrink-0" aria-hidden="true">
                      →
                    </span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm sm:text-base px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto text-center"
                style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
              >
                GitHub
              </a>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto text-center"
                style={{
                  backgroundColor: 'var(--bg-color)',
                  color: 'var(--text-color)',
                  border: '2px solid var(--text-color)',
                }}
              >
                Live demo
              </a>
            </div>

            <footer
              className="mt-14 pt-8 border-t"
              style={{ borderColor: 'var(--text-secondary)' }}
            >
              <Link
                href="/projects"
                className="text-base sm:text-lg font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-color)' }}
              >
                ← All projects
              </Link>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
