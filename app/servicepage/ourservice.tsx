"use client";
import React, { useEffect, useState } from "react";

export default function OurServicesHero() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect for that premium "magazine" feel
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] font-sans">
      
      {/* Dynamic Background with Parallax and Zoom */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out will-change-transform"
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${1.1 + offsetY * 0.0005}) translateY(${offsetY * 0.2}px)`,
          opacity: 0.4 
        }}
      />
      
      {/* Refined Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] z-10" />

      {/* Content Container */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        
        {/* Top Accent Line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="w-8 md:w-16 h-px bg-yellow-500/50" />
          <p className="text-yellow-500 uppercase tracking-[0.5em] text-[10px] md:text-xs font-black">
            Clinical Excellence
          </p>
          <div className="w-8 md:w-16 h-px bg-yellow-500/50" />
        </div>

        {/* Hero Title with Gold Gradient Shimmer */}
        <div className="overflow-hidden mb-6">
          <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both">
            <span className="block text-white">Our</span>
            <span className="block bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent italic py-2">
              Services
            </span>
          </h1>
        </div>

        {/* Description Block with staggered appearance */}
        <div className="relative max-w-2xl mx-auto pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both">
          <p className="text-sm md:text-xl leading-relaxed text-gray-300 font-light tracking-wide">
            Experience the pinnacle of personalized beauty treatments at <span className="text-white font-medium">Aesthetiq Foundation</span>. 
            We provide comprehensive wellness treatments backed by medical innovation and clinical expertise.
          </p>
          
          {/* Interactive Call to Action */}
         
        </div>

      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}