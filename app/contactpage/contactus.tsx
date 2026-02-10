"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      
      {/* Contact Form Section */}
      <div className="w-full max-w-3xl">
        
        {/* Heading */}
        <h2 className="text-5xl font-serif text-center mb-12 text-black">
          Contact form
        </h2>

        {/* Form Container with Border */}
        <div className="border-2 border-yellow-500 rounded-3xl p-16">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Your Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-gray-800 font-serif text-lg mb-3"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 text-gray-600 placeholder-gray-400 text-base"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-gray-800 font-serif text-lg mb-3"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone no."
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 text-gray-600 placeholder-gray-400 text-base"
                required
              />
            </div>

            {/* Your Message Field */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-gray-800 font-serif text-lg mb-3"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 text-gray-600 resize-none text-base"
                required
              />
            </div>

            {/* Send Button */}
            <div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-12 py-4 rounded-md transition-colors text-lg"
              >
                Send
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-gray-100">
        <p className="text-gray-800 font-medium font-sans">
          Hi! Welcome to <span className="italic font-serif font-bold">Kimaya Clinique!</span>
        </p>
      </div>

    </main>
  );
}