"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-90 max-w-100 mx-auto transition-all duration-300">
      <div className="sticky top-0 my-7.5 flex w-full items-center justify-between rounded-lg border-2 border-default-200/50 bg-white shadow-md">
        <Link href="/" className="flex items-center p-3">
          <Image src="/images/logo-dark.jpg" alt="Logo" width={80} height={32} className="h-8 w-auto flex" />
        </Link>

        <div className="flex h-full w-17.5 items-center justify-center p-4 border-x-2 border-default-200/75">
          <button
            className="inline-flex size-full items-center justify-center text-default-900"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
            onClick={() => setIsOpen(true)}
          >
            <span className="iconify size-6" data-icon="tabler:menu"></span>
          </button>
        </div>

        <div className="flex items-center justify-end gap-4 p-3">
          <Link href="/contact" className="py-1.5 px-3 text-sm inline-flex items-center justify-center rounded bg-default-900 text-white font-medium transition-all duration-500 hover:bg-primary-hover">
            Get Started
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-79 transition-all duration-300 bg-default-900/20 backdrop-blur-xs ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="navbar-menu"
        className={`fixed inset-x-0 z-80 -mt-5 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        tabIndex={-1}
      >
        <div className="w-full bg-white px-6 py-2 rounded-lg">
          <div className="flex flex-col divide-y divide-dashed divide-default-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center py-4 text-2xl/none font-medium text-default-900 transition-all hover:text-primary">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="flex items-center py-4 text-2xl/none font-medium text-default-900 transition-all hover:text-primary">About Us</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="flex items-center py-4 text-2xl/none font-medium text-default-900 transition-all hover:text-primary">Projects</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center py-4 text-2xl/none font-medium text-default-900 transition-all hover:text-primary">Contact Us</Link>

            <div className="flex items-center gap-3 py-4">
              <a href="#" className="size-7 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950">
                <span className="iconify size-4" data-icon="tabler:brand-facebook"></span>
              </a>
              <a href="#" className="size-7 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950">
                <span className="iconify size-4" data-icon="tabler:brand-instagram"></span>
              </a>
              <a href="#" className="size-7 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950">
                <span className="iconify size-4" data-icon="tabler:brand-linkedin"></span>
              </a>
              <a href="#" className="size-7 flex items-center justify-center rounded-lg bg-default-950/10 text-default-950">
                <span className="iconify size-4" data-icon="tabler:brand-x"></span>
              </a>
              <div className="ms-auto text-sm">© 2026 Venturin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
