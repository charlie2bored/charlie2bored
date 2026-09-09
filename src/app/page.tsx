import type { Metadata } from 'next';
import ScrollStory from '@/components/story/ScrollStory';
import CategorySelector from '@/components/story/CategorySelector';
import { beats, categories } from '@/lib/story';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
      <a href="#pick" className="skip-link">
        Skip to categories
      </a>
      <main id="main-content">
        <ScrollStory beats={beats} />
        <CategorySelector categories={categories} />
      </main>
    </div>
  );
}
