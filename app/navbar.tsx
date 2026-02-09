"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

          {/* Book Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-yellow-500 text-black px-6 py-2 font-medium"
          >
            Book Appointment
          </button>

          <div className="flex gap-3 text-xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>

        </div>

      </nav>


    </>
  );
}
