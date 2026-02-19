import React from 'react';
import { ArrowRight } from 'lucide-react';

const DentalServicePage = () => {
  return (
    <div className="bg-white font-sans text-slate-800 overflow-x-hidden">
      
      {/* SECTION 1: INTERNATIONAL PATIENTS HERO */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Artistic Image Collage */}
        {/* On mobile, we reduce height and ensure images scale proportionately */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full max-w-[500px] lg:max-w-none mx-auto">
          {/* Background Decor Blocks */}
          <div className="absolute top-0 right-0 w-3/4 h-4/5 bg-[#e0f7fa] rounded-bl-[60px] md:rounded-bl-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#f3e5f5] -z-10" />
          
          {/* Main Large Image */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-[6px] md:border-[10px] border-white shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" alt="Patient Care" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Secondary Medium Image */}
          <div className="absolute bottom-2 right-2 md:bottom-10 md:right-10">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-[6px] md:border-[10px] border-white shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Dental Smile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Small Floating Image */}
          <div className="absolute bottom-10 left-2 md:bottom-16 md:left-20">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-[4px] md:border-[6px] border-white shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Small Floating Icon Badge */}
          <div className="absolute top-1/2 -left-2 bg-white p-2 md:p-3 rounded-full shadow-lg">
            <div className="text-blue-500">
              <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0 4c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4Z"/></svg>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            International Patients
          </h2>
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              People from all over the world seek treatment at our facility. With increasing difficulty in obtaining seamless and hassle-free advanced dental care in many countries, people communicate with us through our website or e-mail to pre plan their schedule specifically curated for their unique and individual needs.
            </p>
            <p>
              Logistics, time constraints and the spiralling cost of treatment with poor dental insurance plans deter many people from availing treatment in their home countries.
            </p>
            <p>
              We plan treatment and schedules effectively so that patients can also use the time to see family and friends or just to enjoy the sights and experiences that this beautiful country offers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TREATMENT PROCESS CARDS */}
      <section className="bg-[#f0f4f8] py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
          
          {/* Card 1: Welcome to Chennai */}
          <div className="relative bg-white p-8 md:p-10 pt-16 md:pt-20 rounded-[40px] md:rounded-[60px] rounded-tr-none rounded-bl-none shadow-sm transition-transform hover:-translate-y-1">
            {/* Floating Pink Icon */}
            <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-[#fce4ec] rounded-full flex items-center justify-center border-4 border-[#f0f4f8]">
               <div className="text-[#f06292]">
                  <svg width="35" height="35" className="md:w-[45px] md:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2 5-5"/><path d="M18 18c1.1 0 2-1 2-2.1V7.9c0-1.1-.9-2.1-2-2.1h-4l-3-3H5c-1.1 0-2 1-2 2.1v10.1c0 1.1.9 2.1 2 2.1h10Z"/></svg>
               </div>
            </div>
            <h3 className="text-[#1a237e] text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Welcome to Chennai</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] text-center md:text-left">
              Our hospitality staff will receive you and your accompanying guests at the airport and make sure you are comfortably brought to your accommodation. Pickup and drop services to the clinic can be arranged. In order to make your stay more comfortable, we will provide you with a local number.
            </p>
          </div>

          {/* Card 2: Treatment at Acharya Dental */}
          <div className="relative bg-white p-8 md:p-10 pt-16 md:pt-20 rounded-[40px] md:rounded-[60px] rounded-tl-none rounded-br-none shadow-sm transition-transform hover:-translate-y-1">
            {/* Floating Purple Icon */}
            <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-[#f3e5f5] rounded-full flex items-center justify-center border-4 border-[#f0f4f8]">
               <div className="text-[#ab47bc]">
                  <svg width="32" height="32" className="md:w-[42px] md:h-[42px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5 0-5 4-5 4s0 4 2 6c-2 2-2 6-2 6s0 4 5 4 5-4 5-4 0-4-2-6c2-2 2-6 2-6s0-4-5-4Z"/></svg>
               </div>
            </div>
            <h3 className="text-[#1a237e] text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Treatment at Aesthetiq Foundation</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] text-center md:text-left">
              You will be brought to our clinic as per your scheduled appointment. Our expert team of doctors will do a complete examination using relevant diagnostic aids. A definitive treatment plan will be discussed with you in detail. On your approval, the necessary treatment will be commenced.
            </p>
          </div>

        </div>

        {/* Buttons Group */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <button 
            className="w-full sm:w-auto group flex items-center justify-center gap-3 border border-slate-300 bg-white/20 hover:bg-white hover:text-slate-900 text-slate-800 px-8 md:px-10 py-4 md:py-5 font-bold transition-all transform active:scale-95 backdrop-blur-md rounded-2xl tracking-widest text-[10px] md:text-xs uppercase"
          >
            <span>Book Appointment</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </button>

          <button 
            className="w-full sm:w-auto bg-blue-700 hover:bg-white hover:text-blue-900 text-white px-8 md:px-10 py-4 md:py-5 font-bold transition-all transform active:scale-95 shadow-2xl shadow-blue-900/40 rounded-2xl tracking-widest text-[10px] md:text-xs uppercase border border-transparent hover:border-blue-900"
          >
            Explore Services
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default DentalServicePage;