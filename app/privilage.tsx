"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

/* ---------------- Static Data ---------------- */
const SERVICES = [
  {
    title: "Root Canal",
    image: "/img1.png",
    description: "Save your natural tooth with expertly performed treatments.",
  },
  {
    title: "Dental Implants",
    image: "/img3.png",
    description: "Permanent tooth replacement solutions for a natural smile.",
  },
  {
    title: "Teeth Whitening",
    image: "/img3.1.png",
    description: "Professional whitening treatments for a radiant smile.",
  },
  {
    title: "Orthodontics",
    image: "/img2.png",
    description: "Straighten your teeth with modern braces and aligners.",
  },
  {
    title: "Dental Crowns",
    image: "/img3.3.png",
    description: "Restore damaged teeth with high-quality crowns.",
  },
];

// Double the services array to create a seamless infinite loop
const INFINITE_SERVICES = [...SERVICES, ...SERVICES];

function PrivilegeServices() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Heading Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Premium Dental Care</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-900 mb-6">
          Our Dental <span className="text-blue-700 italic font-medium">Services</span>
        </h2>
        <div className="w-20 md:w-24 h-1 bg-blue-700 rounded-full mx-auto md:mx-0" />
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden py-10">
        {/* The Moving Track */}
        <div className="flex w-fit gap-6 animate-marquee hover:[animation-play-state:paused] px-4">
          {INFINITE_SERVICES.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              className="w-[280px] md:w-[320px] shrink-0 group relative bg-white rounded-[2rem] border border-slate-100 p-5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
            >
              {/* Image Container */}
              <div className="relative h-44 md:h-48 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="w-8 h-[2px] bg-slate-100 transition-all duration-500 group-hover:w-full group-hover:bg-blue-700" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Global CSS for the Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* -50% because we doubled the array */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <div className="mt-10 text-center relative z-10">
        <p className="text-slate-400 text-xs md:text-sm font-medium tracking-wide">
          Gliding through excellence • Hover to focus
        </p>
      </div>
    </section>
  );
}

export default React.memo(PrivilegeServices);