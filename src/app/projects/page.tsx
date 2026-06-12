import type { Metadata } from 'next';
import DriveShell from '@/components/drive/DriveShell';
import { projectItems } from '@/lib/drive';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Analytical and built work: a three-year NYC public elementary enrollment forecast back-tested against actuals, a distance-based MTA fare analysis, and shipped React projects (ClearCore Protein and SpeedReader) with live demos and source.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Charlie Vargas',
  },
};

export default function ProjectsPage() {
  return (
    <DriveShell
      crumbs={[
        { label: 'Shared with me' },
        { label: 'Charlie Vargas', href: '/' },
        { label: 'Projects' },
      ]}
      items={projectItems()}
    />
  );
}
