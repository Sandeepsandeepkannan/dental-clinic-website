"use client";

import React, { useState, useEffect, useCallback } from "react";
import AppointmentModal from "./appointmentpage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/img1.png", "/img2.png", "/img3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-slate-950">
        
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt="Clinic background"
                fill
                priority={index === 0} // Only the first image gets priority
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="object-cover object-center md:object-right-top"
                quality={85} // Slightly lower quality for much faster mobile loading
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90 md:bg-gradient-to-r md:from-slate-950/95 md:to-slate-950/70" />
            </div>
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-24 py-20 md:py-0">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[1.1] mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Glow with <br />
              <span className="text-blue-500 italic font-medium">Confidence.</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl mb-8 md:mb-12 leading-relaxed max-w-lg md:max-w-2xl text-slate-300 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Your partner for healthy, radiant skin. We specialize in expert acne solutions 
              and advanced anti-aging treatments tailored for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <button 
                onClick={() => setIsModalOpen(true)}
                aria-label="Book an appointment"
                className="group flex items-center justify-center gap-3 bg-blue-700 hover:bg-white hover:text-blue-900 text-white px-8 md:px-10 py-4 md:py-5 font-bold transition-all transform active:scale-95 shadow-2xl shadow-blue-900/40 rounded-2xl tracking-widest text-[10px] md:text-xs uppercase"
              >
                <span>Book Appointment</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </button>
              
              <Link href="/servicepage" className="w-full sm:w-auto">
                <button 
                  aria-label="Explore our services"
                  className="border border-white/20 bg-white/5 hover:bg-white hover:text-slate-900 text-white px-8 md:px-10 py-4 md:py-5 font-bold transition-all w-full rounded-2xl tracking-widest text-[10px] md:text-xs uppercase backdrop-blur-md"
                >
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators - Optimized with aria-labels */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              aria-label={`Go to slide ${i + 1}`}
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