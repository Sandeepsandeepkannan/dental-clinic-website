import React from 'react';
import { BadgeDollarSign, ShieldPlus, Building2, Stethoscope } from 'lucide-react'; // Using Lucide icons for a clean look

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="border border-yellow-200 p-8 flex flex-col items-center text-center transition-all hover:shadow-md h-full">
    <div className="mb-4">
      <Icon size={48} strokeWidth={1.5} className="text-yellow-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default function AboutUsSection() {
  const features = [
    {
      icon: BadgeDollarSign,
      title: "Cost Effective",
      description: "Explore more finance options to your desired treatment"
    },
    {
      icon: ShieldPlus,
      title: "Hygienic Environment",
      description: "Provide a clean and odourless environment to feel like home"
    },
    {
      icon: Building2,
      title: "Dental Hub",
      description: "One stop solution for all your oral related problems"
    },
    {
      icon: Stethoscope,
      title: "Latest Technology",
      description: "Equipped with latest advance dental technology product"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <h2 className="text-3xl font-serif text-center text-yellow-700 mb-12">About Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Text Content */}
        <div className="space-y-6 text-gray-700 text-2xl leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-gray-900">Luxe Dental Clinic</span>, with locations in both Velachery and Iyer Bungalow, Perungudi—your premier destinations for top-tier, personalized dental care.
          </p>
          <p>
            At Luxe Dental Clinic, we are dedicated to patient satisfaction, convenience, and excellence in oral health. Our clinics in Perungudi and Velachery have become trusted choices for individuals seeking exceptional dental care in a comfortable, modern environment.
          </p>
          <p>
            Under the expert guidance of <span className="font-semibold text-gray-900">Dr. R. Sivaranjani</span>, our skilled team offers a comprehensive range of dental services—from routine check-ups and preventive care to advanced treatments such as dental implants, cosmetic dentistry, and restorative procedures.
          </p>
          <p>
            For professional dental care that prioritizes your smile and well-being, visit Luxe Dental Clinic and experience the difference in quality care and patient-centered service.
          </p>
        </div>

        {/* Right Column: Feature Grid */}
        
      </div>
    </section>
  );
}