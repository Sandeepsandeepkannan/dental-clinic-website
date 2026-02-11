"use client";
import React from "react";
import { Award, ShieldCheck, Microscope, Users, Activity, MapPin } from "lucide-react";

export default function Dentalinabout() {
  return (
    // Section Background: Slate-50 (Steel Gray base) for a professional clinical look
    <section className="bg-slate-50 py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Hospital Overview Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          
          {/* Left: Branding & Location Context */}
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Badge: Royal Blue on light blue */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest">
              <MapPin size={14} />
              <span>Anna Nagar, Chennai</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Contact <span className="text-blue-700 italic font-medium">SCULPT</span> <br /> 
              Hospital
            </h2>
            
            {/* Feature Cards: Pure White with Blue accents */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                <Microscope size={24} className="text-blue-700 mb-3" />
                <p className="text-xl font-serif text-slate-900">Digital</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Guided Care</p>
              </div>
              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                <ShieldCheck size={24} className="text-blue-700 mb-3" />
                <p className="text-xl font-serif text-slate-900">Invisalign</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Platinum Center</p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Card with Professional White background */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative group">
              {/* Decorative Glow: Royal Blue */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light italic">
                  "SCULPT Dental Hospital, led by renowned orthodontist <span className="text-slate-900 font-semibold underline decoration-blue-700/30">Dr. Sanjay Sundararajan</span>, is a premier center for Braces & Invisalign in Anna Nagar. We blend clinical excellence with compassionate care to offer personalized, digitally guided smile corrections."
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Dental Implants", "Smile Makeovers", "Pediatric Care", "Laser Gum Care"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
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
            {/* Divider: Royal Blue */}
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light pt-4">
              Our multidisciplinary team is dedicated to patient betterment through specialized surgical and therapeutic skills.
            </p>
          </div>

          {/* Experts Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Orthodontists", icon: <Activity />, desc: "Leading specialists in Invisalign and digital smile design." },
              { title: "Implantologists", icon: <ShieldCheck />, desc: "Experts in permanent dental restoration and implants." },
              { title: "Endodontists", icon: <Users />, desc: "Specialized in advanced root canal and restorative therapy." },
              { title: "Oral Surgeons", icon: <Award />, desc: "Precision-focused surgical care and rehabilitation." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200"
              >
                {/* Icon Container: Slate-900 with Royal Blue icon */}
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight transition-colors group-hover:text-blue-700">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Statement: Deep Slate-900 */}
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
            <p className="relative z-10 text-white text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed italic">
              "Our team includes highly skilled <span className="text-blue-400 font-medium">Periodontists</span> and surgeons who dedicate their skills to the betterment of our patients across Chennai."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}