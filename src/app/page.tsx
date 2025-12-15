import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Shop from '@/components/Shop';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
