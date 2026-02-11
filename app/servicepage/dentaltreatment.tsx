"use client";
import React from "react";
import { Award, ShieldCheck, Activity, Users, MapPin } from "lucide-react";

export default function DentalInfoSectionpage() {
  const expertCategories = [
    { title: "Orthodontists", icon: <Activity />, desc: "Leading specialists in Invisalign and digital smile design." },
    { title: "Implantologists", icon: <ShieldCheck />, desc: "Experts in permanent dental restoration and implants." },
    { title: "Endodontists", icon: <Users />, desc: "Specialized in advanced root canal and restorative therapy." },
    { title: "Oral Surgeons", icon: <Award />, desc: "Precision-focused surgical care and rehabilitation." }
  ];

  return (
    <section className="bg-slate-50 py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- About Hospital Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          
          {/* Left: Branding & Location Context */}
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest">
              <MapPin size={14} />
              <span>Anna Nagar, Chennai</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Our <span className="text-yellow-600 italic">Dental</span> <br /> 
              Hospital
            </h2>
            
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Experience the best dental care in Chennai at SCULPT, our exclusive Braces & Invisalign center.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-2xl font-serif text-slate-900">Invisalign</p>
                <p className="text-xs text-yellow-600 font-bold uppercase">Platinum Center</p>
              </div>
              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-2xl font-serif text-slate-900">Digital</p>
                <p className="text-xs text-yellow-600 font-bold uppercase">Guided Care</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Hospital Narrative Card */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light italic">
                  "SCULPT Dental Hospital, led by renowned orthodontist <span className="text-slate-900 font-semibold underline decoration-yellow-500/30">Dr. Sanjay Sundararajan</span>, offers advanced, digitally guided smile correction. We specialize in Invisalign, implants, and full-mouth rehabilitation, blending clinical excellence with compassionate care."
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Smile Makeovers", "Pediatric Dentistry", "Laser Gum Care", "Extractions"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Dental Experts Section --- */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Our <span className="font-bold">Dental Experts</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light pt-4">
              Our multidisciplinary team is dedicated to the betterment of our patients through specialized skills and precision.
            </p>
          </div>

          {/* Experts Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertCategories.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-200"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Statement */}
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden mt-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full" />
            <p className="relative z-10 text-white text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed">
              In addition to our primary specialists, our team includes highly skilled <span className="text-yellow-500 font-medium">Periodontists</span> who collaborate to ensure comprehensive oral health for every patient.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}