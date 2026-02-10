"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "https://kimayaclinique.com/image/ban-1.webp",
    "https://www.luzo.app/_next/image?url=https%3A%2F%2Fcdn.luzo.app%2Fsalon_photos%2F91600b7d-7dfe-4b9c-9886-6d80ab24a7e0.jpg&w=3840&q=75",
    "https://kimayaclinique.com/image/ban-4.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Increased to 4s for better readability
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[100vh] lg:h-[90vh] w-full overflow-hidden flex items-center">
        
        {/* Background Image Layers with Fade Effect */}
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
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 font-bold transition-all transform hover:scale-105 shadow-xl">
                BOOK APPOINTMENT
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold transition-all">
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>

        {/* Floating Chat Box (Hidden on small mobile, visible on md+) */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 hidden xs:flex items-center gap-3 bg-white text-black px-4 py-3 rounded-2xl shadow-2xl animate-bounce">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-sm font-medium">
            Hi! Welcome to <b>Aesthetiq!</b>
          </p>
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