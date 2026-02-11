"use client";
import { useState } from "react";
import Image from "next/image";

export default function DentalBooking() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    captcha: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* Header - Responsive Padding */}
      <header className="flex items-center justify-between px-4 md:px-12 py-4 bg-white  top-0 z-50 shadow-sm">
        <div className="relative w-32 h-10 md:w-40 md:h-12">
          
        </div>
       
      </header>

      {/* Main Content - Grid stacks on mobile (cols-1) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Left Side - Information Section */}
        <div className="bg-black px-6 py-12 md:px-16 md:py-20 flex flex-col justify-center lg:rounded-r-[4rem]">
          
          <div className="mb-8 md:mb-12 text-center lg:text-left">
            <h2 className="text-yellow-500 text-xl md:text-3xl font-bold mb-2 uppercase tracking-wide">
              All Dental Treatments
            </h2>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              UNDER ONE <br className="hidden md:block" /> ROOF!
            </h1>
          </div>

          {/* Services Pills - Flex wrap for mobile */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 md:p-8 mb-10 flex flex-wrap items-center justify-center lg:justify-between gap-4">
            {["RCT", "Laser", "Extraction", "Crowns"].map((service) => (
              <div key={service} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg transition-transform hover:scale-105">
                <div className="bg-orange-500 rounded-full p-1.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span className="text-black font-bold text-sm md:text-base">{service}</span>
              </div>
            ))}
          </div>

          {/* Offer Banner */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-1">
              <h3 className="text-yellow-500 text-3xl md:text-4xl font-black mb-1">NO COST EMI</h3>
              <p className="text-gray-400 text-sm md:text-lg">Available across all Chennai clinics</p>
            </div>
            <div className="bg-yellow-500 text-black font-black text-xl md:text-2xl px-8 py-4 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
              UPTO 20% OFF*
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="bg-white px-6 py-12 md:px-12 md:py-20 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
            <div className="text-center mb-8 lg:hidden">
                <p className="text-orange-500 font-bold tracking-widest uppercase text-sm">Appointment</p>
                <h2 className="text-2xl font-bold">Book Your Visit Today</h2>
            </div>

            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-700 text-lg transition-all"
              required
            />

            {/* Mobile */}
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-gray-200 pr-3">
                <span className="text-gray-500 font-bold">+91</span>
              </div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full pl-20 pr-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-700 text-lg transition-all"
                required
              />
            </div>

            {/* Captcha */}
            <div className="flex gap-3">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Captcha"
                className="flex-1 px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-gray-700 text-lg"
                required
              />
              <div className="bg-blue-500 px-6 flex items-center justify-center rounded-2xl select-none">
                <span className="text-white font-mono font-bold text-2xl tracking-tighter italic">1028</span>
              </div>
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 p-2 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-orange-500 checked:border-orange-500 transition-all"
                    required
                />
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 left-1 transition-opacity pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-gray-500 text-xs md:text-sm leading-snug">
                I hereby consent to receive calls/messages from Aesthetiq and its partners and override DND settings.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-orange-600 text-white font-bold text-xl py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-orange-500/10"
            >
              Book an Appointment
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}