import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venturin | Digital Product Agency",
  description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
  openGraph: {
    title: "Venturin | Digital Product Agency",
    description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
    url: "https://venturin.site",
    type: "website",
    images: [
      {
        url: "https://venturin.site/images/logo-dark.jpg",
        width: 800,
        height: 600,
        alt: "Venturin Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@venturin",
    title: "Venturin | Digital Product Agency",
    description: "Expert Full-Stack Development and UI/UX Design by Martua Sinaga",
    images: [
      "https://venturin.site/images/logo-dark.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
