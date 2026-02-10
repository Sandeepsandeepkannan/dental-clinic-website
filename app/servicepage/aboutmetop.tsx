"use client";

export default function OurServices() {
  return (
    <section className="bg-white py-24 px-12 relative">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 text-center mb-16">
        Our Services
      </h2>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">


        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">

          <img
            src="https://www.luxedentalcentre.com/wp-content/uploads/2019/06/cosmetic-1-1.webp"
            alt="Cosmetic dentistry"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 text-center">

            <h3 className="text-xl text-black font-semibold mb-2">
              Cosmetic dentistry
            </h3>

            <p className="text-black mb-6">
              Improve teeth Color
            </p>

          </div>

          <button className="w-full py-4 text-black font-medium bg-gray-100">
           Cosmetic
          </button>

        </div>


        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">

          <img
            src="https://www.luxedentalcentre.com/wp-content/themes/luxedental/images/pediatric-dentistry.webp"
            alt="Pediatric dentistry"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 text-center">

            <h3 className="text-xl text-black  font-semibold mb-2">
              Pediatric dentistry
            </h3>

            <p className="text-black mb-6">
              Children's Oral Health
            </p>

          </div>

          <button className="w-full py-4 text-black font-medium bg-gray-100">
            Pediatric
          </button>

        </div>


        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">

          <img
            src="https://www.luxedentalcentre.com/wp-content/uploads/2019/06/braces-2.webp"
            alt="Orthodontic Braces"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 text-center">

            <h3 className="text-xl text-black  font-semibold mb-2">
              Orthodontic Braces
            </h3>

            <p className="text-black mb-6">
              Teeth Aligning
            </p>

          </div>

          <button className="w-full py-4 text-black font-medium bg-gray-100">
             Orthodontic
          </button>

        </div>


        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">

          <img
            src="https://www.luxedentalcentre.com/wp-content/themes/luxedental/images/family-dental.webp"
            alt="Family dental care"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 text-center">

            <h3 className="text-xl text-black  font-semibold mb-2">
              Family dental care
            </h3>

            <p className="text-black mb-6">
              Homely Environment
            </p>

          </div>

          <button className="w-full py-4 text-black font-medium bg-gray-100">
            Family care
          </button>

        </div>

      </div>


      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-3xl shadow-lg z-50 text-white"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </section>
  );
}
