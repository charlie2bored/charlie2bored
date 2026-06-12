import type { Metadata } from 'next';
import DriveShell from '@/components/drive/DriveShell';
import { educationItems } from '@/lib/drive';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'B.S. in Business Administration (BSBA) at Northeastern University, New York.',
  alternates: { canonical: '/education' },
  openGraph: {
    title: 'Education | Charlie Vargas',
  },
};

export default function EducationPage() {
  return (
    <DriveShell
      crumbs={[
        { label: 'Shared with me' },
        { label: 'Charlie Vargas', href: '/' },
        { label: 'Education' },
      ]}
      items={educationItems()}
    />
  );
}
