"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Simple counter hook for the professional "growing numbers" effect
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

export default function ExpertiseSection() {
  const satisfiedClients = useCounter(10000);
  const reviews = useCounter(1000);
  const sessions = useCounter(1800);

  return (
    // Background: Steel Gray (Very light slate for professional contrast)
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Interactive Image Mosaic */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Background Decorative Element: Soft Blue Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

            {/* Top Left - Facial */}
            <div className="group relative h-[300px] rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500"
                alt="Dermatology"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Advanced Dermatology</span>
              </div>
            </div>

            {/* Top Right - Nail/Skin */}
            <div className="group relative h-[300px] mt-12 rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500"
                alt="Esthetics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Luxury Esthetics</span>
              </div>
            </div>

            {/* Bottom Wide - Dental */}
            <div className="group col-span-2 relative h-[380px] rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
                alt="Dental Care"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0  flex items-end p-8">
                <div>
                  {/* Accent: Royal Blue */}
                  <p className="text-blue-400 text-xs uppercase tracking-widest mb-1 font-bold">Featured Service</p>
                  <h4 className="text-white text-2xl font-serif">Comprehensive Dental Care</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content & Live Stats */}
          <div className="flex flex-col space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* Line: Royal Blue */}
                <div className="w-12 h-[1px] bg-blue-700" />
                <span className="text-xs uppercase tracking-[0.3em] text-blue-700 font-bold">
                  Clinical Excellence
                </span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-[1.1] text-slate-900">
                Precision in <br /> 
                <span className="text-blue-700 italic">Aesthetics.</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-lg font-light">
                Our foundation is built on the intersection of medical science and artistic beauty. 
                We provide meticulously crafted treatments that honor your natural features.
              </p>
            </div>

            {/* Premium Stats Card: Pure White/Gray theme */}
            <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-xl border border-slate-100 relative overflow-hidden group">
              {/* Background Glow: Subtle Blue */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="grid grid-cols-2 gap-12 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-5xl font-serif text-blue-800">
                    {satisfiedClients.toLocaleString()}<span className="text-2xl ml-1 text-blue-400">+</span>
                  </h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                    Global Clients
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-5xl font-serif text-blue-800">
                    {reviews.toLocaleString()}<span className="text-2xl ml-1 text-blue-400">+</span>
                  </h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                    Five-Star Reviews
                  </p>
                </div>

                <div className="col-span-2 pt-8 border-t border-slate-100 space-y-2">
                  <h3 className="text-5xl font-serif text-blue-800">
                    {sessions.toLocaleString()}<span className="text-2xl ml-1 text-blue-400">+</span>
                  </h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                    Successful Therapy Sessions
                  </p>
                </div>
              </div>
              
              {/* Button: Royal Blue Theme */}
              <button className="mt-10 w-full py-4 bg-blue-700 text-white rounded-2xl hover:bg-slate-900 transition-all font-bold tracking-widest text-xs uppercase shadow-lg shadow-blue-700/20 active:scale-95">
                View Clinical Results
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}