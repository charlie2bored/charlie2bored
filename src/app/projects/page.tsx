import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Featured work: NYC distance-based fare analysis, the SpeedReader RSVP app, and data visualization dashboards, with live demos and code.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Charlie Vargas',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <Projects showSeeAllLink={false} />
      </div>
      <Footer />
    </div>
  );
}
