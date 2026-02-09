"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 relative">

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-10">

        {/* Facebook */}
        <a
          href="#"
          className="w-12 h-12 bg-[#1877f2] rounded-full flex items-center justify-center text-xl"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fdf497, #fd5949, #d6249f, #285AEB)",
          }}
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        {/* YouTube */}
        <a
          href="#"
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>

      </div>


      {/* Copyright */}
      <div className="text-center mb-6 text-sm">

        © 2026 Luxe Dental Clinic. All rights reserved

      </div>


      {/* Menu Links */}
      <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">

        <a href="#" className="hover:text-yellow-400">Home</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">About us</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">Services</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">Smile Gallery</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">Blog</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">Testimonials</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">Contact Us</a>
        <span>|</span>

        <a href="#" className="hover:text-yellow-400">Privacy Policy</a>

      </div>


      {/* Bottom Text */}
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-300 leading-relaxed">

        Luxe Dental Clinic are independently owned and operated by licensed
        dentists as per Dental Council terms and Conditions. Copyright © 2019
        Luxe Dental Clinic. All Rights Reserved

      </div>


      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-3xl shadow-lg z-50"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </footer>
  );
}
