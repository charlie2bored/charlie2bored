import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPage from '@/components/story/CategoryPage';
import { getCategory } from '@/lib/story';

const category = getCategory('data');

export const metadata: Metadata = {
  title: 'Data',
  description:
    'BI and analytics work: NYC District 2 enrollment forecasting, subway event detection, distance-based fare analysis, and a multi-year BI internship.',
  alternates: { canonical: '/data' },
};

export default function DataPage() {
  if (!category) notFound();
  return <CategoryPage category={category} />;
}
