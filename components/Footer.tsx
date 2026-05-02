"use client";
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-default-100 overflow-hidden pb-7.5">
      <div className="container relative z-10">

        {/* CTA Section */}
        <div className="lg:mb-25 mb-10 rounded-2xl p-5 bg-default-200 inset-shadow border border-default-200">
          <div className="relative lg:p-12.5 p-6 rounded-lg overflow-hidden bg-linear-to-r from-blue-300 to-blue-400">
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <p className="uppercase tracking-widest text-sm text-black/70 mb-4">Let&apos;s Build Something Great</p>
                <h2 className="text-4xl leading-tight mb-6">Ready to start your next project?</h2>
                <Link href="/contact" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-default-950 text-white font-medium transition-all duration-500 hover:bg-primary-hover">
                  Get started
                </Link>
              </div>
              <div className="rounded-xl p-2 bg-default-200">
                <div className="inset-shadow rounded-lg shadow-xl p-5">
                  <div className="flex items-center gap-2 text-sm text-default-500 mb-5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for project
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <Image src="/images/avatars/6.png" className="w-12 h-12 rounded-full object-cover" alt="Avatar" width={48} height={48} />
                    <span className="text-xl font-medium">+</span>
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">You</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quick 15-minute call</h3>
                  <p className="text-default-600 mb-6">Pick a time that works for you.</p>
                  <a href="mailto:marold.dragon@gmail.com" className="py-2.5 px-5.5 flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover">
                    Book a free call
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute size-130 rounded-full inset-s-55 inset-e-55 -top-110 flex items-center justify-center mx-auto border-10 border-primary shadow-primary-soft"></div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 lg:gap-25 gap-10">
          <div>
            <Link href="/" className="text-2xl font-semibold mb-4 block">
              <Image src="/images/logo-dark.jpg" alt="Venturin" className="h-12.5 w-auto" width={100} height={50} />
            </Link>
            <p className="text-default-600 mb-6">Crafting digital solutions that move your business forward.</p>
            <h4 className="font-medium mb-3">Updates that keep you ahead</h4>
            <form className="flex items-center gap-2.5" onSubmit={handleNewsletter}>
              <input type="email" placeholder="Enter your email" className="rounded-lg bg-white h-12 py-2.5 px-4 w-full flex items-center border border-default-200" />
              <button type="submit" className="grow size-11 min-w-12 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover">
                <span className="iconify size-6" data-icon="tabler:arrow-narrow-right"></span>
              </button>
            </form>
            {subscribed && <p className="mt-2 text-sm text-primary">Thanks for subscribing!</p>}
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="uppercase text-xs font-semibold tracking-widest mb-7.5">Pages</p>
              <ul className="space-y-3">
                <li><Link href="/" className="text-default-950 transition-all duration-300 hover:text-primary">Home</Link></li>
                <li><Link href="/about" className="text-default-950 transition-all duration-300 hover:text-primary">About Us</Link></li>
                <li><Link href="/projects" className="text-default-950 transition-all duration-300 hover:text-primary">Projects</Link></li>
                <li><Link href="/contact" className="text-default-950 transition-all duration-300 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="uppercase text-xs font-semibold tracking-widest mb-7.5">Other Links</p>
              <ul className="space-y-3">
                <li><a href="https://venturin.site" target="_blank" className="text-default-950 transition-all duration-300 hover:text-primary">Digital Store</a></li>
                <li><Link href="/contact" className="text-default-950 transition-all duration-300 hover:text-primary">Support</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <p className="uppercase text-xs font-semibold tracking-widest mb-7.5">Get in touch</p>
            <ul className="mb-7.5 space-y-3">
              <li><a href="tel:+6285362219945" className="text-default-950 transition-all duration-300 hover:text-primary">+62 853 6221 9945</a></li>
              <li><a href="mailto:marold.dragon@gmail.com" className="text-default-950 transition-all duration-300 hover:text-primary">marold.dragon@gmail.com</a></li>
              <li className="text-default-600">Medan, Indonesia</li>
            </ul>
            <p className="uppercase text-xs font-semibold tracking-widest mb-4">Follow us on</p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="size-8 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950"><span className="iconify size-4" data-icon="tabler:brand-facebook"></span></a>
              <a href="#" className="size-8 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950"><span className="iconify size-4" data-icon="tabler:brand-instagram"></span></a>
              <a href="#" className="size-8 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950"><span className="iconify size-4" data-icon="tabler:brand-linkedin"></span></a>
              <a href="#" className="size-8 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950"><span className="iconify size-4" data-icon="tabler:brand-x"></span></a>
            </div>
          </div>
        </div>

        <hr className="my-7.5 border-dashed border-default-300" />
        <div className="rounded-lg p-5 border border-default-300 flex flex-wrap items-center lg:justify-between gap-4">
          <div>&copy; 2026 Venturin. All rights reserved</div>
          <div>Develop by <a href="https://venturin.site" target="_blank" className="text-primary underline">Venturin</a></div>
        </div>
      </div>
    </footer>
  );
}
