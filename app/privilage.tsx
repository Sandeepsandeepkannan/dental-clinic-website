"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Root Canal",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    description: "Save your natural tooth with expertly performed root canal treatments.",
    delay: "0ms",
  },
  {
    title: "Dental Implants",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    description: "Permanent tooth replacement solutions for a confident, natural smile.",
    delay: "100ms",
  },
  {
    title: "Teeth Whitening",
    image: "data:image/jpeg;base64,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",
    description: "Professional whitening treatments for a brighter, radiant smile.",
    delay: "200ms",
  },
  {
    title: "Orthodontics",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    description: "Straighten your teeth with modern braces and clear aligner solutions.",
    delay: "300ms",
  },
  {
    title: "Dental Crowns",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    description: "Restore damaged teeth with high-quality, natural-looking crowns.",
    delay: "400ms",
  },
];

export default function PrivilegeServices() {
  return (
    // Background: Steel Gray (Very light slate for professional contrast)
    <section className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Decorative Element: Soft Blue Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />

      {/* Heading Container */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        {/* Badge: Royal Blue on light blue */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
          <Sparkles size={14} />
          <span>Premium Dental Care</span>
        </div>

        {/* Heading: Slate 900 and Royal Blue accent */}
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 animate-in fade-in slide-in-from-left-6 duration-1000">
          Our Dental <span className="text-blue-700 italic font-medium">Services</span>
        </h2>

        {/* Decorative Divider: Royal Blue */}
        <div className="w-24 h-1 bg-blue-700 rounded-full animate-in fade-in duration-1000 delay-500"></div>
      </div>

      {/* Interactive Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            style={{ animationDelay: service.delay }}
            // Card: Pure White with slate border
            className="group relative bg-white rounded-[2rem] border border-slate-100 p-5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
          >
            {/* Image Container with Blue Hover Overlay */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Animated underline indicator: Royal Blue */}
              <div className="w-0 h-[2px] bg-blue-700 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Placeholder: Steel Gray and Blue */}
      <div className="mt-20 text-center relative z-10">
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          Comprehensive dental treatments for your perfect smile. 
          <span className="text-blue-700 ml-2 cursor-pointer hover:underline font-bold transition-all">View all treatments →</span>
        </p>
      </div>
    </section>
  );
}