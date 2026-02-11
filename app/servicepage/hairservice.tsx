"use client";
import React from "react";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

export default function HairServicesSection() {
  const services = [
    {
      title: "Light Therapy",
      desc: "We provide advanced Light Therapy, utilizing low-level laser light technology to naturally enhance hair follicle growth.",
      img: "https://kimayaclinique.com/image/Group%2031752.webp",
      delay: "0ms",
    },
    {
      title: "Tricell",
      desc: "A highly popular choice combining PRP and specialized growth factors to offer a more comprehensive restoration solution.",
      img: "https://kimayaclinique.com/images/Group%2031753.webp",
      delay: "100ms",
    },
    {
      title: "GFC",
      desc: "Growth Factor Concentrate (GFC) is a non-surgical option that harnesses concentrated growth factors for superior results.",
      img: "https://kimayaclinique.com/images/Group%2031754.webp",
      delay: "200ms",
    },
    {
      title: "PRP Therapy",
      desc: "Platelet-Rich Plasma therapy helps stimulate natural hair growth using your own platelets for a safe, organic treatment.",
      img: "https://kimayaclinique.com/images/Group%2031754.webp",
      delay: "300ms",
    },
  ];

  return (
    // Background: Slate-50 (Steel Gray base) for a professional clinical look
    <section className="bg-slate-50 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Accent: Royal Blue for the subtitle */}
            <div className="flex items-center gap-2 text-blue-700 font-bold tracking-[0.2em] text-xs uppercase">
              <Sparkles size={16} />
              <span>Restoration Experts</span>
            </div>
            {/* Title: Slate-900 with Royal Blue accent */}
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
              Hair <span className="text-blue-700 italic">Specialties</span>
            </h2>
            <div className="w-24 h-1 bg-blue-700 rounded-full"></div>
          </div>

          <div className="w-full md:w-auto animate-in fade-in duration-1000 delay-300">
            {/* Dropdown: Clinical White with Blue focus rings */}
            <select className="w-full md:w-64 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-700 outline-none transition-all cursor-pointer font-medium">
              <option>Filter by Service</option>
              {services.map((s, i) => (
                <option key={i}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: item.delay }}
              // Card: Pure White with Slate Gray borders
              className="group bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >
              {/* Image Container with Blue Tint on Hover */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors" />
                
                {/* Badge: Royal Blue / White */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck className="text-blue-700" size={18} />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                {/* Title transitions to Royal Blue on hover */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                {/* Description in Steel Gray */}
                <p className="text-slate-500 leading-relaxed text-sm mb-6 line-clamp-3">
                  {item.desc}
                </p>
                
                {/* Interactive Footer Link: Royal Blue */}
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary in Steel Gray */}
        <div className="mt-20 text-center animate-in fade-in duration-1000 delay-500">
          <p className="text-slate-400 text-sm font-light">
            Our specialized team in <span className="text-slate-900 font-medium">Chennai</span> utilizes clinical excellence to ensure high-density hair restoration.
          </p>
        </div>

      </div>
    </section>
  );
}