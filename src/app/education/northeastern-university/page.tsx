import type { Metadata } from 'next';
import DriveDoc from '@/components/drive/DriveDoc';
import { education } from '@/lib/experience';

const entry = education[0];

export const metadata: Metadata = {
  title: 'Northeastern University',
  description:
    'B.S. in Business Administration (BSBA) at Northeastern University, New York. August 2024 to May 2028.',
  alternates: { canonical: '/education/northeastern-university' },
};

export default function NortheasternPage() {
  return (
    <DriveDoc backHref="/education" backLabel="Education" fileName={entry.institution}>
      <h1 className="mb-1 text-2xl font-medium sm:text-3xl" style={{ color: '#1f1f1f' }}>
        {entry.degree}
      </h1>
      <p className="mb-1 text-base" style={{ color: '#444746' }}>{entry.institution}</p>
      <p className="mb-1 text-base" style={{ color: '#444746' }}>{entry.location}</p>
      <p className="mb-6 text-sm" style={{ color: '#444746' }}>{entry.year}</p>
      <ul className="mb-8 space-y-3 text-[15px] leading-relaxed" style={{ color: '#1f1f1f' }}>
        {entry.description.map((bullet) => (
          <li key={bullet.slice(0, 40)} className="flex gap-3">
            <span aria-hidden="true" style={{ color: '#444746' }}>•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </DriveDoc>
  );
}
