import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NycFareCaseStudy from '@/components/NycFareCaseStudy';

export const metadata: Metadata = {
  title: 'A $277M Setback, NYC Fare Analysis',
  description:
    "An analytical deep dive into the financial inefficiencies of NYC's flat-fare transit model, proposing a distance-based alternative that generates $277M in additional annual revenue.",
  alternates: { canonical: '/projects/nyc-fare-analysis' },
  openGraph: {
    title: 'A $277M Setback, NYC Fare Analysis',
    description:
      'Distance-based fares on MTA-scale data: modeled revenue uplift, rider equity, and validation against farebox benchmarks.',
    type: 'article',
  },
  twitter: {
    title: 'A $277M Setback, NYC Fare Analysis',
    description:
      "NYC flat-fare vs distance-based modeling: validated annualization, borough equity, and a $277M revenue surplus scenario.",
    card: 'summary',
  },
};

export default function NycFareAnalysisCaseStudyPage() {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <main
        id="main-content"
        className="pt-[calc(6.75rem+env(safe-area-inset-top,0px))] md:pt-[calc(9rem+env(safe-area-inset-top,0px))]"
      >
        <NycFareCaseStudy />
      </main>
      <Footer />
    </div>
  );
}
