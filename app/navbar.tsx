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


      {/* ================= POPUP ================= */}
     {/* ================= POPUP ================= */}
{open && (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50 px-4">

    {/* Modal */}
    <div className="bg-black text-white w-full max-w-xl rounded-lg shadow-xl relative overflow-hidden">

      {/* Top Image */}
      <div className="flex justify-center pt-6">
        
      </div>

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
      >
        ×
      </button>

      {/* Content */}
      <div className="px-8 pb-8 pt-4">

        {/* Title */}
        <h2 className="text-4xl font-serif font-bold mb-6">
          Book an Appointment
        </h2>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="font-semibold">
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border-2 rounded-md px-4 py-3 mt-1 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold">
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full border-2 rounded-md px-4 py-3 mt-1 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 rounded-md px-4 py-3 mt-1 focus:outline-none focus:border-yellow-500"
              />
            </div>

          </div>

          {/* Postal Code */}
          <div>
            <label className="font-semibold">
              Postal Code <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border-2 rounded-md px-4 py-3 mt-1 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-700 leading-relaxed">

            <span className="text-red-500">*</span> By submitting this form, I provide explicit
            consent to reach out via phone call, SMS, WhatsApp,
            or email, notwithstanding registration on DND/NDNC.

          </p>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-gray-800 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-black transition"
            >
              Submit
            </button>
          </div>

        </form>

      </div>

    </div>
  </div>
)}

    </>
  );
}
