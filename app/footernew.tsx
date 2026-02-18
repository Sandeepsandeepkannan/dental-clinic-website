"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

/* -------- Move Static Data Outside Component -------- */
const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/aboutpage/aboutservices" },
  { name: "Our services", href: "/servicepage" },
  { name: "Contact us", href: "/contactpage" }
];
const WHATSAPP_NUMBER = "8190027273";

function Footernew() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Main Grid: 1 col on mobile, 2 col on sm, 4 col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-white tracking-tight mb-1">
                Aesthetiq
              </h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-black">
                Foundation
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Achieve your beauty goals with clinical excellence and personalized care at our premier Chennai facilities.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all transform active:scale-90"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all transform active:scale-90"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links - Better Tap Targets */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-white font-bold border-b border-white/10 pb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm py-1 hover:text-blue-400 transition-colors inline-block w-full md:w-auto"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-white font-bold border-b border-white/10 pb-4">
              Clinical Hours
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="text-blue-400 mt-1 shrink-0" size={18} aria-hidden="true" />
              <div className="text-sm">
                <p className="text-white font-medium">Monday - Sunday</p>
                <p className="text-slate-400 mt-1">10:30 am - 08:30 pm</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-white font-bold border-b border-white/10 pb-4">
              Connect
            </h3>
            <div className="space-y-5">
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 group bg-white/5 p-3 rounded-2xl md:bg-transparent md:p-0"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shrink-0">
                  <MessageCircle size={16} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-slate-200">Chat: {WHATSAPP_NUMBER}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 shrink-0" size={18} aria-hidden="true" />
                <div className="text-sm text-slate-400 leading-relaxed">
                  <span className="text-white font-medium block">Anna Nagar</span>
                  AD Block, No 1, 1st Floor, 2nd Ave, Chennai, 600040
                </div>
              </div>

              <a href="mailto:info@aesthetiqclinique.com" className="flex items-center gap-3 group">
                <Mail className="text-blue-400 group-hover:scale-110 transition-transform shrink-0" size={18} aria-hidden="true" />
                <span className="text-sm break-all">info@aesthetiqclinique.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-slate-950 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Aesthetiq Foundation. Clinical Precision in Aesthetics.
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="p-2 bg-white/5 rounded-full">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footernew);