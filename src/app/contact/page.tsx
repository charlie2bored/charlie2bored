import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[120px]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
