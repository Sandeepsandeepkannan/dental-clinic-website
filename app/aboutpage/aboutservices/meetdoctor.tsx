"use client";

import React from "react";
import { Trophy, Star, Award, CheckCircle2 } from "lucide-react";

/* -------- Static Data for Awards -------- */
const AWARDS = [
  {
    id: 1,
    title: "Black Diamond Status – Top Invisalign Provider (South India)",
    description: "Aesthetiq Foundation has proudly held the prestigious Invisalign Black Diamond status for the past 4 consecutive years, placing it among the top Invisalign providers in South India.",
    points: [
      "2300+ Invisalign cases completed and counting",
      "Extensive experience handling simple to highly complex orthodontic and bite correction cases using aligners",
      "Recognized for clinical precision, case planning, and consistently outstanding outcomes",
    ],
    footer: "This milestone reflects the trust thousands of patients have placed in Aesthetiq Foundation for clear, comfortable, and predictable smile transformation."
  },
  {
    id: 2,
    title: "Best Clinic Award – Famdent Awards 2022",
    description: "The Famdent Dental Excellence Awards are renowned as one of the most respected recognitions in Indian dentistry.",
    points: [
      "Awarded for maintaining highest clinical safety protocols",
      "Recognized for patient-centric care and infrastructure excellence",
      "Winner among top dental hospitals in the Chennai region"
    ],
    footer: ""
  }
];

export default function AwardsAndRecognitions() {
  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Main Header Section (Matching Image 3) --- */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif text-slate-400 font-light leading-tight">
            Awards & <br />
            <span className="text-slate-900">Recognitions</span>
          </h2>
          
          <div className="pt-10 space-y-6 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-serif text-slate-600 font-light">
              Celebrating Excellence at Aesthetiq Foundation
            </h3>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed font-normal">
              At Aesthetiq Foundation, every recognition is more than a trophy — it’s a reflection of trust, clinical excellence, 
              and the thousands of smiles transformed over the years. Led by <span className="font-bold">our specialist team</span>, 
              Aesthetiq has emerged as one of South India’s most respected names in Invisalign, orthodontics, and smile design.
            </p>
          </div>
        </div>

        {/* --- Awards List Section (Matching Image 4) --- */}
        <div className="space-y-20">
          {AWARDS.map((award) => (
            <div key={award.id} className="relative group">
              {/* Award Header with Trophy Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1">
                  <Trophy className="text-amber-500 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
                </div>
                <h4 className="text-3xl md:text-5xl font-serif text-slate-500 font-light leading-tight group-hover:text-slate-900 transition-colors">
                  {award.title}
                </h4>
              </div>

              {/* Description */}
              <div className="pl-12 md:pl-14 space-y-6">
                <p className="text-slate-800 text-sm md:text-base leading-relaxed">
                  {award.description}
                </p>

                {/* Bullet Points with Blue Indicators */}
                <ul className="space-y-4">
                  {award.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                      <span className="text-slate-900 text-sm md:text-base font-medium leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Text */}
                {award.footer && (
                  <p className="text-slate-800 text-sm md:text-base leading-relaxed pt-2">
                    {award.footer}
                  </p>
                )}
                
                {/* Visual Separator Line */}
                <div className="pt-10">
                  <div className="w-full h-px bg-slate-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Trust Badges --- */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 font-bold uppercase tracking-tighter text-slate-900">
            ISO Certified
           </div>
           <div className="flex items-center gap-2 font-bold uppercase tracking-tighter text-slate-900">
              <Star size={24} /> NABH Accredited
           </div>
           <div className="flex items-center gap-2 font-bold uppercase tracking-tighter text-slate-900">
              <Award size={24} /> Global Standards
           </div>
        </div>

      </div>
    </section>
  );
}