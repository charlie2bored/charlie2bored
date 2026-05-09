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
      'Charlie Vargas | Product Designer · UX & BI Internship Portfolio',
    template: '%s | Charlie Vargas',
  },
  description:
    'Charlie Vargas (“2bored”): product and UX designer with UI shipped from Figma, plus BI and analytics depth (Power BI, SQL, Python) from internships. NYC/NJ hybrid or remote. Open to internships and junior-track roles.',
  keywords: [
    'Charlie Vargas',
    'product designer',
    'UX designer',
    'product design',
    'UI UX',
    'junior analyst',
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
    title: 'Charlie Vargas | Product Designer (UX + analytics depth)',
    description:
      'Product and UX designer; BI internships with measurable impact. Featured: NYC fare analysis, shipped UI, Power BI dashboards.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlie Vargas | Product Designer (UX + analytics depth)',
    description:
      'Portfolio: product and UX design, shipped UI, BI internship outcomes, and NYC fare analytics. Early-career and internships.',
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
