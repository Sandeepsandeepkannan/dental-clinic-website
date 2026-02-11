"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Ensure this path matches where you saved your AppointmentModal file
import AppointmentModal from "./appointmentpage";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls your custom modal
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src="/logo.png"
                  alt="Aesthetiq Foundation Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-2xl sm:text-3xl font-bold tracking-wider hover:text-yellow-500 transition-colors">
                Aesthetiq
                <p className="text-xs pl-1 font-bold tracking-wide text-gray-400">
                  Foundation
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8 xl:gap-10 text-base items-center">
              <li className="hover:text-yellow-500 transition-colors font-medium">
                <Link href="/" className="cursor-pointer block py-2">Home</Link>
              </li>
              <li className="hover:text-yellow-500 transition-colors font-medium">
                <Link href="/aboutpage/aboutservices" className="cursor-pointer block py-2">About us</Link>
              </li>
              <li className="hover:text-yellow-500 transition-colors font-medium">
                <Link href="/servicepage" className="cursor-pointer block py-2">Services</Link>
              </li>
              <li className="hover:text-yellow-500 transition-colors font-medium">
                <Link href="/contactpage" className="cursor-pointer block py-2">Contact us</Link>
              </li>
            </ul>

            {/* Right Side - Desktop */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <button
                onClick={() => setIsModalOpen(true)} // Opens the custom modal
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2.5 font-bold rounded-md transition-all active:scale-95 shadow-md"
              >
                Book Appointment
              </button>

              <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-yellow-500 transition-colors"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="hover:text-yellow-500 transition-colors"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-500 focus:outline-none transition-colors"
            >
              {!mobileMenuOpen ? (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-900 border-t border-gray-800">
            <Link href="/" className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/aboutpage/aboutservices" className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>About us</Link>
            <Link href="/servicepage" className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/contactpage" className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
            
            <button
              onClick={() => {
                setIsModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-center block px-3 py-4 rounded-md text-base font-bold bg-yellow-500 text-black hover:bg-yellow-600 transition-colors mt-4"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* YOUR BEAUTIFUL APPOINTMENT MODAL 
          Passing the state props to your custom component
      */}
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}