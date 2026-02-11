"use client";
import React from "react";
import { Award, ShieldCheck, Clock, CheckCircle2, Microscope, Stethoscope } from "lucide-react";

export default function AboutSection() {
  return (
    // Section Background: Pure White
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Interactive Image Composition */}
          <div className="relative animate-in fade-in slide-in-from-left-10 duration-1000">
            {/* Decorative Background Element: Soft Blue Glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative group">
              {/* Main Image Frame with Steel Gray Border */}
              <div className="relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
                  alt="Aesthetiq Clinical Professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating "Experience" Badge: Royal Blue & Slate-900 */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  {/* Accent: Blue-400 for brightness on dark background */}
                  <div className="text-4xl md:text-5xl font-serif text-blue-400">20<span className="text-2xl ml-1">+</span></div>
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
                {/* Accent Line: Royal Blue */}
                <div className="w-12 h-[1px] bg-blue-700" />
                <span className="text-xs uppercase tracking-[0.3em] text-blue-700 font-bold">
                  About Our Foundation
                </span>
              </div>
              
              {/* Heading: Slate-900 for Elegance */}
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                Excellence in <br />
                <span className="text-blue-700 italic font-medium">Personalized</span> Care
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light">
              At Aesthetiq, we are dedicated to providing premier general dentistry and specialized treatments, 
              earning our reputation as one of the most trusted clinical foundations in Chennai. 
              Our multidisciplinary team of specialists covers the full spectrum of dental and aesthetic fields 
              to offer a comprehensive one-stop solution.
            </p>

            {/* Feature Highlights Grid: Blue & White */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 transition-transform group-hover:scale-110">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Specialized Team</h4>
                  <p className="text-sm text-slate-500">Expert endodontists & surgeons.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 transition-transform group-hover:scale-110">
                  <Microscope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Affordable Luxury</h4>
                  <p className="text-sm text-slate-500">Quality care without compromise.</p>
                </div>
              </div>
            </div>

            {/* Quote Block: Royal Blue Border & Italic Slate */}
            <div className="pt-6">
              <p className="text-slate-600 leading-relaxed italic border-l-4 border-blue-700 pl-6">
                "Our goal is to address immediate concerns while implementing 
                sustainable solutions that minimize the recurrence of dental issues."
              </p>
            </div>

            {/* CTA Button: Royal Blue with White text */}
            <div className="pt-4">
              <button className="bg-blue-700 hover:bg-slate-900 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20 active:scale-95 uppercase text-xs tracking-[0.2em]">
                Discover Our Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}