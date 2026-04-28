"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
