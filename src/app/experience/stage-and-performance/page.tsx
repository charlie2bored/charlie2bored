import type { Metadata } from 'next';
import DriveDoc from '@/components/drive/DriveDoc';
import { performance as perfRoles } from '@/lib/experience';

export const metadata: Metadata = {
  title: 'Stage & Performance',
  description:
    'Team Toro (New York Red Bulls), "WOO!" Crew (NJ Devils), and four years of conservatory training at the Academy for Performing Arts.',
  alternates: { canonical: '/experience/stage-and-performance' },
};

export default function StageAndPerformancePage() {
  return (
    <DriveDoc backHref="/experience" backLabel="Experience" fileName="Stage & Performance">
      <h1 className="mb-1 text-2xl font-medium sm:text-3xl" style={{ color: 'var(--gd-text)' }}>
        Stage &amp; Performance
      </h1>
      <p className="mb-8 text-[15px]" style={{ color: 'var(--gd-text-2)' }}>
        Four years of conservatory training in classical ballet, modern (Graham/Horton), and
        contemporary. Now I work arena floors for the Devils and the Red Bulls.
      </p>
      {perfRoles.map((role) => (
        <section key={role.slug} className="mb-10">
          <h2 className="mb-1 text-xl font-medium" style={{ color: 'var(--gd-text)' }}>
            {role.title}
          </h2>
          <p className="mb-1 text-base" style={{ color: 'var(--gd-text-2)' }}>{role.company}</p>
          <p className="mb-6 text-sm" style={{ color: 'var(--gd-text-2)' }}>{role.year}</p>
          <ul className="mb-8 space-y-3 text-[15px] leading-relaxed" style={{ color: 'var(--gd-text)' }}>
            {role.description.map((bullet) => (
              <li key={bullet.slice(0, 40)} className="flex gap-3">
                <span aria-hidden="true" style={{ color: 'var(--gd-text-2)' }}>•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {role.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border px-3 py-1 text-[13px]"
                style={{ borderColor: 'var(--gd-chip-border)', borderWidth: '0.5px', color: 'var(--gd-text-2)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      ))}
    </DriveDoc>
  );
}
