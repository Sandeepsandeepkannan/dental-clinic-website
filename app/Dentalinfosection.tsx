"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, UserCheck, MapPin, Award, Star } from "lucide-react";
// Ensure this path is correct based on your file structure
import AppointmentModal from "./appointmentpage"; 

/* ---------- Static Data Outside Component ---------- */
const EXPERTS = [
  {
    name: "Dr. Sanjay Sundararajan",
    title: "Chief Orthodontist",
    desc: "Specialist in digital smile correction and advanced Invisalign® clear aligner therapy.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    name: "Dr. Ananya Rao",
    title: "Implantologist",
    desc: "Expert in full-mouth rehabilitation and precision dental implant surgery with 15+ years experience.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dr. Vikram Seth",
    title: "Endodontist",
    desc: "Specializes in microscopic root canal treatments and advanced restorative dental care.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
  },
];

function DentalInfoSectionpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Hospital Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 mb-24 md:mb-32 items-center">
          <div className="lg:col-span-5 text-left space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 text-blue-700 font-bold tracking-widest uppercase text-[10px] md:text-xs">
              <MapPin size={14} className="md:w-4 md:h-4" />
              <span>Premier Location: Anna Nagar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-900 leading-[1.2] md:leading-tight">
              Our <span className="text-blue-700 italic">Dental</span> <br className="hidden sm:block" />
              Hospital in Chennai
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-700 rounded-full" />
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-slate-100 relative group overflow-hidden">
              <Award className="absolute -top-4 -right-4 text-slate-50 w-32 h-32 pointer-events-none group-hover:text-blue-50 transition-colors" />
              <blockquote className="relative z-10">
                <p className="text-base md:text-xl text-slate-600 leading-relaxed font-light italic">
                  &quot;SCULPT Dental Hospital stands as Chennai&apos;s premier destination
                  for advanced orthodontic care. Under the leadership of professional specialists,
                  we specialize in digitally guided smile correction.&quot;
                </p>
              </blockquote>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400">
                {["Invisalign®", "Laser Care", "Implants"].map((item) => (
                  <div key={item} className="flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                    <ShieldCheck size={14} className="text-blue-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Meet Our Dental Experts Section --- */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={12} fill="currentColor" />
            <span>Clinical Leadership</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 md:mb-24">
            Meet Our <span className="text-blue-700 italic">Experts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {EXPERTS.map((doc, index) => (
              <article key={index} className="group relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl mb-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />
                  
                  <Image 
                    src={doc.image} 
                    alt={doc.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                       <p className="text-blue-400 text-[10px] uppercase font-black tracking-widest mb-1">{doc.title}</p>
                       <h3 className="text-white text-xl font-bold tracking-tight">{doc.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="px-4 text-left space-y-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    <span className="text-slate-400 text-[10px] font-bold ml-2 uppercase tracking-tighter">Verified Specialist</span>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {doc.desc}
                  </p>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    suppressHydrationWarning
                    className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all"
                  >
                    View Portfolio <UserCheck size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <footer className="mt-20 pt-10 border-t border-slate-200 max-w-3xl mx-auto text-slate-400 font-light text-sm md:text-base">
            Our multidisciplinary team also includes dedicated <span className="text-slate-900 font-semibold">Oral Surgeons</span> and <span className="text-slate-900 font-semibold">Periodontists</span>.
          </footer>
        </div>
      </div>

      {/* Appointment Modal Integration */}
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}

export default React.memo(DentalInfoSectionpage);