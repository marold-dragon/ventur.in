"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      className="relative size-full overflow-hidden lg:pt-65 lg:pb-40 md:pt-37.5 pt-32 pb-10"
      data-aos="fade-up"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container max-w-160!">
        <div className="mb-25 text-center space-y-7.5">
          <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
            <i className="iconify custom-arrow-left size-2.5"></i>
            <div className="font-semibold text-xs/none uppercase tracking-widest">Digital Agency</div>
            <i className="iconify custom-arrow-right size-2.5"></i>
          </div>

          <h1 className="lg:text-[70px] text-[56px] font-medium text-center leading-[1.1em] tracking-[-0.03em]">Venturin | UI/UX Agency & <span className="text-primary">Digital Store</span></h1>

          <p className="max-w-130 mx-auto">Transforming ideas into functional UI/UX designs, high-performance websites, and premium digital assets.</p>

          <div className="relative flex items-center justify-center gap-5">
            <Link href="/projects" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95" aria-label="View Venturin portfolio">
              View Portfolio
            </Link>

            <Link href="https://digitalstore-app.netlify.app/" target="_blank" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-default-900 text-white font-medium transition-all duration-500 hover:bg-primary-hover" aria-label="Visit Venturin Digital Store (opens in new tab)">
              Visit Digital Store
            </Link>

            <div className="absolute top-6 inset-s-4 end-auto bottom-auto hidden md:flex flex-col justify-center items-center gap-2.5">
              <div className="flex justify-end items-center w-15 h-7.5 pe-7.5">
                <img src="/images/icons/arrow.svg" alt="Arrow Icon" className="arrow-icon" />
              </div>
              <p className="font-body-alt text-lg text-primary tracking-wide">Schedule a free call now </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
