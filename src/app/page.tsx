import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <SectionFallback label="Loading skills" />,
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <SectionFallback label="Loading projects" />,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <SectionFallback label="Loading collaboration section" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <SectionFallback label="Loading contact" />,
});

function SectionFallback({ label }: { label: string }) {
  return (
    <div
      className="max-w-5xl mx-auto px-5 py-16 min-h-[12rem]"
      aria-hidden
    >
      <div className="h-36 rounded-2xl animate-pulse bg-black/5 dark:bg-white/10" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <main id="main-content">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
