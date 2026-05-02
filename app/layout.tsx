import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Caveat } from "next/font/google";
import Script from "next/script";
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
  title: "Venturin | Digital Product Agency",
  description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
  openGraph: {
    title: "Venturin | Digital Product Agency",
    description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
    url: "https://venturin.site",
    type: "website",
    images: [{ url: "https://venturin.site/images/logo-dark.jpg", width: 800, height: 600, alt: "Venturin Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturin | Digital Product Agency",
    description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
    images: ["https://venturin.site/images/logo-dark.jpg"],
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
      </body>
    </html>
  );
}
