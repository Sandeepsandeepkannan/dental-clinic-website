"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Plus } from "lucide-react";

/* -------- Static Data Outside Component -------- */
const DOCTORS = [
  {
    id: 1,
    name: "Dr. Sreenayana Sinha Roy",
    degree: "MDS",
    specialty: "Cosmetic Specialist",
    image: "/img1.png",
    delay: "100ms",
  },
  {
    id: 2,
    name: "Dr. Sreekanth Kandepu",
    degree: "MDS",
    specialty: "Orthodontist",
    image: "/img2.png",
    delay: "200ms",
  },
  {
    id: 3,
    name: "Dr. Swathi Ravipudi",
    degree: "MDS",
    specialty: "Dermatologist",
    image: "/img2.2.png",
    delay: "300ms",
  },
];

function MeetDoctors() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-20 relative">
          <p className="text-blue-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Professional Team Members
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Meet Our <span className="text-blue-700 italic">Expert</span> Doctors
          </h2>

          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full animate-in fade-in duration-1000 delay-500" />
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              style={{ animationDelay: doctor.delay }}
              className="group flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 fill-mode-both"
            >

              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white mb-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-slate-100">

                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Social Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 flex justify-around items-center shadow-xl border border-slate-100">

                    <a href="#" aria-label="LinkedIn Profile" className="p-2 text-slate-600 hover:text-blue-700 transition-all hover:scale-110">
                      <Linkedin size={20} aria-hidden="true" />
                    </a>

                    <a href="#" aria-label="Twitter Profile" className="p-2 text-slate-600 hover:text-blue-700 transition-all hover:scale-110">
                      <Twitter size={20} aria-hidden="true" />
                    </a>

                    <a href="#" aria-label="Instagram Profile" className="p-2 text-slate-600 hover:text-blue-700 transition-all hover:scale-110">
                      <Instagram size={20} aria-hidden="true" />
                    </a>

                  </div>
                </div>

                {/* Plus Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-blue-900/40">
                  <Plus size={24} aria-hidden="true" />
                </div>
              </div>

              {/* Details */}
              <div className="text-center px-4">
                <p className="text-blue-700 text-[10px] uppercase font-bold tracking-[0.2em] mb-2">
                  {doctor.specialty}
                </p>

                <h3 className="text-2xl font-serif text-slate-900 mb-2 transition-colors group-hover:text-blue-700">
                  {doctor.name}
                </h3>

                <div className="flex items-center justify-center gap-3">
                  <span className="w-8 h-px bg-slate-200"></span>
                  <span className="text-slate-500 font-medium tracking-widest text-sm uppercase">
                    {doctor.degree}
                  </span>
                  <span className="w-8 h-px bg-slate-200"></span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            aria-label="Join our medical team"
            className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all hover:bg-blue-700 hover:shadow-2xl active:scale-95 uppercase text-xs tracking-[0.2em]"
          >
            Join our medical team
          </button>
        </div>

      </div>
    </section>
  );
}

export default React.memo(MeetDoctors);
