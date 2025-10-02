'use client';

import { DarkModeProvider } from '@/components/DarkModeProvider';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <DarkModeProvider>
      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </DarkModeProvider>
  );
}

