import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* Heading - Serif style */}
      <h1 className="text-[42px] font-serif text-[#333] mb-8">
        Contact form
      </h1>

      {/* Main Container - Width set to 300px (half of 600px) */}
      <div className="w-full max-w-[300px] border border-[#d4af37] rounded-lg p-6 md:p-8">
        <form className="flex flex-col gap-5">
          
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-md font-serif text-[#333]">Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-400 font-sans text-sm"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-md font-serif text-[#333]">Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter your Phone no."
              className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-400 font-sans text-sm"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-md font-serif text-[#333]">Your Message</label>
            <textarea 
              rows={5}
              className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#d4af37] transition-colors resize-y font-sans text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-1">
            <button 
              type="submit" 
              className="bg-[#daa520] text-white px-8 py-2.5 text-md rounded-sm hover:bg-[#c0941a] transition-colors active:scale-95"
            >
              Send
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;