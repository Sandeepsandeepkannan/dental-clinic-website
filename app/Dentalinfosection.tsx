"use client";
import React from "react";
import { ShieldCheck, UserCheck, MapPin, Award } from "lucide-react";

export default function DentalInfoSectionpage() {
  return (
    // Section Background: Steel Gray (Lightened for airy feel)
    <section className="bg-slate-50 py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hospital Section - Interactive Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
          
          {/* Left Side: Header & Context */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Accent: Royal Blue for Location Tag */}
            <div className="flex items-center gap-2 text-blue-700 font-bold tracking-widest uppercase text-xs">
              <MapPin size={16} />
              <span>Premier Location: Anna Nagar</span>
            </div>
            
            {/* Heading: Pure White / Slate 900 for contrast */}
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Our <span className="text-blue-700 italic">Dental</span> <br /> 
              Hospital in Chennai
            </h2>
            
            {/* Decorative Line: Royal Blue */}
            <div className="w-20 h-1 bg-blue-700 rounded-full" />
          </div>

          {/* Right Side: Description with Professional White Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative group transition-all duration-500 hover:shadow-2xl">
              {/* Decorative Background Icon: Subtle Gray */}
              <Award className="absolute top-8 right-8 text-slate-100 w-24 h-24 -z-0" />
              
              <p className="relative z-10 text-lg md:text-xl text-slate-600 leading-relaxed font-light italic">
                "SCULPT Dental Hospital stands as Chennai's premier destination for advanced orthodontic care. 
                Under the leadership of <span className="text-slate-900 font-semibold underline decoration-blue-700/30">Dr. Sanjay Sundararajan</span>, 
                we specialize in digitally guided smile correction, blending clinical precision with the art of aesthetics."
              </p>
              
              {/* Feature Tags: Accent Blue */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                <span className="flex items-center gap-2 transition-colors group-hover:text-blue-700">
                  <ShieldCheck size={14} className="text-blue-700"/> Invisalign®
                </span>
                <span className="flex items-center gap-2 transition-colors group-hover:text-blue-700">
                  <ShieldCheck size={14} className="text-blue-700"/> Laser Care
                </span>
                <span className="flex items-center gap-2 transition-colors group-hover:text-blue-700">
                  <ShieldCheck size={14} className="text-blue-700"/> Implants
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experts Section - Clean & Minimalist */}
        <div className="text-center">
          {/* Badge: Royal Blue on light gray */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Clinical Leadership
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-16">
            Meet Our <span className="font-bold">Dental Experts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Procedure Experts Card - Professional White */}
            {[
              { title: "Orthodontists", desc: "Digital smile correction and advanced braces center." },
              { title: "Implantologists", desc: "Specialists in full-mouth rehabilitation and dental implants." },
              { title: "Endodontists", desc: "Experts in root canal treatments and restorative care." }
            ].map((expert, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg group"
              >
                {/* Icon Circle: Deep Blue/Gray background */}
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <UserCheck size={28} />
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
          
          {/* Footer Statement: Steel Gray */}
          <p className="mt-16 max-w-2xl mx-auto text-slate-500 font-light text-lg">
            Our multidisciplinary team also includes <span className="text-slate-800 font-medium">Oral Surgeons</span> and <span className="text-slate-800 font-medium">Periodontists</span>, 
            ensuring every patient receives specialized care under one roof.
          </p>
        </div>

      </div>
    </section>
  );
}