"use client";

import { useState, useCallback } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  CalendarCheck,
} from "lucide-react";

/* ---------- Static Data Outside ---------- */

const SERVICES = [
  "RCT Specialist",
  "Laser Dentistry",
  "Oral Surgery",
  "Digital Crowns",
];

const CAPTCHA_CODE = "1028";

export default function DentalBooking() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    captcha: "",
    consent: false,
  });

  /* ---------- Optimized Handlers ---------- */

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  return (
    <main className="min-h-screen bg-white font-sans pt-[88px]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6 bg-white border-b border-slate-100 fixed top-0 left-0 w-full z-[60] h-[88px]">
        <div className="flex flex-col">
          <span className="text-xl font-serif font-bold text-slate-900 tracking-tighter">
            Aesthetiq
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold -mt-1">
            Foundation
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>Clinical Excellence</span>
          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
          <span>Chennai, TN</span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-88px)]">

        {/* Left Section */}
        <div className="relative bg-slate-900 px-8 py-16 md:px-20 md:py-24 flex flex-col justify-center lg:rounded-r-[5rem] overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.15)_0%,transparent_50%)]" />

          <div className="relative z-10 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>Premier Dental Care</span>
            </div>

            <h1 className="text-white text-4xl md:text-7xl font-serif leading-tight mb-6">
              Specialized Care <br />
              <span className="text-blue-400 italic">
                Under One Roof.
              </span>
            </h1>

            <p className="text-slate-400 text-lg font-light max-w-md">
              Access Chennai's leading dental experts and advanced clinical
              technology in a single location.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-16">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl group hover:bg-white/10 transition-all"
              >
                <CheckCircle2
                  size={18}
                  className="text-blue-500"
                  aria-hidden="true"
                />
                <span className="text-white font-medium text-sm md:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Offer Section */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <CreditCard size={18} aria-hidden="true" />
                <h3 className="text-sm uppercase tracking-widest font-bold">
                  Financial Ease
                </h3>
              </div>
              <p className="text-white text-2xl font-serif">
                No-Cost EMI Options
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Available across all Chennai foundations
              </p>
            </div>

            <div className="bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/40">
              UPTO 20% OFF*
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white px-8 py-16 md:px-20 md:py-24 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">

            <div className="mb-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-blue-600 mb-2">
                <CalendarCheck size={20} aria-hidden="true" />
                <span className="font-bold uppercase tracking-widest text-xs">
                  Direct Booking
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
                Schedule Your Visit
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Experience the Aesthetiq difference today.
              </p>
            </div>

            {/* Inputs */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Patient Full Name"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 text-slate-700 transition-all"
              required
            />

            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold border-r border-slate-200 pr-3">
                +91
              </div>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full pl-20 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 text-slate-700 transition-all"
                required
              />
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Enter Captcha"
                className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 text-slate-700"
                required
              />

              <div className="bg-slate-900 px-8 flex items-center justify-center rounded-2xl select-none">
                <span className="text-blue-400 font-serif font-bold text-xl tracking-tighter italic">
                  {CAPTCHA_CODE}
                </span>
              </div>
            </div>

            <label className="flex items-start gap-4 p-2 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 mt-1 accent-blue-600"
                required
              />

              <span className="text-slate-400 text-xs leading-relaxed">
                I hereby consent to receive medical communications from{" "}
                <span className="text-slate-900 font-medium">
                  Aesthetiq Foundation
                </span>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all active:scale-[0.98] shadow-xl shadow-blue-900/20"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
