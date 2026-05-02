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
  title: "Venturin | Digital Product Agency",
  description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
  openGraph: {
    title: "Venturin | Digital Product Agency",
    description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
    url: "https://venturin.vercel.app",
    siteName: "Venturin",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/logo-dark.jpg", width: 1200, height: 630, alt: "Venturin - Digital Product Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturin | Digital Product Agency",
    description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
    site: "@venturin",
    images: ["/images/logo-dark.jpg"],
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
