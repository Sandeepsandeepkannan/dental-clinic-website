"use client";

import React, { useEffect, useRef, useState } from "react";

export default function OurServicesHero() {
  const [offsetY, setOffsetY] = useState(0);
  const ticking = useRef(false);

  /* ---------- Optimized Parallax ---------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 font-sans">

      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out will-change-transform"
        style={{
          backgroundImage: "url('/hero-services.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${1.1 + offsetY * 0.0005}) translateY(${offsetY * 0.1}px)`,
          opacity: 0.4,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-10 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.95)_90%)] z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">

        <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="w-8 md:w-16 h-px bg-blue-500/30" />
          <div className="w-8 md:w-16 h-px bg-blue-500/30" />
        </div>

        <div className="overflow-hidden mb-6">
          <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both">
            <span className="block text-white">Our</span>
            <span className="block bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700 bg-clip-text text-transparent italic py-2">
              Services
            </span>
          </h1>
        </div>

        <div className="relative max-w-2xl mx-auto pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both">
          <p className="text-sm md:text-xl leading-relaxed text-slate-300 font-light tracking-wide">
            Experience the pinnacle of personalized beauty treatments at{" "}
            <span className="text-white font-medium">
              Aesthetiq Foundation
            </span>.
            We provide comprehensive wellness treatments backed by medical innovation and clinical expertise.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              aria-label="Explore our service menu"
              className="px-12 py-4 bg-blue-700 hover:bg-white text-white hover:text-blue-900 font-bold uppercase tracking-widest text-[10px] rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,64,175,0.4)] transform hover:-translate-y-1 active:scale-95"
            >
              Explore Our Menu
            </button>

            <button
              aria-label="Consult a specialist"
              className="text-white text-[10px] uppercase tracking-widest font-bold border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors"
            >
              Consult a Specialist
            </button>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
}
