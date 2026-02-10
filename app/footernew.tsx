"use client";
import Image from "next/image";

export default function Footernew() {
  return (
    <footer className="bg-black text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - Logo and Description */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl font-serif mb-1">Aesthetiq</h2>
              <p className="text-sm text-gray-400 italic">glow with radiance</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Take the first step towards achieving your beauty goals with expert care at Kimaya Clinique
            </p>
          </div>

          {/* Column 2 - Services and Hours */}
          <div>
            <p className="text-gray-300 mb-6">
              Skin | Hair | Laser | Dental | Nails
            </p>
            
            <h3 className="text-2xl font-serif mb-4">
              Visit the best skin clinic now!
            </h3>
            
            <div className="text-gray-300">
              <p className="mb-1">Monday - Sunday</p>
              <p>10:30 am- 08:30 pm</p>
            </div>
          </div>

          {/* Column 3 - Links */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Say hello to us</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div>
                <a 
                  href="mailto:info@kimayaclinique.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@Aesthetiqclinique.com
                </a>
              </div>

              {/* Address 1 */}
              <div>
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300 leading-relaxed">
                  No 1, First Floor, 2nd Ave, AD Block, Anna Nagar, Chennai, Tamil Nadu 600040
                </p>
              </div>

              {/* Address 2 */}
              <div>
                <p className="text-gray-300 leading-relaxed">
                  NEW NO 29, OLD NO 24, Gandhi Nagar 1st Main Road, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center  font-medium">
            © 2024-2027, All Rights Reserved
          </p>
        </div>
      </div>

      {/* Social Media Icons - Fixed Right */}
      
      

    </footer>
  );
}