"use client";
export const dynamic = "force-dynamic";
import React, { useState } from "react";
import { X, Calendar, ChevronDown, ShieldCheck, MapPin } from "lucide-react";

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
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-2 sm:p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-300">
        
        {/* Header Section */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-5 md:px-12 md:py-8 border-b border-slate-50">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-4xl font-serif tracking-tight text-slate-900">
              MAKE AN <span className="text-blue-700 font-semibold italic">APPOINTMENT</span>
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Clinical Foundation</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose} 
              className="p-2 bg-slate-50 hover:bg-red-50 rounded-full transition-all text-slate-400 hover:text-red-500 group"
            >
              <X size={24} className="transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="flex flex-col md:flex-row p-6 md:p-12 gap-10">
          
          {/* Left Side: Visual Trust Element */}
          <div className="relative w-full md:w-[35%]">
            {/* Soft Blue/Grey Decoration */}
            <div className="absolute top-0 left-0 w-full h-[95%] bg-blue-50/50 rounded-[3rem] -rotate-2 z-0 hidden md:block" />
            
            <div className="relative z-10 w-full aspect-[3/4] rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl">
              <img 
                src="./img1.png" 
                alt="Clinic Professional" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
              />
              {/* Overlay removed as per request for a clear image */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white bg-slate-900/40 backdrop-blur-sm px-3 py-1 rounded-full">
                <ShieldCheck size={18} className="text-blue-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Authorized Clinical Care</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form Inputs */}
          <div className="w-full md:w-[65%]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full name" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Mobile Number" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Preferred Date</label>
                  <input required name="date" value={formData.date} onChange={handleChange} type="date" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-600 outline-none transition-all" 
                  />
                </div>
                {/* Service */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Department</label>
                  <input name="service" value={formData.service} onChange={handleChange} type="text" placeholder="e.g. Dental Restoration" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Case Brief</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your requirements..." 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white outline-none resize-none transition-all placeholder:text-slate-300" 
                />
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-between pt-4">
                <div className="relative w-full sm:w-1/2 group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none group-hover:scale-110 transition-transform" size={18} />
                  <select name="location" value={formData.location} onChange={handleChange} 
                    className="w-full pl-12 pr-10 py-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none appearance-none font-medium text-slate-700 hover:border-blue-300 transition-colors"
                  >
                    <option>Select Location</option>
                    <option>Anna Nagar</option>
                    <option>Adyar</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={18} />
                </div>
                
                <button type="submit" className="w-full sm:w-auto bg-blue-700 hover:bg-slate-900 text-white px-12 py-4 rounded-2xl font-bold shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] uppercase text-[10px] tracking-[0.2em]">
                  Confirm Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}