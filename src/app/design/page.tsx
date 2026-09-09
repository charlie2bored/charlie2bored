import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPage from '@/components/story/CategoryPage';
import { getCategory } from '@/lib/story';

const category = getCategory('design');

export const metadata: Metadata = {
  title: 'Design',
  description:
    'Product and communication design: investor materials and clinical figures for Medara, the ClearCore Protein build, and client sites at Rossitech.',
  alternates: { canonical: '/design' },
};

export default function DesignPage() {
  if (!category) notFound();
  return <CategoryPage category={category} />;
}
