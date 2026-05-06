import Link from "next/link";
import Image from "next/image";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seo = await prisma.seoMetadata.findUnique({
      where: { page: "home" },
    });
    return {
      title: seo?.metaTitle || "Venturin | Digital Branding & Development",
      description: seo?.metaDescription || "Tingkatkan presensi digital Anda bersama Venturin.",
      keywords: seo?.keywords || "web developer, full stack developer, digital branding",
    };
  } catch (error) {
    console.error("Gagal mengambil data SEO:", error);
    return {
      title: "Venturin | Digital Branding & Development",
      description: "Tingkatkan presensi digital Anda bersama Venturin.",
    };
  }
}

export default async function Home() {
  const features = await prisma.feature.findMany({
    where: { isActive: true },
    orderBy: { updatedAt: 'asc' },
  })

  const services = features.length > 0
    ? features.map(f => ({ title: f.title, icon: f.icon || 'tabler:bolt', desc: f.description, tags: [] as string[] }))
    : [
        {title:"UI/UX Design",icon:"tabler:palette",desc:"User-centered design, wireframing, and interactive prototyping to create intuitive and beautiful user interfaces.",tags:["Wireframing","Prototyping","User Research"]},
        {title:"Web Development",icon:"tabler:code",desc:"High-performance, responsive, and scalable web solutions using modern technologies.",tags:["Front-end","Back-end","CMS"]},
        {title:"Digital Assets",icon:"tabler:shopping-bag",desc:"Premium UI Kits, templates, and design resources to accelerate your design workflow.",tags:["Templates","Icons","UI Kits"]},
      ]

  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://venturin.vercel.app/#founder",
                "name": "Martua Sinaga",
                "jobTitle": "Founder & Lead Product Engineer",
                "image": "https://venturin.vercel.app/images/martua-profile.webp",
                "worksFor": { "@type": "Organization", "name": "Venturin" },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Medan",
                  "postalCode": "20111",
                  "addressCountry": "ID"
                }
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://venturin.vercel.app/#business",
                "name": "Venturin",
                "description": "Expert Full-Stack Development and UI/UX Design",
                "url": "https://venturin.vercel.app",
                "image": "https://venturin.vercel.app/images/logo-dark.jpg",
                "telephone": "+62-853-6221-9945",
                "priceRange": "$$",
                "founder": { "@id": "https://venturin.vercel.app/#founder" },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Medan",
                  "postalCode": "20111",
                  "addressCountry": "ID"
                }
              }
            ]
          })
        }}
      />

      {/* HERO */}
      <section className="relative size-full overflow-hidden lg:pt-65 lg:pb-40 md:pt-37.5 pt-32 pb-10">
        <div className="container max-w-160!">
          <div className="mb-25 text-center space-y-7.5">
            <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
              <ArrowLeft className="size-2.5" />
              <div className="font-semibold text-xs/none uppercase tracking-widest">Digital Agency</div>
              <ArrowRight className="size-2.5" />
            </div>
            <h1 className="lg:text-[70px] text-[56px] font-medium text-center leading-[1.1em] tracking-[-0.03em]">Venturin | UI/UX Agency & <span className="text-primary">Digital Store</span></h1>
            <p className="max-w-130 mx-auto">Transforming ideas into functional UI/UX designs, high-performance websites, and premium digital assets.</p>
            <div className="relative flex items-center justify-center gap-5">
              <Link href="/projects" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">
                View Portfolio
              </Link>
              <a href="https://digitalstore-app.netlify.app/" target="_blank" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-default-900 text-white font-medium transition-all duration-500 hover:bg-primary-hover">
                Visit Digital Store
              </a>
              <div className="absolute top-6 inset-s-4 end-auto bottom-auto hidden md:flex flex-col justify-center items-center gap-2.5">
                <div className="flex justify-end items-center w-15 h-7.5 pe-7.5">
                  <img src="/images/icons/arrow.svg" alt="Arrow Icon" />
                </div>
                <p className="font-body-alt text-lg text-primary tracking-wide">Schedule a free call now</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex-1 border-t border-dashed border-default-300"></div>
            <p className="text-xs tracking-[0.3em] uppercase text-default-500 text-center whitespace-nowrap">Trusted by <span className="text-default-900 font-semibold">100+</span> global leaders</p>
            <div className="flex-1 border-t border-dashed border-default-300"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {[1,2,3,4].map(n => <img key={n} src={`/images/client/${n}.svg`} alt="Client" className="h-4 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />)}
          </div>
        </div>

        {/* Decoration circles left */}
        <div className="lg:flex hidden">
          <div className="absolute size-450 inset-[-432px_auto_-432px_-1400px] animate-[spin_100s_linear_infinite] flex items-center justify-center mx-auto rounded-full p-2.5 bg-default-100 inset-shadow">
            <div className="border border-white rounded-full size-full"></div>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className={`absolute -top-8.25 -bottom-8.25 h-466.5 w-19 flex items-center justify-between flex-col z-1${i>0?' rotate-'+i*30:''}`}>
                <div className="bg-white size-19 flex items-center justify-center shadow-lg rounded-lg"><img src={`/images/icons/${i*2+1}.svg`} alt="Icon" /></div>
                <div className="bg-white size-19 flex items-center justify-center shadow-lg rounded-lg"><img src={`/images/icons/${i*2+2}.svg`} alt="Icon" /></div>
              </div>
            ))}
          </div>
          <div className="absolute size-350 inset-[-214px_auto_-214px_-1150px] flex items-center justify-center mx-auto rounded-full p-2.5 bg-default-100 inset-shadow"><div className="border border-white rounded-full size-full"></div></div>
          <div className="absolute size-250 inset-[-32px_auto_-32px_-900px] flex items-center justify-center mx-auto rounded-full p-2.5 bg-default-100 inset-shadow"><div className="border border-white rounded-full size-full"></div></div>
          {/* Right side */}
          <div className="absolute size-450 animate-[spin_100s_linear_infinite_reverse] inset-[-432px_-1400px_-432px_auto] flex items-center justify-center mx-auto rounded-full p-2.5 bg-default-100 inset-shadow">
            <div className="border border-white rounded-full size-full"></div>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className={`absolute -top-8.25 -bottom-8.25 h-466.5 w-19 flex items-center justify-between flex-col z-1${i>0?' rotate-'+i*30:''}`}>
                <div className="bg-white size-19 flex items-center justify-center shadow-lg rounded-lg"><img src={`/images/icons/${i*2+1}.svg`} alt="Icon" /></div>
                <div className="bg-white size-19 flex items-center justify-center shadow-lg rounded-lg"><img src={`/images/icons/${i*2+2}.svg`} alt="Icon" /></div>
              </div>
            ))}
          </div>
          <div className="absolute size-350 inset-[-214px_-1150px_-214px_auto] flex items-center justify-center mx-auto rounded-full p-2.5 bg-default-100 inset-shadow"><div className="border border-white rounded-full size-full"></div></div>
          <div className="absolute size-250 inset-[-32px_-900px_-32px_auto] flex items-center justify-center mx-auto rounded-full p-2.5 bg-default-100 inset-shadow"><div className="border border-white rounded-full size-full"></div></div>
        </div>
      </section>

      {/* SCROLLING PORTFOLIO STRIP */}
      <section className="relative size-full overflow-hidden lg:pb-20 md:pb-15 pb-12.5">
        <div className="h-5 w-full inset-shadow border border-white"></div>
        <div className="lg:space-y-7.5 space-y-3 overflow-hidden md:p-0 p-4">
          <div className="group relative overflow-hidden">
            <div className="flex flex-wrap lg:gap-7.5 gap-3 md:w-max md:animate-marquee group-hover:[animation-play-state:paused]">
              <div className="md:flex grid grid-cols-3 lg:gap-7.5 gap-3 *:bg-default-100 *:size-full *:md:w-100 *:md:h-75 *:md:rounded-b-2xl *:md:p-5 *:p-1.5 *:rounded *:inset-shadow">
                {[1,2,3,4,5,6].map(n => <div key={n}><img src={`/images/portfolio/${n}.webp`} alt="Project" className="rounded-lg size-full" /></div>)}
              </div>
              <div className="hidden md:flex lg:gap-7.5 gap-3 *:bg-default-100 *:size-full *:md:w-100 *:md:h-75 *:md:rounded-b-2xl *:md:p-5 *:p-1.5 *:rounded *:inset-shadow">
                {[1,2,3,4,5,6].map(n => <div key={n}><img src={`/images/portfolio/${n}.webp`} alt="Project" className="rounded-lg size-full" /></div>)}
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <div className="md:flex lg:gap-7.5 gap-3 md:w-max md:animate-marquee-reverse group-hover:[animation-play-state:paused]">
              <div className="md:flex grid grid-cols-3 lg:gap-7.5 gap-3 *:bg-default-100 *:size-full *:md:w-100 *:md:h-75 *:md:rounded-t-2xl *:md:p-5 *:p-1.5 *:rounded *:inset-shadow">
                {[7,8,9,10,11,12].map(n => <div key={n}><img src={`/images/portfolio/${n}.webp`} alt="Project" className="rounded-lg size-full" /></div>)}
              </div>
              <div className="hidden md:flex lg:gap-7.5 gap-3 *:bg-default-100 *:size-full *:md:w-100 *:md:h-75 *:md:rounded-t-2xl *:md:p-5 *:p-1.5 *:rounded *:inset-shadow">
                {[7,8,9,10,11,12].map(n => <div key={n}><img src={`/images/portfolio/${n}.webp`} alt="Project" className="rounded-lg size-full" /></div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:m-0 m-4 mt-0">
          <div className="lg:absolute lg:inset-s-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:size-95 size-full lg:rounded-full rounded-2xl inset-shadow bg-[linear-gradient(180deg,white,#e7e2dd)] p-2.5">
            <div className="p-5 text-center flex flex-col items-center justify-center gap-7.5 size-full lg:rounded-full rounded-lg bg-[linear-gradient(180deg,#f5f4f3,white)] shadow border border-default-200">
              <div className="size-10 flex items-center justify-center border border-default-200 rounded-lg">
                <img src="/images/logo-dark.jpg" loading="lazy" alt="Venturin Icon" className="h-4 w-6" />
              </div>
              <h2 className="lg:text-4xl text-xl">100+ Premium Designs</h2>
              <Link href="/projects" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Explore all Projects</Link>
            </div>
          </div>
        </div>
        <div className="h-5 w-full inset-shadow border border-white"></div>
      </section>

      {/* COMPARE */}
      <section className="size-full lg:py-20 md:py-15 py-12.5">
        <div className="container max-w-180!">
          <div className="mb-15 group relative">
            <input type="checkbox" id="compare-switch" className="sr-only" />
            <h2 className="mb-10 text-4xl text-default-500">We know choosing the right agency is hard because few <span className="text-default-950 group-has-checked:text-primary transition-colors duration-500">truly deliver</span>.</h2>
            <h2 className="text-4xl text-default-500 leading-[1.1em]">
              So we made it simple <span className="text-default-950 group-has-checked:text-primary transition-colors duration-500">to</span> <span className="text-default-950 group-has-checked:text-primary transition-colors duration-500">compare</span> how we work
              <label htmlFor="compare-switch" className="relative inline-flex w-13 h-6.5 cursor-pointer align-middle">
                <span className="absolute inset-0 bg-default-400 rounded-full transition-colors duration-200 group-has-checked:bg-primary"></span>
                <span className="absolute top-1/2 inset-s-0.5 -translate-y-1/2 size-5.5 bg-white rounded-full shadow-sm transition-transform duration-200 group-has-checked:translate-x-6.25"></span>
              </label>
              {" "}versus what you usually get <span className="text-default-950 group-has-checked:text-primary transition-colors duration-500">in the market.</span>
            </h2>
            <div className="mt-15 md:grid grid-cols-2 items-center">
              <div className="bg-white lg:rounded-lg md:rounded-e-none rounded-t-lg divide-y divide-dashed divide-default-300">
                <div className="py-5 px-7.5"><h2 className="text-[22px]">Other agencies</h2></div>
                <div className="*:py-4 *:px-7.5 divide-y divide-dashed divide-default-300">
                  {["Slow, unclear timelines","Extra charges for changes","No clear process","Designs break in dev","Complex, hard builds"].map((item,i) => (
                    <div key={i} className="flex items-center gap-2.5"><ArrowLeft className="size-2.5" /><p>{item}</p></div>
                  ))}
                </div>
              </div>
              <div className="bg-default-200 py-5 md:rounded-lg rounded-b-lg divide-y divide-dashed divide-default-950/10 text-default-950/60 from-transparent to-transparent bg-linear-to-r group-has-checked:text-default-950 group-has-checked:from-blue-300 group-has-checked:to-blue-400 transition-colors duration-300">
                <div className="py-5 px-7.5"><h2 className="text-[22px]">Venturin agency</h2></div>
                <div className="*:py-4 *:px-7.5 divide-y divide-dashed divide-default-950/10">
                  {["Clear weekly updates","Transparent pricing","Documented workflow","Design - dev alignment","Clean, Scalable Builds"].map((item,i) => (
                    <div key={i} className="flex items-center gap-2.5"><ArrowLeft className="size-2.5" /><p>{item}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-7.5">
            <Link href="/about" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Read our Story</Link>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4.5">
                {[7,6,5].map(n => <img key={n} src={`/images/avatars/${n}.png`} alt="Avatar" className="size-11 p-0.75 bg-default-200 inset-shadow rounded-full" loading="lazy" />)}
                <a href="#" className="size-11 p-0.75 bg-default-200 rounded-full inset-shadow"><div className="bg-white text-default-900 rounded-full flex items-center justify-center size-full text-sm">+51</div></a>
              </div>
              <div>
                <div className="flex mb-1">{[...Array(5)].map((_,i) => <span key={i} className="iconify size-4 text-primary" data-icon="tabler:star-filled"></span>)}</div>
                <p>Trusted by <span className="text-primary">54+</span> visionary brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT/STATS */}
      <section className="size-full lg:py-20 md:py-15 py-12.5">
        <div className="container">
          <div className="space-y-5 rounded-2xl p-5 bg-default-200 inset-shadow border border-default-200">
            <div className="grid md:grid-cols-4 gap-5">
              <div className="bg-white h-full flex flex-col justify-between rounded-lg p-5 text-center">
                <div><h2 className="mb-1.5 text-[22px]">CSAT</h2><p>Measures and improves client satisfaction.</p></div>
                <div className="text-center">
                  <div className="mb-3 text-xs uppercase font-semibold tracking-wide text-primary">EXCELLENT</div>
                  <div className="flex justify-center gap-2">
                    <span className="iconify size-8 text-primary/25 border border-dashed border-current rounded-full" data-icon="tabler:mood-angry-filled"></span>
                    <span className="iconify size-8 text-primary/25 border border-dashed border-current rounded-full" data-icon="tabler:mood-sad-filled"></span>
                    <span className="iconify size-8 text-primary/25 border border-dashed border-current rounded-full" data-icon="tabler:mood-empty-filled"></span>
                    <span className="iconify size-8 text-primary/25 border border-dashed border-current rounded-full" data-icon="tabler:mood-smile-filled"></span>
                    <span className="iconify size-8 text-primary border border-dashed border-current rounded-full" data-icon="tabler:mood-happy-filled"></span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="bg-white rounded-lg p-5">
                  <div className="grid grid-cols-2 border border-default-200 rounded-lg overflow-hidden">
                    <div><img src="/images/other/mission-image.webp" alt="Mission" className="size-full object-cover" /></div>
                    <div className="p-5 h-full flex flex-col gap-7.5 justify-between">
                      <div className="size-10 flex items-center justify-center rounded-lg bg-default-100 border border-default-300"><img src="/images/icons/13.svg" alt="Icon" className="size-5" /></div>
                      <div><h2 className="mb-2">A Smooth, Guided Process</h2><p>Clear steps with expert support at every stage.</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative rounded-lg p-5 text-center overflow-hidden bg-linear-to-r from-blue-300 to-blue-300/75">
                <div className="relative z-2 h-full flex flex-col gap-7.5 justify-between">
                  <h2 className="mb-1.5 text-[22px]">Discuss your project</h2>
                  <div>
                    <Link href="/contact" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Schedule a call - 15 mins free</Link>
                    <p className="mt-2.5 text-default-600">No pressure, just a thoughtful chat.</p>
                  </div>
                  <div className="flex items-center justify-center -space-x-3 -mb-8">
                    <div className="size-25 -rotate-18"><div className="border-4 border-white rounded-lg"><img src="/images/avatars/3.png" alt="Team" className="rounded-lg" loading="lazy" /></div></div>
                    <div className="size-25 -rotate-8"><div className="border-4 border-white rounded-lg"><img src="/images/avatars/4.png" alt="Team" className="rounded-lg" loading="lazy" /></div></div>
                    <div className="size-25 -rotate-8"><div className="border-4 border-white rounded-lg"><img src="/images/avatars/1.png" alt="Team" className="rounded-lg" loading="lazy" /></div></div>
                    <div className="size-25 rotate-14"><div className="border-4 border-white rounded-lg"><img src="/images/avatars/2.png" alt="Team" className="rounded-lg" loading="lazy" /></div></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 text-center">
                <div className="mb-20"><h2 className="mb-1.5 text-[22px]">SEO ready & fast performance</h2><p>Optimized for search rankings and blazing-fast speed.</p></div>
                <div className="grid grid-cols-3 items-end md:gap-10 gap-6">
                  {[{s:"99%",l:"Performance",sz:"size-18"},{s:"100%",l:"SEO",sz:"size-27.5"},{s:"98%",l:"Accessibility",sz:"size-18"}].map((m,i) => (
                    <div key={i} className="flex flex-col items-center gap-2.5">
                      <div className={`${m.sz} bg-primary/20 border-6 border-primary rounded-full flex items-center justify-center`}><span className="text-default-950">{m.s}</span></div>
                      <p className="uppercase text-xs tracking-[0.15em]">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              <div className="bg-white rounded-lg p-5 h-full flex flex-col justify-between">
                <div className="mb-5"><h2 className="mb-1.5 text-[22px]">Agency website rebuild</h2><p className="text-sm">120% more inquiries</p></div>
                <div className="w-full h-25 relative rounded-lg overflow-clip"><img src="/images/other/project-detail.webp" alt="Project" className="size-full" loading="lazy" /></div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg p-5 text-center">
                  <h2 className="mb-7.5 text-[22px]">Industries we work with</h2>
                  <div className="relative h-45 overflow-hidden w-full max-w-md">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,#fff_85%)]"></div>
                    <div className="animate-[vertical-marquee_15s_linear_infinite] space-y-3 text-center text-sm tracking-[0.3em] uppercase font-medium text-blue-400">
                      {["SaaS & Tech","E-Commerce & D2C","Architecture & Interiors","Education & Learning","SaaS & Tech","E-Commerce & D2C","Architecture & Interiors","Education & Learning"].map((ind,i) => (
                        <div key={i} className="flex items-center justify-center gap-3 border-t border-dashed border-blue-200 pt-3"><span>•</span><span className="text-xs">{ind}</span><span>•</span></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative size-full min-h-50">
                <Image src="/images/martua-profile.webp" alt="Martua Sinaga" fill className="rounded-lg object-cover" />
                <div className="absolute z-3 bottom-5 left-5 flex flex-col gap-2">
                  <div className="text-white">Martua Sinaga</div>
                  <div className="text-xs text-white">Founder & Lead Product Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="lg:py-20 md:py-15 py-12.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-start gap-7.5">
            <div className="space-y-4 lg:sticky lg:top-45">
              <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
                <ArrowLeft className="size-2.5" />
                <div className="font-semibold text-xs/none uppercase tracking-widest">What we do</div>
                <ArrowRight className="size-2.5" />
              </div>
              <h2 className="text-[52px]">Our Services</h2>
              <div className="relative flex">
                <Link href="/contact" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Start a Project</Link>
                <div className="absolute top-14 end-auto bottom-0 inset-s-45 lg:flex hidden flex-col justify-center items-center gap-2.5">
                  <div className="flex justify-end items-center w-15 h-7.5 pe-7.5"><img src="/images/icons/arrow.svg" alt="Arrow" className="size-7.5 -rotate-y-180" /></div>
                  <p className="font-body-alt text-lg text-primary tracking-wide">Let&apos;s get started</p>
                </div>
              </div>
            </div>
            <div className="space-y-5 rounded-2xl p-5 bg-default-200 inset-shadow border border-default-200">
              {services.map((svc,i) => (
                <div key={i} className="bg-white rounded-lg p-5">
                  <div className="mb-15">
                    <div className="flex justify-between">
                      <h2 className="text-[22px]">{svc.title}</h2>
                      <div className="size-11 flex items-center justify-center rounded-lg bg-blue-100 border border-blue-300"><span className="iconify size-6 text-primary" data-icon={svc.icon}></span></div>
                    </div>
                    <hr className="my-5 border-dashed border-default-200" />
                    <p>{svc.desc}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {svc.tags.map(tag => <div key={tag} className="py-2 px-4 text-xs uppercase font-semibold tracking-widest rounded-full border border-blue-200 bg-blue-50 text-primary">{tag}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL ASSETS */}
      <section className="size-full lg:py-20 md:py-15 py-12.5">
        <div className="container">
          <div className="space-y-4 text-center mb-10">
            <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
              <ArrowLeft className="size-2.5" />
              <div className="font-semibold text-xs/none uppercase tracking-widest">Digital Store</div>
              <ArrowRight className="size-2.5" />
            </div>
            <h2 className="text-[52px]">Featured Digital Assets</h2>
            <p className="max-w-130 mx-auto">Premium UI Kits, templates, and design resources to accelerate your workflow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {img:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",title:"Premium UI Kit v1.0",desc:"Complete UI kit with 200+ components for modern web applications.",price:"$49"},
              {img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",title:"Web Template Bundle",desc:"10 premium website templates with responsive design and modern aesthetics.",price:"$79"},
              {img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",title:"Icon Pack Pro",desc:"500+ handcrafted icons in multiple formats for any design project.",price:"$29"},
            ].map((p,i) => (
              <div key={i} className="bg-white rounded-lg p-5 group hover:shadow-xl transition-all duration-300">
                <div className="size-full overflow-hidden rounded-lg mb-5"><img src={p.img} alt={p.title} className="size-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-default-600 mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{p.price}</span>
                  <a href="https://digitalstore-app.netlify.app/" target="_blank" className="py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">View Details</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://digitalstore-app.netlify.app/" target="_blank" className="py-3 px-8 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Explore All Assets <span className="iconify ml-2" data-icon="tabler:arrow-right"></span></a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="size-full lg:py-20 md:py-15 py-12.5">
        <div className="container">
          <div className="mb-7.5 relative space-y-4 text-center">
            <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
              <ArrowLeft className="size-2.5" />
              <div className="font-semibold text-xs/none uppercase tracking-widest">Pricing</div>
              <ArrowRight className="size-2.5" />
            </div>
            <h2 className="text-[52px]">Plan that Fits</h2>
          </div>
          <div className="rounded-2xl p-5 bg-default-200 inset-shadow border border-default-200">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative bg-white rounded-lg p-5">
                <div className="p-5 rounded-lg bg-default-100 border border-default-300">
                  <div className="mb-3 text-xs uppercase">Starter</div>
                  <h2 className="mb-5 flex items-baseline"><span className="text-4xl">$99</span><span>/ project</span></h2>
                  <p className="max-w-68">Perfect for startups and small teams launching their first project.</p>
                </div>
                <hr className="my-7.5 border-dashed border-default-200" />
                <div className="mb-7.5 space-y-3">
                  {["1 Landing Page Design","Basic Brand Guidelines","Mobile Responsive Layout","2 Revisions","Delivery in 7 days"].map((f,i) => (
                    <div key={i} className="flex items-center gap-2.5"><span className="iconify size-4.5 text-default-300" data-icon="tabler:circle-check-filled"></span><div>{f}</div></div>
                  ))}
                </div>
                <Link href="/contact" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Get Started Now</Link>
                <img src="/images/icons/rocket.svg" alt="Rocket" className="absolute inset-e-5 -bottom-px w-16 h-25" />
              </div>
              <div className="relative bg-primary rounded-lg p-5">
                <div className="p-5 rounded-lg bg-default-100 border border-default-300">
                  <div className="float-end"><div className="py-1.5 px-2.5 text-[10px]/none uppercase font-semibold tracking-widest rounded-full bg-primary text-white">Popular</div></div>
                  <div className="mb-3 text-xs uppercase">Growth</div>
                  <h2 className="mb-5 flex items-baseline"><span className="text-4xl">$249</span><span>/ project</span></h2>
                  <p className="max-w-68">Best for growing brands looking to scale their digital presence.</p>
                </div>
                <hr className="my-7.5 border-dashed border-default-200" />
                <div className="mb-7.5 space-y-3">
                  {["Multi-page Website Design","Brand Strategy Session","Web Animations & Interactions","4 Revisions","Delivery in 14 days"].map((f,i) => (
                    <div key={i} className="flex items-center gap-2.5"><span className="iconify size-4.5 text-default-100" data-icon="tabler:circle-check-filled"></span><div className="text-white">{f}</div></div>
                  ))}
                </div>
                <Link href="/contact" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-default-950 text-white font-medium transition-all duration-500 hover:bg-primary-hover">Start your Project</Link>
                <img src="/images/icons/fire.svg" alt="Fire" className="absolute inset-e-5 -bottom-px w-16 h-25" />
              </div>
            </div>
          </div>
          <div className="mt-7.5 text-center max-w-85 mx-auto">
            <p className="mb-2">For agencies and enterprises needing custom strategy and execution.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary group"><div>Contact us</div><ArrowLeft className="size-2.5 transition-transform duration-500 group-hover:translate-x-1.5" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSwiper />

      {/* BLOG */}
      <section className="size-full lg:py-20 md:py-15 py-12.5">
        <div className="container">
          <div className="mb-7.5 relative space-y-4 text-center">
            <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
              <ArrowLeft className="size-2.5" />
              <div className="font-semibold text-xs/none uppercase tracking-widest">Blog</div>
              <ArrowRight className="size-2.5" />
            </div>
            <h2 className="text-[52px]">Latest blog</h2>
          </div>
          <div className="rounded-2xl p-5 bg-default-200 inset-shadow border border-default-200 flex min-h-115">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <div className="relative bg-white h-full rounded-lg p-5 group overflow-hidden">
                  <a href="#" className="absolute inset-0 z-10"></a>
                  <div className="h-full grid grid-cols-2 gap-7.5">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-3 text-xs uppercase tracking-wider font-semibold">Design</div>
                        <h2 className="mb-5 text-xl transition-all duration-300 group-hover:text-primary">The future of scalable design systems in 2025</h2>
                        <div className="text-sm text-default-500">Jan 1, 2026</div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="size-10 rounded-full bg-default-200 p-1.5"><img src="/images/avatars/8.png" className="rounded-full" alt="Sophia Reyes" loading="lazy" /></div>
                        <div className="font-medium">Sophia Reyes</div>
                      </div>
                    </div>
                    <div className="min-h-75 w-full overflow-hidden rounded-lg"><img src="/images/blog/2.jpg" alt="Blog" className="rounded-lg size-full object-cover transition-all duration-500 group-hover:scale-105" loading="lazy" /></div>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  {cat:"Branding",title:"How stories shape digital experiences",img:"/images/blog/3.webp"},
                  {cat:"Development",title:"Creating Lightning-Fast Websites in Tailwind",img:"/images/blog/4.webp"},
                ].map((post,i) => (
                  <div key={i} className="relative bg-white rounded-lg p-6 h-50 flex flex-col justify-between group overflow-hidden">
                    <a href="#" className="absolute inset-0 z-10"></a>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-default-500 mb-3">{post.cat}</div>
                      <h2 className="mb-5 text-xl transition-all duration-300 group-hover:text-primary">{post.title}</h2>
                    </div>
                    <div className="text-default-500 text-sm">Jan 1, 2026</div>
                    <div className="absolute bottom-6 right-6 w-24 h-16 rounded-md overflow-hidden"><img src={post.img} alt={post.title} className="size-full object-cover transition-all duration-500 group-hover:scale-105" loading="lazy" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="size-full lg:py-20 md:py-15 py-12.5">
        <div className="container max-w-175!">
          <div className="mb-7.5 relative space-y-4 text-center">
            <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
              <ArrowLeft className="size-2.5" />
              <div className="font-semibold text-xs/none uppercase tracking-widest">Got questions</div>
              <ArrowRight className="size-2.5" />
            </div>
            <h2 className="text-[52px]">We&apos;ve got answers</h2>
          </div>
          <div className="rounded-2xl p-5 bg-default-200 inset-shadow border border-default-200">
            <FaqAccordion />
          </div>
          <div className="mt-5 text-center space-y-2.5">
            <div className="inline-flex items-center gap-4">
              <div className="flex -space-x-4.5">
                {[7,6,5].map(n => <img key={n} src={`/images/avatars/${n}.png`} alt="Avatar" className="size-11 p-0.75 bg-default-200 inset-shadow rounded-full" loading="lazy" />)}
              </div>
            </div>
            <h2 className="text-[22px]">Still have questions?</h2>
            <Link href="/contact" className="py-2.5 px-5.5 inline-flex items-center justify-center rounded-lg bg-primary shadow-primary-soft text-white font-medium transition-all duration-500 hover:bg-primary-hover hover:scale-105 active:scale-95">Let&apos;s Talk</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
