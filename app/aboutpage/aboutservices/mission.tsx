"use client";
import React from "react";
import { Award, ShieldCheck, Activity, Users } from "lucide-react";

export default function Dental() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- About Hospital Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          
          {/* Left: Animated Branding Block */}
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest">
              <Award size={14} />
              <span>Best in Chennai</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              About <span className="text-yellow-600 italic">Sculpt</span> <br /> 
              Dental Hospital
            </h2>
            
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Redefining dental excellence in Anna Nagar through digital precision and compassionate patient care.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-2xl font-serif text-slate-900">Digital</p>
                <p className="text-xs text-yellow-600 font-bold uppercase">Guided Care</p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-2xl font-serif text-slate-900">Invisalign</p>
                <p className="text-xs text-yellow-600 font-bold uppercase">Platinum Center</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Text Card */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-yellow-600 first-letter:mr-3 first-letter:float-left">
                  SCULPT Dental Hospital, led by renowned orthodontist <span className="text-slate-900 font-medium">Dr. Sanjay Sundararajan</span>, is a premier center for Braces & Invisalign in Anna Nagar. We offer personalized, digitally guided smile corrections with a primary focus on aesthetics, comfort, and precision.
                </p>
                <p className="mt-6 text-slate-600 leading-relaxed font-light">
                  Our clinic specializes in a comprehensive range of treatments including pediatric dentistry, laser gum care, smile makeovers, dental implants, and full-mouth rehabilitation. We blend clinical excellence with compassionate care to ensure a superior patient experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Experts Section --- */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Meet Our <span className="font-bold">Dental Experts</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Orthodontists", icon: <Activity />, desc: "Leading specialists in Invisalign and digital smile design." },
              { title: "Implantologists", icon: <ShieldCheck />, desc: "Experts in permanent dental restoration and implants." },
              { title: "Endodontists", icon: <Users />, desc: "Specialized in advanced root canal and restorative therapy." },
              { title: "Oral Surgeons", icon: <Award />, desc: "Precision-focused surgical care and rehabilitation." }
            ].map((item, idx) => (
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
          
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full" />
            <p className="relative z-10 text-white text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed italic">
              "Our dentists are skilled at performing a wide range of procedures, dedicating their specialized skills as periodontists and surgeons to the betterment of our patients."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}