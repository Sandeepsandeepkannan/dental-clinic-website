"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import AppointmentModal from "@/app/appointmentpage";

/* ---------- Move Static Data Outside ---------- */
const FEATURES = [
  "Expert Team of Medical Professionals",
  "Personalized Clinical Treatment Plans",
  "Comprehensive Range of Aesthetic Services",
];

function WhyChooseUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-24 md:py-32 px-6 overflow-hidden">
      
      <AppointmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side Image */}
          <div className="relative animate-in fade-in slide-in-from-left-10 duration-1000">
            
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative group">
              <div className="relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white transition-transform duration-500 group-hover:scale-[1.02]">
                
                <Image
                  src="/img2.png"
                  alt="Aesthetiq Foundation personalized beauty treatment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-4 md:right-12 bg-blue-700 text-white p-8 rounded-3xl shadow-2xl">
                <div className="text-center">
                  <p className="text-3xl font-serif mb-1">99%</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                    Patient <br /> Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">

            <div className="flex items-center gap-3">
              <Star
                className="w-5 h-5 text-blue-600 fill-blue-600"
                aria-hidden="true"
              />
              <span className="text-xs uppercase tracking-[0.3em] text-blue-700 font-bold">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Your Trusted Choice for <br />
              <span className="text-blue-700 italic">Personalized</span> Beauty
            </h2>

            <div className="space-y-6 pt-4">
              {FEATURES.map((text, idx) => (
                <div
                  key={text}
                  className="flex items-center gap-4 group"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={20} aria-hidden="true" />
                  </div>
                  <span className="text-slate-700 text-lg font-medium tracking-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Book a consultation appointment"
                className="group relative flex items-center gap-4 bg-blue-700 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/20 active:scale-95 uppercase text-xs tracking-[0.2em]"
              >
                <span>Book a Consultation Now</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(WhyChooseUs);
