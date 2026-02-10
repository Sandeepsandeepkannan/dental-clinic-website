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
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Header with Logo and Phone */}
      <div className="flex items-center justify-between px-8 py-4 bg-white">
        {/* Logo */}
        <div className="bg-gray-800 px-6 py-4 rounded-lg">
          <div className="text-orange-500 text-2xl font-bold">Aesthetiq:)</div>
          <div className="text-white text-xs tracking-widest">Foundation</div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-3">
          <div className="bg-black rounded-full p-3">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-black">04069260028</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
        
        {/* Left Side - Orange Background */}
        <div className="bg-black px-12 py-16 flex flex-col justify-center rounded-2xl">
          
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-white text-3xl font-bold mb-2">
              All Dental Treatments
            </h2>
            <h1 className="text-white text-6xl font-bold">
              UNDER ONE ROOF!
            </h1>
          </div>

          {/* Services Pills */}
          <div className="bg-white rounded-full px-8 py-6 mb-12 flex items-center justify-between max-w-3xl">
            
            {/* RCT */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
              </div>
              <span className="text-black font-bold text-lg">- RCT</span>
            </div>

            {/* Laser */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
              </div>
              <span className="text-black font-bold text-lg">- Laser</span>
            </div>

            {/* Extraction */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
              </div>
              <span className="text-black font-bold text-lg">- Extraction</span>
            </div>

            {/* Crowns */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
              </div>
              <span className="text-black font-bold text-lg">- Crowns</span>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="flex items-center gap-6">
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">NO COST EMI</h3>
              <p className="text-yellow-500 text-lg">Available across all Chennai clinics</p>
            </div>

            <div className="bg-yellow-500 rounded-full px-8 py-4">
              <span className="text-black font-bold text-xl">UPTO 20% OFF*</span>
            </div>
          </div>

        </div>

        {/* Right Side - Form */}
        <div className="bg-white px-12 py-16 flex items-center justify-center">
          
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 text-gray-700 text-lg"
                required
              />
            </div>

            {/* Mobile Number Input */}
            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
                <span className="text-gray-700 font-semibold text-lg">+91</span>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full pl-24 pr-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 text-gray-700 text-lg"
                required
              />
            </div>

            {/* Captcha Input */}
            <div className="relative">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Captcha"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 text-gray-700 text-lg"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-400 px-6 py-2 rounded-lg">
                <span className="text-white font-bold text-xl">1028</span>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label className="text-gray-600 text-sm leading-relaxed">
                I hereby consent to receive calls/messages from Clove Dental and its partners and override DND settings.
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-orange-600 text-white font-bold text-xl py-4 rounded-xl transition-colors"
              >
                Book an Appointment
              </button>
            </div>

          </form>

        </div>

      </div>

    </main>
  );
}