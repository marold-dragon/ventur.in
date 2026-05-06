import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Script src="https://code.iconify.design/3/3.1.1/iconify.min.js" strategy="afterInteractive" />
    </>
  );
}
