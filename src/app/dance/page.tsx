import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPage from '@/components/story/CategoryPage';
import { getCategory } from '@/lib/story';

const category = getCategory('dance');

export const metadata: Metadata = {
  title: 'Dance',
  description:
    'Arena-floor and mainstage performance: Team Toro with the New York Red Bulls, the NJ Devils “WOO!” Crew, and four years of conservatory training.',
  alternates: { canonical: '/dance' },
};

export default function DancePage() {
  if (!category) notFound();
  return <CategoryPage category={category} />;
}
