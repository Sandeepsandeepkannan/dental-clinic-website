"use client";
import React from "react";
import { Linkedin, Twitter, Instagram, Plus } from "lucide-react";

export default function MeetDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sreenayana Sinha Roy",
      degree: "MDS",
      specialty: "Cosmetic Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
      delay: "100ms",
    },
    {
      id: 2,
      name: "Dr. Sreekanth Kandepu",
      degree: "MDS",
      specialty: "Orthodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
      delay: "200ms",
    },
    {
      id: 3,
      name: "Dr. Swathi Ravipudi",
      degree: "MDS",
      specialty: "Dermatologist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
      delay: "300ms",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header - Staggered Slide In */}
        <div className="text-center mb-20 relative">
          <p className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Professional Team Members
          </p>
          
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Meet Our <span className="text-yellow-600 italic">Expert</span> Doctors
          </h2>
          
          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full animate-in fade-in duration-1000 delay-500"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              style={{ animationDelay: doctor.delay }}
              className="group flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 fill-mode-both"
            >
              {/* Image Container with Interactive Overlays */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 mb-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Social Overlay - Slide up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 flex justify-around items-center shadow-xl">
                    <a href="#" className="p-2 text-slate-600 hover:text-yellow-600 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="p-2 text-slate-600 hover:text-yellow-600 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="p-2 text-slate-600 hover:text-yellow-600 transition-colors"><Instagram size={20} /></a>
                  </div>
                </div>

                {/* Plus Icon - Glows on hover */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <Plus size={24} />
                </div>
              </div>

              {/* Doctor Details - Centered Content */}
              <div className="text-center px-4">
                <p className="text-yellow-600 text-[10px] uppercase font-bold tracking-[0.2em] mb-2">
                  {doctor.specialty}
                </p>
                <h3 className="text-2xl font-serif text-slate-900 mb-2 transition-colors group-hover:text-yellow-600">
                  {doctor.name}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-8 h-px bg-slate-300"></span>
                  <span className="text-slate-500 font-medium tracking-widest text-sm">
                    {doctor.degree}
                  </span>
                  <span className="w-8 h-px bg-slate-300"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all hover:bg-yellow-500 hover:text-black hover:shadow-2xl active:scale-95 uppercase text-xs tracking-widest">
                Join our medical team
            </button>
        </div>
      </div>
    </section>
  );
}