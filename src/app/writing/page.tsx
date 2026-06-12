import type { Metadata } from 'next';
import DriveShell from '@/components/drive/DriveShell';
import { writingItems } from '@/lib/drive';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Essays on transit, data, operations, and whatever else I’ve been chewing on.',
  alternates: { canonical: '/writing' },
  openGraph: {
    title: 'Writing | Charlie Vargas',
  },
};

export default function WritingIndexPage() {
  return (
    <DriveShell
      crumbs={[
        { label: 'Shared with me' },
        { label: 'Charlie Vargas', href: '/' },
        { label: 'Writing' },
      ]}
      items={writingItems()}
    />
  );
}
