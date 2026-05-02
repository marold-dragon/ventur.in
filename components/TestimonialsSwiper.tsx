"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "@/components/icons";

const testimonials = [
  {
    quote: "It was easy working with them; they understood our vision immediately and delivered a digital experience that represents our brand perfectly.",
    name: "Martua Sinaga",
    role: "Founder & Lead Product Engineer",
    avatar: "/images/avatars/6.png",
  },
  {
    quote: "From concept to execution, they made everything effortless and created a digital experience that genuinely aligns with who we are.",
    name: "Martua Sinaga",
    role: "Founder & Lead Product Engineer",
    avatar: "/images/avatars/5.png",
  },
  {
    quote: "They made everything simple and efficient, turning our brand vision into a polished product that elevates our online presence.",
    name: "Martua Sinaga",
    role: "Founder & Lead Product Engineer",
    avatar: "/images/avatars/9.png",
  },
];

export default function TestimonialsSwiper() {
  return (
    <section className="size-full lg:py-20 md:py-15 py-12.5">
      <div className="container max-w-175! mb-7.5">
        <div className="relative space-y-4 text-center">
          <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
            <i className="iconify custom-arrow-left size-2.5"></i>
            <div className="font-semibold text-xs/none uppercase tracking-widest">Testimonials</div>
            <i className="iconify custom-arrow-right size-2.5"></i>
          </div>
          <h2 className="text-[52px]">What clients say</h2>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".testimonial-prev", nextEl: ".testimonial-next" }}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        className="lg:overflow-visible!"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} style={{ width: 630, height: 380 }}>
            <div className="p-5 w-full h-full flex justify-center bg-default-200 inset-shadow border border-default-200 rounded-2xl">
              <div className="bg-white rounded-lg p-5 size-full inline-flex flex-col items-start justify-between">
                <h2 className="text-[22px]">{t.quote}</h2>
                <div className="flex items-center w-full gap-2.5">
                  <img src={t.avatar} className="size-10 rounded-full" alt={t.name} loading="lazy" />
                  <div className="flex items-center grow gap-2">
                    <div>{t.name}</div>
                    <div>-</div>
                    <div>{t.role}</div>
                  </div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="iconify size-4 text-primary" data-icon="tabler:star-filled"></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center max-w-200 mx-auto mt-6 gap-5">
        <div className="flex-1 border-t border-dashed border-default-300"></div>
        <button className="testimonial-prev size-10 inset-shadow flex items-center justify-center rounded-lg" aria-label="Previous testimonial">
          <span className="flex justify-center items-center size-7.5 bg-white rounded">
            <ArrowRight className="size-3.5" />
          </span>
        </button>
        <button className="testimonial-next size-10 inset-shadow flex items-center justify-center rounded-lg" aria-label="Next testimonial">
          <span className="flex justify-center items-center size-7.5 bg-white rounded">
            <ArrowLeft className="size-3.5" />
          </span>
        </button>
        <div className="flex-1 border-t border-dashed border-default-300"></div>
      </div>
    </section>
  );
}
