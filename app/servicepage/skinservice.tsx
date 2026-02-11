"use client";
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function SkinServicesSection() {
  const services = [
    {
      title: "Skin Lightening",
      desc: "Address hyperpigmentation and uneven skin tone with our advanced lightening treatments tailored to your skin type.",
      img: "https://kimayaclinique.com/images/Group%2031756.webp",
      delay: "0ms",
    },
    {
      title: "Vampire Facial",
      desc: "Rejuvenate your skin using your own blood's natural growth factors to stimulate collagen production and healing.",
      img: "https://kimayaclinique.com/images/Group%2031757.webp",
      delay: "100ms",
    },
    {
      title: "Dermaplaning",
      desc: "Gently exfoliate dead skin cells and remove fine vellus hair to reveal a smoother, more radiant complexion.",
      img: "https://kimayaclinique.com/images/Group%2031758.webp",
      delay: "200ms",
    },
    {
      title: "Derma Stamp",
      desc: "A minimally invasive treatment that uses a specialized device to stimulate natural skin repair and rejuvenation.",
      img: "https://kimayaclinique.com/images/Group%2031759.webp",
      delay: "300ms",
    },
    {
      title: "PRP Skin",
      desc: "Utilize Platelet-Rich Plasma to naturally rejuvenate and refresh the skin's texture and overall appearance.",
      img: "https://kimayaclinique.com/images/Group%2031760.webp",
      delay: "400ms",
    },
    {
      title: "Collagen Induction",
      desc: "Also known as microneedling, this therapy creates micro-channels to trigger significant collagen and elastin growth.",
      img: "https://kimayaclinique.com/images/Group%2031761.webp",
      delay: "500ms",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-2 text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase">
              <Sparkles size={16} />
              <span>Advanced Dermatology</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900">
              Skin <span className="text-yellow-600 italic">Treatments</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
          </div>

          <div className="w-full md:w-auto animate-in fade-in duration-1000 delay-300">
            <div className="relative group">
              <select className="w-full md:w-72 bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all cursor-pointer font-medium appearance-none">
                <option>Browse All Skin Services</option>
                {services.map((s, i) => (
                  <option key={i}>{s.title}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-yellow-600 transition-colors">
                <ArrowRight size={18} className="rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: item.delay }}
              className="group bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative h-60 rounded-3xl overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-colors" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  Premium Care
                </div>
              </div>

              {/* Content Section */}
              <div className="px-2">
                <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-8">
                  {item.desc}
                </p>
                
                {/* Action Link */}
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-yellow-600 group-hover:gap-4 transition-all">
                  <span>Inquire Now</span>
                  <div className="h-px w-8 bg-yellow-500/30 group-hover:w-12 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 text-sm font-light italic">
            All skin treatments at Aesthetiq Foundation are administered by clinical experts 
            to ensure safety and efficacy.
          </p>
        </div>

      </div>
    </section>
  );
}