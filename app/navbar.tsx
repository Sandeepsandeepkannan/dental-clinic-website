"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
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
                <p className="text-xs font-light tracking-wide text-gray-400">
                  Foundation
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8 xl:gap-10 text-base items-center">
              <li className="hover:text-yellow-500 transition-colors">
                <Link href="/" className="cursor-pointer block py-2">
                  Home
                </Link>
              </li>

              <li className="hover:text-yellow-500 transition-colors">
                <Link href="/aboutpage/aboutservices" className="cursor-pointer block py-2">
                  About us
                </Link>
              </li>

              <li className="hover:text-yellow-500 transition-colors">
                <Link href="/servicepage" className="cursor-pointer block py-2">
                  Services
                </Link>
              </li>

              <li className="hover:text-yellow-500 transition-colors">
                <Link href="/contactpage" className="cursor-pointer block py-2">
                  Contact us
                </Link>
              </li>
            </ul>

            {/* Right Side - Desktop */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {/* Book Button */}
              <button
                onClick={() => setOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2.5 font-semibold rounded-md transition-colors"
              >
                Book Appointment
              </button>

              {/* Social Icons */}
              <div className="flex gap-4 text-xl">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-500 hover:bg-gray-900 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            <Link
              href="/"
              className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500 hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/aboutpage/aboutservices"
              className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500 hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>

            <Link
              href="/servicepage"
              className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500 hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/contactpage"
              className="block px-3 py-3 rounded-md text-base font-medium hover:text-yellow-500 hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>

            {/* Mobile Book Button */}
            <button
              onClick={() => {
                setOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-3 rounded-md text-base font-medium bg-yellow-500 text-black hover:bg-yellow-600 transition-colors mt-2"
            >
              Book Appointment
            </button>

            {/* Mobile Social Icons */}
            <div className="flex gap-6 px-3 py-4 text-2xl">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Modal/Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
              <button 
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600">Booking form content goes here...</p>
          </div>
        </div>
      )}
    </>
  );
}