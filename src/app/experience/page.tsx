import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[120px]">
        <Experience />
      </div>
      <Footer />
    </div>
  );
}
