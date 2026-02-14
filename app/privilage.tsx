"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

/* ---------------- Move Static Data Outside ---------------- */
const SERVICES = [
  {
    title: "Root Canal",
    image: "/img1.png",
    description:
      "Save your natural tooth with expertly performed root canal treatments.",
    delay: "0ms",
  },
  {
    title: "Dental Implants",
    image: "/img3.png",
    description:
      "Permanent tooth replacement solutions for a confident, natural smile.",
    delay: "100ms",
  },
  {
    title: "Teeth Whitening",
    image: "/img3.1.png",
    description:
      "Professional whitening treatments for a brighter, radiant smile.",
    delay: "200ms",
  },
  {
    title: "Orthodontics",
    image: "/img2.png",
    description:
      "Straighten your teeth with modern braces and clear aligner solutions.",
    delay: "300ms",
  },
  {
    title: "Dental Crowns",
    image: "/img3.3.png",
    description:
      "Restore damaged teeth with high-quality, natural-looking crowns.",
    delay: "400ms",
  },
];

function PrivilegeServices() {
  return (
    <section
      className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
          <Sparkles size={14} aria-hidden="true" />
          <span>Premium Dental Care</span>
        </div>

        <h2
          id="services-heading"
          className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 animate-in fade-in slide-in-from-left-6 duration-1000"
        >
          Our Dental{" "}
          <span className="text-blue-700 italic font-medium">Services</span>
        </h2>

        <div className="w-24 h-1 bg-blue-700 rounded-full animate-in fade-in duration-1000 delay-500" />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            style={{ animationDelay: service.delay }}
            className="group relative bg-white rounded-[2rem] border border-slate-100 p-5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6">
              <Image
                src={service.image}
                alt={`${service.title} dental treatment`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="w-0 h-[2px] bg-blue-700 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center relative z-10">
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          Comprehensive dental treatments for your perfect smile.
          
        </p>
      </div>
    </section>
  );
}

export default React.memo(PrivilegeServices);
