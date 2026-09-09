import type { Metadata, Viewport } from 'next';
import { Archivo, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { PersonJsonLd } from '@/components/PersonJsonLd';
import EggsProvider from '@/components/drive/eggs/EggsProvider';
import { getSiteUrl } from '@/lib/site';

/** Display face: tight, heavy, built for the large statements in the scroll story. */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});

/** Text face: everything that is not a headline. */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-text',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('gd-settings')||'{}');var r=document.documentElement;r.dataset.theme=s.theme==='dark'?'dark':'light';r.dataset.density=s.density||'comfortable';}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <PersonJsonLd />
        <EggsProvider>{children}</EggsProvider>
        <Analytics />
      </body>
    </html>
  );
}
