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
  title: "Charlie Bored - Creative Developer & Designer | Portfolio",
  description: "Portfolio of Charlie Bored, a passionate creative developer and designer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch.",
  keywords: ["Charlie Bored", "Creative Developer", "Web Designer", "React Developer", "Next.js", "TypeScript", "Portfolio", "Web Development", "UI/UX Design"],
  authors: [{ name: "Charlie Bored" }],
  creator: "Charlie Bored",
  publisher: "Charlie Bored",
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
              "name": "Charlie Bored",
              "url": "https://charlie2bored.vercel.app",
              "sameAs": [
                "https://github.com/charlie2bored",
                "https://linkedin.com/in/charlie2bored",
                "https://twitter.com/charlie2bored"
              ],
              "jobTitle": "Creative Developer & Designer",
              "description": "I create digital experiences that blend beautiful design with technical excellence. Passionate about clean code, intuitive interfaces, and solving complex problems with elegant solutions.",
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Python",
                "UI/UX Design"
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
