"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

export default function Home() {

  // 👉 PASTE YOUR IMAGE LINKS HERE
  const images = [
  
    "https://kimayaclinique.com/image/ban-1.webp",
    "https://kimayaclinique.com/image/ban-3.webp",
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

      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-5 bg-black text-white">

        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          Aesthetiq 
          <p className="text-xs font-light tracking-wide">
            glow with radiance
          </p>
        </div>

        {/* Menu */}
       <ul className="flex gap-10 text-lg items-center">

  {/* Home */}
  <li className="hover:text-yellow-500">
    <Link href="/" className="cursor-pointer block">
      Home
    </Link>
  </li>

  {/* About */}
  <li className="hover:text-yellow-500">
    <Link href="/aboutpage/aboutservices" className="cursor-pointer block">
      About us
    </Link>
  </li>

  {/* Services */}
   <li className="hover:text-yellow-500">
    <Link href="/servicepage" className="cursor-pointer block">
      Services
    </Link>
  </li>

  {/* Contact */}
  <li className="hover:text-yellow-500 cursor-pointer">
    Contact us
  </li>

</ul>


        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="bg-yellow-500 text-black px-6 py-2 font-medium">
            Book Appointment
          </button>

          <div className="flex gap-3 text-xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>

        </div>

      </nav>


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
            Discover Personalized <span className="underline">Skin Care</span>
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
        <div className="absolute top-16 right-12 bg-white text-black px-6 py-4 rounded-xl shadow-lg">

          <div className="flex items-center gap-3 mb-2">
            📞 <span>Anna Nagar</span>
            <span className="ml-auto font-semibold">
              +91 98845 67000
            </span>
          </div>

          <div className="flex items-center gap-3">
            📞 <span>Adyar</span>
            <span className="ml-auto font-semibold">
              +91 98842 87000
            </span>
          </div>

        </div>


        {/* Chat Box */}
        <div className="absolute bottom-20 right-20 bg-white text-black px-5 py-3 rounded-xl shadow-lg">

          <p>
            Hi! Welcome to <b>Kimaya Clinique!</b>
          </p>

        </div>

      </section>

    </main>
  );
}
