import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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
      'Charlie Vargas | BI, Data & Operations Analyst',
    template: '%s | Charlie Vargas',
  },
  description:
    'Charlie Vargas ("2bored"): BI, data, and operations analyst. I work mostly in Power BI, SQL, and Python, most of it from a multi-year BI internship. I’ve automated KPI dashboards, built predictive enrollment models, and done pricing analysis across 20+ sites. NYC, NJ, or CT; hybrid or remote.',
  keywords: [
    'Charlie Vargas',
    'data analyst',
    'business intelligence analyst',
    'BI analyst',
    'operations analyst',
    'Power BI',
    'SQL',
    'Python',
    'pandas',
    'Tableau',
    'KPI dashboards',
    'predictive modeling',
    'data storytelling',
    'NYC fare analysis',
    'portfolio',
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
    title: 'Charlie Vargas | BI, Data & Operations Analyst',
    description:
      'BI, data, and operations analyst. I work in Power BI, SQL, and Python. KPI dashboards, predictive models, and an NYC fare-policy analysis on real MTA data.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlie Vargas | BI, Data & Operations Analyst',
    description:
      'Portfolio: BI dashboards, operational analytics, and an NYC fare-policy model on real MTA data. NYC, NJ, or CT; hybrid or remote.',
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
        <Analytics />
      </body>
    </html>
  );
}
