import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Collaboration from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
        <Projects />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
