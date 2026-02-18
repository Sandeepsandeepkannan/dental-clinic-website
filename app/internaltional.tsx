"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe2, Plane, Sparkles, ShieldCheck } from "lucide-react";
// Import your modal component - ensure the path is correct
import AppointmentModal from "./appointmentpage"; 

export default function InternationalPatientsSection() {
  // 1. Create state to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 pt-10 pb-20 md:pt-16 md:pb-32 px-6 overflow-hidden relative">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100/50 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Abstract Image Composition */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-slate-100 rounded-full animate-pulse duration-[10s]" />
            <div className="absolute w-48 h-64 bg-blue-50 rounded-[3rem] -rotate-12 left-10 top-20 blur-sm" />
            <div className="absolute w-32 h-32 bg-slate-50 rounded-full right-20 bottom-20" />

            <div className="relative z-10 w-full h-full">
              <div className="absolute top-10 left-10 w-48 md:w-64 aspect-square rounded-full border-8 border-white shadow-2xl shadow-slate-200 overflow-hidden">
                <Image src="/img1.png" alt="International Patient" fill className="object-cover" />
              </div>
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 md:w-44 aspect-square rounded-full border-4 border-white shadow-2xl shadow-slate-200 overflow-hidden z-20">
                <Image src="/img3.png" alt="Advanced Care" fill className="object-cover" />
              </div>
              <div className="absolute bottom-10 left-20 w-40 md:w-56 aspect-square rounded-full border-8 border-white shadow-2xl shadow-slate-200 overflow-hidden z-10">
                <Image src="/img2.png" alt="Smile Success" fill className="object-cover" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-600/10 backdrop-blur-xl rounded-2xl border border-blue-100 flex items-center justify-center text-blue-600 z-30 shadow-xl">
                <ShieldCheck size={32} />
              </div>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                <Globe2 size={14} />
                <span>Global Clinical Standards</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                International <br />
                <span className="text-blue-700 italic font-medium">Patients Program.</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                People from all over the world seek <span className="text-slate-900 font-medium">advanced clinical treatment</span> at our facility. Patients trust our curated schedules.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-blue-600"><Plane size={20} /></div>
                  <p className="text-sm font-medium text-slate-700">Comprehensive travel & schedule planning via e-mail.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-blue-600"><Sparkles size={20} /></div>
                  <p className="text-sm font-medium text-slate-700">Individualized treatment plans for time-sensitive visits.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              {/* 2. Added onClick to trigger the modal */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center gap-3 bg-slate-900 hover:bg-blue-700 text-white px-10 py-5 font-bold transition-all transform active:scale-95 shadow-xl shadow-slate-200 rounded-2xl tracking-widest text-xs uppercase"
              >
                <span>Inquire for International Care</span>
                <Globe2 size={16} className="transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Render the Modal Component and pass props */}
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}