"use client";
export const dynamic = "force-dynamic";
import React, { useState } from "react";
import { X, Calendar, ChevronDown } from "lucide-react";

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ open, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
    message: "",
    location: "Select Location",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Appointment request sent!");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
      {/* Container: Max height added for small screens with overflow-y-auto */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300">
        
        {/* Header: Responsive text and padding */}
        <div className="sticky top-0 z-20 bg-white flex justify-between items-center px-5 py-4 md:px-10 md:py-6 border-b border-gray-50">
          <h2 className="text-xl md:text-4xl font-serif tracking-tight text-slate-800">
            MAKE AN <span className="text-yellow-600 font-semibold italic">APPOINTMENT</span>
          </h2>
          <div className="flex items-center gap-3 md:gap-6">
            <img 
              src="https://kimayaclinique.com/image/logo.png" 
              alt="Logo" 
              className="h-6 md:h-12 w-auto object-contain hidden xs:block"
            />
            <button 
              onClick={onClose} 
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black"
            >
              <X size={24} className="md:w-7 md:h-7" />
            </button>
          </div>
        </div>

        {/* Form Body: Stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row p-5 md:p-12 gap-8 md:gap-10">
          
          {/* Left Side (Image): Smaller on mobile, hidden on very short screens if needed */}
          <div className="relative w-full md:w-[38%] flex justify-center items-center">
            {/* Background decorative blob - hidden on mobile for cleaner look */}
            <div className="absolute top-0 left-0 w-full h-[90%] bg-yellow-50/80 rounded-[2rem] -rotate-3 z-0 hidden md:block" />
            
            <div className="relative z-10 w-full max-w-[280px] md:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl rotate-0 md:rotate-1">
              <img 
                src="https://kimayaclinique.com/image/ban-1.webp" 
                alt="Clinic" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Right Side (Form): Full width on mobile */}
          <div className="w-full md:w-[62%]">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-semibold text-gray-700">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full name" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-semibold text-gray-700">Phone</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter Phone No" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-semibold text-gray-700">Date</label>
                  <div className="relative">
                    <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:bg-white outline-none transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-semibold text-gray-700">Service</label>
                  <input name="service" value={formData.service} onChange={handleChange} type="text" placeholder="Enter Service" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:bg-white outline-none transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-semibold text-gray-700">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={2}  placeholder="Tell us more..." className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 bg-gray-50/30 focus:bg-white outline-none resize-none transition-all" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2 md:pt-4">
                <div className="relative w-full sm:w-1/2">
                  <select name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 md:py-4 rounded-xl border border-gray-200 bg-gray-50/30 outline-none appearance-none">
                    <option>Select Location</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
                <button type="submit" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold shadow-lg transition-all active:scale-95 uppercase text-xs md:text-sm tracking-widest">
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}