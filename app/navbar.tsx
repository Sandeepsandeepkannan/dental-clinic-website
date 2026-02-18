"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppointmentModal from "./appointmentpage";
import {
  Instagram,
  Facebook,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

/* ---------- Static Data ---------- */
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/aboutpage/aboutservices" },
  { name: "Services", href: "/servicepage" },
  { name: "Contact us", href: "/contactpage" },
];

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  /* ---------- Scroll Listener ---------- */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ---------- Mobile Scroll Lock ---------- */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl py-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] border-white/10"
            : "bg-black py-4 md:py-5 border-white/5 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="group flex items-center gap-3 md:gap-4 outline-none"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/logo.png"
                  alt="Aesthetiq Logo"
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  className="object-contain rounded-xl md:rounded-2xl relative z-10 shadow-sm"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                  Aesthetiq
                </span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black -mt-1 text-blue-500">
                  Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative px-6 py-2.5 text-[11px] uppercase tracking-widest font-black transition-all duration-300 rounded-full flex items-center group overflow-hidden ${
                        pathname === link.href
                          ? "text-blue-400 bg-white/10 shadow-sm"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute inset-0 bg-blue-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook" className="p-2 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 rounded-xl group">
                  <Facebook size={20} aria-hidden="true" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram" className="p-2 text-slate-400 hover:text-white hover:bg-[#E4405F] transition-all duration-300 rounded-xl group">
                  <Instagram size={20} aria-hidden="true" />
                </a>
                <a href="https://wa.me/918190027273" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="p-2 flex items-center justify-center hover:bg-white/10 transition-all duration-300 rounded-xl group relative">
                  <span className="absolute top-1 right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} className="brightness-110" />
                </a>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-3 bg-blue-700 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:shadow-[0_10px_25px_rgba(30,64,175,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 group-hover:scale-105 transition-transform" />
                <span className="relative z-10 flex items-center gap-2">
                  Book Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-3 -mr-2 text-white transition-colors active:bg-white/10 rounded-xl"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-[9999] bg-black transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 sm:p-10 overflow-y-auto">
            <div className="flex justify-between items-center mb-10">
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">
                Menu
              </p>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-3 bg-white/5 rounded-full text-white"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-4xl sm:text-5xl font-serif transition-colors ${
                    pathname === link.href ? "text-blue-500 font-bold" : "text-white"
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10 pb-6">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-900/30"
              >
                Schedule Appointment
              </button>
              
              <div className="flex justify-center items-center gap-8 mt-10">
                <a href="https://wa.me/918190027273" target="_blank" rel="noopener noreferrer" className="relative">
                   <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} className="brightness-110" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 active:text-[#E4405F]">
                  <Instagram size={30} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 active:text-[#1877F2]">
                  <Facebook size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AppointmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default React.memo(Navbar);