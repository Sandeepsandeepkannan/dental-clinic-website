"use client";
import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react"; // Install lucide-react for icons

const services = [
  {
    title: "Skin",
    image: "https://kimayaclinique.com/image/priv-1.png",
    description: "Rejuvenate and revitalize your skin with personalized dermatological care.",
    delay: "0ms",
  },
  {
    title: "Laser",
    image: "https://kimayaclinique.com/image/priv-2.png",
    description: "Advanced technology for permanent hair reduction and skin refinement.",
    delay: "100ms",
  },
  {
    title: "Hair",
    image: "https://kimayaclinique.com/image/priv-3.png",
    description: "From hair loss treatment to restoration, your hair is our priority.",
    delay: "200ms",
  },
  {
    title: "Dental",
    image: "https://kimayaclinique.com/image/priv-4.png",
    description: "Smile brighter with top-tier cosmetic and general dental services.",
    delay: "300ms",
  },
  {
    title: "Nail",
    image: "https://kimayaclinique.com/image/priv-5.png",
    description: "Pamper your nails with our specialized treatments for beauty and health.",
    delay: "400ms",
  },
];

export default function PrivilegeServices() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />

      {/* Heading Container */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
          <Sparkles size={14} />
          <span>Exclusive Care</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 animate-in fade-in slide-in-from-left-6 duration-1000">
          Privilege <span className="text-yellow-600 italic font-medium">Services</span>
        </h2>

        <div className="w-24 h-1 bg-yellow-500 rounded-full animate-in fade-in duration-1000 delay-500"></div>
      </div>

      {/* Interactive Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            style={{ animationDelay: service.delay }}
            className="group relative bg-white rounded-[2rem] border border-slate-100 p-5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Animated underline indicator */}
              <div className="w-0 h-[2px] bg-yellow-500 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Placeholder */}
      <div className="mt-20 text-center relative z-10">
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          Tailored treatments for your unique needs. 
          <span className="text-yellow-600 ml-2 cursor-pointer hover:underline">Explore full service menu →</span>
        </p>
      </div>
    </section>
  );
}