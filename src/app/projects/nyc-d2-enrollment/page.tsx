import type { Metadata } from 'next';
import Image from 'next/image';
import DriveDoc from '@/components/drive/DriveDoc';
import { projects } from '@/lib/projects';

const project = projects.find((p) => p.slug === 'nyc-d2-enrollment')!;

export const metadata: Metadata = {
  title: 'NYC District 2 Elementary Enrollment Forecasting',
  description: project.hoverMetric,
  alternates: { canonical: '/projects/nyc-d2-enrollment' },
  openGraph: {
    title: 'NYC District 2 Elementary Enrollment Forecasting | Charlie Vargas',
  },
};

export default function NycD2EnrollmentPage() {
  return (
    <DriveDoc backHref="/projects" backLabel="Projects" fileName={project.title}>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--gd-text-2)' }}>
        Data project · {project.role}
      </p>
      <h1 className="mb-3 text-2xl font-medium sm:text-3xl" style={{ color: 'var(--gd-text)' }}>
        {project.title}
      </h1>
      <p className="mb-6 text-[15px] font-medium leading-relaxed" style={{ color: 'var(--gd-text)' }}>
        {project.hoverMetric}.
      </p>

      <div
        className="mb-6 overflow-hidden rounded-xl border"
        style={{ borderColor: 'var(--gd-border)', borderWidth: '0.5px' }}
      >
        <div className="relative aspect-video w-full bg-neutral-100">
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

      <p className="mb-8 text-[15px] leading-relaxed" style={{ color: 'var(--gd-text-2)' }}>
        {project.description}
      </p>

      <h2 className="mb-3 text-xl font-medium" style={{ color: 'var(--gd-text)' }}>
        Approach
      </h2>
      <p className="mb-4 text-[15px] font-medium leading-relaxed" style={{ color: 'var(--gd-text)' }}>
        {project.approach.problem}
      </p>
      <ul className="mb-8 space-y-3 text-[15px] leading-relaxed" style={{ color: 'var(--gd-text-2)' }}>
        {project.approach.decisions.map((decision) => (
          <li key={decision.slice(0, 40)} className="flex gap-3">
            <span aria-hidden="true">→</span>
            <span>{decision}</span>
          </li>
        ))}
      </ul>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border px-3 py-1 text-[13px]"
            style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px', color: 'var(--gd-text-2)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full px-6 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#0b57d0' }}
      >
        Open on GitHub
      </a>
    </DriveDoc>
  );
}
