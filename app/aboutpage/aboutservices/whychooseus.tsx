"use client";
export const dynamic = "force-dynamic"; 
import React, { useState } from "react";
import Image from "next/image";
// Ensure this path matches your file structure
import AppointmentModal from "@/app/appointmentpage";

export default function WhyChooseUs() {
  // 1. Initialize modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      
      {/* 2. Add the Modal Component */}
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
                alt="Nail Care Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            
            {/* Header with Icon */}
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-sans">
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl lg:text-6xl font-serif mb-12 leading-tight text-black">
              Why Aesthetiq Foundation is Your Trusted Choice for Personalized Beauty
            </h2>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              {["Expert Team of Professionals", "Personalized Treatment Plans", "Comprehensive Range of Services"].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 text-lg font-serif">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - 3. Attach click handler */}
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform active:scale-95 shadow-lg"
              >
                Book a Consultation Now!
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}