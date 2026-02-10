"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
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
              
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-800 text-lg font-serif">
                  Expert Team of Professionals
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-800 text-lg font-serif">
                  Personalized Treatment Plans
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-800 text-lg font-serif">
                  Comprehensive Range of Services
                </span>
              </div>

            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Book a Consultation Now!
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-gray-100">
        <p className="text-gray-800 font-medium font-sans">
          Hi! Welcome to <span className="italic font-serif font-bold">Aesthetiq Clinique!</span>
        </p>
      </div>

      {/* Logo/Icon in bottom right corner */}
      <div className="fixed bottom-4 right-4 w-16 h-16">
        <div className="bg-yellow-500 rounded-full w-full h-full flex items-center justify-center text-white font-bold text-2xl">
          K
        </div>
      </div>

    </main>
  );
}