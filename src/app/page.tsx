import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

// Add alternating background sections
const sections = [
  { component: Hero, bg: 'bg-white' },
  { component: About, bg: 'bg-gray-50' },
  { component: Skills, bg: 'bg-white' },
  { component: Projects, bg: 'bg-gray-50' },
  { component: Contact, bg: 'bg-white' }
];
