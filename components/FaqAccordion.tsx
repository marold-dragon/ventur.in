"use client";
import { useState } from "react";

const faqs = [
  { q: "1. How long does a typical project take?", a: "Most projects take 2–4 weeks depending on scope, number of revisions, and communication speed." },
  { q: "2. Do you work with startups or only large brands?", a: "We work with both — from early-stage startups to established global brands." },
  { q: "3. What's included in your design packages?", a: "Each package includes strategy, wireframes, high-fidelity design, responsive layouts, and final assets ready for development." },
  { q: "4. Do you provide development services too?", a: "Yes. We offer full Tailwind development so your design becomes a fast, polished, and fully responsive website." },
  { q: "5. How do we start a project?", a: "Simply share your project details through the contact form. We'll follow up with timelines, pricing, and next steps." },
  { q: "6. Can you help with ongoing updates after launch?", a: "Yes, we offer monthly support and on-demand updates to keep your website optimized, secure, and performing well." },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-5">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white p-5 rounded-lg">
          <button
            className="text-xl text-default-950 w-full flex justify-between items-center gap-2.5 text-start"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3>{faq.q}</h3>
            <span className={`iconify size-6 transition-transform duration-500 ${open === i ? "rotate-45" : ""}`} data-icon="tabler:circle-plus-filled"></span>
          </button>
          {open === i && (
            <div className="w-full overflow-hidden transition-[height] duration-300 text-start">
              <p className="mt-5">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
