"use client";

import React from "react";
import { ShieldCheck, UserCheck, MapPin, Award } from "lucide-react";

/* ------------------ Move Static Data Outside ------------------ */
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
      className="bg-slate-50 py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="dental-hospital-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Hospital Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">

          {/* Left Side */}
          <div className="lg:col-span-5 text-left space-y-6">

            <div className="flex items-center gap-2 text-blue-700 font-bold tracking-widest uppercase text-xs">
              <MapPin size={16} aria-hidden="true" />
              <span>Premier Location: Anna Nagar</span>
            </div>

            <h2
              id="dental-hospital-heading"
              className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight"
            >
              Our <span className="text-blue-700 italic">Dental</span> <br />
              Hospital in Chennai
            </h2>

            <div className="w-20 h-1 bg-blue-700 rounded-full" />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative group transition-all duration-500 hover:shadow-2xl">

              <Award
                className="absolute top-8 right-8 text-slate-100 w-24 h-24 pointer-events-none"
                aria-hidden="true"
              />

              <p className="relative z-10 text-lg md:text-xl text-slate-600 leading-relaxed font-light italic">
                "SCULPT Dental Hospital stands as Chennai's premier destination
                for advanced orthodontic care. Under the leadership of{" "}
                <span className="text-slate-900 font-semibold underline decoration-blue-700/30">
                  Dr. Sanjay Sundararajan
                </span>
                , we specialize in digitally guided smile correction, blending
                clinical precision with the art of aesthetics."
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">

                {["Invisalign®", "Laser Care", "Implants"].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 transition-colors group-hover:text-blue-700"
                  >
                    <ShieldCheck
                      size={14}
                      className="text-blue-700"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Experts Section */}
        <div className="text-center">

          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Clinical Leadership
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-16">
            Meet Our <span className="font-bold">Dental Experts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {EXPERTS.map((expert) => (
              <div
                key={expert.title}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <UserCheck size={28} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight transition-colors group-hover:text-blue-700">
                  {expert.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {expert.desc}
                </p>
              </div>
            ))}

          </div>

          <p className="mt-16 max-w-2xl mx-auto text-slate-500 font-light text-lg">
            Our multidisciplinary team also includes{" "}
            <span className="text-slate-800 font-medium">Oral Surgeons</span> and{" "}
            <span className="text-slate-800 font-medium">Periodontists</span>,
            ensuring every patient receives specialized care under one roof.
          </p>

        </div>
      </div>
    </section>
  );
}

export default React.memo(DentalInfoSectionpage);
