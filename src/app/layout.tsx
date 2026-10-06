
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";

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
    default: "Julie Lupex | Custom Web Applications & Performance Engineering",
    template: "%s | Julie Lupex",
  },
  description:
    "Julie Lupex builds custom web applications, high-performance websites, APIs and scalable digital systems designed to solve complex business problems and improve user experiences.",
  keywords: [
    "Julie Lupex",
    "custom web applications",
    "high-performance web apps",
    "performance engineering",
    "conversion rate optimization",
    "custom software systems",
    "Next.js developer",
    "full-stack developer",
    "database optimization",
    "API integration specialist",
    "responsive web development",
    "digital product development",
  ],
  authors: [{ name: "Julie Lupex" }],
  creator: "Julie Lupex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Julie Lupex — Web Developer",
    title: "Julie Lupex | Custom Web Applications & Performance Engineering",
    description:
      "Custom web applications, high-performance websites and scalable digital systems engineered to solve business problems and create better digital experiences.",
    images: [
      {
        url: "/images/julie-lupex.png",
        width: 800,
        height: 1000,
        alt: "Julie Lupex — Full-Stack Web Developer building high-performance digital products and responsive web experiences.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julie Lupex | Custom Web Applications & Performance Engineering",
    description:
      "Custom web applications, high-performance websites and scalable digital systems engineered to solve business problems.",
    images: ["/images/julie-lupex.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body id="top" className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--violet)] focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:font-bold focus:text-[var(--ink)]"
        >
          Skip to main content
        </a>

        <Navbar />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}

