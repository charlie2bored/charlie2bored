import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Experience & Education',
  description:
    'Work experience at Apple Montessori Schools and Rossitech, education at Northeastern and Academy for Performing Arts, and related roles.',
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience & Education | Charlie Vargas',
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <Experience />
      </div>
      <Footer />
    </div>
  );
}
