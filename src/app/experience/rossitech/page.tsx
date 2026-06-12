import type { Metadata } from 'next';
import DriveDoc from '@/components/drive/DriveDoc';
import { experiences } from '@/lib/experience';

const role = experiences.find((r) => r.slug === 'rossitech')!;

export const metadata: Metadata = {
  title: 'Rossitech LTD',
  description:
    'Product Designer at Rossitech LTD, August to October 2025. First websites for clients in Figma and Framer.',
  alternates: { canonical: '/experience/rossitech' },
};

export default function RossitechPage() {
  return (
    <DriveDoc backHref="/experience" backLabel="Experience" fileName={role.company}>
      <h1 className="mb-1 text-2xl font-medium sm:text-3xl" style={{ color: '#1f1f1f' }}>
        {role.title}
      </h1>
      <p className="mb-1 text-base" style={{ color: '#444746' }}>{role.company}</p>
      <p className="mb-6 text-sm" style={{ color: '#444746' }}>{role.year}</p>
      <ul className="mb-8 space-y-3 text-[15px] leading-relaxed" style={{ color: '#1f1f1f' }}>
        {role.description.map((bullet) => (
          <li key={bullet.slice(0, 40)} className="flex gap-3">
            <span aria-hidden="true" style={{ color: '#444746' }}>•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {role.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border px-3 py-1 text-[13px]"
            style={{ borderColor: '#c4c7c5', borderWidth: '0.5px', color: '#444746' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </DriveDoc>
  );
}
