import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Caveat } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venturin.vercel.app"),
  title: "Venturin | Premium UI/UX Design & Web Development Agency",
  description: "A digital product agency by Martua Sinaga. We craft premium UI/UX designs, high-performance websites, and digital assets that help modern brands grow online.",
  openGraph: {
    title: "Venturin | Premium UI/UX Design & Web Development Agency",
    description: "A digital product agency by Martua Sinaga. We craft premium UI/UX designs, high-performance websites, and digital assets that help modern brands grow online.",
    url: "https://venturin.vercel.app",
    siteName: "Venturin",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturin | Premium UI/UX Design & Web Development Agency",
    description: "A digital product agency by Martua Sinaga. We craft premium UI/UX designs, high-performance websites, and digital assets that help modern brands grow online.",
    site: "@venturin",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${caveat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://code.iconify.design/3/3.1.1/iconify.min.js" strategy="afterInteractive" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
