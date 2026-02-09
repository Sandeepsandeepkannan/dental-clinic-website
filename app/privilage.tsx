export default function PrivilegeServices() {
  return (
    <section className="bg-white py-24 px-12 relative">

      {/* Heading */}
      <div className="mb-16 ml-15 text-[30px]">
        <p className="text-yellow-500 flex items-center gap-2 mb-2">
          ✦ Services
        </p>

        <h2 className="text-4xl text-black font-serif text-[40px] font-semibold mb-4">
          Privilege services
        </h2>

        <div className="w-32 h-[2px] bg-yellow-500"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-16">

        {/* Skin */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 max-w-sm mx-auto">

          <img
            src="https://kimayaclinique.com/image/priv-1.png"
            alt="Skin"
            className="w-full h-36 object-cover rounded-xl mb-4"
          />

          <h3 className="text-lg font-semibold mb-2">Skin</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Rejuvenate and revitalize your skin with
            personalized dermatological care
          </p>

        </div>

        {/* Laser */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 max-w-sm mx-auto">

          <img
            src="https://kimayaclinique.com/image/priv-2.png"
            alt="Laser"
            className="w-full h-36 object-cover rounded-xl mb-4"
          />

          <h3 className="text-lg font-semibold mb-2">Laser</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Advanced technology for permanent hair
            reduction and skin refinement
          </p>

        </div>

        {/* Hair */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 max-w-sm mx-auto">

          <img
            src="https://kimayaclinique.com/image/priv-3.png"
            alt="Hair"
            className="w-full h-36 object-cover rounded-xl mb-4"
          />

          <h3 className="text-lg font-semibold mb-2">Hair</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            From hair loss treatment to restoration your
            hair, our priority
          </p>

        </div>

      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto">

        {/* Dental */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 max-w-sm mx-auto">

          <img
            src="https://kimayaclinique.com/image/priv-4.png"
            alt="Dental"
            className="w-full h-36 object-cover rounded-xl mb-4"
          />

          <h3 className="text-lg font-semibold mb-2">Dental</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Smile brighter with top-tier cosmetic and
            general dental services
          </p>

        </div>

        {/* Nail */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 max-w-sm mx-auto">

          <img
            src="https://kimayaclinique.com/image/priv-5.png"
            alt="Nail"
            className="w-full h-36 object-cover rounded-xl mb-4"
          />

          <h3 className="text-lg font-semibold mb-2">Nail</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Pamper your nails with our specialized
            treatments for beauty and health
          </p>

        </div>

      </div>

    </section>
  );
}
