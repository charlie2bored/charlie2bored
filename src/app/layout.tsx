import type { Metadata } from "next";
import { Junge, Montserrat } from "next/font/google";
import "./globals.css";
import { DarkModeProvider, ErrorBoundary } from "@/components/DarkModeProvider";

const junge = Junge({
  variable: "--font-junge",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Charlie \"2bored\" Vargas - Multidisciplinary Designer | Portfolio",
  description: "Portfolio of Charlie \"2bored\" Vargas, a multidisciplinary designer specializing in UI/UX design, business operations, and data analytics. Currently studying Social Entrepreneurship at Northeastern University.",
  keywords: ["Charlie Vargas", "2bored", "Multidisciplinary Designer", "UI/UX Designer", "Business Operations", "Data Analytics", "Social Entrepreneurship", "Portfolio", "New York Designer"],
  authors: [{ name: "Charlie \"2bored\" Vargas" }],
  creator: "Charlie \"2bored\" Vargas",
  publisher: "Charlie \"2bored\" Vargas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://charlie2bored.vercel.app"),
  alternates: {
    canonical: "https://charlie2bored.vercel.app",
  },
  openGraph: {
    title: "Charlie Bored - Creative Developer & Designer",
    description: "Portfolio showcasing modern web development projects built with React, Next.js, and TypeScript. Passionate about clean code and intuitive user experiences.",
    url: "https://charlie2bored.vercel.app",
    siteName: "Charlie Bored Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charlie Bored - Creative Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Bored - Creative Developer & Designer",
    description: "Portfolio showcasing modern web development projects built with React, Next.js, and TypeScript.",
    images: ["/og-image.jpg"],
    creator: "@charlie2bored",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Charlie \"2bored\" Vargas",
              "url": "https://charlie2bored.vercel.app",
              "sameAs": [
                "https://github.com/charlie2bored",
                "https://linkedin.com/in/charlie2bored",
                "https://twitter.com/charlie2bored"
              ],
              "jobTitle": "Multidisciplinary Designer",
              "description": "Multidisciplinary designer specializing in UI/UX design, business operations, and data analytics. Currently pursuing a degree in Social Entrepreneurship at Northeastern University in New York.",
              "knowsAbout": [
                "UI/UX Design",
                "Business Operations",
                "Data Analytics",
                "Social Entrepreneurship",
                "Design Systems",
                "User Experience",
                "Visual Design",
                "Product Design"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${junge.variable} ${montserrat.variable} antialiased`}
      >
        <ErrorBoundary>
          <DarkModeProvider>
            {children}
          </DarkModeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
