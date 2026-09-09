import type { Metadata } from 'next';
import Opening from '@/components/site/Opening';
import ExperienceBoard from '@/components/site/ExperienceBoard';
import AboutSection from '@/components/story/AboutSection';
import Marquee from '@/components/story/Marquee';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
      <a href="#experience" className="skip-link">
        Skip to experience
      </a>
      <main id="main-content">
        <Opening />
        <ExperienceBoard />
        <AboutSection />
        <Marquee />
      </main>
    </div>
  );
}
