"use client";
import Image from "next/image";

export default function MeetDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr Sreenayana Sinha Roy",
      degree: "MDS",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
    },
    {
      id: 2,
      name: "Dr Sreekanth Kandepu",
      degree: "MDS",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
    },
    {
      id: 3,
      name: "Dr Swathi Ravipudi",
      degree: "MDS",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      
      {/* Meet Our Doctors Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-semibold mb-4 text-lg">
            Professional Team Members
          </p>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
            Meet Our Expert Doctors
          </h2>
          
          {/* Underline */}
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col items-center">
              
              {/* Doctor Image */}
              <div className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden bg-gray-100 mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Doctor Name */}
              <h3 className="text-2xl font-bold text-black mb-2 text-center">
                {doctor.name}
              </h3>

              {/* Doctor Degree */}
              <p className="text-gray-700 font-semibold text-lg">
                {doctor.degree}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}