"use client";
import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";

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
    <section className="bg-slate-50 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-2 text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase">
              <Sparkles size={16} />
              <span>Restoration Experts</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
              Hair <span className="text-yellow-600 italic">Specialties</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
          </div>

          <div className="w-full md:w-auto animate-in fade-in duration-1000 delay-300">
            <select className="w-full md:w-64 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 shadow-sm focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all cursor-pointer font-medium">
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
              className="group bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6 line-clamp-3">
                  {item.desc}
                </p>
                
                {/* Interactive Footer Link */}
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-yellow-600 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Results Summary */}
        <div className="mt-20 text-center animate-in fade-in duration-1000 delay-500">
          <p className="text-slate-400 text-sm font-light">
            Our specialized team in <span className="text-slate-900 font-medium">Chennai</span> utilizes clinical excellence to ensure high-density hair restoration.
          </p>
        </div>

      </div>
    </section>
  );
}