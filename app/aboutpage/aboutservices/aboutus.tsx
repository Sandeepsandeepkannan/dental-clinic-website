"use client";
import React from "react";
import { Award, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Interactive Image Composition */}
          <div className="relative animate-in fade-in slide-in-from-left-10 duration-1000">
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
            
            <div className="relative group">
              {/* Main Image Frame */}
              <div className="relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
                  alt="Aesthetiq Dental Professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating "Experience" Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="text-4xl md:text-5xl font-serif text-yellow-500">20<span className="text-2xl">+</span></div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold leading-tight">
                    Years of <br /> Clinical Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-yellow-500" />
                <span className="text-xs uppercase tracking-[0.3em] text-yellow-600 font-bold">
                  About Our Foundation
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                Excellence in <br />
                <span className="text-yellow-600 italic">Personalized</span> Care
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light">
              At Aesthetiq, we are dedicated to providing premier general dentistry and specialized treatments, 
              earning our reputation as one of the most trusted clinical foundations in Chennai. 
              Our multidisciplinary team of specialists covers the full spectrum of dental and aesthetic fields 
              to offer a comprehensive one-stop solution.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="text-yellow-500 mt-1 transition-transform group-hover:scale-125" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Specialized Team</h4>
                  <p className="text-sm text-slate-500">Expert endodontists & surgeons.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="text-yellow-500 mt-1 transition-transform group-hover:scale-125" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Affordable Luxury</h4>
                  <p className="text-sm text-slate-500">Quality care without compromise.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-slate-600 leading-relaxed italic border-l-4 border-yellow-500 pl-6">
                "Our goal is to address immediate concerns while implementing 
                sustainable solutions that minimize the recurrence of dental issues."
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-slate-900 hover:bg-yellow-500 text-white hover:text-black px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg tracking-widest text-xs uppercase">
                Discover Our Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}