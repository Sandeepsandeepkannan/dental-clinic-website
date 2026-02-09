"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

export default function Home() {

  // 👉 PASTE YOUR IMAGE LINKS HERE
  const images = [
  
    "https://kimayaclinique.com/image/ban-1.webp",
    "https://www.luzo.app/_next/image?url=https%3A%2F%2Fcdn.luzo.app%2Fsalon_photos%2F91600b7d-7dfe-4b9c-9886-6d80ab24a7e0.jpg&w=3840&q=75",
    	"https://kimayaclinique.com/image/ban-4.webp"
   
   ,
  ];
  const router = useRouter();

  const [current, setCurrent] = useState(0);

  // Auto change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className="min-h-screen bg-white text-white font-serif">

    


      {/* Hero Section */}
     <section
        className="relative min-h-[90vh] flex items-center px-12"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Left Content */}
        <div className="max-w-2xl -mt-24 ml-24">

          <p className="text-yellow-500 mb-4 text-lg">
            
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Glow with Confidence – <br />
            Advanced Skin Care for <br />
            All Types
          </h1>

          <p className="text-lg mb-8 leading-relaxed text-white">
            From acne solutions to anti-aging treatments,
            Kimaya Clinique is your partner for healthy, radiant skin.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-3 font-semibold">
            BOOK APPOINTMENT
          </button>

        </div>


        {/* Right Images */}
        <div className="absolute right-20 flex flex-col gap-6">

          {/* Top Image */}
         

          {/* Bottom Image */}
          

        </div>


        {/* Contact Box */}
      


        {/* Chat Box */}
        <div className="absolute bottom-20 right-20 bg-white text-black px-5 py-3 rounded-xl shadow-lg">

          <p>
            Hi! Welcome to <b>Aesthetiq Foundation!</b>
          </p>

        </div>

      </section>

    </main>
  );
}
