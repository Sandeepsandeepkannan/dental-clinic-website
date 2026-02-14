"use client";

import React, { useState, useEffect } from "react";
import AppointmentModal from "./appointmentpage";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Hero Section: Using the White, Blue, and Gray Palette */}
      <section className="relative h-screen w-full overflow-hidden flex items-center bg-slate-950">
        
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      index === currentImage ? "opacity-100" : "opacity-0"
    }`}
  >
    <Image
      src={img}
      alt="Dental clinic background"
      fill
      priority={index === 0}
      sizes="100vw"
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 to-slate-950/70" />
  </div>
))}
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(30,64,175,0.15)_0%,transparent_50%)] animate-pulse duration-[10s]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(15,23,42,0.3)_0%,transparent_70%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl text-white">
            
            {/* Top Badge: Royal Blue & White */}
           
            
            {/* Main Heading: Serif Font with Blue Accent */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Glow with <br />
              <span className="text-blue-500 italic font-medium">Confidence.</span>
            </h1>
            
            {/* Description: Steel Gray (Slate-300) */}
            <p className="text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl text-slate-300 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Your partner for healthy, radiant skin. We specialize in expert acne solutions 
              and advanced anti-aging treatments tailored for you.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              {/* Primary: Royal Blue */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center gap-3 bg-blue-700 hover:bg-white hover:text-blue-900 text-white px-10 py-5 font-bold transition-all transform active:scale-95 shadow-2xl shadow-blue-900/40 rounded-2xl tracking-widest text-xs uppercase"
              >
                <span>Book Appointment</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </button>
              
              {/* Secondary: Pure White / Transparent Gray */}
              <Link href="/servicepage">
                <button className="border border-white/20 bg-white/5 hover:bg-white hover:text-slate-900 text-white px-10 py-5 font-bold transition-all w-full sm:w-auto rounded-2xl tracking-widest text-xs uppercase backdrop-blur-md">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element: Large Subtle Text Outline in the Background */}
        <div className="absolute -bottom-10 -right-20 select-none pointer-events-none z-10 hidden lg:block">
          <span className="text-[20rem] font-serif font-black text-white/[0.02] leading-none uppercase">
            Aesthetiq
          </span>
        </div>

        {/* Bottom Status Bar: Steel Gray */}
        <div className="absolute bottom-10 left-6 md:left-24 z-20 hidden md:flex items-center gap-12 text-slate-500">
          <div className="flex flex-col">
            <span className="text-white font-serif text-xl leading-none"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold mt-1"></span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-white font-serif text-xl leading-none"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold mt-1"></span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-1 transition-all duration-300 ${
                currentImage === i ? "w-8 bg-blue-500" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>

      </section>
    </main>
  );
}