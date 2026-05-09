import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PersonJsonLd } from '@/components/PersonJsonLd';
import { getSiteUrl } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Charlie Vargas | Product Design, Social & UI/UX Portfolio',
    template: '%s | Charlie Vargas',
  },
  description:
    'Charlie Vargas (“2bored”): product design, social media, and UI/UX with BI and analytics when the work requires rigor. NYC/NJ, hybrid local or remote. Open to internships and junior-track roles.',
  keywords: [
    'Charlie Vargas',
    'product design',
    'UI UX',
    'social media',
    'internship',
    'portfolio',
    'business intelligence',
    'Power BI',
    'SQL',
    'Python',
  ],
  authors: [{ name: 'Charlie Vargas', url: 'https://www.linkedin.com/in/charlie2bored/' }],
  creator: 'Charlie Vargas',
  formatDetection: { email: false, telephone: false },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Charlie Vargas',
    title: 'Charlie Vargas | Product, Social & UX (with analytics depth)',
    description:
      'Featured work including NYC fare analysis, UI projects, and experience. Hybrid NYC/NJ or remote.',
  },
  twitter: {
    card: 'summary',
    title: 'Charlie Vargas | Product, Social & UX (with analytics depth)',
    description:
      'Portfolio: product design, social, and UI/UX plus BI and data. Internships and early-career roles.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PersonJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
