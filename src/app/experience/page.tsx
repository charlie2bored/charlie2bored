import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience: Apple Montessori Schools (BI/data) and Medara (design). Stage and performance work for the NJ Devils, NY Red Bulls, and Academy for Performing Arts. Education at Northeastern University.',
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience | Charlie Vargas',
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-dvh transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
    }}>
      <Navigation />
      <main id="main-content" className="pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
