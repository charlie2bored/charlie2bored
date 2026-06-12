import type { Metadata } from 'next';
import DriveShell from '@/components/drive/DriveShell';
import { rootItems } from '@/lib/drive';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <DriveShell
      crumbs={[{ label: 'Shared with me' }, { label: 'Charlie Vargas' }]}
      tagline="BI and operations analyst · Power BI, SQL, Python · NYC, NJ & CT"
      items={rootItems()}
    />
  );
}
