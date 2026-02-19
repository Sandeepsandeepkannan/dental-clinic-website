"use client";

import React, { useState, useEffect } from "react";
import AppointmentModal from "./appointmentpage";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/img2.png", "/img1.png", "/img3.3.png"];

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

      <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-black">
        
        {/* Background Image Slideshow - SHADING REMOVED */}
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
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover object-center md:object-right-top"
                quality={90}
              />
              {/* The gradient overlay div has been removed from here */}
            </div>
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-24 py-24 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="text-white lg:col-span-7 lg:-ml-14 mt-10">
              <h1 className="text-5xl text-white sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl font-serif leading-[1.1] mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Glow with <br />
                <span className="text-blue-500 italic font-medium">Confidence.</span>
              </h1>
              
              <p className="text-base sm:text-xl md:text-2xl mb-8 md:mb-12 leading-relaxed max-w-lg text-white  animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
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
                  
                </Link>
              </div>
            </div>

            {/* Right Content: Consultation Form */}
            <div className="lg:col-span-5 justify-self-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 hidden lg:block pt-15 mt-7 lg:pl-16 lg:-mr-12">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl w-full max-w-[420px] border border-white/20">
                <div className="text-center space-y-1 mb-6">
                  <h2 className="text-xl md:text-2xl font-serif text-slate-900 font-bold tracking-tight leading-snug">
                    Get Free Consultation
                  </h2>
                  <p className="text-blue-700 text-[11px] font-black uppercase tracking-widest italic bg-blue-50 py-1 rounded-full px-4 inline-block">
                    Upto 50% OFF On TREATMENTS*
                  </p>
                </div>

                <form className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 text-sm" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 text-sm" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Treatment
                    </label>
                    <div className="relative group">
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 appearance-none outline-none focus:border-blue-600 transition-all font-medium text-slate-700 text-sm">
                        <option>1. Skin Restoration</option>
                        <option>2. Dental Care</option>
                        <option>3. Hair Therapy</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Preferred Timing
                    </label>
                    <div className="relative group">
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 appearance-none outline-none focus:border-blue-600 transition-all font-medium text-slate-700 text-sm">
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Afternoon (1 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-[11px] mt-2 shadow-lg shadow-blue-900/10">
                    Book Consultation
                  </button>
                  
                  <p className="text-[9px] text-center text-slate-400 leading-tight">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Indicators */}
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