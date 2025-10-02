import type { Metadata } from "next";
import { Junge, Montserrat } from "next/font/google";
import "./globals.css";

const junge = Junge({
  variable: "--font-junge",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charlie Bored - Creative Developer & Designer",
  description: "Portfolio of Charlie Bored, a creative developer and designer specializing in modern web technologies and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        {children}
      </body>
    </html>
  );
}
