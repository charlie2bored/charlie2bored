import { HeroWrapper } from '@/components/HeroWrapper';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroWrapper />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

