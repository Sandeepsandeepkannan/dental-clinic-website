import React from 'react';
import { Handshake, MessageSquarePlus, Phone } from 'lucide-react';

const TreatmentCards = () => {
  return (
    <div className="bg-[#f8f9fc] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Card 1: Welcome to Chennai */}
        <div className="relative bg-white p-8 md:p-12 pt-16 rounded-[40px] rounded-tr-none rounded-bl-none shadow-sm flex flex-col items-start">
          {/* Floating Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#fde2e7] rounded-full flex items-center justify-center">
            <Handshake size={40} className="text-[#e91e63]" />
          </div>
          
          <h2 className="text-[#1a237e] text-2xl font-semibold mb-6">
            Welcome to Chennai
          </h2>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            Our hospitality staff will receive you and your accompanying
            guests at the airport and make sure you are comfortably
            brought to your accommodation. Pickup and drop services to
            the clinic can be arranged. In order to make your stay more
            comfortable, we will provide you with a local number.
          </p>
        </div>

        {/* Card 2: Treatment at Acharya Dental */}
        <div className="relative bg-white p-8 md:p-12 pt-16 rounded-[40px] rounded-tl-none rounded-br-none shadow-sm flex flex-col items-start">
          {/* Floating Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#f3e5f5] rounded-full flex items-center justify-center">
             <div className="text-[#9c27b0] relative">
                {/* Simplified Tooth/Dental Icon representation */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 10c.667-4 2-6 5-6s4.333 2 5 6c.667 4 0 8-5 8s-5.667-4-5-8Z"/><path d="M12 4v4"/><path d="M10 6h4"/>
                </svg>
             </div>
          </div>
          
          <h2 className="text-[#1a237e] text-2xl font-semibold mb-6">
            Treatment at Acharya Dental
          </h2>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            You will be brought to our clinic as per your scheduled
            appointment. Our expert team of doctors will do a complete
            examination using relevant diagnostic aids. A definitive
            treatment plan will be discussed with you in detail. On your
            approval, the necessary treatment will be commenced. We
            usually recommend staying for a few days longer in Chennai
            or travelling nearby after treatment completion so that you
            can come back to us for an adjustment if needed.
          </p>
        </div>

      </div>

      {/* WhatsApp Floating Button */}
     
    </div>
  );
};

export default TreatmentCards;