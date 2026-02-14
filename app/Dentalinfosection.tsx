"use client";

import React from "react";
import { ShieldCheck, UserCheck, MapPin, Award } from "lucide-react";

const EXPERTS = [
  {
    title: "Orthodontists",
    desc: "Digital smile correction and advanced braces center.",
  },
  {
    title: "Implantologists",
    desc: "Specialists in full-mouth rehabilitation and dental implants.",
  },
  {
    title: "Endodontists",
    desc: "Experts in root canal treatments and restorative care.",
  },
];

function DentalInfoSectionpage() {
  return (
    <section
      className="bg-slate-50 py-16 md:py-32 px-6 overflow-hidden"
      aria-labelledby="dental-hospital-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Hospital Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 mb-20 md:mb-32 items-center">

          {/* Left Side: Better spacing for mobile text */}
          <div className="lg:col-span-5 text-left space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 text-blue-700 font-bold tracking-widest uppercase text-[10px] md:text-xs">
              <MapPin size={14} className="md:w-4 md:h-4" aria-hidden="true" />
              <span>Premier Location: Anna Nagar</span>
            </div>

            <h2
              id="dental-hospital-heading"
              className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-900 leading-[1.2] md:leading-tight"
            >
              Our <span className="text-blue-700 italic">Dental</span> <br className="hidden sm:block" />
              Hospital in Chennai
            </h2>

            <div className="w-16 md:w-20 h-1 bg-blue-700 rounded-full" />
          </div>

          {/* Right Side: Reduced padding on mobile to save space */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-slate-100 relative group transition-all duration-500 hover:shadow-xl">

              <Award
                className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-50 w-16 h-16 md:w-24 md:h-24 pointer-events-none transition-colors group-hover:text-blue-50"
                aria-hidden="true"
              />

              <blockquote className="relative z-10">
                <p className="text-base md:text-xl text-slate-600 leading-relaxed font-light italic">
                  "SCULPT Dental Hospital stands as Chennai's premier destination
                  for advanced orthodontic care. Under the leadership of{" "}
                  <span className="text-slate-900 font-semibold underline decoration-blue-700/30">
                    Dr. Sanjay Sundararajan
                  </span>
                  , we specialize in digitally guided smile correction."
                </p>
              </blockquote>

              {/* Badges: 2 columns on tiny phones, 3 on tablets */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400">
                {["Invisalign®", "Laser Care", "Implants"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 transition-colors group-hover:text-blue-700"
                  >
                    <ShieldCheck
                      size={14}
                      className="text-blue-700 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experts Section */}
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
            Clinical Leadership
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 md:mb-16">
            Meet Our <span className="font-bold">Dental Experts</span>
          </h2>

          {/* Grid: 1 col on mobile, 3 on desktop. Reduced padding for mobile cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {EXPERTS.map((expert) => (
              <article
                key={expert.title}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors mx-auto md:mx-0">
                  <UserCheck 
                    className="w-6 h-6 md:w-7 md:h-7" 
                    aria-hidden="true" 
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                  {expert.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {expert.desc}
                </p>
              </article>
            ))}
          </div>

          <footer className="mt-12 md:mt-16 max-w-2xl mx-auto text-slate-500 font-light text-base md:text-lg px-4">
            Our multidisciplinary team also includes{" "}
            <span className="text-slate-800 font-medium">Oral Surgeons</span> and{" "}
            <span className="text-slate-800 font-medium">Periodontists</span>.
          </footer>
        </div>
      </div>
    </section>
  );
}

export default React.memo(DentalInfoSectionpage);