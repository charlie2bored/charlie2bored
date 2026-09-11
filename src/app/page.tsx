import type { Metadata } from 'next';
import Opening from '@/components/site/Opening';
import ExperienceBoard from '@/components/site/ExperienceBoard';
import EducationBand from '@/components/site/EducationBand';
import DanceField from '@/components/site/DanceField';
import DesignSequence from '@/components/site/DesignSequence';
import DataSection from '@/components/site/DataSection';
import ContactSection from '@/components/site/ContactSection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
      <a href="#experience" className="skip-link">
        Skip to experience
      </a>
      <main id="main-content">
        <Opening />
        <ExperienceBoard />
        <EducationBand />
        <DanceField />
        <DesignSequence />
        <DataSection />
        <ContactSection />
      </main>
    </div>
  );
}
