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
} from "lucide-react";

/* -------- Move Static Data Outside Component -------- */
const QUICK_LINKS = ["About us", "Our services", "Blog", "Contact us"];
const WHATSAPP_NUMBER = "8190027273";

function Footernew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-white tracking-tight mb-1">
                Aesthetiq
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">
                Foundation
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Take the first step towards achieving your beauty goals with
              clinical excellence and personalized care at our premier Chennai facilities.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Visit our Facebook page"
                className="hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="Visit our Instagram page"
                className="hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>

              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="hover:text-green-400 transition-all transform hover:scale-110"
              >
                <MessageCircle size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">
              Clinical Hours
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock
                  className="text-blue-400 mt-1"
                  size={18}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-white font-medium text-sm">
                    Monday - Sunday
                  </p>
                  <p className="text-slate-400 text-sm">
                    10:30 am - 08:30 pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
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

          {/* Column 4 */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={16} aria-hidden="true" />
                </div>
                <a
                  href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-green-500 transition-colors font-bold"
                >
                  WhatsApp: {WHATSAPP_NUMBER}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={18}
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="text-white font-medium block mb-1">
                    Anna Nagar
                  </span>
                  AD Block, No 1, 1st Floor, 2nd Ave, Chennai, TN 600040
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                  size={18}
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@aesthetiqclinique.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info@aesthetiqclinique.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-slate-950 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            © {currentYear} Aesthetiq Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footernew);
