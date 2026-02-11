import React from 'react';
import { Send, Phone, User, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    // Background: Slate-50 (Steel Gray base) for a clean, professional clinical feel
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6">
      
      {/* Header Section */}
      <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900">
          Contact <span className="text-blue-700 italic">Us</span>
        </h1>
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Container - Widened for better professional proportions */}
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-[2rem] shadow-xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
        <form className="flex flex-col gap-6">
          
          {/* Name Field */}
          <div className="flex flex-col gap-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <User size={14} className="text-blue-600" />
              Your Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your full name"
              className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all placeholder:text-slate-400 text-slate-700 text-sm"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Phone size={14} className="text-blue-600" />
              Phone Number
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold border-r border-slate-200 pr-2">+91</span>
                <input 
                  type="tel" 
                  placeholder="98765 43210"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 pl-14 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all placeholder:text-slate-400 text-slate-700 text-sm"
                />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <MessageSquare size={14} className="text-blue-600" />
              Your Message
            </label>
            <textarea 
              rows={4}
              placeholder="How can our clinical team help you?"
              className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all resize-none text-slate-700 text-sm placeholder:text-slate-400"
            />
          </div>

          {/* Submit Button: Royal Blue with White text */}
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-blue-700 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send size={14} />
            </button>
          </div>

        </form>
      </div>

      {/* Trust Indicator */}
      <p className="mt-8 text-slate-400 text-xs font-medium tracking-wide italic">
        Your data is secure and will only be used for clinical consultation.
      </p>
    </div>
  );
};

export default ContactForm;