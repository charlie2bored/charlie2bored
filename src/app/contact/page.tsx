import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach Charlie Vargas for data analytics, BI, UX design, or full-time roles. Email, phone, and social links.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Charlie Vargas',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
