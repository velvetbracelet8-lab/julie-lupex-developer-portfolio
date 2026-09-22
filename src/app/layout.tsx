import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { site } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Julie Lupex | Full-Stack Web Developer",
    template: "%s | Julie Lupex",
  },
  description: site.description,
  keywords: [
    "Julie Lupex",
    "web developer",
    "full-stack developer",
    "web applications",
    "e-commerce developer",
    "WordPress developer",
    "front-end development",
    "back-end development",
    "API development",
  ],
  authors: [{ name: "Julie Lupex" }],
  creator: "Julie Lupex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Julie Lupex — Web Developer",
    title: "Julie Lupex | Full-Stack Web Developer",
    description: site.description,
    images: [
      {
        url: "/images/hero-workstation.jpg",
        width: 1200,
        height: 1200,
        alt: "A modern developer workstation with a laptop showing code and floating interface components.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julie Lupex | Full-Stack Web Developer",
    description: site.description,
    images: ["/images/hero-workstation.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body id="top">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-violet focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
