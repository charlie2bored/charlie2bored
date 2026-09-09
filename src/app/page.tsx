import type { Metadata } from 'next';
import SiteNav from '@/components/story/SiteNav';
import ScrollStory from '@/components/story/ScrollStory';
import AboutSection from '@/components/story/AboutSection';
import CategorySelector from '@/components/story/CategorySelector';
import Marquee from '@/components/story/Marquee';
import { categories } from '@/lib/story';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
      <a href="#pick" className="skip-link">
        Skip to categories
      </a>
      <SiteNav />
      <main id="main-content">
        <ScrollStory />
        <AboutSection />
        <Marquee />
        <CategorySelector categories={categories} />
      </main>
    </div>
  );
}
