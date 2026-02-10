"use client";
import Image from "next/image";
import { useState } from "react";

export default function ExpertiseSection() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left Image - Facial Treatment */}
            <div className="relative h-[280px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500"
                alt="Facial Treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Image - Nail Care */}
            <div className="relative h-[280px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500"
                alt="Nail Care"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Image - Dental Care (Spans 2 columns) */}
            <div className="col-span-2 relative h-[340px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
                alt="Dental Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-between">
            {/* Header Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-sans">
                  Professionalism
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-serif mb-6 leading-tight text-black">
                Our Expertise
                <br />
                Proficiency in Aesthetics
              </h2>

              <p className="text-gray-600 text-lg mb-12 font-sans">
                Explore our range of specialized treatments, designed to help you
                look and feel your best.
              </p>
            </div>

            {/* Stats Section */}
            <div className="bg-black rounded-3xl p-12">
              <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Satisfied Clients */}
                <div>
                  <div className="text-5xl font-serif text-yellow-500 mb-2">
                    10000+
                  </div>
                  <div className="text-white text-sm uppercase tracking-wider font-sans">
                    Satisfied Clients
                  </div>
                </div>

                {/* Positive Reviews */}
                <div>
                  <div className="text-5xl font-serif text-yellow-500 mb-2">
                    1000+
                  </div>
                  <div className="text-white text-sm uppercase tracking-wider font-sans">
                    Positive Reviews
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-yellow-600 mb-8"></div>

              {/* Therapy Sessions */}
              <div>
                <div className="text-5xl font-serif text-yellow-500 mb-2">
                  1800+
                </div>
                <div className="text-white text-sm uppercase tracking-wider font-sans">
                  Therapy Sessions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-gray-100">
          <p className="text-gray-800 font-medium font-sans">
            Hi! Welcome to <span className="italic font-serif">Clinique!</span>
          </p>
        </div>
      </section>
    </main>
  );
}