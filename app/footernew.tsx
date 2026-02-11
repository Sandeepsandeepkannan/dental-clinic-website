"use client";
import React from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footernew() {
  const currentYear = new Date().getFullYear();

  return (
    // Background: Slate-900 (Deep Gray/Blue) for a professional base
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-white/5">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 - Logo and Mission */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-white tracking-tight mb-1">Aesthetiq</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">
                Foundation
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Take the first step towards achieving your beauty goals with clinical excellence and personalized care at our premier Chennai facilities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-110"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-110"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2 - Clinical Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">Clinical Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-blue-400 mt-1" size={18} />
                <div>
                  <p className="text-white font-medium text-sm">Monday - Sunday</p>
                  <p className="text-slate-400 text-sm">10:30 am - 08:30 pm</p>
                </div>
              </div>
              <p className="text-xs text-blue-400/80 font-semibold italic">
                *Open on public holidays by appointment.
              </p>
            </div>
          </div>

          {/* Column 3 - Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">Quick Links</h3>
            <ul className="space-y-4">
              {["About us", "Our services", "Blog", "Contact us"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(" ", "")}`} 
                    className="text-sm hover:text-blue-400 hover:translate-x-2 transition-all inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">Our Locations</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="text-white font-medium block mb-1">Anna Nagar</span>
                  AD Block, No 1, 1st Floor, 2nd Ave, Chennai, TN 600040
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="text-white font-medium block mb-1">Adyar</span>
                  29 Gandhi Nagar, 1st Main Road, Adyar, Chennai, TN 600020
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={18} />
                <a href="mailto:info@aesthetiqclinique.com" className="text-sm hover:text-blue-400 transition-colors">
                  info@aesthetiqclinique.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Pure White/Slate-900 contrast */}
      <div className="border-t border-white/5 bg-slate-950 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            © {currentYear} Aesthetiq Foundation. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-tighter text-slate-600 font-bold">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}