import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[120px]">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
