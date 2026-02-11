"use client";

export const dynamic = "force-dynamic";
import React, { useState, useEffect } from "react";
// Import your modal component - ensure the path is correct
import AppointmentModal from "./appointmentpage";
import Link from "next/link";

export default function Home() {
  const images = [
    "https://kimayaclinique.com/image/ban-1.webp",
    "https://www.luzo.app/_next/image?url=https%3A%2F%2Fcdn.luzo.app%2Fsalon_photos%2F91600b7d-7dfe-4b9c-9886-6d80ab24a7e0.jpg&w=3840&q=75",
    "https://kimayaclinique.com/image/ban-4.webp",
  ];

  // 1. MODAL STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* 2. THE MODAL COMPONENT */}
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative h-[100vh] lg:h-[90vh] w-full overflow-hidden flex items-center">
        
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl text-white">
            <span className="inline-block text-yellow-500 font-semibold tracking-widest mb-4 text-sm md:text-lg uppercase">
              Welcome to Aesthetiq Foundation
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif">
              Glow with <span className="text-yellow-500">Confidence</span> <br className="hidden" />
              Advanced Skin Care
            </h1>
            
            <p className="text-base md:text-xl mb-10 leading-relaxed max-w-xl text-gray-200">
              From acne solutions to anti-aging treatments, Kimaya Clinique is 
              your partner for healthy, radiant skin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                BOOK APPOINTMENT
              </button>
              
              <Link href="/servicepage">
                <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold transition-all w-full sm:w-auto">
                  OUR SERVICES
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-300 ${
                current === i ? "w-8 bg-yellow-500" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}