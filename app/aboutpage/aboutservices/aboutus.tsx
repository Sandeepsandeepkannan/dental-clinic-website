"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
                alt="Dental Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            
            {/* Subheading */}
            <p className="text-black font-semibold mb-4 text-lg">
              20+ Years Of Experiences
            </p>

            {/* Main Heading */}
            <h2 className="text-5xl lg:text-6xl font-serif mb-6 leading-tight text-black">
              About Aesthetiq Dental Care
            </h2>

            {/* Underline */}
            <div className="w-16 h-1 bg-pink-500 mb-8"></div>

            {/* Paragraph 1 */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Radiant Dental Care, we are dedicated to give the best general 
              dentistry services and effective treatment, earning recognition as 
              one of the premier dental clinics in Chennai. Our commitment to 
              comprehensive dental care sets us apart. With a team of specialised 
              dentists in Chennai covering a spectrum of dental fields, we take 
              pride in offering a one-stop solution for all your dental needs. We 
              have earned the trust of the Chennai community by consistently 
              delivering excellence in dental care without compromising on quality.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 text-lg leading-relaxed">
              As an affordable dental hospital in Chennai, we prioritise 
              affordability without compromising the effectiveness of our 
              treatments. Our goal is not only to address your immediate dental 
              concerns but also to implement solutions that minimise the chances 
              of recurrence.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}