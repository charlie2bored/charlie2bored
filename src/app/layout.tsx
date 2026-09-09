import type { Metadata, Viewport } from 'next';
import { Archivo, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { PersonJsonLd } from '@/components/PersonJsonLd';
import EggsProvider from '@/components/drive/eggs/EggsProvider';
import { getSiteUrl } from '@/lib/site';

/** Everything structural: body copy and the heavy poster labels. */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
});

/** Small uppercase labels and crop marks. */
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Charlie Vargas | Dance, Design & Data',
    template: '%s | Charlie Vargas',
  },
  description:
    'Charlie Vargas ("2bored"): analyst, designer, and performer in New York. A 2.5-year BI internship that cut reporting time 50% across 20+ school sites, investor and clinical design for a pre-FDA medical-imaging startup, and arena floors for the Red Bulls and the Devils.',
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
    'product designer',
    'Figma',
    'dancer',
    'arena performer',
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
    title: 'Charlie Vargas | Dance, Design & Data',
    description:
      'Analyst, designer, performer. KPI dashboards across 20+ school sites, investor and clinical design for a pre-FDA medical-imaging startup, and arena floors for the Red Bulls and the Devils.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlie Vargas | Dance, Design & Data',
    description:
      'Portfolio: BI dashboards and forecasting, investor and clinical design, and arena performance. NYC, NJ, or CT; hybrid or remote.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('gd-settings')||'{}');var r=document.documentElement;r.dataset.theme=s.theme==='dark'?'dark':'light';r.dataset.density=s.density||'comfortable';}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${archivo.variable} ${jetbrains.variable} font-sans antialiased`}>
        <PersonJsonLd />
        <EggsProvider>{children}</EggsProvider>
        <Analytics />
      </body>
    </html>
  );
}
