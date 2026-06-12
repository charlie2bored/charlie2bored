import type { Metadata } from 'next';
import DriveShell from '@/components/drive/DriveShell';
import { experienceItems } from '@/lib/drive';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience: Apple Montessori Schools (BI/data) and Medara (design). Stage and performance work for the NJ Devils, NY Red Bulls, and Academy for Performing Arts.',
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience | Charlie Vargas',
  },
};

export default function ExperiencePage() {
  return (
    <DriveShell
      crumbs={[
        { label: 'Shared with me' },
        { label: 'Charlie Vargas', href: '/' },
        { label: 'Experience' },
      ]}
      items={experienceItems()}
    />
  );
}
