"use client";
import Image from "next/image";

export default function DentalTreatments() {
  const treatments = [
    {
      id: 1,
      title: "Braces (Ceramic & Metal)",
      description:
        "Choose from ceramic or metal braces to align your teeth effectively. Our braces, tailored to your preferences, provide a reliable and time-tested method for achieving a straighter and more aligned smile. Trust our experienced team of orthodontic dentist in Chennai for a personalised treatment plan.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="16" y="20" width="32" height="8" rx="2" />
          <rect x="16" y="36" width="32" height="8" rx="2" />
          <circle cx="20" cy="24" r="1.5" fill="currentColor" />
          <circle cx="28" cy="24" r="1.5" fill="currentColor" />
          <circle cx="36" cy="24" r="1.5" fill="currentColor" />
          <circle cx="44" cy="24" r="1.5" fill="currentColor" />
          <circle cx="20" cy="40" r="1.5" fill="currentColor" />
          <circle cx="28" cy="40" r="1.5" fill="currentColor" />
          <circle cx="36" cy="40" r="1.5" fill="currentColor" />
          <circle cx="44" cy="40" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Detal Crowns & Bridges",
      description:
        "Restore and enhance your smile with our Crowns & Bridges service. Our high-quality dental crowns and bridges offer durable solutions for damaged or missing teeth, ensuring both functionality and aesthetics. Trust our experienced professionals for a complete and natural-looking smile transformation.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 35 Q20 25 25 20 Q30 15 32 15 Q34 15 39 20 Q44 25 44 35" strokeLinecap="round" />
          <ellipse cx="32" cy="18" rx="3" ry="4" fill="none" />
          <line x1="25" y1="35" x2="39" y2="35" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "RCT (Root Canal Treatment)",
      description:
        "Save your natural tooth with our expertly performed Root Canal Treatment. Our skilled dental professionals focus on thorough cleaning, disinfection, and sealing of the root canal, providing a pain-relieving and long-lasting solution to preserve your natural smile.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 15 L32 45" strokeWidth="2.5" />
          <path d="M28 45 Q28 50 32 52 Q36 50 36 45" fill="none" />
          <circle cx="32" cy="15" r="5" fill="none" />
          <path d="M27 20 L25 30 M37 20 L39 30" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      
      {/* Dental Treatments Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
            Dental Treatment & Procedures
          </h2>
          
          {/* Underline */}
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              
              {/* Icon Container */}
              <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <div className="text-gray-800">
                  {treatment.icon}
                </div>
              </div>

              {/* Treatment Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {treatment.title}
              </h3>

              {/* Treatment Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {treatment.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Decorative Mirror Icon */}
      <div className="fixed bottom-20 right-8">
        <svg className="w-16 h-16 text-gray-300 opacity-50" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="32" cy="28" rx="14" ry="18" fill="none" strokeWidth="3" />
          <line x1="32" y1="46" x2="32" y2="58" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="58" x2="38" y2="58" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-8 right-8">
        <div className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-2xl cursor-pointer transition-colors">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </div>

    </main>
  );
}